import { _ as __nuxt_component_0 } from "./nuxt-link-Bk9AKvJX.js";
import { _ as _sfc_main$1 } from "./Icon-CFOBcUeQ.js";
import { defineComponent, ref, computed, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "destr";
import "klona";
import "imask";
const _sfc_main = defineComponent({
  name: "Blog",
  setup() {
    const articles = ref([]);
    const categories = ref([]);
    const loading = ref(true);
    const loadingMore = ref(false);
    const baseURL = "https://str-gsstudio.gsstudio.com.br";
    const articlesPerPage = 4;
    const loadedArticlesCount = ref(articlesPerPage);
    const loadMoreArticles = () => {
      if (loadingMore.value || !hasMoreArticles.value) return;
      loadingMore.value = true;
      setTimeout(() => {
        loadedArticlesCount.value += articlesPerPage;
        loadingMore.value = false;
      }, 1e3);
    };
    const displayedArticles = computed(() => {
      return articles.value.slice(0, loadedArticlesCount.value);
    });
    const hasMoreArticles = computed(() => {
      return loadedArticlesCount.value < articles.value.length;
    });
    const getArticleImage = (article) => {
      if (article.thumb && article.thumb.url) {
        return new URL(article.thumb.url, baseURL).href;
      }
      return "https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp";
    };
    const handleImageError = (event) => {
      const img = event.target;
      img.src = "https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp";
    };
    const getCategoryTitle = (categoryId) => {
      const category = categories.value.find((cat) => cat.id === categoryId);
      return category ? category.title : "Categoria desconhecida";
    };
    return {
      articles: displayedArticles,
      loading,
      loadingMore,
      getArticleImage,
      getCategoryTitle,
      loadMoreArticles,
      hasMoreArticles,
      handleImageError
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Icon = _sfc_main$1;
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<!--[--><section class="py-5 bg-dark d-flex my-5" id="topo" data-v-f68df4f3><div class="container d-flex justify-content-center align-items-center my-5 py-5" data-v-f68df4f3><div class="row" data-v-f68df4f3><div class="col text-center text-light my-2" data-v-f68df4f3><div class="my-2" data-v-f68df4f3>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Página inicial`);
      } else {
        return [
          createTextVNode("Página inicial")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` / <span data-v-f68df4f3>Blog</span></div><h1 class="text-light" data-v-f68df4f3>Blog</h1><a href="#blog" data-v-f68df4f3>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "bx bxs-chevrons-down my-3",
    fontSize: "3em",
    color: "#fff"
  }, null, _parent));
  _push(`</a></div></div></div></section><section class="py-5 justify-content-center align-content-center" id="blog" data-v-f68df4f3><div class="container my-5" data-v-f68df4f3><div class="row" data-v-f68df4f3>`);
  if (_ctx.loading && _ctx.articles.length === 0) {
    _push(`<!--[-->`);
    ssrRenderList(4, (n) => {
      _push(`<div class="col-md-3 my-5" data-v-f68df4f3><div class="card" data-v-f68df4f3><div class="image-container" data-v-f68df4f3><div class="skeleton skeleton-img" data-v-f68df4f3></div></div><div class="card-body" data-v-f68df4f3><div class="mb-2" data-v-f68df4f3><div class="skeleton skeleton-category" data-v-f68df4f3></div></div><div class="skeleton skeleton-title" data-v-f68df4f3></div></div></div></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.articles, (article) => {
      _push(`<div class="col-sm-3 my-2" data-v-f68df4f3><div class="card" data-v-f68df4f3><div class="image-container" data-v-f68df4f3>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `${article.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _ctx.getArticleImage(article))} class="${ssrRenderClass([{ "blurred": !article.imageLoaded }, "img-fluid blur-effect"])}"${ssrRenderAttr("alt", article.titulo)} loading="lazy" data-v-f68df4f3${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _ctx.getArticleImage(article),
                class: ["img-fluid blur-effect", { "blurred": !article.imageLoaded }],
                alt: article.titulo,
                onLoad: ($event) => article.imageLoaded = true,
                onError: ($event) => _ctx.handleImageError($event),
                loading: "lazy"
              }, null, 42, ["src", "alt", "onLoad", "onError"])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div><div class="card-body" data-v-f68df4f3><div class="mb-2" data-v-f68df4f3><span class="article-category" data-v-f68df4f3>${ssrInterpolate(_ctx.getCategoryTitle(article.category))}</span></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `${article.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(article.titulo)}`);
          } else {
            return [
              createTextVNode(toDisplayString(article.titulo), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div></div>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</div><div class="row my-5" data-v-f68df4f3><div class="col d-flex align-content-center justify-content-center" data-v-f68df4f3><button${ssrIncludeBooleanAttr(_ctx.loadingMore || !_ctx.hasMoreArticles) ? " disabled" : ""} class="btn btn-primary" data-v-f68df4f3>`);
  if (_ctx.loadingMore) {
    _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-f68df4f3></span>`);
  } else {
    _push(`<span data-v-f68df4f3>Ver mais artigos</span>`);
  }
  _push(`</button></div></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f68df4f3"]]);
export {
  blog as default
};
//# sourceMappingURL=blog-CblLvmzL.js.map
