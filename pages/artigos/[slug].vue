<template>
  <main>
    <section class="my-5" id="article-detail">
      <div class="container my-5">
        <div class="row">
          <div class="col-2">
            <div class="sticky-top">
              <button @click="goBack" class="btn btn-primary-border ">< Voltar</button>
            </div>
          </div>
          <div class="col-7">
            <div v-if="loading">
              <div class="d-flex mb-3">
                <div class="skeleton skeleton-category me-2"></div> <div class="skeleton skeleton-date"></div>
              </div>
              <div class="skeleton skeleton-title mb-3"></div>
              <div class="skeleton skeleton-img mb-3"></div>
              <div class="skeleton skeleton-content mb-3"></div>
            </div>
            <div v-else-if="article">
              <div class="mb-3">
                <span class="article-category">{{ article.category.title }}</span>
                <span v-html="formatDate(article.published_at)" class="mx-5"></span>
              </div>
              <h1>{{ article.titulo }}</h1>
              <div class="my-4">
                <picture v-if="hasThumbnail(article)">
                  <source :srcset="getArticleImage(article)" @load="onImageLoad">
                  <NuxtImg :src="getArticleImage(article)" class="img-fluid blur-effect" :class="{ 'blurred': !imageLoaded }" :alt="article.titulo" @load="onImageLoad" lazy="loading" />
                </picture>
                <nuxt-img v-else src="/thumb_blog_gsstudio.webp" class="img-fluid blur-effect" :class="{ 'blurred': !imageLoaded }" alt="Default Image" lazy="loading" @load="onImageLoad" />
              </div>
              <div v-html="article.content"></div>
            </div>
            <div v-else>
              <p>Artigo não encontrado.</p>
            </div>
          </div>
          <div class="col-3 p-5">
            <div class="sticky-top">
                 <!-- Social Links -->
            <div class="social-links mb-4">
              <a href="https://www.facebook.com" class="d-block mb-2" target="_blank">Facebook</a>
              <a href="https://www.twitter.com" class="d-block mb-2" target="_blank">Twitter</a>
              <a href="https://www.linkedin.com" class="d-block mb-2" target="_blank">LinkedIn</a>
            </div>

            <!-- Newsletter Form -->
            <div class="newsletter-cta p-4 sticky-top bg-light rounded">
              <h3>Assine para novas atualizações.</h3>
              <form method="POST" action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/20534155/d57a69e4-6f43-4768-a600-5f7d30306260" class="form">
                <div class="mb-3">
                  <input type="email" class="form-control" id="email" name="email" placeholder="E-mail" required>
                </div>
                <button type="submit" class="btn btn-primary">Inscrever-se</button>
              </form>
            </div>
            </div>
           
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

interface Article {
  id: number;
  slug: string;
  titulo: string;
  thumb?: {
    url?: string;
  };
  published_at: string;
  category: number;
  content: string;
}

interface Category {
  id: number;
  title: string;
}

export default defineComponent({
  name: 'ArticleDetail',
  setup() {
    const article = ref<Article | null>(null)
    const categories = ref<Category[]>([])
    const loading = ref(true)
    const imageLoaded = ref(false)
    const route = useRoute()
    const router = useRouter()
    const baseURL = import.meta.env.VITE_STRAPI_URL || 'https://str-gsstudio.gsstudio.com.br'

    const fetchArticleBySlug = async (slug: string) => {
      try {
        console.log(`Fetching article from ${baseURL}/articles?slug=${slug}`)
        const response = await axios.get(`${baseURL}/articles?slug=${slug}`)
        console.log('Response:', response)
        if (response.data.length) {
          article.value = response.data[0]
        } else {
          console.error('Article not found')
        }
      } catch (error) {
        console.error('Error fetching article:', error.response ? error.response.data : error.message)
      } finally {
        loading.value = false
      }
    }

    const fetchCategories = async () => {
      try {
        console.log(`Fetching categories from ${baseURL}/categories`)
        const response = await axios.get(`${baseURL}/categories`)
        console.log('Response:', response)
        categories.value = response.data
      } catch (error) {
        console.error('Error fetching categories:', error.response ? error.response.data : error.message)
      }
    }

    const getArticleImage = (article: Article) => {
      if (article.thumb && article.thumb.url) {
        const url = new URL(article.thumb.url, baseURL).href
        console.log('Generated image URL:', url)
        return url
      }
      return '/thumb_blog_gsstudio.webp' // Substitua por uma URL de imagem padrão
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

    const hasThumbnail = (article: Article) => {
      return article && article.thumb && article.thumb.url
    }

    const onImageLoad = () => {
      imageLoaded.value = true
    }

    const goBack = () => {
      router.go(-1)
    }

    onMounted(async () => {
      const slug = route.params.slug as string
      console.log('Fetching article with slug:', slug)
      await fetchArticleBySlug(slug)
      await fetchCategories()
      console.log('Article:', article.value)
      console.log('Categories:', categories.value)
    })

    return {
      article,
      categories,
      loading,
      imageLoaded,
      getArticleImage,
      getCategoryTitle,
      formatDate,
      hasThumbnail,
      onImageLoad,
      goBack
    }
  }
})
</script>

<style scoped>
#article-detail {
  padding: 2rem;
}
.btn-primary-border {
  border: 1px solid var(--bs-primary);
  background: transparent;
  color: var(--bs-primary);
}
.skeleton {
  background-color: #e0e0e0;
  border-radius: 4px;
  margin: 10px 0;
}
.skeleton-img {
  width: 100%;
  height: 400px;
}
.skeleton-title {
  height: 30px;
  width: 100%;
}
.skeleton-category {
  height: 20px;
  width: 30%;
}
.skeleton-date {
  height: 20px;
  width: 20%;
}
.skeleton-content {
  height: 100px;
  width: 100%;
}
.blur-effect {
  transition: filter 0.2s ease;
}
.blurred {
  filter: blur(20px);
}
</style>
