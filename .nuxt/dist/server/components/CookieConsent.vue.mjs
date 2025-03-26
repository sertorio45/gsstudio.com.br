import __nuxt_component_0$1 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "CookieConsent",
  __ssrInlineRender: true,
  setup(__props) {
    const showCookieConsent = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (showCookieConsent.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "cookie-consent" }, _attrs))} data-v-f5594720><div class="cookie-card shadow-lg p-4 rounded" data-v-f5594720><div class="cookie-content" data-v-f5594720><p class="mb-3 text-light" data-v-f5594720> Este site utiliza cookies para analisar visitas e melhorar sua experiência. Para saber mais, leia nossa `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/politica-de-privacidade",
          class: "text-decoration-underline fw-bold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Política de Privacidade`);
            } else {
              return [
                createTextVNode("Política de Privacidade")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`. </p><button class="btn btn-primary" data-v-f5594720>Ok, entendo</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieConsent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5594720"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=CookieConsent.vue.mjs.map
