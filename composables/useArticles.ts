import { useFetch } from "#app";

// 🔹 Interface para os artigos
interface Article {
  id: number;
  title: string;
  slug: string;
  categorie: number;
  category_title?: string;
}

// 🔹 Interface para a resposta da API de artigos
interface ArticlesResponse {
  data: Article[];
}

// 🔹 Interface para categorias
interface Category {
  id: number;
  title_categorie: string;
}

// 🔹 Interface para a resposta da API de categorias
interface CategoriesResponse {
  data: Category[];
}

export default function useArticles() {
  const articles = ref<Article[]>([]);
  const isLoading = ref<boolean>(true);
  const error = ref<string | null>(null);

  const fetchArticles = async () => {
    try {
      isLoading.value = true;

      // 🔹 Busca os artigos usando useFetch()
      const { data: articlesData, error: articlesError } = await useFetch<ArticlesResponse>(
        "/api/articles"
      );

      if (articlesError.value) throw new Error("Erro ao buscar artigos.");
      if (!articlesData.value?.data || articlesData.value.data.length === 0) {
        throw new Error("Nenhum artigo encontrado.");
      }

      articles.value = articlesData.value.data;

      // 🔹 Busca as categorias usando useFetch()
      const { data: categoriesData, error: categoriesError } = await useFetch<CategoriesResponse>(
        "/api/categories"
      );

      if (categoriesError.value) throw new Error("Erro ao buscar categorias.");
      if (!categoriesData.value?.data || categoriesData.value.data.length === 0) {
        throw new Error("Nenhuma categoria encontrada.");
      }

      const categories: Category[] = categoriesData.value.data;

      // 🔹 Associa o título da categoria a cada artigo
      articles.value = articles.value.map((article) => {
        const category = categories.find((cat) => cat.id === article.categorie);
        return { ...article, category_title: category ? category.title_categorie : "Sem categoria" };
      });

    } catch (err) {
      console.error("❌ Erro ao buscar artigos:", err);
      error.value = (err as Error).message || "Erro ao buscar artigos.";
    } finally {
      isLoading.value = false;
    }
  };

  return { articles, fetchArticles, isLoading, error };
}
