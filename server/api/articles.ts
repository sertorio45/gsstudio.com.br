export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apiUrl = `${config.public.API_BASE_URL}/items/articles`;

  try {
    const query = getQuery(event);

    const response = await $fetch(apiUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      query,
    });

    return response;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Erro ao buscar artigos",
    });
  }
});
