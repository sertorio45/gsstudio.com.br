import { e as useSeoMeta, _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { _ as _sfc_main$1 } from './Icon-CFOBcUeQ.mjs';
import { defineComponent, ref, computed, useSSRContext, withCtx, createTextVNode, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import '../routes/api/portifolio.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'packrup';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@unhead/schema-org';
import '@unhead/schema-org/vue';
import 'imask';

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
    useSeoMeta({
      title: "Blog - Solu\xE7\xF5es em Marketing, Design e Tecnologia | Ribeir\xE3o Preto, Sert\xE3ozinho, S\xE3o Paulo e Brasil"
    });
    const loadMoreArticles = () => {
      if (loadingMore.value || !hasMoreArticles.value)
        return;
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
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_Icon = _sfc_main$1;
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<!--[--><section class="py-5 bg-dark d-flex my-5" id="topo" data-v-dd81981c><div class="container d-flex justify-content-center align-items-center my-5 py-5" data-v-dd81981c><div class="row" data-v-dd81981c><div class="col text-center text-light my-2" data-v-dd81981c><div class="my-2" data-v-dd81981c>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`P\xE1gina inicial`);
      } else {
        return [
          createTextVNode("P\xE1gina inicial")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` / <span data-v-dd81981c>Blog</span></div><h1 class="text-light" data-v-dd81981c>Blog</h1><a href="#blog" data-v-dd81981c>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "bx bxs-chevrons-down my-3",
    fontSize: "3em",
    color: "#fff"
  }, null, _parent));
  _push(`</a></div></div></div></section><section class="py-5 justify-content-center align-content-center" id="blog" data-v-dd81981c><div class="container my-5" data-v-dd81981c><div class="row" data-v-dd81981c>`);
  if (_ctx.loading && _ctx.articles.length === 0) {
    _push(`<!--[-->`);
    ssrRenderList(4, (n) => {
      _push(`<div class="col-md-3 my-5" data-v-dd81981c><div class="card" data-v-dd81981c><div class="image-container" data-v-dd81981c><div class="skeleton skeleton-img" data-v-dd81981c></div></div><div class="card-body" data-v-dd81981c><div class="mb-2" data-v-dd81981c><div class="skeleton skeleton-category" data-v-dd81981c></div></div><div class="skeleton skeleton-title" data-v-dd81981c></div></div></div></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.articles, (article) => {
      _push(`<div class="col-sm-3 my-2" data-v-dd81981c><div class="card" data-v-dd81981c><div class="image-container" data-v-dd81981c>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `${article.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _ctx.getArticleImage(article))} class="${ssrRenderClass([{ "blurred": !article.imageLoaded }, "img-fluid blur-effect"])}"${ssrRenderAttr("alt", article.titulo)} loading="lazy" data-v-dd81981c${_scopeId}>`);
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
      _push(`</div><div class="card-body" data-v-dd81981c><div class="mb-2" data-v-dd81981c><span class="article-category" data-v-dd81981c>${ssrInterpolate(_ctx.getCategoryTitle(article.category))}</span></div>`);
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
  _push(`</div><div class="row my-5" data-v-dd81981c><div class="col d-flex align-content-center justify-content-center" data-v-dd81981c><button${ssrIncludeBooleanAttr(_ctx.loadingMore || !_ctx.hasMoreArticles) ? " disabled" : ""} class="btn btn-primary" data-v-dd81981c>`);
  if (_ctx.loadingMore) {
    _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-dd81981c></span>`);
  } else {
    _push(`<span data-v-dd81981c>Ver mais artigos</span>`);
  }
  _push(`</button></div></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dd81981c"]]);

export { blog as default };
//# sourceMappingURL=blog-JAIpF044.mjs.map
