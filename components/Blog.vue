<template>
  <section class="my-5 py-5 min-vh-100 justify-content-center align-content-center bg-light" id="blog">
    <div class="container my-5">
      <div class="row">
        <h2 class="text-center">Blog</h2>
        <!-- Skeleton Cards -->
        <div v-if="loading" class="col-md-3 my-5" v-for="n in 4" :key="n">
          <div class="card">
            <div class="image-container">
              <div class="skeleton skeleton-img"></div>
            </div>
            <div class="card-body">
              <div class="mb-2">
                <div class="skeleton skeleton-category"></div>
              </div>
              <div class="skeleton skeleton-title"></div>
            </div>
          </div>
        </div>
        <!-- Actual Cards -->
        <div v-else class="col-sm-3 my-2" v-for="article in articles" :key="article.id">
          <div class="card">
            <div class="image-container">
              <nuxt-link :to="`${article.slug}`">
                <NuxtImg 
                  :src="getArticleImage(article)" 
                  class="img-fluid blur-effect" 
                  :class="{ 'blurred': !article.imageLoaded }" 
                  :alt="article.titulo" 
                  @load="article.imageLoaded = true" 
                  loading="lazy" 
                />
              </nuxt-link>
            </div>
            <div class="card-body">
              <div class="mb-2">
                <span class="article-category">{{ getCategoryTitle(article.category) }}</span>
              </div>
              <nuxt-link :to="`${article.slug}`">
                {{ article.titulo }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-3">
        <div class="col d-flex align-content-center justify-content-center">
          <NuxtLink to="/" class="btn btn-primary">Ver mais artigos</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import type { Article, Category } from '~/types'

export default defineComponent({
  name: 'Blog',
  setup() {
    const articles = ref<Article[]>([])
    const categories = ref<Category[]>([])
    const loading = ref(true)
    const baseURL = import.meta.env.VITE_STRAPI_URL || 'https://str-gsstudio.gsstudio.com.br'
    const VITE_STRAPI_TENANT_ID = import.meta.env.VITE_STRAPI_TENANT_ID

    const fetchArticles = async (tenantId: string) => {
      try {
        const response = await axios.get(`${baseURL}/tenants/${tenantId}`)
        articles.value = response.data.articles
          .sort((a: Article, b: Article) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
          .slice(0, 4)
          .map((article: Article) => ({ ...article, imageLoaded: false })) // Adiciona a propriedade imageLoaded
      } catch (error) {
        console.error('Error fetching articles:', error)
      } finally {
        loading.value = false
      }
    }

    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseURL}/categories`)
        categories.value = response.data
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    const getArticleImage = (article: Article) => {
      if (article.thumb && article.thumb.url) {
        const url = new URL(article.thumb.url, baseURL).href
        console.log('Generated image URL:', url)
        return url
      }
      return 'thumb_blog_gsstudio.webp'
    }

    const formatDate = (date: string) => {
      if (!date) return ''
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('pt-BR', options)
    }

    const getCategoryTitle = (categoryId: number) => {
      if (!categoryId) return ''
      const category = categories.value.find(cat => cat.id === categoryId)
      return category ? category.title : ''
    }

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        fetchArticles(VITE_STRAPI_TENANT_ID)
        fetchCategories()
        const blogSection = document.querySelector('#blog')
        if (blogSection) {
          observer.unobserve(blogSection)
        }
      }
    }

    let observer: IntersectionObserver

    onMounted(() => {
      observer = new IntersectionObserver(onIntersect)
      const blogSection = document.querySelector('#blog')
      if (blogSection) {
        observer.observe(blogSection)
      }
    })

    return {
      articles,
      categories,
      loading,
      getArticleImage,
      getCategoryTitle,
      formatDate
    }
  }
})
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  border: 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: box-shadow 0.3s, margin-bottom 0.3s, transform 0.3s;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.image-container {
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
}

.card img {
  transition: transform 0.3s;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card:hover {
  transform: scale(0.97);
  box-shadow: none;
}

.card-body a {
  text-decoration: none;
  color: var(--color-text) !important;
  transition: color 0.3s, text-decoration 0.3s;
}

.card-body a:hover {
  text-decoration: underline;
  color: var(--color-text) !important;
}

.card h5 {
  font-size: 16px !important;
}

.card img:hover {
  transform: scale(1.5);
}

.card img {
  transition: transform 0.3s ease;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton {
  background: linear-gradient(to right, #e0e0e0 0%, #f8f8f8 50%, #e0e0e0 100%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 1.5s infinite;
}

.skeleton-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
}

.skeleton-title {
  height: 20px;
  width: 100%;
  background: linear-gradient(to right, #e0e0e0 0%, #f8f8f8 50%, #e0e0e0 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-category {
  height: 15px;
  width: 60%;
  background: linear-gradient(to right, #e0e0e0 0%, #f8f8f8 50%, #e0e0e0 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.blur-effect {
  transition: filter 0.2s ease;
}
.blurred {
  filter: blur(20px);
}
</style>
