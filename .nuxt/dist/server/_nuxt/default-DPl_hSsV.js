import { _ as __nuxt_component_0$1 } from "./nuxt-link-Bk9AKvJX.js";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$3 } from "./NuxtImg-BTn44R2x.js";
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
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    function toggleMenu() {
      if ((void 0).innerWidth <= 992) {
        isOpen.value = !isOpen.value;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "w-100 shadow custom-header bg-light" }, _attrs))} data-v-01295761><div class="container" data-v-01295761><nav class="navbar navbar-expand-lg navbar-lightcontainer" data-v-01295761>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "navbar-brand"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="https://s3.gsstudio.com.br/gsstudio/branding/gsstudio-logotipo.svg" alt="Logo" class="logo" data-v-01295761${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "https://s3.gsstudio.com.br/gsstudio/branding/gsstudio-logotipo.svg",
                alt: "Logo",
                class: "logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="${ssrRenderStyle({ "z-index": "1050" })}" data-v-01295761><div class="${ssrRenderClass(["nav-icon", { open: isOpen.value }])}" data-v-01295761><span data-v-01295761></span><span data-v-01295761></span><span data-v-01295761></span><span data-v-01295761></span><span data-v-01295761></span><span data-v-01295761></span></div></button><div class="${ssrRenderClass(["navbar-collapse justify-content-center", { "show-fullscreen": isOpen.value }])}" id="navbarNav" data-v-01295761><ul class="navbar-nav" data-v-01295761><li class="nav-item" data-v-01295761>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "nav-link",
        onClick: toggleMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Início`);
          } else {
            return [
              createTextVNode("Início")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-01295761>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/sobre",
        class: "nav-link",
        onClick: toggleMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sobre nós`);
          } else {
            return [
              createTextVNode("Sobre nós")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-01295761>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/servicos",
        class: "nav-link",
        onClick: toggleMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Serviços`);
          } else {
            return [
              createTextVNode("Serviços")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-01295761>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#portifolio",
        class: "nav-link",
        onClick: toggleMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Portifolio`);
          } else {
            return [
              createTextVNode("Portifolio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-01295761>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "nav-link",
        onClick: toggleMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-01295761>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "nav-link",
        onClick: toggleMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contato`);
          } else {
            return [
              createTextVNode("Contato")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="d-none d-lg-flex ms-auto" data-v-01295761><a class="btn btn-primary" href="https://api.whatsapp.com/send/?phone=551640422901&amp;text=Ol%C3%A1%2C+vim+pelo+site%2C+gostaria+de+tirar+algumas+d%C3%BAvidas.&amp;type=phone_number&amp;app_absent=0" target="_blank" data-v-01295761>Atendimento rápido</a></div></nav></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-01295761"]]);
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
  _push(`<footer${ssrRenderAttrs(_attrs)} data-v-6f7c98ed><div class="my-5" data-v-6f7c98ed><div class="container text-center" data-v-6f7c98ed><div class="row" data-v-6f7c98ed><div class="col-12 d-flex flex-column align-items-center" data-v-6f7c98ed>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "https://s3.gsstudio.com.br/gsstudio/branding/simbolo.svg",
    width: "100px",
    class: "rotate-image mb-3"
  }, null, _parent));
  _push(`<div class="copyright-wrapper text-center" data-v-6f7c98ed> © 2016 - ${ssrInterpolate($data.currentYear)}. <br class="d-sm-none" data-v-6f7c98ed>Todos os direitos reservados. </div></div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6f7c98ed"]]);
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-ebfcb0d7>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main data-v-ebfcb0d7>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ebfcb0d7"]]);
export {
  _default as default
};
//# sourceMappingURL=default-DPl_hSsV.js.map
