// stores/articles.ts
import { defineStore } from 'pinia';
import axios from 'axios';

interface Article {
  id: number;
  slug: string;
  titulo: string;
  seo_description: string;
  seo_keywords: string;
  thumb?: {
    url?: string;
  };
  published_at: string;
  category: {
    id: number;
    title: string;
  };
  content: string;
}

export const useArticleStore = defineStore('articles', {
  state: () => ({
    article: null as Article | null,
  }),
  actions: {
    async fetchArticleBySlug(slug: string) {
      try {
        const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/articles?slug=${slug}`);
        if (response.data.length) {
          this.article = response.data[0];
        }
      } catch (err) {
        console.error('Erro ao buscar o artigo:', err);
      }
    },
  },
});
