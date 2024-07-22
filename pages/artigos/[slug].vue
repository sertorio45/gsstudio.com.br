<template>
  <main>
    <section class="my-5" id="article-detail">
      <div class="container my-5">
        <div class="row">
          <div class="col-2">
            <NuxtLink to="/blog" class="btn btn-primary-border">< Voltar</NuxtLink>
          </div>
          <div class="col-7">
            <div v-if="article">
              <div class="mb-3">
                <span class="article-category">{{ getCategoryTitle(article.category) }}</span>
                <span v-html="formatDate(article.published_at)" class="mx-5"></span>
              </div>
              <h2>{{ article.titulo }}</h2>
              <div class="my-4">
                <picture v-if="hasThumbnail(article)">
                  <source :srcset="getArticleImage(article)">
                  <img :src="getArticleImage(article)" class="img-fluid" :alt="article.titulo" />
                </picture>
                <img v-else src="/thumb_blog_gsstudio.webp" class="img-fluid" alt="Default Image">
              </div>
              <div v-html="article.content"></div>
            </div>
            <div v-else>
              <p>Carregando artigo...</p>
            </div>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    </section>
  </main>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ArticleDetail',
  setup() {
    const article = ref(null)
    const categories = ref([])
    const route = useRoute()
    const baseURL = process.env.VITE_STRAPI_URL || 'https://str-gsstudio.gsstudio.com.br'

    const fetchArticleBySlug = async (slug) => {
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

    const getArticleImage = (article) => {
      if (article.thumb && article.thumb.url) {
        const url = new URL(article.thumb.url, baseURL).href
        console.log('Generated image URL:', url)
        return url
      }
      return '/thumb_blog_gsstudio.webp' // Substitua por uma URL de imagem padrão
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

    const hasThumbnail = (article) => {
      return article && article.thumb && article.thumb.url
    }

    onMounted(async () => {
      const slug = route.params.slug
      console.log('Fetching article with slug:', slug)
      await fetchArticleBySlug(slug)
      await fetchCategories()
      console.log('Article:', article.value)
      console.log('Categories:', categories.value)
    })

    return {
      article,
      categories,
      getArticleImage,
      getCategoryTitle,
      formatDate,
      hasThumbnail
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
</style>
