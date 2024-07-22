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
                <nuxt-link :to="`/artigos/${article.slug}`">{{ article.titulo }}</nuxt-link>
                <div class="mt-3"><span class="article-category">{{ getCategoryTitle(article.category) }}</span></div>
              </div>

            </div>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex alignt-content-center justify-content-center">
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
      const articles = ref<Array<{ id: number, titulo: string, content: string, thumb: any, slug: string, category: number }>>([])
      const categories = ref<Array<{ id: number, title: string }>>([])
      const VITE_STRAPI_TENANT_ID = import.meta.env.VITE_STRAPI_TENANT_ID
  
      const getArticleImage = (article: any) => {
        if (article.thumb && article.thumb.url) {
          return `https://str-gsstudio.gsstudio.com.br${article.thumb.url}`
        }
        return 'thumb_blog_gsstudio.webp' // Substitua por uma URL de imagem padrão
      }
  
      const getCategoryTitle = (categoryId: number) => {
        const category = categories.value.find(cat => cat.id === categoryId)
        return category ? category.title : 'Categoria desconhecida'
      }
  
      onMounted(async () => {
        try {
          const categoryResponse = await axios.get(`https://str-gsstudio.gsstudio.com.br/categories`)
          categories.value = categoryResponse.data
  
          const articleResponse = await axios.get(`https://str-gsstudio.gsstudio.com.br/tenants/${VITE_STRAPI_TENANT_ID}`)
          articles.value = articleResponse.data.articles.slice(0, 4)
        } catch (error) {
          console.error('Error fetching articles or categories:', error)
        }
      })
  
      return { articles, getArticleImage, getCategoryTitle }
    }
  })
  </script>
  <style scoped>
  .card {
    margin-bottom: 20px;
    border: 0;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra mais forte */
    overflow: hidden;
    transition: box-shadow 0.3s, margin-bottom 0.3s;
    border-radius: 10px; /* Cantos arredondados para o cartão */
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .image-container {
    overflow: hidden;
    border-radius: 10px; /* Cantos arredondados para a imagem */
    width: 100%;
    height: 200px; /* Altura fixa para as imagens */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .card img {
    transition: transform 0.3s;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que a imagem preencha o contêiner e mantenha a proporção */
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
    /* scale: 0.98; */
    transform: scale(0.97);
    transition: 0.5s;
  }
  .card:hover {
    margin-bottom: 1rem;
    box-shadow: none;
  }
  
  .card h5 {
    font-size: 16px !important;
  }
  
  .card:hover img {
    transform: scale(1.3);
  }
  </style>
  