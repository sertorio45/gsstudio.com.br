import { useSSRContext, defineComponent, ref, computed, mergeProps } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/server-renderer/index.mjs';
import { useRoute, useRouter } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-router/dist/vue-router.node.mjs';
import { d as defineOgImage } from './defineOgImage-CR7JfCra.mjs';
import { _ as _export_sfc, b as useSeoMeta } from './server.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/h3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/devalue/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/destr/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/ssr/dist/index.mjs';
import '../routes/api/portifolio.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/klona/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/scule/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ohash/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/lru-cache.mjs';
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
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/schema-org/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/schema-org/dist/vue.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/imask/esm/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/pinia/dist/pinia.prod.cjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    defineOgImage({ url: "https://gsstudio.com.br/img/thumb_gsstudio.jpg", width: 1200, height: 600, alt: "GS STUDIO - Markteting, comunica\xE7\xE3o e desenvolvimento web" });
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
      if (!date)
        return "";
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-BR", options);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
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
        _push(`<div class="content_blog" data-v-3d4265ec><div class="mb-3 mx-0" data-v-3d4265ec><span class="article-category" data-v-3d4265ec>${ssrInterpolate(article.value.category.title)}</span><span class="mx-3 publish_date" data-v-3d4265ec>${(_a = formatDate(article.value.published_at)) != null ? _a : ""}</span></div><h1 data-v-3d4265ec>${ssrInterpolate(article.value.titulo)}</h1><div class="my-4" data-v-3d4265ec>${(_b = article.value.content) != null ? _b : ""}</div></div>`);
      } else {
        _push(`<div data-v-3d4265ec><p data-v-3d4265ec>Artigo n\xE3o encontrado.</p></div>`);
      }
      _push(`</div><div class="col-sm-12 col-md-12 col-lg-3" data-v-3d4265ec><div class="newsletter-cta p-4 bg-light rounded news-fixed my-xl-0 my-4" data-v-3d4265ec><h3 data-v-3d4265ec>Assine para novas atualiza\xE7\xF5es.</h3><form class="form" data-v-3d4265ec><div class="mb-3" data-v-3d4265ec><input${ssrRenderAttr("value", email.value)} type="email" class="form-control" id="email" name="email" placeholder="E-mail" required data-v-3d4265ec></div><div class="" data-v-3d4265ec><button type="submit" class="${ssrRenderClass(["btn", isSubmitting.value ? "btn-secondary" : success.value ? "btn-success" : error.value ? "btn-danger" : "btn-primary"])}"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-3d4265ec>`);
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

export { _slug_ as default };
//# sourceMappingURL=_slug_-_G01hbFK.mjs.map
