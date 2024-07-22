// Estado inicial
export const state = () => ({
  articles: [] // Array inicial para armazenar os artigos
});

// Mutations
export const mutations = {
  // Mutação para definir os artigos no estado
  SET_ARTICLES(state, articles) {
    state.articles = articles;
  }
};

// Ações
export const actions = {
  // Ação para buscar artigos do servidor Strapi
  async fetchArticles({ commit }) {
    try {
      // Realiza uma requisição GET para obter os artigos
      const response = await this.$axios.$get('/articles', {
        params: {
          _sort: 'created_at:DESC', // Ordena os artigos pela data de criação, em ordem decrescente
          _limit: 4, // Limita a resposta a 4 artigos
          tenant: process.env.VITE_STRAPI_TENANT_ID // Adiciona o parâmetro tenant com a ID do inquilino
        }
      });
      // Comita a mutação SET_ARTICLES com a resposta da requisição
      commit('SET_ARTICLES', response);
    } catch (error) {
      // Log de erro em caso de falha na requisição
      console.error('Error fetching articles:', error);
    }
  }
};

// Getters
export const getters = {
  // Getter para obter os artigos do estado
  getArticles: state => state.articles
};
