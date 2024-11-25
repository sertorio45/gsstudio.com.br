import { o as defineNuxtRouteMiddleware, e as useRoute, p as executeAsync } from './server.mjs';
import { defineStore } from 'pinia';
import axios from 'axios';
import 'vue';
import '../routes/api/portifolio.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'packrup';
import 'nodemailer';
import '@dword-design/functions';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@unhead/schema-org';
import '@unhead/schema-org/vue';
import 'imask';

const useArticleStore = defineStore("articles", {
  state: () => ({
    article: null
  }),
  actions: {
    async fetchArticleBySlug(slug) {
      try {
        const response = await axios.get(`${"https://str-gsstudio.gsstudio.com.br"}/articles?slug=${slug}`);
        if (response.data.length) {
          this.article = response.data[0];
        }
      } catch (err) {
        console.error("Erro ao buscar o artigo:", err);
      }
    }
  }
});
const fetchArticles = defineNuxtRouteMiddleware(async () => {
  let __temp, __restore;
  const articleStore = useArticleStore();
  const route = useRoute();
  const slug = route.params.slug;
  if (!articleStore.article || articleStore.article.slug !== slug) {
    [__temp, __restore] = executeAsync(() => articleStore.fetchArticleBySlug(slug)), await __temp, __restore();
  }
});

export { fetchArticles as default };
//# sourceMappingURL=fetchArticles-TiBqBo5j.mjs.map
