import { createClient } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@supabase/supabase-js/dist/main/index.js';
import { defineEventHandler, getRouterParam, createError } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/h3/dist/index.mjs';

const tenantId = process.env.SUPABASE_TENANT_ID;
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
const _slug__get = defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");
  try {
    const { data: article, error: articleError } = await supabase.from("articles").select("*").eq("slug", slug).eq("tenant_id", tenantId).single();
    if (articleError) throw articleError;
    if (!article) return null;
    const { data: category, error: categoryError } = await supabase.from("articles_category").select("*").eq("id", article.category_id).eq("tenant_id", tenantId).single();
    if (categoryError) throw categoryError;
    return {
      ...article,
      category_title: category ? category.title : "Sem categoria"
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message || "Erro ao buscar artigo"
    });
  }
});

export { _slug__get as default };
//# sourceMappingURL=_slug_.get.mjs.map
