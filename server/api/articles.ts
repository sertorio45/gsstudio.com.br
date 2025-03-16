export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apiUrl = `${config.public.API_BASE_URL}/items/articles`;

  try {
    const query = getQuery(event);

    // 🔹 Adiciona os campos necessários à query, garantindo que o ID e título da categoria sejam retornados corretamente
    query.fields = "id,title,slug,categorie.id,categorie.title_categorie";

    const response = await $fetch<{ data: any[] }>(apiUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      query,
    });

    // 🔹 Ajusta os dados para garantir que `category_id` e `category_title` sejam sempre retornados corretamente
    return {
      data: response.data.map(article => ({
        ...article,
        category_id: article.categorie?.id || null,
        category_title: article.categorie?.title_categorie || "Sem categoria",
      })),
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Erro ao buscar artigos",
    });
  }
});
