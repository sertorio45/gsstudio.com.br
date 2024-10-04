import { _ as _export_sfc, u as useHead, e as useSeoMeta, a as __nuxt_component_0$1 } from './server.mjs';
import { _ as _sfc_main$1 } from './Icon-5pRBvot5.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/h3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unhead/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/destr/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/klona/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/devalue/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ohash/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/schema-org/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/schema-org/dist/vue.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/imask/esm/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/ssr/dist/index.mjs';
import '../routes/api/portifolio.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/scule/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/packrup/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ipx/dist/index.mjs';

const _imports_0 = publicAssetsURL("/img/ceo.webp");
const _sfc_main = {
  __name: "sobre",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      meta: [
        { name: "robots", content: "noindex,follow" },
        { name: "canonical", content: "https://www.gsstudio.com.br/sobre" }
      ]
    });
    useSeoMeta({
      title: "Sobre | GS STUDIO",
      ogTitle: "Sobre | GS STUDIO",
      ogUrl: "https://gsstudio.com.br/sobre",
      ogSiteName: "GS STUDIO",
      ogLocale: "pt_BR"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = _sfc_main$1;
      _push(`<!--[--><section class="py-5 bg-dark d-flex mt-5 text-ligth" data-v-1f63ad5b><div class="container d-flex justify-content-center align-items-center my-5 py-5" data-v-1f63ad5b><div class="row" data-v-1f63ad5b><div class="col text-center text-light my-2" data-v-1f63ad5b><div class="my-2" data-v-1f63ad5b>`);
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
      _push(` / <span data-v-1f63ad5b>Sobre</span></div><h1 class="text-light" data-v-1f63ad5b>Sobre a GS STUDIO</h1><a href="#topo" data-v-1f63ad5b>`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxs-chevrons-down my-3",
        fontSize: "3em",
        color: "#fff"
      }, null, _parent));
      _push(`</a></div></div></div></section><section class="py-5 min-vh-100 d-flex align-items-center justify-items-center bg-dark text-light section" id="topo" data-v-1f63ad5b><div class="container" data-v-1f63ad5b><div class="row align-items-center g-5 my-5" data-v-1f63ad5b><div class="col-md-6 mb-4 order-2 order-md-1" data-v-1f63ad5b><img${ssrRenderAttr("src", _imports_0)} alt="Foto de Giovanni Sertorio" class="img-fluid" data-v-1f63ad5b><a href="#marcos" class="btn btn-primary d-sm-block d-md-none my-4" data-v-1f63ad5b>Continue...</a></div><div class="col-md-6 order-1 order-md-2" data-v-1f63ad5b><h2 class="text-light" data-v-1f63ad5b>Nossa Trajet\xF3ria</h2><p data-v-1f63ad5b> A GS STUDIO foi fundada por Giovanni Sertorio, um entusiasta de tecnologia e design. Desde a adolesc\xEAncia, Giovanni aprimorou suas habilidades em design gr\xE1fico, web design, hardware e programa\xE7\xE3o. Com experi\xEAncia em ensino, ele formou diversos alunos nas \xE1reas em que atua. Motivado a transformar o mercado de comunica\xE7\xE3o visual e marketing, Giovanni criou a GS STUDIO para ajudar empresas a se destacarem com solu\xE7\xF5es criativas e de alta qualidade, focadas em criar conex\xF5es impactantes com seus consumidores. </p><a href="#marcos" class="btn btn-primary d-none d-md-inline-flex" data-v-1f63ad5b>Continue...</a></div></div></div></section><section class="mission-vision-values section" id="marcos" data-v-1f63ad5b><div class="container" data-v-1f63ad5b><div class="row" data-v-1f63ad5b><div class="col-md-4 col-sm-12 text-center" data-v-1f63ad5b><i class="bx bxs-rocket" data-v-1f63ad5b></i><h3 data-v-1f63ad5b>Miss\xE3o</h3><p data-v-1f63ad5b>Entregar excel\xEAncia e inova\xE7\xE3o com agilidade, foco em resultados e total compromisso com clientes e parceiros.</p></div><div class="col-md-4 col-sm-12 text-center" data-v-1f63ad5b><i class="bx bxs-bulb" data-v-1f63ad5b></i><h3 data-v-1f63ad5b>Vis\xE3o</h3><p data-v-1f63ad5b>Ser refer\xEAncia em solu\xE7\xF5es criativas e de alta qualidade, desenvolvendo projetos que integram comunica\xE7\xE3o visual, design, web design e marketing.</p></div><div class="col-md-4 col-sm-12 text-center" data-v-1f63ad5b><i class="bx bxs-heart" data-v-1f63ad5b></i><h3 data-v-1f63ad5b>Valores</h3><p data-v-1f63ad5b>Transformar a percep\xE7\xE3o de produtos e servi\xE7os atrav\xE9s de estrat\xE9gias eficazes, com foco em atrair clientes e gerar resultados comerciais.</p></div></div><div class="d-flex justify-content-center my-3" data-v-1f63ad5b><a href="#timeline" class="btn btn-primary text-center" data-v-1f63ad5b>Continue...</a></div></div></section><section class="my-5 min-vh-100 py-5" id="timeline" data-v-1f63ad5b><div class="container timeline-container my-5 py-5" data-v-1f63ad5b><div class="row" data-v-1f63ad5b><div class="col text-center" data-v-1f63ad5b><h2 class="text-dark" data-v-1f63ad5b>Marcos Importantes</h2><p data-v-1f63ad5b>Ao longo dos anos, a GS STUDIO tem crescido e evolu\xEDdo constantemente. Desde nossa funda\xE7\xE3o, expandimos nossos servi\xE7os, ampliamos nossa equipe e conquistamos projetos importantes que marcaram nossa trajet\xF3ria.</p></div></div><div class="timeline" data-v-1f63ad5b><div class="timeline-item" data-v-1f63ad5b><div class="timeline-content gscard gscard-border" data-v-1f63ad5b><h4 data-v-1f63ad5b>2016</h4><p data-v-1f63ad5b>In\xEDcio das atividades com redes sociais, focando em estrat\xE9gias de comunica\xE7\xE3o e marketing indireto para gerar resultados eficazes.</p></div></div><div class="timeline-item" data-v-1f63ad5b><div class="timeline-content gscard gscard-border" data-v-1f63ad5b><h4 data-v-1f63ad5b>2017</h4><p data-v-1f63ad5b>Funda\xE7\xE3o oficial da empresa em 17/03/2017, marcando o in\xEDcio de uma nova era.</p></div></div><div class="timeline-item" data-v-1f63ad5b><div class="timeline-content gscard gscard-border" data-v-1f63ad5b><h4 data-v-1f63ad5b>2019</h4><p data-v-1f63ad5b>Expans\xE3o do ambiente online para uma sala comercial em Sert\xE3ozinho - SP, aumentando a proximidade com nossos clientes.</p></div></div><div class="timeline-item" data-v-1f63ad5b><div class="timeline-content gscard gscard-border" data-v-1f63ad5b><h4 data-v-1f63ad5b>2020</h4><p data-v-1f63ad5b>Diante dos desafios impostos pela pandemia de COVID-19, voltamos a operar online, mas crescemos mais de 150%, demonstrando nossa resili\xEAncia e adaptabilidade.</p></div></div><div class="timeline-item" data-v-1f63ad5b><div class="timeline-content gscard gscard-border" data-v-1f63ad5b><h4 data-v-1f63ad5b>2021</h4><p data-v-1f63ad5b>Giovanni Sertorio mudou-se para Ribeir\xE3o Preto com o objetivo de impulsionar ainda mais o crescimento da empresa. Mantivemos as opera\xE7\xF5es online, com um crescimento cont\xEDnuo e consistente a cada m\xEAs.</p></div></div><div class="timeline-item" data-v-1f63ad5b><div class="timeline-content gscard gscard-border" data-v-1f63ad5b><h4 data-v-1f63ad5b>2022</h4><p data-v-1f63ad5b>A empresa se estabeleceu oficialmente em Ribeir\xE3o Preto, consolidando sua presen\xE7a na regi\xE3o.</p></div></div><div class="timeline-item" data-v-1f63ad5b><div class="timeline-content gscard gscard-border" data-v-1f63ad5b><h4 data-v-1f63ad5b>2023</h4><p data-v-1f63ad5b>Mudan\xE7a para uma nova sala comercial, acompanhada de reformas estrat\xE9gicas e a migra\xE7\xE3o das equipes para modelos presenciais e h\xEDbridos. Tamb\xE9m come\xE7amos a desenvolver e comercializar sistemas para facilitar vendas, gest\xE3o e atendimento de outras empresas.</p></div></div><div class="timeline-item" data-v-1f63ad5b><div class="timeline-content gscard gscard-border" data-v-1f63ad5b><h4 data-v-1f63ad5b>2024</h4><p data-v-1f63ad5b>Com o avan\xE7o das tecnologias de desenvolvimento e as automa\xE7\xF5es aprimoradas, continuamos a melhorar nossos processos de vendas, atendimento e produ\xE7\xE3o. Nossos sistemas personalizados ajudam outras empresas a otimizar suas opera\xE7\xF5es.</p></div></div></div></div></section><section class="py-5 bg-dark text-light text-center" data-v-1f63ad5b><div class="container" data-v-1f63ad5b><h2 class="mb-4 text-light" data-v-1f63ad5b>Vamos Transformar Seu Neg\xF3cio?</h2><p class="lead" data-v-1f63ad5b>Se voc\xEA deseja destacar sua marca e conectar-se de forma genu\xEDna com seus clientes, a GS STUDIO \xE9 o parceiro ideal.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-primary btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Entre em Contato`);
          } else {
            return [
              createTextVNode("Entre em Contato")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sobre.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sobre = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1f63ad5b"]]);

export { sobre as default };
//# sourceMappingURL=sobre-BWhURQ3u.mjs.map
