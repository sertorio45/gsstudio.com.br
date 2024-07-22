import { defineStore } from 'pinia'
import axios from 'axios'

const baseURL = process.env.VITE_STRAPI_URL || 'https://str-gsstudio.gsstudio.com.br'

export const useArticleStore = defineStore('articles', {
  state: () => ({
    articles: [] as any[],
    categories: [] as any[],
    article: null as any
  }),
  actions: {
    async fetchArticles(tenantId: string) {
      try {
        const response = await axios.get(`${baseURL}/tenants/${tenantId}`)
        this.articles = response.data.articles
      } catch (error) {
        console.error('Error fetching articles:', error)
        this.articles = []
      }
    },
    async fetchCategories() {
      try {
        const response = await axios.get(`${baseURL}/categories`)
        this.categories = response.data
      } catch (error) {
        console.error('Error fetching categories:', error)
        this.categories = []
      }
    },
    async fetchArticleBySlug(slug: string) {
      try {
        const response = await axios.get(`${baseURL}/articles?slug=${slug}`)
        this.article = response.data.length ? response.data[0] : null
      } catch (error) {
        console.error('Error fetching article:', error)
        this.article = null
      }
    }
  },
  getters: {
    getArticleImage: () => (path: string) => {
      const url = new URL(path, baseURL).href
      console.log('Generated image URL:', url)
      return url
    },
    formatDate: () => (date: string) => {
      if (!date) return ''
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('pt-BR', options)
    },
    getCategoryTitle: (state) => (categoryId: number) => {
      const category = state.categories.find(cat => cat.id === categoryId)
      return category ? category.title : 'Categoria desconhecida'
    }
  }
})
