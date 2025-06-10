import { d as defineEventHandler, u as useRuntimeConfig, c as createError } from '../../nitro/nitro.mjs';
import 'lru-cache';
import 'devalue';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'vue';
import 'consola/core';
import 'packrup';
import 'node:url';
import 'nodemailer';
import '@dword-design/functions';
import 'ipx';

const index_get = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  try {
    const articlesRes = await fetch(`${config.SUPABASE_URL}/rest/v1/articles?tenant_id=eq.${config.SUPABASE_TENANT_ID}&publish_status=eq.published`, {
      headers: {
        "apikey": String(config.SUPABASE_KEY || ""),
        "Authorization": `Bearer ${String(config.SUPABASE_KEY || "")}`,
        "Content-Type": "application/json"
      }
    });
    if (!articlesRes.ok) throw new Error("Erro ao buscar artigos");
    const articles = await articlesRes.json();
    const categoriesRes = await fetch(`${config.SUPABASE_URL}/rest/v1/articles_category`, {
      headers: {
        "apikey": String(config.SUPABASE_KEY || ""),
        "Authorization": `Bearer ${String(config.SUPABASE_KEY || "")}`,
        "Content-Type": "application/json"
      }
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

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
