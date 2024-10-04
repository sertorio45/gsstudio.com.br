import { _ as _export_sfc, u as useHead, e as useSeoMeta, a as __nuxt_component_0 } from "../server.mjs";
import { _ as _sfc_main$1 } from "./Icon-5pRBvot5.js";
import { _ as _sfc_main$2 } from "./NuxtImg-DBAFi2O5.js";
import { withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "destr";
import "klona";
import "devalue";
import "cookie-es";
import "ohash";
import "@gtm-support/vue-gtm";
import "@unhead/schema-org";
import "@unhead/schema-org/vue";
import "imask";
const _sfc_main = {
  __name: "servicos",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      meta: [
        { name: "robots", content: "index,follow" },
        { name: "canonical", content: "https://www.gsstudio.com.br/servicos" },
        { name: "og:image", property: "og:image", content: "https://www.gsstudio.com.br/img/thumb_gsstudio.jpg?400x400" },
        { hid: "og:image", property: "og:image", content: "https://www.gsstudio.com.br/img/thumb_gsstudio.jpg?400x400" },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:width", content: "400" },
        { property: "og:image:height", content: "400" }
      ]
    });
    useSeoMeta({
      ogImage: "https://www.gsstudio.com.br/img/thumb_gsstudio.jpg?400x400",
      title: "Serviços | GS STUDIO",
      ogTitle: "Serviços | GS STUDIO",
      ogUrl: "https://gsstudio.com.br/servicos",
      ogSiteName: "GS STUDIO",
      ogLocale: "pt_BR"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = _sfc_main$1;
      const _component_NuxtImg = _sfc_main$2;
      _push(`<!--[--><section class="bg-dark min-vh-100 d-flex justify-content-center align-items-center pt-5" id="topo" data-v-27637c35><div class="container d-flex" data-v-27637c35><div class="row" data-v-27637c35><div class="col text-center text-light my-2" data-v-27637c35><div class="my-2" data-v-27637c35>`);
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
      _push(` / <span data-v-27637c35>Serviços</span></div><h1 class="text-light" data-v-27637c35>Transformando <em data-v-27637c35>ideias</em> em <em data-v-27637c35>resultados</em> exponenciais.</h1><p class="my-4" data-v-27637c35>Descubra nossos serviços em Design, Marketing e Tecnologia para impulsionar o crescimento do seu negócio.</p><a href="#tecnologia" data-v-27637c35>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxs-chevrons-down my-3",
        fontSize: "3em",
        color: "#fff"
      }, null, _parent));
      _push(`</a></div></div></div></section><section id="tecnologia" class="my-5 py-5 min-vh-100 d-flex" data-v-27637c35><div class="container justify-content-center align-content-center" data-v-27637c35><div class="row mb-4" data-v-27637c35><div class="col text-center" data-v-27637c35><h2 data-v-27637c35>Tecnologia</h2><p data-v-27637c35>Desenvolvimento de Sites, Lojas Virtuais, Soluções Personalizadas</p></div></div><div class="row text-center gy-4" data-v-27637c35><div class="col-12 col-sm-6 col-md-4" data-v-27637c35><div class="gscard gscard-border" data-v-27637c35>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/sites.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-27637c35>Desenvolvimento de Sites</h3><p data-v-27637c35>Construímos sites personalizados que não apenas parecem incríveis, mas também funcionam perfeitamente.</p></div></div><div class="col-12 col-sm-6 col-md-4" data-v-27637c35><div class="gscard gscard-border" data-v-27637c35>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/lojas_virtuais.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-27637c35>Lojas Virtuais</h3><p data-v-27637c35>Criamos e-commerce robustos e escaláveis que proporcionam uma experiência de compra fluida para seus clientes.</p></div></div><div class="col-12 col-sm-6 col-md-4" data-v-27637c35><div class="gscard gscard-border" data-v-27637c35>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/branding.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-27637c35>Soluções Personalizadas</h3><p data-v-27637c35>Desenvolvemos soluções tecnológicas sob medida para atender às necessidades específicas do seu negócio.</p></div></div><div class="my-5" data-v-27637c35>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Faça agora seu orçamento`);
          } else {
            return [
              createTextVNode("Faça agora seu orçamento")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section id="marketing" class="py-5 bg-light min-vh-100 d-flex" data-v-27637c35><div class="container my-5 justify-content-center align-content-center text-center" data-v-27637c35><div class="row mb-4" data-v-27637c35><div class="col text-center" data-v-27637c35><h2 data-v-27637c35>Marketing</h2><p data-v-27637c35>Gestão de Redes Sociais, Tráfego Pago, Otimização SEO, Audiovisual</p></div></div><div class="row text-center gy-4" data-v-27637c35><div class="col-12 col-sm-6 col-md-4" data-v-27637c35><div class="gscard gscard-border" data-v-27637c35>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/gestao_de_conteudo.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-27637c35>Gestão de Redes Sociais</h3><p data-v-27637c35>Desenvolvemos estratégias personalizadas para aumentar a sua presença nas redes sociais.</p></div></div><div class="col-12 col-sm-6 col-md-4" data-v-27637c35><div class="gscard gscard-border" data-v-27637c35>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/trafego_pago.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-27637c35>Tráfego Pago</h3><p data-v-27637c35>Maximize o retorno sobre o investimento com campanhas de publicidade pagas eficientes.</p></div></div><div class="col-12 col-sm-6 col-md-4" data-v-27637c35><div class="gscard gscard-border" data-v-27637c35>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/otimizacao_seo.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-27637c35>Otimização SEO</h3><p data-v-27637c35>Melhore a visibilidade do seu site nos motores de busca com nossas técnicas avançadas de SEO.</p></div></div></div><div class="my-5" data-v-27637c35>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Quero crescer minha marca, produtos e serviços`);
          } else {
            return [
              createTextVNode("Quero crescer minha marca, produtos e serviços")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section id="design" class="py-5 min-vh-100 d-flex" data-v-27637c35><div class="container my-5 justify-content-center align-content-center" data-v-27637c35><div class="row mb-4" data-v-27637c35><div class="col text-center" data-v-27637c35><h2 data-v-27637c35>Design</h2><p data-v-27637c35>Criação de Marcas, Comunicação Visual, Web Design</p></div></div><div class="row text-center gy-4" data-v-27637c35><div class="col-12 col-sm-6 col-md-4" data-v-27637c35><div class="gscard gscard-border" data-v-27637c35>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/branding.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-27637c35>Criação de Marcas</h3><p data-v-27637c35>Desenvolvemos identidades visuais que capturam a essência da sua empresa e se conectam com seu público-alvo.</p></div></div><div class="col-12 col-sm-6 col-md-4" data-v-27637c35><div class="gscard gscard-border" data-v-27637c35>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/comunicacao_visual.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-27637c35>Comunicação Visual</h3><p data-v-27637c35>Projetamos materiais visuais impactantes que reforçam a sua mensagem e destacam a sua marca.</p></div></div><div class="col-12 col-sm-6 col-md-4" data-v-27637c35><div class="gscard gscard-border" data-v-27637c35>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/servicos/producao_de_video.svg",
        class: "p-2 my-1",
        width: "100px"
      }, null, _parent));
      _push(`<h3 data-v-27637c35>Audiovisual</h3><p data-v-27637c35>Produzimos vídeos e outros conteúdos audiovisuais que capturam a atenção e transmitem sua mensagem de forma envolvente.</p></div></div><div class="my-5" data-v-27637c35>`);
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
      _push(`</div></div></div></section><section class="text-center gscard" id="cta" data-v-27637c35><div class="container d-flex align-items-center justify-content-center bg-cta" data-v-27637c35><div class="row" data-v-27637c35><div class="col text-light" data-v-27637c35><h2 class="text-light" data-v-27637c35>Transforme Resultados com Design, Marketing e Tecnologia!</h2><div class="subheadline d-flex justify-content-center py-2" data-v-27637c35><p data-v-27637c35>Potencialize seu negócio com soluções criativas e inovadoras. Nós entregamos resultados excepcionais através de estratégias personalizadas e tecnologia de ponta.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<em data-v-27637c35${_scopeId}>Entrar agora em contato</em>`);
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
const servicos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-27637c35"]]);
export {
  servicos as default
};
//# sourceMappingURL=servicos-CpGNRxqm.js.map
