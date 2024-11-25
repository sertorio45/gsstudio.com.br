import { ref, computed } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue/index.mjs';

function useBlogCards() {
  const articles = ref([]);
  const categories = ref([]);
  const loading = ref(true);
  const loadingMore = ref(false);
  const baseURL = "https://str-gsstudio.gsstudio.com.br";
  const articlesPerPage = 4;
  const loadedArticlesCount = ref(articlesPerPage);
  const loadMoreArticles = () => {
    if (loadingMore.value || !hasMoreArticles.value)
      return;
    loadingMore.value = true;
    setTimeout(() => {
      loadedArticlesCount.value += articlesPerPage;
      loadingMore.value = false;
    }, 1e3);
  };
  const displayedArticles = computed(() => {
    return articles.value.slice(0, loadedArticlesCount.value);
  });
  const hasMoreArticles = computed(() => {
    return loadedArticlesCount.value < articles.value.length;
  });
  const getArticleImage = (article) => {
    if (article.thumb && article.thumb.url) {
      return new URL(article.thumb.url, baseURL).href;
    }
    return "https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp";
  };
  const handleImageError = (event) => {
    const img = event.target;
    img.src = "https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp";
  };
  const getCategoryTitle = (categoryId) => {
    const category = categories.value.find((cat) => cat.id === categoryId);
    return category ? category.title : "Categoria desconhecida";
  };
  return {
    articles: displayedArticles,
    categories,
    loading,
    loadingMore,
    loadMoreArticles,
    hasMoreArticles,
    getArticleImage,
    getCategoryTitle,
    handleImageError
  };
}

export { useBlogCards as u };
//# sourceMappingURL=useBlogCards-Ucfk__EF.mjs.map
