import { d as defineEventHandler, c as createError } from '../../nitro/nitro.mjs';
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

const articles = defineEventHandler(async (event) => {
  try {
    const articlesRes = await fetch(`${process.env.SUPABASE_URL}/rest/v1/articles?tenant_id=eq.${process.env.SUPABASE_TENANT_ID}&publish_status=eq.published`, {
      headers: new Headers({
        "apikey": process.env.SUPABASE_KEY || "",
        "Authorization": `Bearer ${process.env.SUPABASE_KEY || ""}`,
        "Content-Type": "application/json"
      })
    });
    if (!articlesRes.ok) throw new Error("Erro ao buscar artigos");
    const articles = await articlesRes.json();
    const categoriesRes = await fetch(`${process.env.SUPABASE_URL}/rest/v1/articles_category`, {
      headers: new Headers({
        "apikey": process.env.SUPABASE_KEY || "",
        "Authorization": `Bearer ${process.env.SUPABASE_KEY || ""}`,
        "Content-Type": "application/json"
      })
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

export { articles as default };
//# sourceMappingURL=articles.mjs.map
