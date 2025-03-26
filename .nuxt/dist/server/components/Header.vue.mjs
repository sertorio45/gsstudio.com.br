import "../node_modules/_nuxt/image/dist/runtime/components/NuxtImg.vue.mjs";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
import _sfc_main$1 from "../node_modules/_nuxt/image/dist/runtime/components/NuxtImg.vue2.mjs";
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "w-100 shadow custom-header bg-light" }, _attrs))} data-v-8b7d5695><div class="container" data-v-8b7d5695><nav class="navbar navbar-expand-lg navbar-lightcontainer" data-v-8b7d5695><a href="/" class="navbar-brand" data-v-8b7d5695>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "logotipo.svg",
        alt: "Logo",
        loading: "lazy",
        width: "180px",
        placeholder: 15,
        densities: "x1 x2"
      }, null, _parent));
      _push(`</a><button class="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="${ssrRenderStyle({ "z-index": "1050" })}" data-v-8b7d5695><div class="${ssrRenderClass(["nav-icon", { open: isOpen.value }])}" data-v-8b7d5695><span data-v-8b7d5695></span><span data-v-8b7d5695></span><span data-v-8b7d5695></span><span data-v-8b7d5695></span><span data-v-8b7d5695></span><span data-v-8b7d5695></span></div></button><div class="${ssrRenderClass(["navbar-collapse justify-content-center", { "show-fullscreen": isOpen.value }])}" id="navbarNav" data-v-8b7d5695><ul class="navbar-nav" data-v-8b7d5695><li class="nav-item" data-v-8b7d5695><a href="/" class="nav-link" data-v-8b7d5695>Início</a></li><li class="nav-item" data-v-8b7d5695><a href="/sobre" class="nav-link" data-v-8b7d5695>Sobre nós</a></li><li class="nav-item" data-v-8b7d5695><a href="/servicos" class="nav-link" data-v-8b7d5695>Serviços</a></li><li class="nav-item" data-v-8b7d5695><a href="/#portifolio" class="nav-link" data-v-8b7d5695>Portifolio</a></li><li class="nav-item" data-v-8b7d5695><a href="/blog" class="nav-link" data-v-8b7d5695>Blog</a></li><li class="nav-item" data-v-8b7d5695><a href="/contato" class="nav-link" data-v-8b7d5695>Contato</a></li></ul></div><div class="d-none d-lg-flex ms-auto" data-v-8b7d5695><a class="btn btn-primary" href="https://api.whatsapp.com/send/?phone=551640422901&amp;text=Ol%C3%A1%2C+vim+pelo+site%2C+gostaria+de+tirar+algumas+d%C3%BAvidas.&amp;type=phone_number&amp;app_absent=0" target="_blank" data-v-8b7d5695>Atendimento rápido</a></div></nav></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b7d5695"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=Header.vue.mjs.map
