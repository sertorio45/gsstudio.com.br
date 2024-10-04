import { _ as _export_sfc, u as useHead, e as useSeoMeta, a as __nuxt_component_0$1 } from './server.mjs';
import { _ as _sfc_main$2 } from './Icon-5pRBvot5.mjs';
import { useSSRContext, defineComponent, ref, resolveDirective, mergeProps, withCtx, createTextVNode } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps, ssrGetDynamicModelProps, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent, ssrRenderClass, ssrRenderStyle } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/h3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/devalue/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/destr/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/ssr/dist/index.mjs';
import '../routes/api/portifolio.mjs';
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
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/packrup/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ipx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unhead/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/schema-org/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/schema-org/dist/vue.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/imask/esm/index.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Form",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      name: "",
      email: "",
      phone: "",
      city: "",
      uf: "",
      company: "",
      message: "",
      terms: false
    });
    const estados = ref([]);
    const cidades = ref([]);
    const isSubmitting = ref(false);
    const success = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _directive_mask = resolveDirective("mask");
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-24b81c3c><div class="gscard-border p-5" data-v-24b81c3c><form data-v-24b81c3c><div class="row" data-v-24b81c3c><div class="col-md-6 mb-4" data-v-24b81c3c><div class="input-group" data-v-24b81c3c><span class="input-group-text" data-v-24b81c3c><i class="bx bx-user" data-v-24b81c3c></i></span><input${ssrRenderAttr("value", form.value.name)} placeholder="Seu nome completo*" class="form-control input-text-size" required data-v-24b81c3c></div></div><div class="col-md-6 mb-4" data-v-24b81c3c><div class="input-group" data-v-24b81c3c><span class="input-group-text" data-v-24b81c3c><i class="bx bx-envelope" data-v-24b81c3c></i></span><input${ssrRenderAttr("value", form.value.email)} type="email" placeholder="Seu melhor e-mail*" class="form-control input-text-size" required data-v-24b81c3c></div></div></div><div class="row" data-v-24b81c3c><div class="col-md-6 mb-4" data-v-24b81c3c><div class="input-group" data-v-24b81c3c><span class="input-group-text" data-v-24b81c3c><i class="bx bx-globe" data-v-24b81c3c></i></span><select class="form-control input-text-size" required data-v-24b81c3c><option value="" disabled selected data-v-24b81c3c>Selecione o UF*</option><!--[-->`);
      ssrRenderList(estados.value, (estado) => {
        _push(`<option${ssrRenderAttr("value", estado.sigla)} data-v-24b81c3c>${ssrInterpolate(estado.nome)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="col-md-6 mb-4" data-v-24b81c3c><div class="input-group" data-v-24b81c3c><span class="input-group-text" data-v-24b81c3c><i class="bx bx-map" data-v-24b81c3c></i></span><select class="form-control input-text-size" required data-v-24b81c3c><option value="" disabled selected data-v-24b81c3c>Selecione a cidade*</option><!--[-->`);
      ssrRenderList(cidades.value, (cidade) => {
        _push(`<option${ssrRenderAttr("value", cidade.nome)} data-v-24b81c3c>${ssrInterpolate(cidade.nome)}</option>`);
      });
      _push(`<!--]--></select></div></div></div><div class="row" data-v-24b81c3c><div class="col-md-6 mb-4" data-v-24b81c3c><div class="input-group" data-v-24b81c3c><span class="input-group-text" data-v-24b81c3c><i class="bx bx-phone" data-v-24b81c3c></i></span><input${ssrRenderAttrs((_temp0 = mergeProps({
        value: form.value.phone,
        placeholder: "Celular*",
        class: "form-control input-text-size",
        required: ""
      }, ssrGetDirectiveProps(_ctx, _directive_mask, "(00) 00000-0000")), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, form.value.phone))))} data-v-24b81c3c></div></div><div class="col-md-6 mb-4" data-v-24b81c3c><div class="input-group" data-v-24b81c3c><span class="input-group-text" data-v-24b81c3c><i class="bx bx-building" data-v-24b81c3c></i></span><input${ssrRenderAttr("value", form.value.company)} placeholder="Nome da empresa*" class="form-control input-text-size" required data-v-24b81c3c></div></div></div><div class="form-group mb-4" data-v-24b81c3c><textarea placeholder="Nos conte um pouco sobre sua necessidade*" class="form-control textarea-height input-text-size" required data-v-24b81c3c>${ssrInterpolate(form.value.message)}</textarea></div><div class="form-group mb-4 form-check" data-v-24b81c3c><input type="checkbox" class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(form.value.terms) ? ssrLooseContain(form.value.terms, null) : form.value.terms) ? " checked" : ""} required data-v-24b81c3c><label class="form-check-label" data-v-24b81c3c> Ao enviar voc\xEA ser\xE1 protegido por Google reCAPTCHA e sujeito \xE0 `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/politica-de-privacidade",
        class: "privacy-policy-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pol\xEDtica de privacidade`);
          } else {
            return [
              createTextVNode("Pol\xEDtica de privacidade")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label></div><div class="form-group text-center" data-v-24b81c3c><button type="submit" class="${ssrRenderClass(["btn m-0", isSubmitting.value ? "btn-secondary" : success.value ? "btn-success" : "btn-primary"])}"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-24b81c3c>`);
      if (isSubmitting.value) {
        _push(`<span data-v-24b81c3c><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-24b81c3c></span> Enviando... </span>`);
      } else if (success.value) {
        _push(`<span data-v-24b81c3c><i class="bx bx-check-circle" data-v-24b81c3c></i> Sucesso! </span>`);
      } else {
        _push(`<span data-v-24b81c3c><i class="bx bx-send" data-v-24b81c3c></i> Enviar </span>`);
      }
      _push(`</button></div></form></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Form = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-24b81c3c"]]);
const __default__ = {
  components: {
    Form
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
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "contato",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      meta: [
        { name: "robots", content: "noindex,follow" },
        { name: "canonical", content: "https://www.gsstudio.com.br/contato" }
      ]
    });
    useSeoMeta({
      title: "Contato | GS STUDIO",
      ogTitle: "Contato | GS STUDIO",
      ogUrl: "https://gsstudio.com.br/contato",
      ogSiteName: "GS STUDIO",
      ogLocale: "pt_BR"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = _sfc_main$2;
      _push(`<!--[--><section class="py-5 bg-dark d-flex my-5" id="topo" data-v-a1cbfd2f><div class="container d-flex justify-content-center align-items-center my-5 py-5" data-v-a1cbfd2f><div class="row" data-v-a1cbfd2f><div class="col text-center text-light my-2" data-v-a1cbfd2f><div class="my-2" data-v-a1cbfd2f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-light"
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
      _push(` / <span data-v-a1cbfd2f>Contato</span></div><h1 class="text-light" data-v-a1cbfd2f>Contato</h1><a href="#form" data-v-a1cbfd2f>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxs-chevrons-down my-3",
        fontSize: "3em",
        color: "#fff"
      }, null, _parent));
      _push(`</a></div></div></div></section><section id="contato" class="my-3" data-v-a1cbfd2f><div class="container" data-v-a1cbfd2f><div class="row" data-v-a1cbfd2f><div class="col my-5 py-5 d-sm-block" id="form" data-v-a1cbfd2f>`);
      _push(ssrRenderComponent(Form, null, null, _parent));
      _push(`</div></div></div></section><section class="contact-options text-dark py-5 my-3" data-v-a1cbfd2f><div class="container" data-v-a1cbfd2f><div class="row text-center" data-v-a1cbfd2f><div class="col-md-4 mb-4" data-v-a1cbfd2f><div class="contact-option gscard gscard-border p-4 h-100" data-v-a1cbfd2f><div class="icon-circle bg-white mb-3 mx-auto" data-v-a1cbfd2f><i class="bx bx-envelope" data-v-a1cbfd2f></i></div><h4 data-v-a1cbfd2f>E-mail</h4><p data-v-a1cbfd2f>Tem alguma d\xFAvida?</p><a href="mailto:hello@gsstudio.com.br" class="text-dark" data-v-a1cbfd2f>hello@gsstudio.com.br</a></div></div><div class="col-md-4 mb-4" data-v-a1cbfd2f><div class="contact-option gscard gscard-border p-4 h-100" data-v-a1cbfd2f><div class="icon-circle bg-white mb-3 mx-auto" data-v-a1cbfd2f><i class="bx bx-phone" data-v-a1cbfd2f></i></div><h4 data-v-a1cbfd2f>Localiza\xE7\xE3o</h4><p data-v-a1cbfd2f><a href="https://maps.app.goo.gl/8h4Ee8B4VMYssSNM8" class="text-dark" target="_blank" data-v-a1cbfd2f>Av. Maria de Jesus Condeixa, 600, Jardim Palma Travassos, CEP: 14091-240, Condom\xEDnio NEO, Ribeir\xE3o Preto - SP</a></p></div></div><div class="col-md-4 mb-4" data-v-a1cbfd2f><div class="contact-option gscard gscard-border p-4 h-100" data-v-a1cbfd2f><div class="icon-circle bg-white mb-3 mx-auto" data-v-a1cbfd2f><i class="bx bx-chat" data-v-a1cbfd2f></i></div><h4 data-v-a1cbfd2f>Atendimento</h4><p data-v-a1cbfd2f>Fale com nossa atendente Zoe</p><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#botModal" data-v-a1cbfd2f> Abrir Chat </button></div></div></div></div></section><div class="modal fade" id="botModal" tabindex="-1" aria-labelledby="botModalLabel" aria-hidden="true" data-v-a1cbfd2f><div class="modal-dialog modal-lg modal-dialog-centered" data-v-a1cbfd2f><div class="modal-content" data-v-a1cbfd2f><div class="modal-header" data-v-a1cbfd2f><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-a1cbfd2f></button></div><div class="modal-body" data-v-a1cbfd2f><iframe src="https://bot.gsstudio.com.br/iniciar" style="${ssrRenderStyle({ "border": "none", "width": "100%", "height": "600px" })}" data-v-a1cbfd2f></iframe></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contato.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contato = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1cbfd2f"]]);

export { contato as default };
//# sourceMappingURL=contato-BaQDsHR0.mjs.map
