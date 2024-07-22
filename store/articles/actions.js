import axios from 'axios'

const baseURL = process.env.VITE_STRAPI_URL || 'https://str-gsstudio.gsstudio.com.br'

export default {
  async fetchArticles({ commit }, tenantId) {
    try {
      const response = await axios.get(`${baseURL}/tenants/${tenantId}`)
      commit('SET_ARTICLES', response.data.articles)
    } catch (error) {
      console.error('Error fetching articles:', error)
      commit('SET_ARTICLES', [])
    }
  },
  async fetchCategories({ commit }) {
    try {
      const response = await axios.get(`${baseURL}/categories`)
      commit('SET_CATEGORIES', response.data)
    } catch (error) {
      console.error('Error fetching categories:', error)
      commit('SET_CATEGORIES', [])
    }
  },
  async fetchArticleBySlug({ commit }, slug) {
    try {
      const response = await axios.get(`${baseURL}/articles?slug=${slug}`)
      const article = response.data.length ? response.data[0] : null
      commit('SET_ARTICLE', article)
    } catch (error) {
      console.error('Error fetching article:', error)
      commit('SET_ARTICLE', null)
    }
  }
}
