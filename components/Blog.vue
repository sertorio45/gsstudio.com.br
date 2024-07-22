<template>
    <section class="my-5 min-vh-100 justify-content-center align-content-center bg-light">
      <div class="container my-5">
        <div class="row">
          <h2 class="text-center">Blog</h2>
          <div class="col-md-3 my-5" v-for="article in articles" :key="article.id">
            <div class="card">
              <div class="image-container">
                <img :src="getArticleImage(article)" class="card-img-top" :alt="article.titulo" />
              </div>
              <div class="card-body">
                <div class="mb-2"><span class="article-category">{{ getCategoryTitle(article.category) }}</span></div>
                <nuxt-link :to="`/artigos/${article.slug}`">{{ article.titulo }}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex align-content-center justify-content-center">
            <button class="btn btn-primary">Ver mais artigos</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'Blog',
  setup() {
    const articles = ref([])
    const categories = ref([])
    const baseURL = process.env.VITE_STRAPI_URL || 'https://str-gsstudio.gsstudio.com.br'
    const VITE_STRAPI_TENANT_ID = import.meta.env.VITE_STRAPI_TENANT_ID

    const fetchArticles = async (tenantId) => {
      try {
        const response = await axios.get(`${baseURL}/tenants/${tenantId}`)
        // Ordenar os artigos pela data de publicação (assumindo que existe um campo `published_at`) e limitar a 4 artigos
        articles.value = response.data.articles
          .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
          .slice(0, 4)
      } catch (error) {
        console.error('Error fetching articles:', error)
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

    const getArticleImage = (article) => {
      if (article.thumb && article.thumb.url) {
        const url = new URL(article.thumb.url, baseURL).href
        console.log('Generated image URL:', url)
        return url
      }
      return 'thumb_blog_gsstudio.webp' // Substitua por uma URL de imagem padrão
    }

    const formatDate = (date) => {
      if (!date) return ''
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('pt-BR', options)
    }

    const getCategoryTitle = (categoryId) => {
      const category = categories.value.find(cat => cat.id === categoryId)
      return category ? category.title : 'Categoria desconhecida'
    }

    onMounted(async () => {
      await fetchArticles(VITE_STRAPI_TENANT_ID)
      await fetchCategories()
      console.log('Articles:', articles.value)
      console.log('Categories:', categories.value)
    })

    return {
      articles,
      categories,
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
  transition: box-shadow 0.3s, margin-bottom 0.3s;
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
  display: flex;
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
.card-body a {
  text-decoration: none;
  color: var(--color-text) !important;
}
.card-body a:hover {
  text-decoration: underline;
  color: var(--color-text) !important;
}

.card:hover {
  margin-bottom: 1rem;
  box-shadow: none;
}

.card h5 {
  font-size: 16px !important;
}

.card:hover img {
  transform: scale(1.1);
}
</style>
