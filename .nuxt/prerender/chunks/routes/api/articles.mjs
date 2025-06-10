import { defineEventHandler, createError } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/h3/dist/index.mjs';

const articles = defineEventHandler(async (event) => {
  try {
    const articlesRes = await fetch(`${process.env.SUPABASE_URL}/rest/v1/articles?tenant_id=eq.${process.env.SUPABASE_TENANT_ID}&publish_status=eq.published`, {
      headers: new Headers({
        "apikey": process.env.SUPABASE_KEY || "",
        "Authorization": `Bearer ${process.env.SUPABASE_KEY || ""}`,
        "Content-Type": "application/json"
      })
    });
    if (!articlesRes.ok) throw new Error("Erro ao buscar artigos");
    const articles = await articlesRes.json();
    const categoriesRes = await fetch(`${process.env.SUPABASE_URL}/rest/v1/articles_category`, {
      headers: new Headers({
        "apikey": process.env.SUPABASE_KEY || "",
        "Authorization": `Bearer ${process.env.SUPABASE_KEY || ""}`,
        "Content-Type": "application/json"
      })
    });
    if (!categoriesRes.ok) throw new Error("Erro ao buscar categorias");
    const categories = await categoriesRes.json();
    const articlesWithCategory = articles.map((article) => {
      const category = categories.find((cat) => cat.id === article.category_id);
      return {
        ...article,
        category_title: category ? category.title : "Sem categoria"
      };
    });
    return { success: true, data: articlesWithCategory };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Erro ao buscar artigos"
    });
  }
});

export { articles as default };
//# sourceMappingURL=articles.mjs.map
