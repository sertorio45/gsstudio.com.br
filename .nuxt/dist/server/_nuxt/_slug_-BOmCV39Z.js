import { _ as __nuxt_component_0 } from "./nuxt-img-BEtjlaZ7.js";
import { defineComponent, ref, useSSRContext } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./index-xyyCGchu.js";
import "@unhead/shared";
import "defu";
import "ufo";
import "h3";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "unhead";
import "radix3";
import "devalue";
import "destr";
import "klona";
import "pinia";
const _sfc_main = defineComponent({
  name: "ArticleDetail",
  setup() {
    const article = ref(null);
    const categories = ref([]);
    const loading = ref(true);
    const imageLoaded = ref(false);
    useRoute();
    const router = useRouter();
    const baseURL = process.env.VITE_STRAPI_URL || "https://str-gsstudio.gsstudio.com.br";
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
      const category = categories.value.find((cat) => cat.id === categoryId);
      return category ? category.title : "Categoria desconhecida";
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
  const _component_NuxtImg = __nuxt_component_0;
  const _component_nuxt_img = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-8c96b36c><section class="my-5" id="article-detail" data-v-8c96b36c><div class="container my-5" data-v-8c96b36c><div class="row" data-v-8c96b36c><div class="col-2" data-v-8c96b36c><button class="btn btn-primary-border" data-v-8c96b36c>&lt; Voltar</button></div><div class="col-7" data-v-8c96b36c>`);
  if (_ctx.loading) {
    _push(`<div data-v-8c96b36c><div class="d-flex mb-3" data-v-8c96b36c><div class="skeleton skeleton-category me-2" data-v-8c96b36c></div> <div class="skeleton skeleton-date" data-v-8c96b36c></div></div><div class="skeleton skeleton-title mb-3" data-v-8c96b36c></div><div class="skeleton skeleton-img mb-3" data-v-8c96b36c></div><div class="skeleton skeleton-content mb-3" data-v-8c96b36c></div></div>`);
  } else if (_ctx.article) {
    _push(`<div data-v-8c96b36c><div class="mb-3" data-v-8c96b36c><span class="article-category" data-v-8c96b36c>${ssrInterpolate(_ctx.getCategoryTitle(_ctx.article.category))}</span><span class="mx-5" data-v-8c96b36c>${_ctx.formatDate(_ctx.article.published_at) ?? ""}</span></div><h2 data-v-8c96b36c>${ssrInterpolate(_ctx.article.titulo)}</h2><div class="my-4" data-v-8c96b36c>`);
    if (_ctx.hasThumbnail(_ctx.article)) {
      _push(`<picture data-v-8c96b36c><source${ssrRenderAttr("srcset", _ctx.getArticleImage(_ctx.article))} data-v-8c96b36c>`);
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
    _push(`</div><div data-v-8c96b36c>${_ctx.article.content ?? ""}</div></div>`);
  } else {
    _push(`<div data-v-8c96b36c><p data-v-8c96b36c>Artigo não encontrado.</p></div>`);
  }
  _push(`</div><div class="col-3" data-v-8c96b36c></div></div></div></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artigos/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8c96b36c"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-BOmCV39Z.js.map
