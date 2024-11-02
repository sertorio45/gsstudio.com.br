import { defineComponent, ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import { d as defineOgImage } from "./defineOgImage-CR7JfCra.js";
import { b as useSeoMeta, _ as _export_sfc } from "../server.mjs";
import "defu";
import "h3";
import "radix3";
import "ufo";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "devalue";
import "cookie-es";
import "ohash";
import "@gtm-support/vue-gtm";
import "@unhead/schema-org";
import "@unhead/schema-org/vue";
import "imask";
import "pinia";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    defineOgImage({ url: "https://gsstudio.com.br/img/thumb_gsstudio.jpg", width: 1200, height: 600, alt: "GS STUDIO - Markteting, comunicação e desenvolvimento web" });
    const article = ref(null);
    const loading = ref(true);
    const socialNetworks = ref([]);
    useRoute();
    useRouter();
    const baseURL = "https://str-gsstudio.gsstudio.com.br";
    const email = ref("");
    const isSubmitting = ref(false);
    const success = ref(false);
    const error = ref(false);
    const title = computed(() => {
      var _a;
      return ((_a = article.value) == null ? void 0 : _a.titulo) || "Artigo";
    });
    const description = computed(() => {
      var _a;
      return ((_a = article.value) == null ? void 0 : _a.seo_description) || "Artigos de marketing, design e desenvolvimento web.";
    });
    const ogImage = computed(() => {
      var _a, _b;
      if ((_b = (_a = article.value) == null ? void 0 : _a.thumb) == null ? void 0 : _b.url) {
        return new URL(article.value.thumb.url, baseURL).href;
      }
      return "https://gsstudio.com.br/img/thumb_gsstudio.jpg";
    });
    useSeoMeta({
      title,
      ogTitle: title,
      description,
      ogDescription: description,
      ogImage,
      twitterCard: "summary_large_image"
    });
    const formatDate = (date) => {
      if (!date) return "";
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-BR", options);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "my-5",
        id: "article-detail"
      }, _attrs))} data-v-3d4265ec><div class="container my-5" data-v-3d4265ec><div class="row" data-v-3d4265ec><div class="col-lg-2 col-sm-12 col-md-12 mb-4" data-v-3d4265ec><div class="back-fixed" data-v-3d4265ec><button class="btn btn-primary-border" data-v-3d4265ec>&lt; Voltar</button><div class="social-share d-flex" data-v-3d4265ec><!--[-->`);
      ssrRenderList(socialNetworks.value, (network, index) => {
        _push(`<a${ssrRenderAttr("href", network.url)} target="_blank" class="social-icon"${ssrRenderAttr("title", network.name)} data-v-3d4265ec><i class="${ssrRenderClass(network.icon)}" data-v-3d4265ec></i></a>`);
      });
      _push(`<!--]--></div></div></div><div class="col-sm-7 col-md-12 col-lg-7" data-v-3d4265ec>`);
      if (loading.value) {
        _push(`<div data-v-3d4265ec><div class="d-flex mb-3" data-v-3d4265ec><div class="skeleton skeleton-category me-2" data-v-3d4265ec></div><div class="skeleton skeleton-date" data-v-3d4265ec></div></div><div class="skeleton skeleton-title mb-3" data-v-3d4265ec></div><div class="skeleton skeleton-content mb-3" data-v-3d4265ec></div></div>`);
      } else if (article.value) {
        _push(`<div class="content_blog" data-v-3d4265ec><div class="mb-3 mx-0" data-v-3d4265ec><span class="article-category" data-v-3d4265ec>${ssrInterpolate(article.value.category.title)}</span><span class="mx-3 publish_date" data-v-3d4265ec>${formatDate(article.value.published_at) ?? ""}</span></div><h1 data-v-3d4265ec>${ssrInterpolate(article.value.titulo)}</h1><div class="my-4" data-v-3d4265ec>${article.value.content ?? ""}</div></div>`);
      } else {
        _push(`<div data-v-3d4265ec><p data-v-3d4265ec>Artigo não encontrado.</p></div>`);
      }
      _push(`</div><div class="col-sm-12 col-md-12 col-lg-3" data-v-3d4265ec><div class="newsletter-cta p-4 bg-light rounded news-fixed my-xl-0 my-4" data-v-3d4265ec><h3 data-v-3d4265ec>Assine para novas atualizações.</h3><form class="form" data-v-3d4265ec><div class="mb-3" data-v-3d4265ec><input${ssrRenderAttr("value", email.value)} type="email" class="form-control" id="email" name="email" placeholder="E-mail" required data-v-3d4265ec></div><div class="" data-v-3d4265ec><button type="submit" class="${ssrRenderClass(["btn", isSubmitting.value ? "btn-secondary" : success.value ? "btn-success" : error.value ? "btn-danger" : "btn-primary"])}"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-3d4265ec>`);
      if (isSubmitting.value) {
        _push(`<span data-v-3d4265ec><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-3d4265ec></span> Enviando... </span>`);
      } else if (success.value) {
        _push(`<span data-v-3d4265ec><i class="bx bx-check-circle" data-v-3d4265ec></i> Sucesso! </span>`);
      } else if (error.value) {
        _push(`<span data-v-3d4265ec><i class="bx bx-error" data-v-3d4265ec></i> Erro ao enviar! </span>`);
      } else {
        _push(`<span data-v-3d4265ec><i class="bx bx-send" data-v-3d4265ec></i> Inscrever-se </span>`);
      }
      _push(`</button></div></form></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3d4265ec"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-_G01hbFK.js.map
