import { defineComponent, withAsyncContext, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useAsyncData } from "../node_modules/nuxt/dist/app/composables/asyncData.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Blog",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: articles, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "articles",
      async () => {
        const response = await $fetch("https://painel.gsadmin.app/items/articles?fields=id,title,meta_keywords,meta_description,content,slug,categorie.id,categorie.title_categorie", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        return response.data.map((article) => {
          var _a;
          return {
            ...article,
            category_title: ((_a = article.categorie) == null ? void 0 : _a.title_categorie) || "Sem categoria"
          };
        });
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "my-5 py-5 min-vh-100 justify-content-center align-content-center bg-light",
        id: "blog"
      }, _attrs))}><div class="container my-5"><div class="row"><h2 class="text-center">Blog</h2>`);
      if (unref(pending)) {
        _push(`<!--[-->`);
        ssrRenderList(4, (n) => {
          _push(`<div class="col-md-3 my-5"><div class="card"><div class="card-body"><div class="mb-2"><div class="skeleton skeleton-category"></div></div><div class="skeleton skeleton-title"></div></div></div></div>`);
        });
        _push(`<!--]-->`);
      } else if (unref(articles) && unref(articles).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(articles), (article) => {
          _push(`<div class="col-sm-3 my-2"><div class="card"><div class="card-body"><div class="mb-2"><span class="article-category">${ssrInterpolate(article.category_title)}</span></div><a${ssrRenderAttr("href", article.slug)}>${ssrInterpolate(article.title)}</a></div></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="col text-center my-5"><p class="text-muted">Nenhum artigo encontrado.</p></div>`);
      }
      _push(`</div><div class="row my-3"><div class="col d-flex align-content-center justify-content-center"><a href="/blog" class="btn btn-primary">Ver mais artigos</a></div></div></div></section>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Blog.vue2.mjs.map
