import { _ as _sfc_main$1 } from "./NuxtImg-DCnneY7a.js";
import { defineComponent, ref, useSSRContext } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "defu";
import "ufo";
import "h3";
import "destr";
import "klona";
import "#internal/nuxt/paths";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "radix3";
import "cookie-es";
import "ohash";
import "@gtm-support/vue-gtm";
import "@unhead/schema-org";
import "@unhead/schema-org/vue";
import "imask";
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
      if (!date) return "";
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-BR", options);
    };
    const getCategoryTitle = (categoryId) => {
      if (!categoryId) return "";
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
  const _component_NuxtImg = _sfc_main$1;
  const _component_nuxt_img = _sfc_main$1;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-15d43160><section class="my-5" id="article-detail" data-v-15d43160><div class="container my-5" data-v-15d43160><div class="row" data-v-15d43160><div class="col-2" data-v-15d43160><div class="sticky-top" data-v-15d43160><button class="btn btn-primary-border" data-v-15d43160>&lt; Voltar</button></div></div><div class="col-7" data-v-15d43160>`);
  if (_ctx.loading) {
    _push(`<div data-v-15d43160><div class="d-flex mb-3" data-v-15d43160><div class="skeleton skeleton-category me-2" data-v-15d43160></div> <div class="skeleton skeleton-date" data-v-15d43160></div></div><div class="skeleton skeleton-title mb-3" data-v-15d43160></div><div class="skeleton skeleton-img mb-3" data-v-15d43160></div><div class="skeleton skeleton-content mb-3" data-v-15d43160></div></div>`);
  } else if (_ctx.article) {
    _push(`<div data-v-15d43160><div class="mb-3" data-v-15d43160><span class="article-category" data-v-15d43160>${ssrInterpolate(_ctx.article.category.title)}</span><span class="mx-5" data-v-15d43160>${_ctx.formatDate(_ctx.article.published_at) ?? ""}</span></div><h1 data-v-15d43160>${ssrInterpolate(_ctx.article.titulo)}</h1><div class="my-4" data-v-15d43160>`);
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
    _push(`</div><div data-v-15d43160>${_ctx.article.content ?? ""}</div></div>`);
  } else {
    _push(`<div data-v-15d43160><p data-v-15d43160>Artigo não encontrado.</p></div>`);
  }
  _push(`</div><div class="col-3 p-5" data-v-15d43160><div class="sticky-top" data-v-15d43160><div class="social-links mb-4" data-v-15d43160><a href="https://www.facebook.com" class="d-block mb-2" target="_blank" data-v-15d43160>Facebook</a><a href="https://www.twitter.com" class="d-block mb-2" target="_blank" data-v-15d43160>Twitter</a><a href="https://www.linkedin.com" class="d-block mb-2" target="_blank" data-v-15d43160>LinkedIn</a></div><div class="newsletter-cta p-4 sticky-top bg-light rounded" data-v-15d43160><h3 data-v-15d43160>Assine para novas atualizações.</h3><form method="POST" action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/20534155/d57a69e4-6f43-4768-a600-5f7d30306260" class="form" data-v-15d43160><div class="mb-3" data-v-15d43160><input type="email" class="form-control" id="email" name="email" placeholder="E-mail" required data-v-15d43160></div><button type="submit" class="btn btn-primary" data-v-15d43160>Inscrever-se</button></form></div></div></div></div></div></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artigos/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-15d43160"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-CWpBn-hv.js.map
