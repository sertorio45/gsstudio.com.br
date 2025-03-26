import "../node_modules/_nuxt/image/dist/runtime/components/NuxtImg.vue.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
import _sfc_main$1 from "../node_modules/_nuxt/image/dist/runtime/components/NuxtImg.vue2.mjs";
const _sfc_main = {
  name: "Footer",
  data() {
    return {
      currentYear: (/* @__PURE__ */ new Date()).getFullYear()
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtImg = _sfc_main$1;
  _push(`<footer${ssrRenderAttrs(_attrs)} data-v-01bff08f><div class="my-5" data-v-01bff08f><div class="container text-center" data-v-01bff08f><div class="row" data-v-01bff08f><div class="col-12 d-flex flex-column align-items-center" data-v-01bff08f>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "logotipo.svg",
    width: "180px",
    class: "my-4",
    densities: "x1 x2",
    placeholder: 15,
    alt: "gs studio, marketing em sertãozinho e ribeirão preto.",
    loading: "lazy"
  }, null, _parent));
  _push(`<div class="copyright-wrapper text-center" data-v-01bff08f> © 2016 - ${ssrInterpolate($data.currentYear)}. <br class="d-sm-none" data-v-01bff08f>Todos os direitos reservados. </div></div></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-01bff08f"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=Footer.vue.mjs.map
