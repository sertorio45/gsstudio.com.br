import { withAsyncContext, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "../node_modules/nuxt/dist/app/composables/router.mjs";
import { useFetch } from "../node_modules/nuxt/dist/app/composables/fetch.mjs";
const _sfc_main = {
  __name: "test",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data: article, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://painel.gsadmin.app/items/articles?filter[slug][_eq]=${slug}`, {
      method: "GET",
      key: `article-${slug}`,
      // importante para cache único por slug
      headers: {
        "Content-Type": "application/json"
      },
      transform: (data) => {
        var _a, _b;
        return {
          title: (_a = data[0]) == null ? void 0 : _a.title,
          content: (_b = data[0]) == null ? void 0 : _b.content
        };
      }
    }, "$eTSX1QQFa2")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if (unref(pending)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>Carregando...</div>`);
      } else if (unref(error)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>Erro: ${ssrInterpolate(unref(error).message)}</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}><h1>${ssrInterpolate(_ctx.title)}</h1><div>${((_a = unref(article).data[0]) == null ? void 0 : _a.content) ?? ""}</div></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=test.vue.mjs.map
