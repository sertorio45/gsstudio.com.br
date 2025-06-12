import { _ as __nuxt_component_2 } from "./Form-CsiMYFQ8.js";
import { defineComponent, withAsyncContext, computed, unref, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { b as useRoute, d as useRouter, e as useRuntimeConfig, f as useServerSeoMeta, u as useHead, _ as _export_sfc } from "../server.mjs";
import { u as useAsyncData } from "./asyncData-BJ_g-bK9.js";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "hookable";
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
import "scule";
import "@unhead/schema-org/vue";
import "imask";
import "pinia";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g;
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const { data: article, pending: loading, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `article-${route.params.slug}`,
      async () => {
        try {
          return await $fetch(`/api/articles/${route.params.slug}`);
        } catch (err) {
          return null;
        }
      },
      {
        watch: [() => route.params.slug],
        server: true,
        default: () => null
      }
    )), __temp = await __temp, __restore(), __temp);
    const categoryTitle = computed(() => {
      var _a2;
      return ((_a2 = article.value) == null ? void 0 : _a2.category_title) || "Sem categoria";
    });
    const canonicalUrl = computed(
      () => `${useRuntimeConfig().public.baseUrl || "https://gsstudio.com.br"}${route.fullPath}`
    );
    useServerSeoMeta({
      title: article.title,
      description: (_a = article.value) == null ? void 0 : _a.description,
      robots: "index, follow",
      ogTitle: (_b = article.value) == null ? void 0 : _b.title,
      ogDescription: (_c = article.value) == null ? void 0 : _c.description,
      ogType: "article",
      ogUrl: canonicalUrl,
      ogLocale: "pt_BR",
      ogImageAlt: (_d = article.value) == null ? void 0 : _d.title,
      twitterCard: "summary",
      twitterTitle: (_e = article.value) == null ? void 0 : _e.title,
      twitterDescription: (_f = article.value) == null ? void 0 : _f.description,
      fbAppId: "603230818880308"
    });
    useHead({
      title: article.title,
      meta: [
        { name: "description", content: (_g = article.value) == null ? void 0 : _g.description }
      ]
    });
    const socialNetworks = computed(() => {
      const url = canonicalUrl.value;
      return [
        { name: "Facebook", url: `https://facebook.com/sharer/sharer.php?u=${url}`, icon: "bx bxl-facebook" },
        { name: "Twitter", url: `https://twitter.com/intent/tweet?url=${url}`, icon: "bx bxl-twitter" },
        { name: "LinkedIn", url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`, icon: "bx bxl-linkedin" },
        { name: "WhatsApp", url: `https://wa.me/?text=${url}`, icon: "bx bxl-whatsapp" },
        { name: "Email", url: `mailto:?subject=Confira este artigo&body=${url}`, icon: "bx bx-envelope" },
        { name: "Link", url, icon: "bx bx-link" }
      ];
    });
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
      const _component_Form = __nuxt_component_2;
      _push(`<!--[--><section class="my-5" id="article-detail" data-v-c2d78690><div class="container my-5" data-v-c2d78690><div class="row" data-v-c2d78690><div class="col-lg-2 col-sm-12 col-md-12 mb-4" data-v-c2d78690><div class="back-fixed" data-v-c2d78690><button class="btn btn-primary-border" data-v-c2d78690>Voltar</button><div class="social-share d-flex" data-v-c2d78690><!--[-->`);
      ssrRenderList(socialNetworks.value, (network, index) => {
        _push(`<a${ssrRenderAttr("href", network.url)} target="_blank" class="social-icon"${ssrRenderAttr("title", network.name)} data-v-c2d78690><i class="${ssrRenderClass(network.icon)}" data-v-c2d78690></i></a>`);
      });
      _push(`<!--]--></div></div></div><div class="col-sm-7 col-md-12 col-lg-9" data-v-c2d78690>`);
      if (unref(loading)) {
        _push(`<div class="loading-state" data-v-c2d78690><div class="d-flex mb-3" data-v-c2d78690><div class="skeleton skeleton-category me-2" data-v-c2d78690></div><div class="skeleton skeleton-date" data-v-c2d78690></div></div><div class="skeleton skeleton-title mb-3" data-v-c2d78690></div><div class="skeleton skeleton-content mb-3" data-v-c2d78690></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="error-state" data-v-c2d78690><div class="alert alert-danger" data-v-c2d78690><h4 data-v-c2d78690>Erro ao carregar o artigo</h4><p data-v-c2d78690>${ssrInterpolate(unref(error))}</p><button class="btn btn-primary" data-v-c2d78690>Voltar</button></div></div>`);
      } else if (unref(article)) {
        _push(`<div class="content_blog" data-v-c2d78690><div class="mb-3 mx-0" data-v-c2d78690><span class="article-category" data-v-c2d78690>${ssrInterpolate(categoryTitle.value)}</span><span class="mx-3 publish_date" data-v-c2d78690>${formatDate(unref(article).created_at) ?? ""}</span></div><h1 data-v-c2d78690>${ssrInterpolate(unref(article).title)}</h1><div class="my-4" data-v-c2d78690>${unref(article).content ?? ""}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section data-v-c2d78690><div class="container" data-v-c2d78690><div class="row" data-v-c2d78690><div class="col-md-6 col-sm-12 align-content-center mb-5 sm-mb-5" data-v-c2d78690><h1 data-v-c2d78690>Fale agora conosco</h1><p data-v-c2d78690>Entre em contato conosco para tirar suas dúvidas ou solicitar um orçamento.</p></div><div class="col-md-6 col-sm-12" data-v-c2d78690>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c2d78690"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-BN5yXN0Q.js.map
