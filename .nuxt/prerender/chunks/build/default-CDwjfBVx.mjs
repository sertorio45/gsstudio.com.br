import { _ as __nuxt_component_0$1 } from './nuxt-link-D1zm17Ab.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-img-BEtjlaZ7.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/h3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/devalue/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/ssr/dist/index.mjs';
import '../routes/api/portifolio.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/destr/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/klona/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/scule/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ohash/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ipx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unhead/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-router/dist/vue-router.node.mjs';
import './index-xyyCGchu.mjs';

const _sfc_main$2 = {
  name: "Header"
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "w-100 shadow custom-header bg-light z" }, _attrs))} data-v-5f24589c><div class="container" data-v-5f24589c><div class="row d-flex justify-content-center align-items-center" data-v-5f24589c><div class="col-2" data-v-5f24589c>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "d-flex"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="https://s3.gsstudio.com.br/gsstudio/branding/gsstudio-logotipo.svg" alt="Logo" class="logo" data-v-5f24589c${_scopeId}>`);
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
  _push(`</div><div class="col-8 d-flex justify-content-center" data-v-5f24589c><nav data-v-5f24589c><ul class="nav justify-content-center" data-v-5f24589c><li class="nav-item" data-v-5f24589c>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "nav-link"
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
  _push(`</li><li class="nav-item" data-v-5f24589c>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Sobre n\xF3s`);
      } else {
        return [
          createTextVNode("Sobre n\xF3s")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-5f24589c>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/servicos",
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Servi\xE7os`);
      } else {
        return [
          createTextVNode("Servi\xE7os")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-5f24589c>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/solucoes",
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Solu\xE7\xF5es`);
      } else {
        return [
          createTextVNode("Solu\xE7\xF5es")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-5f24589c>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "nav-link"
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
  _push(`</li><li class="nav-item" data-v-5f24589c>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contato",
    class: "nav-link"
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
  _push(`</li></ul></nav></div><div class="col-2 d-flex justify-content-center" data-v-5f24589c><button class="btn btn-primary" data-v-5f24589c>Or\xE7amento</button></div></div></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-5f24589c"]]);
const _sfc_main$1 = {
  name: "Footer",
  data() {
    return {
      currentYear: (/* @__PURE__ */ new Date()).getFullYear()
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtImg = __nuxt_component_0$2;
  _push(`<footer${ssrRenderAttrs(_attrs)} data-v-6f7c98ed><div class="my-5" data-v-6f7c98ed><div class="container text-center" data-v-6f7c98ed><div class="row" data-v-6f7c98ed><div class="col-12 d-flex flex-column align-items-center" data-v-6f7c98ed>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "https://s3.gsstudio.com.br/gsstudio/branding/simbolo.svg",
    width: "100px",
    class: "rotate-image mb-3"
  }, null, _parent));
  _push(`<div class="copyright-wrapper text-center" data-v-6f7c98ed> \xA9 2016 - ${ssrInterpolate($data.currentYear)}. <br class="d-sm-none" data-v-6f7c98ed>Todos os direitos reservados. </div></div></div></div></div></footer>`);
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-83947c2f>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main data-v-83947c2f>`);
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
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-83947c2f"]]);

export { _default as default };
//# sourceMappingURL=default-CDwjfBVx.mjs.map
