import { F as Form } from './Form-BoNFwXDR.mjs';
import { useSSRContext, defineComponent, computed, unref } from 'vue';
import { ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, b as useRoute, d as useRouter, u as useHead, e as useSeoMeta } from './server.mjs';
import { u as useFetch } from './fetch-C_532iVK.mjs';
import { d as defineOgImage } from './defineOgImage-DOY8uik7.mjs';
import '../nitro/nitro.mjs';
import 'lru-cache';
import 'devalue';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@unhead/schema-org';
import '@unhead/schema-org/vue';
import 'imask';
import 'pinia';
import './asyncData-7owwyAlj.mjs';

function defineOgImageComponent(component, props = {}, options = {}) {
  return defineOgImage({
    ...options,
    component,
    props
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const slug = computed(() => route.params.slug);
    const { data: article, pending: isLoading, error: fetchError } = useFetch(() => `https://painel.gsadmin.app/items/articles`, {
      params: {
        fields: "id,title,meta_keywords,meta_description,content,slug,categorie.id,categorie.title_categorie",
        "filter[slug][_eq]": slug.value || ""
      },
      key: `article-${slug.value}`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
      server: true,
      lazy: false,
      transform: (response) => {
        var _a;
        return ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.length) ? response.data[0] : null;
      }
    }, "$Tp5y69NxkZ");
    const categoryTitle = computed(() => {
      var _a, _b;
      return ((_b = (_a = article.value) == null ? void 0 : _a.categorie) == null ? void 0 : _b.title_categorie) || "Sem categoria";
    });
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
    defineOgImageComponent("NuxtSeo", {
      title: "Blog",
      description: description.value,
      colorMode: "dark",
      theme: "#1e00ff"
    });
    useHead({
      title,
      meta: [
        { name: "description", content: description },
        { name: "robots", content: "index, follow" },
        { name: "keywords", content: keywords },
        { name: "canonical", content: `https://gsstudio.com.br/${slug.value}` }
      ]
    });
    useSeoMeta({
      title,
      description,
      keywords,
      ogLocale: "pt-br",
      ogImageAlt: title,
      ogTitle: title,
      ogType: "article",
      ogUrl: `https://gsstudio.com.br/${slug.value}`,
      ogDescription: description,
      twitterTitle: title,
      twitterDescription: description,
      twitterCard: "summary",
      fbAppId: "603230818880308"
    });
    const socialNetworks = computed(() => {
      return [];
    });
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Form = Form;
      _push(`<!--[--><section class="my-5" id="article-detail" data-v-47d73861><div class="container my-5" data-v-47d73861><div class="row" data-v-47d73861><div class="col-lg-2 col-sm-12 col-md-12 mb-4" data-v-47d73861><div class="back-fixed" data-v-47d73861><button class="btn btn-primary-border" data-v-47d73861>Voltar</button><div class="social-share d-flex" data-v-47d73861><!--[-->`);
      ssrRenderList(socialNetworks.value, (network, index) => {
        _push(`<a${ssrRenderAttr("href", network.url)} target="_blank" class="social-icon"${ssrRenderAttr("title", network.name)} data-v-47d73861><i class="${ssrRenderClass(network.icon)}" data-v-47d73861></i></a>`);
      });
      _push(`<!--]--></div></div></div><div class="col-sm-7 col-md-12 col-lg-9" data-v-47d73861>`);
      if (unref(isLoading)) {
        _push(`<div data-v-47d73861><div class="d-flex mb-3" data-v-47d73861><div class="skeleton skeleton-category me-2" data-v-47d73861></div><div class="skeleton skeleton-date" data-v-47d73861></div></div><div class="skeleton skeleton-title mb-3" data-v-47d73861></div><div class="skeleton skeleton-content mb-3" data-v-47d73861></div></div>`);
      } else if (unref(article)) {
        _push(`<div class="content_blog" data-v-47d73861><div class="mb-3 mx-0" data-v-47d73861><span class="article-category" data-v-47d73861>${ssrInterpolate(categoryTitle.value)}</span><span class="mx-3 publish_date" data-v-47d73861>${(_a = formatDate(unref(article).date_created)) != null ? _a : ""}</span></div><h1 data-v-47d73861>${ssrInterpolate(unref(article).title)}</h1><div class="my-4" data-v-47d73861>${(_b = unref(article).content) != null ? _b : ""}</div></div>`);
      } else if (unref(fetchError)) {
        _push(`<div data-v-47d73861><p class="text-danger" data-v-47d73861>Erro ao carregar o artigo.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section data-v-47d73861><div class="container" data-v-47d73861><div class="row" data-v-47d73861><div class="col-md-6 col-sm-12 align-content-center mb-5 sm-mb-5" data-v-47d73861><h1 data-v-47d73861>Fale agora conosco</h1><p data-v-47d73861>Entre em contato conosco para tirar suas d\xFAvidas ou solicitar um or\xE7amento.</p></div><div class="col-md-6 col-sm-12" data-v-47d73861>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-47d73861"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-Bs5zVTTQ.mjs.map
