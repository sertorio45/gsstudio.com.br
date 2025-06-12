import { _ as _sfc_main$3 } from "./NuxtImg-B3jNxKO6.js";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
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
import "vue-router";
import "radix3";
import "devalue";
import "cookie-es";
import "ohash";
import "@gtm-support/vue-gtm";
import "@unhead/schema-org";
import "scule";
import "@unhead/schema-org/vue";
import "imask";
import "pinia";
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$3;
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8b7d5695"]]);
const _sfc_main$1 = {
  name: "Footer",
  data() {
    return {
      currentYear: (/* @__PURE__ */ new Date()).getFullYear()
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtImg = _sfc_main$3;
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-01bff08f"]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0,
    Footer: __nuxt_component_1
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    (void 0).addEventListener("load", this.onLoad);
  },
  destroyed() {
    (void 0).removeEventListener("load", this.onLoad);
  },
  methods: {
    onLoad() {
      this.isLoading = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-9da19a61>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9da19a61"]]);
export {
  _default as default
};
//# sourceMappingURL=default-CKLp_IXd.js.map
