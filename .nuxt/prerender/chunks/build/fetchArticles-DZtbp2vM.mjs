import { l as defineNuxtRouteMiddleware, f as useRoute, m as executeAsync } from './server.mjs';
import { defineStore } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/pinia/dist/pinia.prod.cjs';
import axios from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/axios/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/h3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/devalue/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/destr/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/ssr/dist/index.mjs';
import '../routes/api/portifolio.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/klona/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/scule/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ohash/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/packrup/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/nodemailer/lib/nodemailer.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@dword-design/functions/dist/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ipx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unhead/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/schema-org/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/schema-org/dist/vue.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/imask/esm/index.js';

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
//# sourceMappingURL=fetchArticles-DZtbp2vM.mjs.map
