import { f as useNuxtApp, _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, defineComponent, ref, resolveDirective, mergeProps, withCtx, createTextVNode } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrGetDirectiveProps, ssrGetDynamicModelProps, ssrRenderComponent, ssrRenderClass } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
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
    useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _directive_mask = resolveDirective("mask");
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-9fccd495><div class="gscard-border p-4 p-sm-3 p-md-4 p-lg-5" data-v-9fccd495><form data-v-9fccd495><div class="row" data-v-9fccd495><div class="col-md-6 mb-4" data-v-9fccd495><div class="input-group" data-v-9fccd495><span class="input-group-text" data-v-9fccd495><i class="bx bx-user" data-v-9fccd495></i></span><input${ssrRenderAttr("value", form.value.name)} placeholder="Seu nome completo*" class="form-control input-text-size" required data-v-9fccd495></div></div><div class="col-md-6 mb-4" data-v-9fccd495><div class="input-group" data-v-9fccd495><span class="input-group-text" data-v-9fccd495><i class="bx bx-envelope" data-v-9fccd495></i></span><input${ssrRenderAttr("value", form.value.email)} type="email" placeholder="Seu melhor e-mail*" class="form-control input-text-size" required data-v-9fccd495></div></div></div><div class="row" data-v-9fccd495><div class="col-md-6 mb-4" data-v-9fccd495><div class="input-group" data-v-9fccd495><span class="input-group-text" data-v-9fccd495><i class="bx bx-globe" data-v-9fccd495></i></span><select class="form-control input-text-size" required data-v-9fccd495><option value="" disabled selected data-v-9fccd495>Selecione o UF*</option><!--[-->`);
      ssrRenderList(estados.value, (estado) => {
        _push(`<option${ssrRenderAttr("value", estado.sigla)} data-v-9fccd495${ssrIncludeBooleanAttr(Array.isArray(form.value.uf) ? ssrLooseContain(form.value.uf, estado.sigla) : ssrLooseEqual(form.value.uf, estado.sigla)) ? " selected" : ""}>${ssrInterpolate(estado.nome)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="col-md-6 mb-4" data-v-9fccd495><div class="input-group" data-v-9fccd495><span class="input-group-text" data-v-9fccd495><i class="bx bx-map" data-v-9fccd495></i></span><select class="form-control input-text-size" required data-v-9fccd495><option value="" disabled selected data-v-9fccd495>Selecione a cidade*</option><!--[-->`);
      ssrRenderList(cidades.value, (cidade) => {
        _push(`<option${ssrRenderAttr("value", cidade.nome)} data-v-9fccd495${ssrIncludeBooleanAttr(Array.isArray(form.value.city) ? ssrLooseContain(form.value.city, cidade.nome) : ssrLooseEqual(form.value.city, cidade.nome)) ? " selected" : ""}>${ssrInterpolate(cidade.nome)}</option>`);
      });
      _push(`<!--]--></select></div></div></div><div class="row" data-v-9fccd495><div class="col-md-6 mb-4" data-v-9fccd495><div class="input-group" data-v-9fccd495><span class="input-group-text" data-v-9fccd495><i class="bx bx-phone" data-v-9fccd495></i></span><input${ssrRenderAttrs((_temp0 = mergeProps({
        value: form.value.phone,
        placeholder: "Celular*",
        class: "form-control input-text-size",
        required: ""
      }, ssrGetDirectiveProps(_ctx, _directive_mask, "(00) 00000-0000")), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, form.value.phone))))} data-v-9fccd495></div></div><div class="col-md-6 mb-4" data-v-9fccd495><div class="input-group" data-v-9fccd495><span class="input-group-text" data-v-9fccd495><i class="bx bx-building" data-v-9fccd495></i></span><input${ssrRenderAttr("value", form.value.company)} placeholder="Nome da empresa*" class="form-control input-text-size" required data-v-9fccd495></div></div></div><div class="form-group mb-4" data-v-9fccd495><textarea placeholder="Nos conte um pouco sobre sua necessidade*" class="form-control textarea-height input-text-size" required data-v-9fccd495>${ssrInterpolate(form.value.message)}</textarea></div><div class="form-group mb-4 form-check" data-v-9fccd495><input type="checkbox" class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(form.value.terms) ? ssrLooseContain(form.value.terms, null) : form.value.terms) ? " checked" : ""} required data-v-9fccd495><label class="form-check-label" data-v-9fccd495> Ao enviar voc\xEA ser\xE1 protegido por Google reCAPTCHA e sujeito \xE0 `);
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
      _push(`</label></div><div class="form-group text-center" data-v-9fccd495><button type="submit" class="${ssrRenderClass(["btn m-0", isSubmitting.value ? "btn-secondary" : success.value ? "btn-success" : "btn-primary"])}"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-9fccd495>`);
      if (isSubmitting.value) {
        _push(`<span data-v-9fccd495><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-9fccd495></span> Enviando... </span>`);
      } else if (success.value) {
        _push(`<span data-v-9fccd495><i class="bx bx-check-circle" data-v-9fccd495></i> Sucesso! </span>`);
      } else {
        _push(`<span data-v-9fccd495><i class="bx bx-send" data-v-9fccd495></i> Enviar </span>`);
      }
      _push(`</button></div></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9fccd495"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Form-DIrld_BG.mjs.map
