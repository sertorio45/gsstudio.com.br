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
                  <source :srcset="getArticleImage(article.thumb.url)">
                  <img :src="getArticleImage(article.thumb.url)" class="img-fluid" :alt="article.titulo" />
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

<script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  async asyncData({ params }) {
    try {
      const [articleResponse, categoryResponse] = await Promise.all([
        axios.get(`https://str-gsstudio.gsstudio.com.br/articles?slug=${params.slug}`),
        axios.get(`https://str-gsstudio.gsstudio.com.br/categories`)
      ]);
      
      const article = articleResponse.data.length ? articleResponse.data[0] : null;
      const categories = categoryResponse.data;
      
      return { article, categories };
    } catch (error) {
      console.error('Error fetching article or categories:', error);
      return { article: null, categories: [] };
    }
  },
  data() {
    return {
      baseURL: process.env.VITE_STRAPI_URL || 'https://str-gsstudio.gsstudio.com.br',
      article: null,
      categories: []
    }
  },
  methods: {
    hasThumbnail(article) {
      return article && article.thumb && article.thumb.url;
    },
    getArticleImage(path) {
      const url = new URL(path, this.baseURL).href;
      console.log('Generated image URL:', url);
      return url;
    },
    formatDate(date) {
      if (!date) return '';
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('pt-BR', options);
    },
    getCategoryTitle(categoryId) {
      const category = this.categories.find(cat => cat.id === categoryId);
      return category ? category.title : 'Categoria desconhecida';
    }
  },
  mounted() {
    window.scrollTo(0, 0);
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
