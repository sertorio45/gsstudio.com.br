import { _ as _export_sfc, u as useHead, e as useSeoMeta, a as __nuxt_component_0$1 } from './server.mjs';
import { _ as _sfc_main$1 } from './Icon-5pRBvot5.mjs';
import { _ as _sfc_main$2 } from './NuxtImg-C0-byqDt.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { d as defineOgImage } from './defineOgImage-D8QI4VYf.mjs';
import '../routes/api/portifolio.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'packrup';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@unhead/schema-org';
import '@unhead/schema-org/vue';
import 'imask';

const _sfc_main = {
  __name: "servicos",
  __ssrInlineRender: true,
  setup(__props) {
    defineOgImage({ url: "https://gsstudio.com.br/img/thumb_gsstudio.jpg", width: 1200, height: 600, alt: "GS STUDIO - Markteting, comunica\xE7\xE3o e desenvolvimento web" });
    useHead({
      meta: [
        { name: "lang", content: "pt-BR" },
        { name: "language", content: "pt-BR" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "canonical", content: "https://www.gsstudio.com.br/servicos" },
        { name: "keywords", content: "marketing digital, cria\xE7\xE3o de sites, otimiza\xE7\xE3o de sites (SEO), Google Ads, campanhas online, ag\xEAncia digital, ag\xEAncia de marketing, lojas virtuais, e-commerce, gest\xE3o de redes sociais, desenvolvimento web, design responsivo, tr\xE1fego pago, branding, identidade visual, marketing para empresas, marketing para pequenas empresas, marketing em Sert\xE3ozinho, marketing em Ribeir\xE3o Preto, SEO local, social media marketing, estrat\xE9gia de marketing digital, an\xFAncios online, ag\xEAncia de SEO, cria\xE7\xE3o de conte\xFAdo, marketing de conte\xFAdo, hospedagem de sites, otimiza\xE7\xE3o de convers\xE3o (CRO), email marketing, automa\xE7\xE3o de marketing, consultoria em marketing digital, campanhas pagas no Google, performance digital, WordPress, cria\xE7\xE3o de blogs, gest\xE3o de tr\xE1fego, otimiza\xE7\xE3o de desempenho do site, desenvolvimento de sistemas web, produ\xE7\xE3o audiovisual, estrat\xE9gias de marketing SP, ag\xEAncia de marketing em SP." },
        { name: "canonical", content: "https://www.gsstudio.com.br/servicos" }
      ]
    });
    useSeoMeta({
      title: "Servi\xE7os",
      description: "Solu\xE7\xF5es completas para marketing, comunica\xE7\xE3o e desenvolvimento web.",
      ogTitle: "Servi\xE7os",
      ogDescription: "Solu\xE7\xF5es completas para marketing, comunica\xE7\xE3o e desenvolvimento web.",
      ogUrl: "https://gsstudio.com.br/servicos",
      ogSiteName: "GS STUDIO",
      ogLocale: "pt_BR"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = _sfc_main$1;
      const _component_NuxtImg = _sfc_main$2;
      _push(`<!--[--><section class="bg-dark min-vh-100 d-flex justify-content-center align-items-center pt-5" id="topo" data-v-afa4c083><div class="container d-flex" data-v-afa4c083><div class="row" data-v-afa4c083><div class="col text-center text-light my-2" data-v-afa4c083><div class="my-2" data-v-afa4c083>`);
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
      _push(` / <span data-v-afa4c083>Servi\xE7os</span></div><h1 class="text-light" data-v-afa4c083>Transformando <em data-v-afa4c083>ideias</em> em <em data-v-afa4c083>resultados</em> exponenciais.</h1><p class="my-4" data-v-afa4c083>Descubra nossos servi\xE7os em Design, Marketing e Tecnologia para impulsionar o crescimento do seu neg\xF3cio.</p><a href="#tecnologia" data-v-afa4c083>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxs-chevrons-down my-3",
        fontSize: "3em",
        color: "#fff"
      }, null, _parent));
      _push(`</a></div></div></div></section><section id="tecnologia" class="my-5 py-5 min-vh-100 d-flex" data-v-afa4c083><div class="container justify-content-center align-content-center" data-v-afa4c083><div class="row mb-4" data-v-afa4c083><div class="col text-center" data-v-afa4c083><h2 data-v-afa4c083>Tecnologia</h2><p data-v-afa4c083>Desenvolvimento de Sites, Lojas Virtuais, Solu\xE7\xF5es Personalizadas</p></div></div><div class="row text-center gy-4" data-v-afa4c083><div class="col-12 col-sm-6 col-md-4" data-v-afa4c083><div class="gscard gscard-border" data-v-afa4c083>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/sites.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-afa4c083>Desenvolvimento de Sites</h3><p data-v-afa4c083>Constru\xEDmos sites personalizados que n\xE3o apenas parecem incr\xEDveis, mas tamb\xE9m funcionam perfeitamente.</p></div></div><div class="col-12 col-sm-6 col-md-4" data-v-afa4c083><div class="gscard gscard-border" data-v-afa4c083>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/lojas_virtuais.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-afa4c083>Lojas Virtuais</h3><p data-v-afa4c083>Criamos e-commerce robustos e escal\xE1veis que proporcionam uma experi\xEAncia de compra fluida para seus clientes.</p></div></div><div class="col-12 col-sm-6 col-md-4" data-v-afa4c083><div class="gscard gscard-border" data-v-afa4c083>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/branding.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-afa4c083>Solu\xE7\xF5es Personalizadas</h3><p data-v-afa4c083>Desenvolvemos solu\xE7\xF5es tecnol\xF3gicas sob medida para atender \xE0s necessidades espec\xEDficas do seu neg\xF3cio.</p></div></div><div class="my-5" data-v-afa4c083>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fa\xE7a agora seu or\xE7amento`);
          } else {
            return [
              createTextVNode("Fa\xE7a agora seu or\xE7amento")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section id="marketing" class="py-5 bg-light min-vh-100 d-flex" data-v-afa4c083><div class="container my-5 justify-content-center align-content-center text-center" data-v-afa4c083><div class="row mb-4" data-v-afa4c083><div class="col text-center" data-v-afa4c083><h2 data-v-afa4c083>Marketing</h2><p data-v-afa4c083>Gest\xE3o de Redes Sociais, Tr\xE1fego Pago, Otimiza\xE7\xE3o SEO, Audiovisual</p></div></div><div class="row text-center gy-4" data-v-afa4c083><div class="col-12 col-sm-6 col-md-4" data-v-afa4c083><div class="gscard gscard-border" data-v-afa4c083>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/gestao_de_conteudo.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-afa4c083>Gest\xE3o de Redes Sociais</h3><p data-v-afa4c083>Desenvolvemos estrat\xE9gias personalizadas para aumentar a sua presen\xE7a nas redes sociais.</p></div></div><div class="col-12 col-sm-6 col-md-4" data-v-afa4c083><div class="gscard gscard-border" data-v-afa4c083>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/trafego_pago.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-afa4c083>Tr\xE1fego Pago</h3><p data-v-afa4c083>Maximize o retorno sobre o investimento com campanhas de publicidade pagas eficientes.</p></div></div><div class="col-12 col-sm-6 col-md-4" data-v-afa4c083><div class="gscard gscard-border" data-v-afa4c083>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/otimizacao_seo.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-afa4c083>Otimiza\xE7\xE3o SEO</h3><p data-v-afa4c083>Melhore a visibilidade do seu site nos motores de busca com nossas t\xE9cnicas avan\xE7adas de SEO.</p></div></div></div><div class="my-5" data-v-afa4c083>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Quero crescer minha marca, produtos e servi\xE7os`);
          } else {
            return [
              createTextVNode("Quero crescer minha marca, produtos e servi\xE7os")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section id="design" class="py-5 min-vh-100 d-flex" data-v-afa4c083><div class="container my-5 justify-content-center align-content-center" data-v-afa4c083><div class="row mb-4" data-v-afa4c083><div class="col text-center" data-v-afa4c083><h2 data-v-afa4c083>Design</h2><p data-v-afa4c083>Cria\xE7\xE3o de Marcas, Comunica\xE7\xE3o Visual, Web Design</p></div></div><div class="row text-center gy-4" data-v-afa4c083><div class="col-12 col-sm-6 col-md-4" data-v-afa4c083><div class="gscard gscard-border" data-v-afa4c083>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/branding.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-afa4c083>Cria\xE7\xE3o de Marcas</h3><p data-v-afa4c083>Desenvolvemos identidades visuais que capturam a ess\xEAncia da sua empresa e se conectam com seu p\xFAblico-alvo.</p></div></div><div class="col-12 col-sm-6 col-md-4" data-v-afa4c083><div class="gscard gscard-border" data-v-afa4c083>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/comunicacao_visual.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-afa4c083>Comunica\xE7\xE3o Visual</h3><p data-v-afa4c083>Projetamos materiais visuais impactantes que refor\xE7am a sua mensagem e destacam a sua marca.</p></div></div><div class="col-12 col-sm-6 col-md-4" data-v-afa4c083><div class="gscard gscard-border" data-v-afa4c083>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/producao_de_video.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-afa4c083>Audiovisual</h3><p data-v-afa4c083>Produzimos v\xEDdeos e outros conte\xFAdos audiovisuais que capturam a aten\xE7\xE3o e transmitem sua mensagem de forma envolvente.</p></div></div><div class="my-5" data-v-afa4c083>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Quero posicionar minha marca`);
          } else {
            return [
              createTextVNode("Quero posicionar minha marca")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="text-center gscard" id="cta" data-v-afa4c083><div class="container d-flex align-items-center justify-content-center bg-cta" data-v-afa4c083><div class="row" data-v-afa4c083><div class="col text-light" data-v-afa4c083><h2 class="text-light" data-v-afa4c083>Transforme Resultados com Design, Marketing e Tecnologia!</h2><div class="subheadline d-flex justify-content-center py-2" data-v-afa4c083><p data-v-afa4c083>Potencialize seu neg\xF3cio com solu\xE7\xF5es criativas e inovadoras. N\xF3s entregamos resultados excepcionais atrav\xE9s de estrat\xE9gias personalizadas e tecnologia de ponta.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<em data-v-afa4c083${_scopeId}>Entrar agora em contato</em>`);
          } else {
            return [
              createVNode("em", null, "Entrar agora em contato")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/servicos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const servicos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-afa4c083"]]);

export { servicos as default };
//# sourceMappingURL=servicos-DqstzWM-.mjs.map