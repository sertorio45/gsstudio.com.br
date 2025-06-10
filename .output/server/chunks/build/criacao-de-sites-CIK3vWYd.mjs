import { _ as _export_sfc, u as useHead, b as useSeoMeta, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_2 } from './Form-DIrld_BG.mjs';
import { d as defineOgImage } from './defineOgImage-BZJPI-R2.mjs';
import '../nitro/nitro.mjs';
import 'lru-cache';
import 'devalue';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'packrup';
import 'node:url';
import 'nodemailer';
import '@dword-design/functions';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@unhead/schema-org';
import '@unhead/schema-org/vue';
import 'imask';
import 'pinia';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Primary",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "btn btn-primary" }, _ctx.$attrs, _attrs))} data-v-917e2b65>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/Primary.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-917e2b65"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "criacao-de-sites",
  __ssrInlineRender: true,
  setup(__props) {
    defineOgImage({ url: "https://gsstudio.com.br/img/thumb_gsstudio.jpg", width: 1200, height: 600, alt: "GS STUDIO - Markteting, comunica\xE7\xE3o e desenvolvimento web" });
    useHead({
      meta: [
        { name: "lang", content: "pt-BR" },
        { name: "language", content: "pt-BR" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "canonical", content: "https://www.gsstudio.com.br/servicos/criacao-de-sites" },
        { name: "canonical", content: "https://www.gsstudio.com.br/servicos/criacao-de-sites" }
      ]
    });
    useSeoMeta({
      title: "Cria\xE7\xE3o de sites",
      ogTitle: "Cria\xE7\xE3o de sites",
      ogUrl: "https://gsstudio.com.br/servicos/criacao-de-sites",
      ogSiteName: "GS STUDIO",
      ogLocale: "pt_BR"
    });
    const features = [
      { icon: "bx-brush", title: "Design personalizado", desc: "Layout exclusivo, alinhado \xE0 identidade da sua marca e focado em convers\xE3o." },
      { icon: "bx-mobile-alt", title: "Responsividade total", desc: "Seu site perfeito em qualquer dispositivo: mobile, tablet e desktop." },
      { icon: "bx-rocket", title: "SEO e performance", desc: "Carregamento r\xE1pido, otimiza\xE7\xE3o para Google e melhores resultados." },
      { icon: "bx-plug", title: "Integra\xE7\xF5es", desc: "Conecte WhatsApp, CRM, Analytics e outras ferramentas essenciais." },
      { icon: "bx-cog", title: "Painel de gest\xE3o", desc: "Gerencie conte\xFAdos facilmente com autonomia e praticidade." },
      { icon: "bx-support", title: "Suporte t\xE9cnico", desc: "Acompanhamento dedicado durante e ap\xF3s o projeto." }
    ];
    const techs = [
      { name: "HTML5", icon: "bxl-html5", desc: "Estrutura sem\xE2ntica e moderna para web responsiva." },
      { name: "CSS3", icon: "bxl-css3", desc: "Estiliza\xE7\xE3o avan\xE7ada, responsiva e visual atraente." },
      { name: "Vue 3", icon: "bxl-vuejs", desc: "Framework para interfaces modernas e perform\xE1ticas." },
      { name: "PostgreSQL", icon: "bxl-postgresql", desc: "Banco de dados relacional e NoSQL, com autentica\xE7\xE3o e integra\xE7\xE3o com API." }
    ];
    const process = [
      { icon: "bx-bulb", title: "Briefing", desc: "Entendimento do projeto, objetivos e necessidades do cliente." },
      { icon: "bx-layout", title: "Wireframe", desc: "Cria\xE7\xE3o do prot\xF3tipo naveg\xE1vel para valida\xE7\xE3o da estrutura." },
      { icon: "bx-paint", title: "Design", desc: "Desenvolvimento visual alinhado \xE0 identidade e experi\xEAncia do usu\xE1rio." },
      { icon: "bx-code-alt", title: "Desenvolvimento", desc: "Implementa\xE7\xE3o do site, integra\xE7\xF5es e recursos personalizados." },
      { icon: "bx-rocket", title: "Publica\xE7\xE3o", desc: "Testes finais, ajustes e lan\xE7amento do site para o p\xFAblico." }
    ];
    const timeline = [
      { etapa: "Briefing", entrega: "Reuni\xE3o e levantamento", tempo: "1-2 dias \xFAteis" },
      { etapa: "Wireframe", entrega: "Prot\xF3tipo naveg\xE1vel", tempo: "2-3 dias \xFAteis" },
      { etapa: "Design", entrega: "Layout aprovado", tempo: "3-4 dias \xFAteis" },
      { etapa: "Desenvolvimento", entrega: "Site funcional", tempo: "6-8 dias \xFAteis" },
      { etapa: "Publica\xE7\xE3o", entrega: "Entrega final", tempo: "2-3 dias \xFAteis" }
    ];
    const differentials = [
      { icon: "bx-user-voice", title: "Foco em UX", desc: "Experi\xEAncia do usu\xE1rio sempre em primeiro lugar." },
      { icon: "bx-search-alt-2", title: "SEO avan\xE7ado", desc: "Seu site com m\xE1xima visibilidade no Google." },
      { icon: "bx-timer", title: "Entrega \xE1gil", desc: "Processo r\xE1pido, transparente e sem burocracia." },
      { icon: "bx-headphone", title: "Suporte online", desc: "Acompanhamento pr\xF3ximo durante e ap\xF3s o projeto." },
      { icon: "bx-shield-quarter", title: "Seguran\xE7a total", desc: "Prote\xE7\xE3o de dados e estabilidade para seu site." }
    ];
    const faqs = [
      { q: "Quanto tempo leva para criar um site?", a: "O prazo m\xE9dio \xE9 de 15 a 20 dias \xFAteis, dependendo da complexidade." },
      { q: "O site \xE9 responsivo?", a: "Sim, todos os sites s\xE3o 100% responsivos para mobile, tablet e desktop." },
      { q: "Posso gerenciar o conte\xFAdo?", a: "Sim, voc\xEA ter\xE1 acesso a um painel de gest\xE3o simples e intuitivo. Se o site for din\xE2mico, voc\xEA poder\xE1 gerenciar o conte\xFAdo." },
      { q: "O site \xE9 otimizado para Google?", a: "Sim, entregamos com SEO t\xE9cnico, entregamos de acordo com as m\xE9tricas de Google." },
      { q: "Voc\xEAs oferecem suporte?", a: "Sim, se for contrato o servi\xE7o mensal, nosso suporte acompanha voc\xEA durante e ap\xF3s o projeto." }
    ];
    const tools = [
      { name: "WordPress", desc: "CMS flex\xEDvel e robusto para sites, blogs e portais de conte\xFAdo, com milhares de plugins e temas." },
      { name: "Blimber", desc: "Hub de solu\xE7\xF5es para lojas online e f\xEDsicas, com m\xF3dulos de automa\xE7\xE3o, gest\xE3o e vendas." },
      { name: "Tray", desc: "Plataforma nacional para e-commerces, f\xE1cil de usar, com integra\xE7\xF5es e recursos para vendas online." },
      { name: "VTEX", desc: "Solu\xE7\xE3o robusta para grandes opera\xE7\xF5es de e-commerce, com foco em escalabilidade e omnichannel." },
      { name: "Shopify", desc: "Plataforma global para cria\xE7\xE3o de lojas virtuais, intuitiva, segura e com diversos apps." },
      { name: "Nuvemshop", desc: "Plataforma popular no Brasil e Am\xE9rica Latina, ideal para pequenos e m\xE9dios neg\xF3cios online." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ButtonPrimary = __nuxt_component_1;
      const _component_Form = __nuxt_component_2;
      _push(`<!--[--><section id="hero" class="min-vh-100 d-flex justify-content-center align-items-center background-topo py-5" data-v-7821b13a><div class="container" data-v-7821b13a><div class="row" data-v-7821b13a><div class="col text-center text-dark my-2" data-v-7821b13a><div class="my-2" data-v-7821b13a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-dark"
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
      _push(` / `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/servicos",
        class: "text-dark"
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
      _push(` / <span data-v-7821b13a>Cria\xE7\xE3o de Sites</span></div><h1 class="fw-bold mb-3" data-v-7821b13a>Seu site profissional come\xE7a aqui</h1><p class="lead mb-4" data-v-7821b13a>Transforme sua presen\xE7a digital com um site r\xE1pido, bonito e pronto para converter visitantes em clientes.</p><div class="d-flex gap-3 justify-content-center mb-4" data-v-7821b13a>`);
      _push(ssrRenderComponent(_component_ButtonPrimary, { class: "me-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Solicitar Or\xE7amento`);
          } else {
            return [
              createTextVNode("Solicitar Or\xE7amento")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-center mt-4" data-v-7821b13a><a href="#features" data-v-7821b13a><i class="bx bxs-chevrons-down" style="${ssrRenderStyle({ "font-size": "3em", "color": "#000" })}" aria-hidden="true" data-v-7821b13a></i></a></div></div></div></div></section><section id="features" class="container-fluid bg-dark py-5" data-v-7821b13a><div class="container py-5 my-5" data-v-7821b13a><h2 class="text-center mb-4 fw-bold mb-5 text-light" data-v-7821b13a>O que entregamos</h2><div class="row justify-content-center align-items-center g-4 my-3" data-v-7821b13a><!--[-->`);
      ssrRenderList(features, (feature, i) => {
        _push(`<div class="col-12 col-sm-6 col-md-4 col-lg-4 d-flex"${ssrRenderAttr("data-gsap", "stagger fade-in")} data-v-7821b13a><div class="gscard gscard-border w-100 text-center d-flex flex-column align-items-center justify-content-center py-4" style="${ssrRenderStyle({ "min-height": "50vh" })}" data-v-7821b13a><i class="${ssrRenderClass("bx " + feature.icon)}" style="${ssrRenderStyle({ "font-size": "3rem", "color": "var(--bs-light)", "background-color": "var(--bs-dark)", "border-radius": "50%", "padding": "20px", "box-shadow": "0 0 10px 0 rgba(0, 0, 0, 0.1)", "margin": "10px" })}" aria-hidden="true" data-v-7821b13a></i><h5 class="fw-semibold mt-2" data-v-7821b13a>${ssrInterpolate(feature.title)}</h5><div class="small text-muted" data-v-7821b13a>${ssrInterpolate(feature.desc)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section id="tech" class="container py-5 my-5" data-v-7821b13a><h2 class="text-center mb-4 fw-bold mb-5" data-v-7821b13a>Tecnologias Utilizadas</h2><div class="row justify-content-center align-items-center g-4 my-3" data-v-7821b13a><!--[-->`);
      ssrRenderList(techs, (tech, i) => {
        _push(`<div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" data-v-7821b13a><div class="gscard gscard-border w-100 text-center d-flex flex-column align-items-center justify-content-center py-4" style="${ssrRenderStyle({ "min-height": "50vh", "justify-content": "top" })}" data-v-7821b13a><i class="${ssrRenderClass("bx " + tech.icon)}" style="${ssrRenderStyle({ "font-size": "3rem", "color": "var(--bs-light)", "background-color": "var(--bs-dark)", "border-radius": "50%", "padding": "20px", "box-shadow": "0 0 10px 0 rgba(0, 0, 0, 0.1)", "margin": "10px" })}" aria-hidden="true" data-v-7821b13a></i><div class="fw-semibold mt-2" data-v-7821b13a>${ssrInterpolate(tech.name)}</div><div class="small text-muted" data-v-7821b13a>${ssrInterpolate(tech.desc)}</div></div></div>`);
      });
      _push(`<!--]-->`);
      if (techs.length % 2 !== 0) {
        _push(`<div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" data-v-7821b13a><div class="gscard gscard-border w-100 text-center d-flex flex-column align-items-center justify-content-center py-4 bg-light border-0" style="${ssrRenderStyle({ "opacity": "0.5", "min-height": "160px" })}" data-v-7821b13a><i class="bx bx-dots-horizontal-rounded" style="${ssrRenderStyle({ "font-size": "2.5rem", "color": "#ced4da" })}" aria-hidden="true" data-v-7821b13a></i></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section id="ferramentas" class="container-fluid py-5 my-5 bg-dark" data-v-7821b13a><div class="container py-5" data-v-7821b13a><h2 class="text-center mb-4 fw-bold text-light mb-5" data-v-7821b13a>Integramos o seu site com as melhores ferramentas</h2><p class="text-center text-light mb-5" data-v-7821b13a>Usamos plataformas robustas para lojas virtuais e sites voltados para performance em marketing e vendas.</p><div class="row justify-content-center align-items-center g-4 mt-3" data-v-7821b13a><!--[-->`);
      ssrRenderList(tools, (tool) => {
        _push(`<div class="col-12 col-sm-6 col-md-4 col-lg-4 d-flex" data-v-7821b13a><div class="gscard gscard-border w-100 text-center d-flex flex-column align-items-center justify-content-center py-4 bg-light" style="${ssrRenderStyle({ "min-height": "11vh" })}" data-v-7821b13a><div class="fw-semibold mt-2" data-v-7821b13a>${ssrInterpolate(tool.name)}</div><div class="small text-muted" data-v-7821b13a>${ssrInterpolate(tool.desc)}</div></div></div>`);
      });
      _push(`<!--]-->`);
      if (tools.length % 2 !== 0) {
        _push(`<div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" data-v-7821b13a><div class="gscard gscard-border w-100 text-center d-flex flex-column align-items-center justify-content-center py-4 bg-light border-0" style="${ssrRenderStyle({ "opacity": "0.5", "min-height": "160px" })}" data-v-7821b13a><i class="bx bx-dots-horizontal-rounded" style="${ssrRenderStyle({ "font-size": "2.5rem", "color": "#ced4da" })}" aria-hidden="true" data-v-7821b13a></i></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><section id="process" class="container-fluid py-5 my-5" data-v-7821b13a><div class="container py-5 my-5" data-v-7821b13a><h2 class="text-center mb-4 fw-bold mb-5 text-black" data-v-7821b13a>Nossa Metodologia</h2><div class="timeline-horizontal d-none d-md-flex flex-row justify-content-between align-items-center position-relative" style="${ssrRenderStyle({ "gap": "0" })}" data-v-7821b13a><!--[-->`);
      ssrRenderList(process, (step, i) => {
        _push(`<!--[-->`);
        if (i < process.length - 1) {
          _push(`<div class="timeline-connector d-none d-md-block position-absolute" style="${ssrRenderStyle({
            left: `calc(${(i + 0.5) / process.length * 100}% - 1px)`,
            top: "20%",
            width: `calc(100% / ${process.length})`,
            height: "2px",
            background: "linear-gradient(to right, #fff, #000, #fff)",
            zIndex: 0,
            transform: "translateY(-50%)"
          })}" data-v-7821b13a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="timeline-step d-flex flex-column align-items-center flex-fill px-2 position-relative" style="${ssrRenderStyle({ "z-index": "1", "min-width": "120px" })}" data-v-7821b13a><div class="timeline-icon d-flex align-items-center justify-content-center mb-3" style="${ssrRenderStyle({ "width": "64px", "height": "64px", "border-radius": "50%", "background": "#000", "box-shadow": "0 0 10px 0 rgba(0,0,0,0.08)" })}" data-v-7821b13a><i class="${ssrRenderClass("bx " + step.icon)}" style="${ssrRenderStyle({ "font-size": "2.2rem", "color": "#fff" })}" aria-hidden="true" data-v-7821b13a></i></div><div class="text-center" data-v-7821b13a><h5 class="fw-semibold text-black mb-2" data-v-7821b13a>${ssrInterpolate(step.title)}</h5><div class="small text-black" data-v-7821b13a>${ssrInterpolate(step.desc)}</div></div></div><!--]-->`);
      });
      _push(`<!--]--></div><div class="timeline-mobile d-flex d-md-none flex-row w-100" data-v-7821b13a><div class="timeline-mobile-icons d-flex flex-column align-items-center justify-content-between position-relative" style="${ssrRenderStyle({ "min-width": "64px" })}" data-v-7821b13a><!--[-->`);
      ssrRenderList(process, (step, i) => {
        _push(`<!--[--><div class="timeline-mobile-icon d-flex align-items-center justify-content-center" style="${ssrRenderStyle({ "width": "48px", "height": "48px", "border-radius": "50%", "background": "#000", "position": "relative", "z-index": "2" })}" data-v-7821b13a><i class="${ssrRenderClass("bx " + step.icon)}" style="${ssrRenderStyle({ "font-size": "1.5rem", "color": "#fff" })}" aria-hidden="true" data-v-7821b13a></i></div>`);
        if (i < process.length - 1) {
          _push(`<div class="timeline-mobile-connector" style="${ssrRenderStyle({ "width": "3px", "height": "60px", "background": "linear-gradient(to bottom, #fff, #000, #fff)", "margin": "0 auto", "z-index": "1" })}" data-v-7821b13a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><div class="timeline-mobile-texts d-flex flex-column justify-content-between flex-grow-1" data-v-7821b13a><!--[-->`);
      ssrRenderList(process, (step, i) => {
        _push(`<div class="mb-4" data-v-7821b13a><h5 class="fw-semibold text-black mb-1" data-v-7821b13a>${ssrInterpolate(step.title)}</h5><div class="small text-black" data-v-7821b13a>${ssrInterpolate(step.desc)}</div></div>`);
      });
      _push(`<!--]--></div></div></div></section><section id="timeline" class="container-fluid py-5 my-5 bg-black" data-v-7821b13a><div class="container py-5" data-v-7821b13a><h2 class="text-center mb-4 fw-bold text-light mb-5" data-v-7821b13a>Cronograma de Entrega</h2><div class="table-responsive" data-v-7821b13a><table class="table glass-table align-middle text-center rounded-2 overflow-hidden shadow-lg small" style="${ssrRenderStyle({ "background": "rgba(24,24,27,0.45)" })}" data-v-7821b13a><thead data-v-7821b13a><tr data-v-7821b13a><th class="py-2 px-1 text-uppercase text-secondary fw-bold border-0" data-v-7821b13a>Etapa</th><th class="py-2 px-1 text-uppercase text-secondary fw-bold border-0" data-v-7821b13a>Entrega</th><th class="py-2 px-1 text-uppercase text-secondary fw-bold border-0" data-v-7821b13a>Tempo Estimado</th></tr></thead><tbody data-v-7821b13a><!--[-->`);
      ssrRenderList(timeline, (row, idx) => {
        _push(`<tr class="${ssrRenderClass(idx % 2 === 0 ? "glass-zebra" : "")}" style="${ssrRenderStyle({ "transition": "background 0.2s" })}" data-v-7821b13a><td class="py-2 px-1 text-light border-0" data-v-7821b13a>${ssrInterpolate(row.etapa)}</td><td class="py-2 px-1 text-light border-0" data-v-7821b13a>${ssrInterpolate(row.entrega)}</td><td class="py-2 px-1 text-light border-0" data-v-7821b13a>${ssrInterpolate(row.tempo)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><p class="text-center text-light my-3 bg-danger p-3 rounded-3" data-v-7821b13a>Os prazos apresentados s\xE3o estimativas m\xE9dias para sites institucionais com conte\xFAdo b\xE1sico. Projetos mais complexos podem requerer um cronograma personalizado.</p></div></section><section id="differentials" class="container py-5" data-v-7821b13a><h2 class="text-center my-5 fw-bold" data-v-7821b13a>Nossos Diferenciais</h2><div class="row row-cols-2 row-cols-md-5 g-4 justify-content-center" data-v-7821b13a><!--[-->`);
      ssrRenderList(differentials, (diff, i) => {
        _push(`<div class="col d-flex"${ssrRenderAttr("data-gsap", "zoom fade-in")} data-v-7821b13a><div class="gscard gscard-border w-100 text-center d-flex flex-column align-items-center justify-content-center py-4" style="${ssrRenderStyle({ "min-height": "30vh" })}" data-v-7821b13a><div class="d-flex align-items-center justify-content-center mb-2" style="${ssrRenderStyle({ "width": "64px", "height": "64px", "border-radius": "50%", "background": "#000", "box-shadow": "0 0 10px 0 rgba(13,110,253,0.10)" })}" data-v-7821b13a><i class="${ssrRenderClass("bx " + diff.icon)}" style="${ssrRenderStyle({ "font-size": "2.2rem", "color": "#fff" })}" aria-hidden="true" data-v-7821b13a></i></div><div class="fw-semibold mt-2" data-v-7821b13a>${ssrInterpolate(diff.title)}</div><div class="small text-muted" data-v-7821b13a>${ssrInterpolate(diff.desc)}</div></div></div>`);
      });
      _push(`<!--]--></div></section><section id="faq" class="bg-black text-white py-5 my-5" data-v-7821b13a><div class="container py-5" data-v-7821b13a><h2 class="text-center mb-5 fw-bold text-light" data-v-7821b13a>Perguntas Frequentes</h2><div class="accordion" id="faqAccordion" data-v-7821b13a><!--[-->`);
      ssrRenderList(faqs, (faq, i) => {
        _push(`<div class="accordion-item" data-v-7821b13a><h2 class="accordion-header"${ssrRenderAttr("id", "heading" + i)} data-v-7821b13a><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#collapse" + i)} aria-expanded="false"${ssrRenderAttr("aria-controls", "collapse" + i)} data-v-7821b13a>${ssrInterpolate(faq.q)}</button></h2><div${ssrRenderAttr("id", "collapse" + i)} class="accordion-collapse collapse"${ssrRenderAttr("aria-labelledby", "heading" + i)} data-bs-parent="#faqAccordion" data-v-7821b13a><div class="accordion-body" data-v-7821b13a>${ssrInterpolate(faq.a)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section id="cta-final" class="container py-5 d-flex flex-column align-items-center justify-content-center text-center" data-gsap="fade-in scale" data-v-7821b13a><h2 class="fw-bold mb-3" data-v-7821b13a>Pronto mudar o seu neg\xF3cio?</h2><p class="lead mb-4" data-v-7821b13a>Solicite um or\xE7amento sem compromisso ou veja nosso portf\xF3lio de cases de sucesso.</p><div class="d-flex gap-3 justify-content-center mb-4" data-v-7821b13a>`);
      _push(ssrRenderComponent(_component_Form, null, null, _parent));
      _push(`</div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/servicos/criacao-de-sites.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const criacaoDeSites = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7821b13a"]]);

export { criacaoDeSites as default };
//# sourceMappingURL=criacao-de-sites-CIK3vWYd.mjs.map
