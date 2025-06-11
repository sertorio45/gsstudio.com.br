import { d as defineEventHandler, u as useRuntimeConfig, c as createError } from '../../../../index.mjs';
import 'lru-cache';
import 'devalue';
import 'node:cluster';
import 'node:os';
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
