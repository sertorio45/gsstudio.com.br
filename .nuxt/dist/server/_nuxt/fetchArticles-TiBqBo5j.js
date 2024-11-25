import { o as defineNuxtRouteMiddleware, e as useRoute, p as executeAsync } from "../server.mjs";
import "vue";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { defineStore } from "pinia";
import axios from "axios";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "devalue";
import "cookie-es";
import "ohash";
import "@gtm-support/vue-gtm";
import "@unhead/schema-org";
import "@unhead/schema-org/vue";
import "imask";
import "vue/server-renderer";
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
export {
  fetchArticles as default
};
//# sourceMappingURL=fetchArticles-TiBqBo5j.js.map
