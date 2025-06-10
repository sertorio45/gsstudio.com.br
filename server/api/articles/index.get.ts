export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  try {
    // Buscar artigos
    const articlesRes = await fetch(`${config.SUPABASE_URL}/rest/v1/articles?tenant_id=eq.${config.SUPABASE_TENANT_ID}&publish_status=eq.published`, {
      headers: {
        'apikey': String(config.SUPABASE_KEY || ''),
        'Authorization': `Bearer ${String(config.SUPABASE_KEY || '')}`,
        'Content-Type': 'application/json'
      }
    });
    if (!articlesRes.ok) throw new Error('Erro ao buscar artigos');
    const articles: Array<any> = await articlesRes.json();

    // Buscar categorias
    const categoriesRes = await fetch(`${config.SUPABASE_URL}/rest/v1/articles_category`, {
      headers: {
        'apikey': String(config.SUPABASE_KEY || ''),
        'Authorization': `Bearer ${String(config.SUPABASE_KEY || '')}`,
        'Content-Type': 'application/json'
      }
    });
    if (!categoriesRes.ok) throw new Error('Erro ao buscar categorias');
    const categories: Array<any> = await categoriesRes.json();

    // Relacionar artigos com nome da categoria
    const articlesWithCategory = articles.map((article: any) => {
      const category = categories.find((cat: any) => cat.id === article.category_id);
      return {
        ...article,
        category_title: category ? category.title : "Sem categoria"
      };
    });

    return { success: true, data: articlesWithCategory };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Erro ao buscar artigos'
    });
  }
});
