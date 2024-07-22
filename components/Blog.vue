<template>
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="article in articles" :key="article.id">
          <div class="card">
            <img :src="getArticleImage(article)" class="card-img-top" :alt="article.titulo" />
            <div class="card-body">
              <h5 class="card-title">{{ article.titulo }}</h5>
              <p class="card-text">{{ article.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import axios from 'axios'
  
  export default defineComponent({
    name: 'LatestArticles',
    setup() {
      const articles = ref<Array<{ id: number, titulo: string, content: string, thumb: any }>>([])
      const VITE_STRAPI_TENANT_ID = import.meta.env.VITE_STRAPI_TENANT_ID
  
      const getArticleImage = (article: any) => {
        if (article.thumb && article.thumb.url) {
          return `https://str-gsstudio.gsstudio.com.br${article.thumb.url}`
        }
        return 'public/thumb_blog_gsstudio.webp' // Substitua por uma URL de imagem padrão
      }
  
      onMounted(async () => {
        try {
          const response = await axios.get(`https://str-gsstudio.gsstudio.com.br/tenants/${VITE_STRAPI_TENANT_ID}`)
          articles.value = response.data.articles.slice(0, 4)
        } catch (error) {
          console.error('Error fetching articles:', error)
        }
      })
  
      return { articles, getArticleImage }
    }
  })
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 1rem;
  }
  </style>
  