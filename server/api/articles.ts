export default defineEventHandler(async (event) => {
  try {
    const response = await $fetch("https://painel.gsadmin.app/items/articles?fields=id,title,meta_keywords,meta_description,content,slug,categorie.id,categorie.title_categorie", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    return response.data.map(article => ({
      ...article,
      category_title: article.categorie?.title_categorie || "Sem categoria",
    }));
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    throw createError({ statusCode: 500, statusMessage: "Erro ao buscar artigos" });
  }
});
