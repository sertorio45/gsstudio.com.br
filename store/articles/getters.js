const baseURL = process.env.VITE_STRAPI_URL || 'https://str-gsstudio.gsstudio.com.br'

export default {
  getArticleImage: () => (path) => {
    const url = new URL(path, baseURL).href
    console.log('Generated image URL:', url)
    return url
  },
  formatDate: () => (date) => {
    if (!date) return ''
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('pt-BR', options)
  },
  getCategoryTitle: (state) => (categoryId) => {
    const category = state.categories.find(cat => cat.id === categoryId)
    return category ? category.title : 'Categoria desconhecida'
  }
}
