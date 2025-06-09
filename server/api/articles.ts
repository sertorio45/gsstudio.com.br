export default defineEventHandler(async (event) => {
  try {
    // Buscar artigos
    const articlesRes = await fetch(`${process.env.SUPABASE_URL}/rest/v1/articles?tenant_id=eq.${process.env.SUPABASE_TENANT_ID}&publish_status=eq.published`, {
      headers: new Headers({
        'apikey': process.env.SUPABASE_KEY || '',
        'Authorization': `Bearer ${process.env.SUPABASE_KEY || ''}`,
        'Content-Type': 'application/json'
      })
    });
    if (!articlesRes.ok) throw new Error('Erro ao buscar artigos');
    const articles: Array<any> = await articlesRes.json();

    // Buscar categorias
    const categoriesRes = await fetch(`${process.env.SUPABASE_URL}/rest/v1/articles_category`, {
      headers: new Headers({
        'apikey': process.env.SUPABASE_KEY || '',
        'Authorization': `Bearer ${process.env.SUPABASE_KEY || ''}`,
        'Content-Type': 'application/json'
      })
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
