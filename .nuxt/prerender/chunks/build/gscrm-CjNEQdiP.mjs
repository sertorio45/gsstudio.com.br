import { _ as _export_sfc, m as useSeoMeta, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, withCtx, createTextVNode } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/h3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/devalue/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/destr/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ufo/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unhead/ssr/dist/index.mjs';
import '../routes/api/portifolio.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/hookable/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/klona/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/scule/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/defu/dist/defu.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ohash/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/radix3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/packrup/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/pathe/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/nodemailer/lib/nodemailer.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@dword-design/functions/dist/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ipx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unhead/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unctx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unhead/schema-org/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unhead/schema-org/dist/vue.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/imask/esm/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/pinia/dist/pinia.prod.cjs';

const __default__ = {
  methods: {
    scrollToElement(element) {
      const headerOffset = 50;
      const elementPosition = (void 0).querySelector(element).offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      (void 0).scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "gscrm",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "GSCRM - Aumente a Produtividade e Organize Suas Vendas",
      description: "O GSCRM oferece uma solu\xE7\xE3o completa para gerenciar leads, melhorar atendimento e maximizar vendas. Escolha o plano ideal para seu neg\xF3cio!",
      ogTitle: "GSCRM - Aumente a Produtividade e Organize Suas Vendas",
      ogDescription: "Sistema moderno para simplificar a gest\xE3o de leads, aumentar performance de vendas e centralizar dados de clientes.",
      ogUrl: "https://gscrm.com.br/",
      ogType: "website",
      robots: "index, follow",
      ogLocale: "pt-br"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><section class="d-flex align-items-center justify-content-center min-vh-100" id="sobre" data-v-415cadce><div class="container" data-v-415cadce><div class="row" data-v-415cadce><div class="col-12 col-md-5" data-v-415cadce><h2 data-v-415cadce>Transforme a Gest\xE3o de Clientes com o GSCRM</h2><p class="my-3" data-v-415cadce> O GSCRM \xE9 um sistema moderno, desenvolvido para simplificar a gest\xE3o de leads, melhorar a performance do seu time de vendas e centralizar todos os dados do cliente em uma \xFAnica plataforma. </p><ul data-v-415cadce><li data-v-415cadce>Acompanhe todas as etapas do funil de vendas</li><li data-v-415cadce>Integra\xE7\xE3o com e-mail e chat para comunica\xE7\xE3o \xE1gil</li><li data-v-415cadce>Dashboard intuitivo com relat\xF3rios em tempo real</li></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/planos",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Conhe\xE7a a Vers\xE3o Completa`);
          } else {
            return [
              createTextVNode("Conhe\xE7a a Vers\xE3o Completa")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-12 col-md-7 d-flex align-items-center justify-content-center text-center" data-v-415cadce><div class="row w-100" data-v-415cadce><div class="col-12 col-sm-6 col-md-4 d-flex mb-3" data-v-415cadce><div class="gscard gscard-border w-100" data-v-415cadce><i class="bx bx-user icon-circle" data-v-415cadce></i><h3 data-v-415cadce>Gest\xE3o de Leads</h3></div></div><div class="col-12 col-sm-6 col-md-4 d-flex mb-3" data-v-415cadce><div class="gscard gscard-border w-100" data-v-415cadce><i class="bx bx-line-chart icon-circle" data-v-415cadce></i><h3 data-v-415cadce>Relat\xF3rios de Vendas</h3></div></div><div class="col-12 col-sm-6 col-md-4 d-flex" data-v-415cadce><div class="gscard gscard-border w-100" data-v-415cadce><i class="bx bx-headphone icon-circle" data-v-415cadce></i><h3 data-v-415cadce>Suporte Integrado</h3></div></div></div></div></div></div></section><section class="text-center d-flex align-items-center justify-content-center text-center my-5 py-5 bg-light py-5" id="funcionalidades" data-v-415cadce><div class="container" data-v-415cadce><h2 data-v-415cadce>Funcionalidades Poderosas para Aumentar Sua Efici\xEAncia</h2><p data-v-415cadce>Confira os recursos que fazem o GSCRM ser a escolha certa para sua empresa.</p><div class="row" data-v-415cadce><div class="col-12 col-md-3 d-flex align-items-center justify-content-center mb-3" data-v-415cadce><div class="gscard gscard-border" data-v-415cadce><i class="bx bx-user icon-circle" data-v-415cadce></i><h3 data-v-415cadce>Gest\xE3o de Leads</h3><p data-v-415cadce>Organize e priorize seus leads com automa\xE7\xE3o e intelig\xEAncia.</p></div></div><div class="col-12 col-md-3 d-flex align-items-center justify-content-center mb-3" data-v-415cadce><div class="gscard gscard-border" data-v-415cadce><i class="bx bx-user icon-circle" data-v-415cadce></i><h3 data-v-415cadce>Relat\xF3rios e An\xE1lises</h3><p data-v-415cadce>Acompanhe o desempenho das vendas em tempo real.</p></div></div><div class="col-12 col-md-3 d-flex align-items-center justify-content-center mb-3" data-v-415cadce><div class="gscard gscard-border" data-v-415cadce><i class="bx bx-user icon-circle" data-v-415cadce></i><h3 data-v-415cadce>Suporte Integrado</h3><p data-v-415cadce>Conex\xE3o direta com seu time de suporte para um atendimento de qualidade.</p></div></div><div class="col-12 col-md-3 d-flex align-items-center justify-content-center mb-3" data-v-415cadce><div class="gscard gscard-border" data-v-415cadce><i class="bx bx-cog icon-circle" data-v-415cadce></i><h3 data-v-415cadce>Customiza\xE7\xE3o</h3><p data-v-415cadce>Personalize o CRM de acordo com as necessidades do seu neg\xF3cio.</p></div></div></div></div></section><section class="text-center d-flex align-items-center justify-content-center text-center my-5 py-5 py-5" id="planos" data-v-415cadce><div class="container" data-v-415cadce><h2 data-v-415cadce>Escolha o Plano Ideal para Sua Empresa</h2><p data-v-415cadce>Dois planos sob medida para atender empresas de todos os portes.</p><div class="row" data-v-415cadce><div class="col-12 col-md-6 d-flex align-items-center justify-content-center mb-3" data-v-415cadce><div class="gscard gscard-border w-100" data-v-415cadce><h3 data-v-415cadce>GSCRM Essencial</h3><p data-v-415cadce>Acesse todas as funcionalidades, sem suporte dedicado.</p><h4 data-v-415cadce>R$ 99/m\xEAs</h4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Assinar Agora`);
          } else {
            return [
              createTextVNode("Assinar Agora")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-12 col-md-6 d-flex align-items-center justify-content-center mb-3" data-v-415cadce><div class="gscard gscard-border w-100" data-v-415cadce><h3 data-v-415cadce>GSCRM Premium</h3><p data-v-415cadce>Funcionalidades completas + Suporte Premium para configura\xE7\xE3o.</p><h4 data-v-415cadce>R$ 199/m\xEAs</h4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Assinar Agora`);
          } else {
            return [
              createTextVNode("Assinar Agora")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><section class="text-center d-flex align-items-center justify-content-center my-5 text-center py-5 bg-light py-5" id="depoimentos" data-v-415cadce><div class="container" data-v-415cadce><h2 data-v-415cadce>O Que Nossos Clientes Dizem</h2><div class="row" data-v-415cadce><div class="col-12 col-md-4 d-flex align-items-center justify-content-center mb-4" data-v-415cadce><div class="gscard gscard-border" data-v-415cadce><p data-v-415cadce>&quot;O GSCRM revolucionou nossa gest\xE3o de clientes. Agora temos controle total sobre nosso pipeline e as vendas s\xF3 aumentaram.&quot;</p><h4 data-v-415cadce>- Jo\xE3o Silva, CEO da Empresa X</h4></div></div><div class="col-12 col-md-4 d-flex align-items-center justify-content-center mb-4" data-v-415cadce><div class="gscard gscard-border" data-v-415cadce><p data-v-415cadce>&quot;O suporte premium fez toda a diferen\xE7a. Configuraram tudo para n\xF3s, e o atendimento foi impec\xE1vel.&quot;</p><h4 data-v-415cadce>- Maria Oliveira, Gerente de Vendas</h4></div></div><div class="col-12 col-md-4 d-flex align-items-center justify-content-center mb-4" data-v-415cadce><div class="gscard gscard-border" data-v-415cadce><p data-v-415cadce>&quot;Usamos o GSCRM h\xE1 6 meses e a melhoria nos processos internos \xE9 vis\xEDvel. Recomendo para qualquer empresa!&quot;</p><h4 data-v-415cadce>- Pedro Lima, Diretor de Opera\xE7\xF5es</h4></div></div></div></div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/solucoes.bkop/gscrm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gscrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-415cadce"]]);

export { gscrm as default };
//# sourceMappingURL=gscrm-CjNEQdiP.mjs.map
