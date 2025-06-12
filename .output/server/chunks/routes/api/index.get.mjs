import { d as defineEventHandler, c as createError, g as getRouterParam } from '../../nitro/nitro.mjs';
import { createClient } from '@supabase/supabase-js';
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
const index_get = defineEventHandler(async (event) => {
  try {
    const { data: articles, error: articlesError } = await supabase.from("articles").select("*").eq("tenant_id", process.env.SUPABASE_TENANT_ID).eq("publish_status", "published");
    if (articlesError) throw articlesError;
    const { data: categories, error: categoriesError } = await supabase.from("articles_category").select("*").eq("tenant_id", process.env.SUPABASE_TENANT_ID);
    if (categoriesError) throw categoriesError;
    const articlesWithCategories = articles.map((article) => {
      const category = categories.find((cat) => cat.id === article.category_id);
      return {
        ...article,
        category_title: category ? category.title : "Sem categoria"
      };
    });
    return articlesWithCategories;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message || "Erro ao buscar artigos"
    });
  }
});
const getArticleBySlug = defineEventHandler(async (event) => {
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

export { index_get as default, getArticleBySlug };
//# sourceMappingURL=index.get.mjs.map
