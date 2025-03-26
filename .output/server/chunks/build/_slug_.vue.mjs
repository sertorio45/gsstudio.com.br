import { F as Form } from './Form.vue.mjs';
import { defineComponent, ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { b as useRoute, j as useRouter, u as useHead, d as useSeoMeta, _ as _export_sfc } from './server.mjs';
import { u as useAsyncData } from './asyncData.mjs';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'packrup';
import 'node:url';
import 'nodemailer';
import '@dword-design/functions';
import 'ipx';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import '@unhead/schema-org';
import '@unhead/schema-org/vue';
import 'imask';
import 'pinia';

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
      title: () => title.value,
      meta: [
        { name: "description", content: () => description.value },
        { name: "robots", content: article.value ? "index, follow" : "noindex, nofollow" },
        { name: "keywords", content: () => keywords.value },
        { name: "canonical", content: () => `https://gsstudio.com.br/${route.params.slug}` }
      ]
    });
    useSeoMeta({
      title: () => title.value,
      description: () => description.value,
      keywords: () => keywords.value,
      ogLocale: "pt-br",
      ogImageAlt: () => title.value,
      ogTitle: () => title.value,
      ogType: "article",
      ogUrl: () => `https://gsstudio.com.br/${route.params.slug}`,
      ogDescription: () => description.value,
      twitterTitle: () => title.value,
      twitterDescription: () => description.value,
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
      _push(`<!--[--><section class="my-5" id="article-detail" data-v-8975a755><div class="container my-5" data-v-8975a755><div class="row" data-v-8975a755><div class="col-lg-2 col-sm-12 col-md-12 mb-4" data-v-8975a755><div class="back-fixed" data-v-8975a755><button class="btn btn-primary-border" data-v-8975a755>Voltar</button><div class="social-share d-flex" data-v-8975a755><!--[-->`);
      ssrRenderList(socialNetworks.value, (network, index) => {
        _push(`<a${ssrRenderAttr("href", network.url)} target="_blank" class="social-icon"${ssrRenderAttr("title", network.name)} data-v-8975a755><i class="${ssrRenderClass(network.icon)}" data-v-8975a755></i></a>`);
      });
      _push(`<!--]--></div></div></div><div class="col-sm-7 col-md-12 col-lg-9" data-v-8975a755>`);
      if (unref(pending)) {
        _push(`<div class="loading-state" data-v-8975a755><div class="d-flex mb-3" data-v-8975a755><div class="skeleton skeleton-category me-2" data-v-8975a755></div><div class="skeleton skeleton-date" data-v-8975a755></div></div><div class="skeleton skeleton-title mb-3" data-v-8975a755></div><div class="skeleton skeleton-content mb-3" data-v-8975a755></div></div>`);
      } else if (unref(article)) {
        _push(`<div class="content_blog" data-v-8975a755><div class="mb-3 mx-0" data-v-8975a755><span class="article-category" data-v-8975a755>${ssrInterpolate(categoryTitle.value)}</span><span class="mx-3 publish_date" data-v-8975a755>${formatDate(unref(article).date_created) ?? ""}</span></div><h1 data-v-8975a755>${ssrInterpolate(title.value)}</h1><div class="my-4" data-v-8975a755>${unref(article).content ?? ""}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section data-v-8975a755><div class="container" data-v-8975a755><div class="row" data-v-8975a755><div class="col-md-6 col-sm-12 align-content-center mb-5 sm-mb-5" data-v-8975a755><h1 data-v-8975a755>Fale agora conosco</h1><p data-v-8975a755>Entre em contato conosco para tirar suas dúvidas ou solicitar um orçamento.</p></div><div class="col-md-6 col-sm-12" data-v-8975a755>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8975a755"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_.vue.mjs.map
