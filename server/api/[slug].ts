export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apiUrl = `${config.public.API_BASE_URL}/items/articles`;
  const categoryApiUrl = `https://painel.gsadmin.app/items/categorie_articles`;
  const slug = event.context.params?.slug;

  try {
    if (!slug) {
      throw createError({ statusCode: 400, statusMessage: "Slug não fornecido" });
    }

    // 🔹 1ª REQUISIÇÃO: Busca o artigo pelo slug
    const { data: articles } = await $fetch<{ data: any[] }>(apiUrl, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      query: { "filter[slug][_eq]": slug },
    });

    if (!articles || articles.length === 0) {
      throw createError({ statusCode: 404, statusMessage: "Artigo não encontrado" });
    }

    let article = articles[0];

    // 🔹 2ª REQUISIÇÃO: Busca o nome da categoria pelo ID usando a URL correta
    let categoryTitle = "Sem categoria";

    if (article.categorie) {
      const { data: categories } = await $fetch<{ data: any[] }>(categoryApiUrl, {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        query: { 
          "filter[tenant_id][_eq]": 1,
          "filter[id][_eq]": article.categorie 
        },
      });

      if (categories && categories.length > 0) {
        categoryTitle = categories[0].title_categorie;
      }
    }

    // Adiciona o título correto da categoria ao artigo
    article.categoryTitle = categoryTitle;

    return article;

  } catch (error: any) {
    console.error("Erro ao buscar o artigo:", error);

    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Erro interno no servidor",
    });
  }
});
