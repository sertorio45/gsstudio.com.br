import { _ as __nuxt_component_0 } from "./nuxt-link-Bk9AKvJX.js";
import { _ as _sfc_main$2 } from "./Icon-CFOBcUeQ.js";
import { defineComponent, ref, resolveDirective, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps, ssrGetDynamicModelProps, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc, f as useSeoMeta } from "../server.mjs";
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
      const _component_NuxtLink = __nuxt_component_0;
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
      }, ssrGetDirectiveProps(_ctx, _directive_mask, "(00) 00000-0000")), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, form.value.phone))))} data-v-24b81c3c></div></div><div class="col-md-6 mb-4" data-v-24b81c3c><div class="input-group" data-v-24b81c3c><span class="input-group-text" data-v-24b81c3c><i class="bx bx-building" data-v-24b81c3c></i></span><input${ssrRenderAttr("value", form.value.company)} placeholder="Nome da empresa*" class="form-control input-text-size" required data-v-24b81c3c></div></div></div><div class="form-group mb-4" data-v-24b81c3c><textarea placeholder="Nos conte um pouco sobre sua necessidade*" class="form-control textarea-height input-text-size" required data-v-24b81c3c>${ssrInterpolate(form.value.message)}</textarea></div><div class="form-group mb-4 form-check" data-v-24b81c3c><input type="checkbox" class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(form.value.terms) ? ssrLooseContain(form.value.terms, null) : form.value.terms) ? " checked" : ""} required data-v-24b81c3c><label class="form-check-label" data-v-24b81c3c> Ao enviar você será protegido por Google reCAPTCHA e sujeito à `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/politica-de-privacidade",
        class: "privacy-policy-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Política de privacidade`);
          } else {
            return [
              createTextVNode("Política de privacidade")
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
    useSeoMeta({
      title: "Contato - Gs Studio - Agência de marketing, design e tecnologia"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = _sfc_main$2;
      _push(`<!--[--><section class="py-5 bg-dark d-flex my-5" id="topo" data-v-9c66bb8b><div class="container d-flex justify-content-center align-items-center my-5 py-5" data-v-9c66bb8b><div class="row" data-v-9c66bb8b><div class="col text-center text-light my-2" data-v-9c66bb8b><div class="my-2" data-v-9c66bb8b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Página inicial`);
          } else {
            return [
              createTextVNode("Página inicial")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` / <span data-v-9c66bb8b>Contato</span></div><h1 class="text-light" data-v-9c66bb8b>Contato</h1><a href="#form" data-v-9c66bb8b>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxs-chevrons-down my-3",
        fontSize: "3em",
        color: "#fff"
      }, null, _parent));
      _push(`</a></div></div></div></section><section id="contato" class="my-3" data-v-9c66bb8b><div class="container" data-v-9c66bb8b><div class="row" data-v-9c66bb8b><div class="col my-5 py-5 d-sm-block" id="form" data-v-9c66bb8b>`);
      _push(ssrRenderComponent(Form, null, null, _parent));
      _push(`</div></div></div></section><section class="contact-options text-dark py-5 my-3" data-v-9c66bb8b><div class="container" data-v-9c66bb8b><div class="row text-center" data-v-9c66bb8b><div class="col-md-4 mb-4" data-v-9c66bb8b><div class="contact-option gscard gscard-border p-4 h-100" data-v-9c66bb8b><div class="icon-circle bg-white mb-3 mx-auto" data-v-9c66bb8b><i class="bx bx-envelope" data-v-9c66bb8b></i></div><h4 data-v-9c66bb8b>E-mail</h4><p data-v-9c66bb8b>Tem alguma dúvida?</p><a href="mailto:hello@gsstudio.com.br" class="text-dark" data-v-9c66bb8b>hello@gsstudio.com.br</a></div></div><div class="col-md-4 mb-4" data-v-9c66bb8b><div class="contact-option gscard gscard-border p-4 h-100" data-v-9c66bb8b><div class="icon-circle bg-white mb-3 mx-auto" data-v-9c66bb8b><i class="bx bx-phone" data-v-9c66bb8b></i></div><h4 data-v-9c66bb8b>Localização</h4><p data-v-9c66bb8b><a href="https://maps.app.goo.gl/8h4Ee8B4VMYssSNM8" class="text-dark" target="_blank" data-v-9c66bb8b>Av. Maria de Jesus Condeixa, 600, Jardim Palma Travassos, CEP: 14091-240, Condomínio NEO, Ribeirão Preto - SP</a></p></div></div><div class="col-md-4 mb-4" data-v-9c66bb8b><div class="contact-option gscard gscard-border p-4 h-100" data-v-9c66bb8b><div class="icon-circle bg-white mb-3 mx-auto" data-v-9c66bb8b><i class="bx bx-chat" data-v-9c66bb8b></i></div><h4 data-v-9c66bb8b>Atendimento</h4><p data-v-9c66bb8b>Fale com nossa atendente Zoe</p><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#botModal" data-v-9c66bb8b> Abrir Chat </button></div></div></div></div></section><div class="modal fade" id="botModal" tabindex="-1" aria-labelledby="botModalLabel" aria-hidden="true" data-v-9c66bb8b><div class="modal-dialog modal-lg modal-dialog-centered" data-v-9c66bb8b><div class="modal-content" data-v-9c66bb8b><div class="modal-header" data-v-9c66bb8b><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-9c66bb8b></button></div><div class="modal-body" data-v-9c66bb8b><iframe src="https://bot.gsstudio.com.br/iniciar" style="${ssrRenderStyle({ "border": "none", "width": "100%", "height": "600px" })}" data-v-9c66bb8b></iframe></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contato.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contato = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c66bb8b"]]);
export {
  contato as default
};
//# sourceMappingURL=contato-ZOdZi58S.js.map
