import { _ as _export_sfc, u as useHead, b as useSeoMeta, a as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$1 } from './Icon.vue.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { F as Form } from './Form.vue.mjs';
import { d as defineOgImage } from './defineOgImage.mjs';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'packrup';
import 'node:url';
import 'nodemailer';
import '@dword-design/functions';
import 'ipx';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import '@unhead/schema-org';
import '@unhead/schema-org/vue';
import 'imask';
import 'pinia';

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
    defineOgImage({ url: "https://gsstudio.com.br/img/thumb_gsstudio.jpg", width: 1200, height: 600, alt: "GS STUDIO - Markteting, comunicação e desenvolvimento web" });
    useHead({
      meta: [
        { name: "lang", content: "pt-BR" },
        { name: "language", content: "pt-BR" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "canonical", content: "https://www.gsstudio.com.br/contato" },
        { name: "keywords", content: "marketing digital, criação de sites, otimização de sites (SEO), Google Ads, campanhas online, agência digital, agência de marketing, lojas virtuais, e-commerce, gestão de redes sociais, desenvolvimento web, design responsivo, tráfego pago, branding, identidade visual, marketing para empresas, marketing para pequenas empresas, marketing em Sertãozinho, marketing em Ribeirão Preto, SEO local, social media marketing, estratégia de marketing digital, anúncios online, agência de SEO, criação de conteúdo, marketing de conteúdo, hospedagem de sites, otimização de conversão (CRO), email marketing, automação de marketing, consultoria em marketing digital, campanhas pagas no Google, performance digital, WordPress, criação de blogs, gestão de tráfego, otimização de desempenho do site, desenvolvimento de sistemas web, produção audiovisual, estratégias de marketing SP, agência de marketing em SP." },
        { name: "canonical", content: "https://www.gsstudio.com.br/contato" }
      ]
    });
    useSeoMeta({
      title: "Contato",
      ogTitle: "Contato",
      ogUrl: "https://gsstudio.com.br/contato",
      ogSiteName: "GS STUDIO",
      ogLocale: "pt_BR"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = _sfc_main$1;
      _push(`<!--[--><section class="py-5 bg-dark d-flex my-5" id="topo" data-v-57c548c5><div class="container d-flex justify-content-center align-items-center my-5 py-5" data-v-57c548c5><div class="row" data-v-57c548c5><div class="col text-center text-light my-2" data-v-57c548c5><div class="my-2" data-v-57c548c5>`);
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
      _push(` / <span data-v-57c548c5>Contato</span></div><h1 class="text-light" data-v-57c548c5>Contato</h1><a href="#form" data-v-57c548c5>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxs-chevrons-down my-3",
        fontSize: "3em",
        color: "#fff"
      }, null, _parent));
      _push(`</a></div></div></div></section><section id="contato" class="my-3" data-v-57c548c5><div class="container" data-v-57c548c5><div class="row" data-v-57c548c5><div class="col my-5 py-5 d-sm-block" id="form" data-v-57c548c5>`);
      _push(ssrRenderComponent(Form, null, null, _parent));
      _push(`</div></div></div></section><section class="contact-options text-dark py-5 my-3" data-v-57c548c5><div class="container" data-v-57c548c5><div class="row text-center" data-v-57c548c5><div class="col-md-4 mb-4" data-v-57c548c5><div class="contact-option gscard gscard-border p-4 h-100" data-v-57c548c5><div class="icon-circle bg-white mb-3 mx-auto" data-v-57c548c5><i class="bx bx-envelope" data-v-57c548c5></i></div><h4 data-v-57c548c5>E-mail</h4><p data-v-57c548c5>Tem alguma dúvida?</p><a href="mailto:hello@gsstudio.com.br" class="text-dark" data-v-57c548c5>hello@gsstudio.com.br</a></div></div><div class="col-md-4 mb-4" data-v-57c548c5><div class="contact-option gscard gscard-border p-4 h-100" data-v-57c548c5><div class="icon-circle bg-white mb-3 mx-auto" data-v-57c548c5><i class="bx bx-phone" data-v-57c548c5></i></div><h4 data-v-57c548c5>Localização</h4><p data-v-57c548c5><a href="https://maps.app.goo.gl/8h4Ee8B4VMYssSNM8" class="text-dark" target="_blank" data-v-57c548c5>Av. Maria de Jesus Condeixa, 600, Jardim Palma Travassos, CEP: 14091-240, Condomínio NEO, Ribeirão Preto - SP</a></p></div></div><div class="col-md-4 mb-4" data-v-57c548c5><div class="contact-option gscard gscard-border p-4 h-100" data-v-57c548c5><div class="icon-circle bg-white mb-3 mx-auto" data-v-57c548c5><i class="bx bx-chat" data-v-57c548c5></i></div><h4 data-v-57c548c5>Atendimento</h4><p data-v-57c548c5>Fale com nossa atendente Zoe</p><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#botModal" data-v-57c548c5> Abrir Chat </button></div></div></div></div></section><div class="modal fade" id="botModal" tabindex="-1" aria-labelledby="botModalLabel" aria-hidden="true" data-v-57c548c5><div class="modal-dialog modal-lg modal-dialog-centered" data-v-57c548c5><div class="modal-content" data-v-57c548c5><div class="modal-header" data-v-57c548c5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-57c548c5></button></div><div class="modal-body" data-v-57c548c5><iframe src="https://bot.gsstudio.com.br/iniciar" style="${ssrRenderStyle({ "border": "none", "width": "100%", "height": "600px" })}" data-v-57c548c5></iframe></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contato.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contato = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-57c548c5"]]);

export { contato as default };
//# sourceMappingURL=contato.vue.mjs.map
