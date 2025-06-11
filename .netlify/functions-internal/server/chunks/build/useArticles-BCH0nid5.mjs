import { ref } from 'vue';
import { createClient } from '@supabase/supabase-js';
import { g as useRuntimeConfig } from './server.mjs';

function useArticles() {
  const articles = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.SUPABASE_URL || "https://srzohnuulwgonduoudfp.supabase.co",
    config.SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyem9obnV1bHdnb25kdW91ZGZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3OTM1NDgsImV4cCI6MjA2MzM2OTU0OH0.Swg2RXgjK_0jlsdVIZextQdufDkfRkaCI5YQH2bA-kg"
  );
  const TENANT_ID = config.SUPABASE_TENANT_ID || "286f2ba0-b7a0-4685-b44a-24a55f6119c8";
  async function fetchArticles() {
    loading.value = true;
    error.value = null;
    try {
      const { data: articlesData, error: articlesError } = await supabase.from("articles").select("*").eq("tenant_id", TENANT_ID).eq("publish_status", "published").order("created_at", { ascending: false });
      if (articlesError || !articlesData) {
        throw new Error((articlesError == null ? void 0 : articlesError.message) || "Erro ao buscar artigos");
      }
      const { data: categories, error: categoriesError } = await supabase.from("articles_category").select("*");
      if (categoriesError || !categories) {
        throw new Error((categoriesError == null ? void 0 : categoriesError.message) || "Erro ao buscar categorias");
      }
      const articlesWithCategories = articlesData.map((article) => {
        const category = categories.find((cat) => cat.id === article.category_id);
        return {
          ...article,
          category_title: category ? category.title : "Sem categoria"
        };
      });
      articles.value = articlesWithCategories;
      return articlesWithCategories;
    } catch (err) {
      error.value = err.message || "Erro ao buscar artigos";
      console.error("Erro ao buscar artigos:", err);
      return [];
    } finally {
      loading.value = false;
    }
  }
  async function fetchArticleBySlug(slug) {
    try {
      const { data: articleData, error: articleError } = await supabase.from("articles").select("*").eq("tenant_id", TENANT_ID).eq("publish_status", "published").eq("slug", slug).single();
      if (articleError || !articleData) {
        return null;
      }
      const { data: category, error: categoryError } = await supabase.from("articles_category").select("*").eq("id", articleData.category_id).single();
      return {
        ...articleData,
        category_title: category ? category.title : "Sem categoria"
      };
    } catch (err) {
      console.error("Erro ao buscar artigo por slug:", err);
      return null;
    }
  }
  return {
    articles,
    loading,
    error,
    fetchArticles,
    fetchArticleBySlug
  };
}

export { useArticles as u };
//# sourceMappingURL=useArticles-BCH0nid5.mjs.map
