import { defineEventHandler, createError } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/h3/dist/index.mjs';
import { u as useRuntimeConfig } from '../../nitro/nitro.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ufo/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/destr/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/hookable/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/klona/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/defu/dist/defu.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/scule/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/radix3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unctx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/packrup/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ohash/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/devalue/index.js';
import 'node:fs';
import 'node:url';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/pathe/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/nodemailer/lib/nodemailer.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@dword-design/functions/dist/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ipx/dist/index.mjs';

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
