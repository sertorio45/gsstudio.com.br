import { _ as _sfc_main$1 } from './NuxtImg-DCnneY7a.mjs';
import { defineComponent, ref, useSSRContext } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/index.mjs';
import { useRoute, useRouter } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-router/dist/vue-router.node.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/h3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/devalue/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/ssr/dist/index.mjs';
import '../routes/api/portifolio.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/destr/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/klona/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/scule/dist/index.mjs';
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
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ipx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unhead/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/schema-org/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/schema-org/dist/vue.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/imask/esm/index.js';

const _sfc_main = defineComponent({
  name: "ArticleDetail",
  setup() {
    const article = ref(null);
    const categories = ref([]);
    const loading = ref(true);
    const imageLoaded = ref(false);
    useRoute();
    const router = useRouter();
    const baseURL = "https://str-gsstudio.gsstudio.com.br";
    const getArticleImage = (article2) => {
      if (article2.thumb && article2.thumb.url) {
        const url = new URL(article2.thumb.url, baseURL).href;
        console.log("Generated image URL:", url);
        return url;
      }
      return "/thumb_blog_gsstudio.webp";
    };
    const formatDate = (date) => {
      if (!date)
        return "";
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-BR", options);
    };
    const getCategoryTitle = (categoryId) => {
      if (!categoryId)
        return "";
      const category = categories.value.find((cat) => cat.id === categoryId);
      return category ? category.title : "";
    };
    const hasThumbnail = (article2) => {
      return article2 && article2.thumb && article2.thumb.url;
    };
    const onImageLoad = () => {
      imageLoaded.value = true;
    };
    const goBack = () => {
      router.go(-1);
    };
    return {
      article,
      categories,
      loading,
      imageLoaded,
      getArticleImage,
      getCategoryTitle,
      formatDate,
      hasThumbnail,
      onImageLoad,
      goBack
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_NuxtImg = _sfc_main$1;
  const _component_nuxt_img = _sfc_main$1;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-15d43160><section class="my-5" id="article-detail" data-v-15d43160><div class="container my-5" data-v-15d43160><div class="row" data-v-15d43160><div class="col-2" data-v-15d43160><div class="sticky-top" data-v-15d43160><button class="btn btn-primary-border" data-v-15d43160>&lt; Voltar</button></div></div><div class="col-7" data-v-15d43160>`);
  if (_ctx.loading) {
    _push(`<div data-v-15d43160><div class="d-flex mb-3" data-v-15d43160><div class="skeleton skeleton-category me-2" data-v-15d43160></div> <div class="skeleton skeleton-date" data-v-15d43160></div></div><div class="skeleton skeleton-title mb-3" data-v-15d43160></div><div class="skeleton skeleton-img mb-3" data-v-15d43160></div><div class="skeleton skeleton-content mb-3" data-v-15d43160></div></div>`);
  } else if (_ctx.article) {
    _push(`<div data-v-15d43160><div class="mb-3" data-v-15d43160><span class="article-category" data-v-15d43160>${ssrInterpolate(_ctx.article.category.title)}</span><span class="mx-5" data-v-15d43160>${(_a = _ctx.formatDate(_ctx.article.published_at)) != null ? _a : ""}</span></div><h1 data-v-15d43160>${ssrInterpolate(_ctx.article.titulo)}</h1><div class="my-4" data-v-15d43160>`);
    if (_ctx.hasThumbnail(_ctx.article)) {
      _push(`<picture data-v-15d43160><source${ssrRenderAttr("srcset", _ctx.getArticleImage(_ctx.article))} data-v-15d43160>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: _ctx.getArticleImage(_ctx.article),
        class: ["img-fluid blur-effect", { "blurred": !_ctx.imageLoaded }],
        alt: _ctx.article.titulo,
        onLoad: _ctx.onImageLoad,
        lazy: "loading"
      }, null, _parent));
      _push(`</picture>`);
    } else {
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/thumb_blog_gsstudio.webp",
        class: ["img-fluid blur-effect", { "blurred": !_ctx.imageLoaded }],
        alt: "Default Image",
        lazy: "loading",
        onLoad: _ctx.onImageLoad
      }, null, _parent));
    }
    _push(`</div><div data-v-15d43160>${(_b = _ctx.article.content) != null ? _b : ""}</div></div>`);
  } else {
    _push(`<div data-v-15d43160><p data-v-15d43160>Artigo n\xE3o encontrado.</p></div>`);
  }
  _push(`</div><div class="col-3 p-5" data-v-15d43160><div class="sticky-top" data-v-15d43160><div class="social-links mb-4" data-v-15d43160><a href="https://www.facebook.com" class="d-block mb-2" target="_blank" data-v-15d43160>Facebook</a><a href="https://www.twitter.com" class="d-block mb-2" target="_blank" data-v-15d43160>Twitter</a><a href="https://www.linkedin.com" class="d-block mb-2" target="_blank" data-v-15d43160>LinkedIn</a></div><div class="newsletter-cta p-4 sticky-top bg-light rounded" data-v-15d43160><h3 data-v-15d43160>Assine para novas atualiza\xE7\xF5es.</h3><form method="POST" action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/20534155/d57a69e4-6f43-4768-a600-5f7d30306260" class="form" data-v-15d43160><div class="mb-3" data-v-15d43160><input type="email" class="form-control" id="email" name="email" placeholder="E-mail" required data-v-15d43160></div><button type="submit" class="btn btn-primary" data-v-15d43160>Inscrever-se</button></form></div></div></div></div></div></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artigos/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-15d43160"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-CWpBn-hv.mjs.map
