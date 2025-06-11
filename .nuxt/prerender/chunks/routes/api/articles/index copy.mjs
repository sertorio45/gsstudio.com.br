import { defineEventHandler, createError } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/h3/dist/index.mjs';
import { u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
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
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/redis.mjs';
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

const index_copy = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const apiBase = config.public.apiBase;
  const tenantId = config.SUPABASE_TENANT_ID;
  const apiSecret = config.SUPABASE_KEY;
  if (!apiBase || !tenantId || !apiSecret) {
    throw createError({
      statusCode: 500,
      message: "Vari\xE1veis de ambiente n\xE3o definidas corretamente."
    });
  }
  try {
    const articlesRes = await fetch(`${apiBase}/rest/v1/articles?tenant_id=eq.${tenantId}&publish_status=eq.published`, {
      headers: {
        "apikey": String(apiSecret),
        "Content-Type": "application/json"
      }
    });
    if (!articlesRes.ok) {
      const text = await articlesRes.text();
      console.error("Erro ao buscar artigos:", text);
      throw createError({
        statusCode: articlesRes.status,
        message: `Erro ao buscar artigos: ${text}`
      });
    }
    const articles = await articlesRes.json();
    return { success: true, data: articles };
  } catch (error) {
    console.error("Erro no endpoint /api/articles:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Erro desconhecido ao buscar artigos"
    });
  }
});

export { index_copy as default };
//# sourceMappingURL=index copy.mjs.map
