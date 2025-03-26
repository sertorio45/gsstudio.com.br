import { F as Form } from './Form.vue.mjs';
import { defineComponent, ref, computed, unref, useSSRContext } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue/index.mjs';
import { ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue/server-renderer/index.mjs';
import { f as useRoute, g as useRouter, u as useHead, b as useSeoMeta, _ as _export_sfc } from './server.mjs';
import { u as useAsyncData } from './asyncData.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/hookable/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unctx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/h3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/radix3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/defu/dist/defu.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ufo/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/devalue/index.js';
import '../_/renderer3.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/destr/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unhead/dist/server.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unhead/dist/utils.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ohash/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/klona/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/scule/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/consola/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/packrup/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unocss/core/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unocss/preset-wind3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/pathe/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/nodemailer/lib/nodemailer.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@dword-design/functions/dist/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ipx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unhead/schema-org/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unhead/schema-org/dist/vue.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/imask/esm/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/pinia/dist/pinia.prod.cjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const articleError = ref(null);
    const { data: article, pending, refresh } = useAsyncData(
      `article-${route.params.slug}`,
      async () => {
        var _a;
        try {
          const slug = route.params.slug;
          if (!slug) {
            articleError.value = "Slug não encontrado na URL";
            return null;
          }
          const response = await $fetch(
            "/items/articles",
            {
              baseURL: "https://painel.gsadmin.app",
              method: "GET",
              headers: { "Content-Type": "application/json" },
              query: {
                fields: "id,title,meta_keywords,meta_description,content,date_created,slug,categorie.id,categorie.title_categorie",
                "filter[slug][_eq]": slug
              }
            }
          );
          if (!((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.length)) {
            articleError.value = "Artigo não encontrado";
            return null;
          }
          return response.data[0];
        } catch (err) {
          articleError.value = "Erro ao carregar o artigo";
          console.error("Erro na requisição:", err);
          return null;
        }
      },
      {
        // 4. Configurações adicionais para SSR
        server: true,
        lazy: false,
        default: () => null
      }
    );
    const title = computed(() => {
      var _a;
      return (_a = article.value) == null ? void 0 : _a.title;
    });
    const description = computed(() => {
      var _a;
      return (_a = article.value) == null ? void 0 : _a.meta_description;
    });
    const keywords = computed(() => {
      var _a;
      return (_a = article.value) == null ? void 0 : _a.meta_keywords;
    });
    const categoryTitle = computed(() => {
      var _a, _b;
      return (_b = (_a = article.value) == null ? void 0 : _a.categorie) == null ? void 0 : _b.title_categorie;
    });
    useHead({
      title,
      meta: [
        { name: "description", content: () => description.value },
        { name: "robots", content: article.value ? "index, follow" : "noindex, nofollow" },
        { name: "keywords", content: () => keywords.value },
        { name: "canonical", content: () => `https://gsstudio.com.br/${route.params.slug}` }
      ]
    });
    useSeoMeta({
      title,
      description: description.value,
      keywords: keywords.value,
      ogLocale: "pt-br",
      ogImageAlt: title.value,
      ogTitle: title.value,
      ogType: "article",
      ogUrl: `https://gsstudio.com.br/${route.params.slug}`,
      ogDescription: description.value,
      twitterTitle: title.value,
      twitterDescription: description.value,
      twitterCard: "summary",
      fbAppId: "603230818880308"
    });
    const socialNetworks = ref([]);
    const formatDate = (date) => {
      if (!date) return "";
      try {
        return new Date(date).toLocaleDateString("pt-BR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      } catch {
        return (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Form = Form;
      _push(`<!--[--><section class="my-5" id="article-detail" data-v-1a6520b7><div class="container my-5" data-v-1a6520b7><div class="row" data-v-1a6520b7><div class="col-lg-2 col-sm-12 col-md-12 mb-4" data-v-1a6520b7><div class="back-fixed" data-v-1a6520b7><button class="btn btn-primary-border" data-v-1a6520b7>Voltar</button><div class="social-share d-flex" data-v-1a6520b7><!--[-->`);
      ssrRenderList(socialNetworks.value, (network, index) => {
        _push(`<a${ssrRenderAttr("href", network.url)} target="_blank" class="social-icon"${ssrRenderAttr("title", network.name)} data-v-1a6520b7><i class="${ssrRenderClass(network.icon)}" data-v-1a6520b7></i></a>`);
      });
      _push(`<!--]--></div></div></div><div class="col-sm-7 col-md-12 col-lg-9" data-v-1a6520b7>`);
      if (unref(pending)) {
        _push(`<div class="loading-state" data-v-1a6520b7><div class="d-flex mb-3" data-v-1a6520b7><div class="skeleton skeleton-category me-2" data-v-1a6520b7></div><div class="skeleton skeleton-date" data-v-1a6520b7></div></div><div class="skeleton skeleton-title mb-3" data-v-1a6520b7></div><div class="skeleton skeleton-content mb-3" data-v-1a6520b7></div></div>`);
      } else if (unref(article)) {
        _push(`<div class="content_blog" data-v-1a6520b7><div class="mb-3 mx-0" data-v-1a6520b7><span class="article-category" data-v-1a6520b7>${ssrInterpolate(categoryTitle.value)}</span><span class="mx-3 publish_date" data-v-1a6520b7>${formatDate(unref(article).date_created) ?? ""}</span></div><h1 data-v-1a6520b7>${ssrInterpolate(unref(article).title)}</h1><div class="my-4" data-v-1a6520b7>${unref(article).content ?? ""}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section data-v-1a6520b7><div class="container" data-v-1a6520b7><div class="row" data-v-1a6520b7><div class="col-md-6 col-sm-12 align-content-center mb-5 sm-mb-5" data-v-1a6520b7><h1 data-v-1a6520b7>Fale agora conosco</h1><p data-v-1a6520b7>Entre em contato conosco para tirar suas dúvidas ou solicitar um orçamento.</p></div><div class="col-md-6 col-sm-12" data-v-1a6520b7>`);
      _push(ssrRenderComponent(_component_Form, null, null, _parent));
      _push(`</div></div></div></section><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1a6520b7"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_.vue.mjs.map
