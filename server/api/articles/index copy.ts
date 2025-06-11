export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const apiBase = config.public.apiBase
  const tenantId = config.SUPABASE_TENANT_ID
  const apiSecret = config.SUPABASE_KEY

  if (!apiBase || !tenantId || !apiSecret) {
    throw createError({
      statusCode: 500,
      message: 'Variáveis de ambiente não definidas corretamente.'
    });
  }

  try {
    // Buscar artigos
    const articlesRes = await fetch(`${apiBase}/rest/v1/articles?tenant_id=eq.${tenantId}&publish_status=eq.published`, {
      headers: {
        'apikey': String(apiSecret),
        'Content-Type': 'application/json'
      }
    });
    
    if (!articlesRes.ok) {
      const text = await articlesRes.text();
      console.error('Erro ao buscar artigos:', text);
      throw createError({
        statusCode: articlesRes.status,
        message: `Erro ao buscar artigos: ${text}`
      });
    }
    
    const articles: Array<any> = await articlesRes.json();
    return { success: true, data: articles };
    
  } catch (error: any) {
    console.error('Erro no endpoint /api/articles:', error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Erro desconhecido ao buscar artigos'
    });
  }
});
