import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import type { Article, Category } from '~/types';

export function useBlogCards() {
  const articles = ref<Article[]>([]);
  const categories = ref<Category[]>([]);
  const loading = ref(true);
  const loadingMore = ref(false);
  const baseURL = import.meta.env.VITE_STRAPI_URL || 'https://str-gsstudio.gsstudio.com.br';
  const VITE_STRAPI_TENANT_ID = import.meta.env.VITE_STRAPI_TENANT_ID;
  const articlesPerPage = 4;
  const loadedArticlesCount = ref(articlesPerPage);

  const fetchArticles = async (tenantId: string) => {
    try {
      const response = await axios.get(`${baseURL}/tenants/${tenantId}`);
      articles.value = response.data.articles
        .sort((a: Article, b: Article) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
        .map((article: Article) => ({ ...article, imageLoaded: false }));
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      loading.value = false;
    }
  };

  const loadMoreArticles = () => {
    if (loadingMore.value || !hasMoreArticles.value) return;

    loadingMore.value = true;

    setTimeout(() => {
      loadedArticlesCount.value += articlesPerPage;
      loadingMore.value = false;
    }, 1000);
  };

  const displayedArticles = computed(() => {
    return articles.value.slice(0, loadedArticlesCount.value);
  });

  const hasMoreArticles = computed(() => {
    return loadedArticlesCount.value < articles.value.length;
  });

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${baseURL}/categories`);
      categories.value = response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const getArticleImage = (article: Article) => {
    if (article.thumb && article.thumb.url) {
      return new URL(article.thumb.url, baseURL).href;
    }
    return 'https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp';
  };

  const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement;
    img.src = 'https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp';
  };

  const getCategoryTitle = (categoryId: number) => {
    const category = categories.value.find(cat => cat.id === categoryId);
    return category ? category.title : 'Categoria desconhecida';
  };

  onMounted(() => {
    fetchArticles(VITE_STRAPI_TENANT_ID);
    fetchCategories();
  });

  return {
    articles: displayedArticles,
    categories,
    loading,
    loadingMore,
    loadMoreArticles,
    hasMoreArticles,
    getArticleImage,
    getCategoryTitle,
    handleImageError,
  };
}
