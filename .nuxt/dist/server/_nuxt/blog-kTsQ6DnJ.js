import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { _ as _sfc_main$1 } from "./Icon-5pRBvot5.js";
import { defineComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { u as useBlogCards } from "./useBlogCards-Ucfk__EF.js";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "destr";
import "klona";
import "devalue";
import "cookie-es";
import "ohash";
import "@gtm-support/vue-gtm";
import "@unhead/schema-org";
import "@unhead/schema-org/vue";
import "imask";
const _sfc_main = defineComponent({
  name: "Blog",
  setup() {
    const { articles, categories, loading, loadingMore, loadMoreArticles, hasMoreArticles, getCategoryTitle } = useBlogCards();
    return {
      articles,
      categories,
      loading,
      loadingMore,
      loadMoreArticles,
      hasMoreArticles,
      getCategoryTitle
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Icon = _sfc_main$1;
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<!--[--><section class="py-5 bg-dark d-flex my-5" id="topo"><div class="container d-flex justify-content-center align-items-center my-5 py-5"><div class="row"><div class="col text-center text-light my-2"><div class="my-2">`);
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
  _push(` / <span>Blog</span></div><h1 class="text-light">Blog</h1><a href="#blog">`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "bx bxs-chevrons-down my-3",
    fontSize: "3em",
    color: "#fff"
  }, null, _parent));
  _push(`</a></div></div></div></section><section class="my-5 py-5 justify-content-center align-content-center" id="blog"><div class="container my-5"><div class="row">`);
  if (_ctx.loading) {
    _push(`<!--[-->`);
    ssrRenderList(4, (n) => {
      _push(`<div class="col-md-3 my-5"><div class="card"><div class="card-body"><div class="mb-2"><div class="skeleton skeleton-category"></div></div><div class="skeleton skeleton-title"></div></div></div></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.articles, (article) => {
      _push(`<div class="col-sm-3 my-2"><div class="card"><div class="card-body"><div class="mb-2"><span class="article-category">${ssrInterpolate(_ctx.getCategoryTitle(article.category))}</span></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
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
  _push(`</div><div class="row my-3"><div class="col d-flex align-content-center justify-content-center"><button${ssrIncludeBooleanAttr(_ctx.loadingMore || !_ctx.hasMoreArticles) ? " disabled" : ""} class="btn btn-primary">`);
  if (_ctx.loadingMore) {
    _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
  } else {
    _push(`<span>Ver mais artigos</span>`);
  }
  _push(`</button></div></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  blog as default
};
//# sourceMappingURL=blog-kTsQ6DnJ.js.map
