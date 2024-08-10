import { _ as __nuxt_component_0 } from './nuxt-link-D1zm17Ab.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createTextVNode } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/pinia/dist/pinia.prod.cjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Form",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      name: "",
      email: "",
      phone: "",
      city: "",
      company: "",
      message: "",
      terms: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex align-items-center justify-content-center vh-100" }, _attrs))} data-v-de5be916><div class="gscard-border p-5" data-v-de5be916><form data-v-de5be916><div class="form-group" data-v-de5be916><div class="row" data-v-de5be916><div class="col-12 mb-4" data-v-de5be916><div class="input-group" data-v-de5be916><span class="input-group-text" data-v-de5be916><i class="bx bx-user" data-v-de5be916></i></span><input${ssrRenderAttr("value", form.value.name)} placeholder="Seu nome completo*" class="form-control input-text-size" required data-v-de5be916></div></div></div></div><div class="row" data-v-de5be916><div class="col-md-6 mb-4" data-v-de5be916><div class="input-group" data-v-de5be916><span class="input-group-text" data-v-de5be916><i class="bx bx-envelope" data-v-de5be916></i></span><input${ssrRenderAttr("value", form.value.email)} type="email" placeholder="Seu melhor e-mail*" class="form-control input-text-size" required data-v-de5be916></div></div><div class="col-md-6 mb-4" data-v-de5be916><div class="input-group" data-v-de5be916><span class="input-group-text" data-v-de5be916><i class="bx bx-phone" data-v-de5be916></i></span><input${ssrRenderAttr("value", form.value.phone)} placeholder="Celular*" class="form-control input-text-size" required data-v-de5be916></div></div></div><div class="row" data-v-de5be916><div class="col-md-6 mb-4" data-v-de5be916><div class="input-group" data-v-de5be916><span class="input-group-text" data-v-de5be916><i class="bx bx-map" data-v-de5be916></i></span><input${ssrRenderAttr("value", form.value.city)} placeholder="Cidade*" class="form-control input-text-size" required data-v-de5be916></div></div><div class="col-md-6 mb-4" data-v-de5be916><div class="input-group" data-v-de5be916><span class="input-group-text" data-v-de5be916><i class="bx bx-building" data-v-de5be916></i></span><input${ssrRenderAttr("value", form.value.company)} placeholder="Empresa*" class="form-control input-text-size" required data-v-de5be916></div></div></div><div class="form-group mb-4" data-v-de5be916><textarea placeholder="Nos conte um pouco sobre sua necessidade*" class="form-control textarea-height input-text-size" required data-v-de5be916>${ssrInterpolate(form.value.message)}</textarea></div><div class="form-group mb-4 form-check" data-v-de5be916><input type="checkbox" class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(form.value.terms) ? ssrLooseContain(form.value.terms, null) : form.value.terms) ? " checked" : ""} required data-v-de5be916><label class="form-check-label" data-v-de5be916> Ao enviar voc\xEA ser\xE1 protegido por Google reCAPTCHA e sujeito \xE0 </label></div><div class="form-group" data-v-de5be916><button type="submit" class="btn btn-primary" data-v-de5be916><i class="bx bx-send" data-v-de5be916></i> Enviar </button></div></form></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-de5be916"]]);
const _sfc_main = {
  components: {
    Form: __nuxt_component_1
  },
  data() {
    return {
      currentComponent: null
    };
  },
  methods: {
    showComponent(component) {
      this.currentComponent = component;
    },
    resetComponent() {
      this.currentComponent = null;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Form = __nuxt_component_1;
  _push(`<!--[--><section class="topo" data-v-d2f9000a><div class="container" data-v-d2f9000a><div class="row" data-v-d2f9000a><div class="col d-flex align-items-center" data-v-d2f9000a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "m-1"
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
  _push(` / <h1 class="m-1" data-v-d2f9000a>Contato</h1></div></div></div></section><section id="contato" data-v-d2f9000a><div class="container" data-v-d2f9000a><div class="row align-items-center" data-v-d2f9000a><div class="col-lg-4 mb-4 mb-lg-0" data-v-d2f9000a><h2 data-v-d2f9000a>Fale conosco</h2><p data-v-d2f9000a> Preencha o formul\xE1rio ou entre em contato em algum dos nossos canais e em breve vamos entrar em contato. </p><div class="mt-4" data-v-d2f9000a><div class="contact-item d-flex align-items-center mb-3" data-v-d2f9000a><div class="icon-circle" data-v-d2f9000a><i class="bx bxl-whatsapp" data-v-d2f9000a></i></div><span data-v-d2f9000a><a href="https://api.whatsapp.com/send/?phone=551640422902&amp;text=Ol%C3%A1%2C+vim+pelo+site%2C+gostaria+de+tirar+algumas+d%C3%BAvidas.&amp;type=phone_number&amp;app_absent=0" target="_blank" data-v-d2f9000a>+55 (16) 4042-2902</a></span></div><div class="contact-item d-flex align-items-center" data-v-d2f9000a><div class="icon-circle" data-v-d2f9000a><i class="bx bxs-map" data-v-d2f9000a></i></div><span data-v-d2f9000a><a href="https://maps.app.goo.gl/uGtYZvxZGYV1KemF8" target="_blank" data-v-d2f9000a>Avenida Maria de Jesus Condeixa, 600, Sala 424, Ribeir\xE3o Preto, S\xE3o Paulo</a></span></div></div></div><div class="col-lg-8" data-v-d2f9000a>`);
  _push(ssrRenderComponent(_component_Form, null, null, _parent));
  _push(`</div></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contato.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contato = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d2f9000a"]]);

export { contato as default };
//# sourceMappingURL=contato-kVlLCzC-.mjs.map
