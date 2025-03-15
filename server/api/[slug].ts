export default defineEventHandler(async (event) => {
  const slug = event.context.params?.slug;
  const apiUrl = `https://painel.gsadmin.app/items/articles`;

  try {
    if (!slug) {
      throw createError({ statusCode: 400, statusMessage: "Slug não fornecido" });
    }

    // 🔹 Busca o artigo pelo slug na API do Directus
    const response = await $fetch<{ data: any[] }>(apiUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      query: { "filter[slug][_eq]": slug },
    });

    if (!response.data || response.data.length === 0) {
      throw createError({ statusCode: 404, statusMessage: "Artigo não encontrado" });
    }

    // 🔹 Retorna o artigo encontrado
    return response.data[0];

  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Erro ao buscar o artigo",
    });
  }
});
