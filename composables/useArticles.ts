import { useAsyncData } from "#app";

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

      // 🔹 Carrega os artigos no SSR e aplica tipagem explícita
      const { data: articlesData } = await useAsyncData<ArticlesResponse>("articles", () =>
        $fetch("/api/articles")
      );

      if (!articlesData.value || !articlesData.value.data) {
        throw new Error("Nenhum artigo encontrado");
      }

      articles.value = articlesData.value.data;

      // 🔹 Carrega as categorias no SSR e aplica tipagem explícita
      const { data: categoriesData } = await useAsyncData<CategoriesResponse>("categories", () =>
        $fetch("/api/categories")
      );

      if (categoriesData.value && categoriesData.value.data) {
        const categories: Category[] = categoriesData.value.data;

        // 🔹 Associa o título da categoria a cada artigo
        articles.value = articles.value.map((article) => {
          const category = categories.find((cat: Category) => cat.id === article.categorie);
          return { ...article, category_title: category ? category.title_categorie : "Sem categoria" };
        });
      }
    } catch (err) {
      error.value = (err as Error).message || "Erro ao buscar artigos";
    } finally {
      isLoading.value = false;
    }
  };

  return { articles, fetchArticles, isLoading, error };
}
