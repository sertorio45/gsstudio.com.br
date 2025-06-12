import { createClient } from '@supabase/supabase-js';
import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../nitro/nitro.mjs';
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
