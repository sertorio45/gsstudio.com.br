import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import "../node_modules/_nuxt/image/dist/runtime/components/NuxtImg.vue.mjs";
import { defineComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import CarouselParceiros from "../components/CarouselParceiros.vue.mjs";
import Portifolio from "../components/Portifolio.vue.mjs";
import "../components/Blog.vue.mjs";
import { defineOgImage } from "../node_modules/nuxt-og-image/dist/runtime/app/composables/defineOgImage.mjs";
import { useHead, useSeoMeta } from "../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
import _sfc_main$1 from "../node_modules/_nuxt/image/dist/runtime/components/NuxtImg.vue2.mjs";
import _sfc_main$2 from "../components/Blog.vue2.mjs";
const __default__ = defineComponent({
  name: "IndexPage",
  components: {
    CarouselParceiros,
    Portifolio,
    Blog: _sfc_main$2
  },
  methods: {
    importAll(r) {
      return r.keys().map(r);
    },
    initCardAnimation() {
      const cards = (void 0).querySelectorAll(".gscard");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const randomDelay = Math.random() * 1e3;
            setTimeout(() => {
              entry.target.classList.add("animate");
              observer.unobserve(entry.target);
            }, randomDelay);
          }
        });
      }, {
        threshold: 0.5
        // Adjust this value as needed
      });
      cards.forEach((card) => {
        observer.observe(card);
      });
    },
    initCounters() {
      const counters = (void 0).querySelectorAll(".count");
      const speed = 9e3;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.startCounting(counters, speed);
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 1
        // Iniciar a contagem quando 100% da seção estiver visível
      });
      const target = (void 0).getElementById("conquistas");
      if (target) {
        observer.observe(target);
      }
    },
    startCounting(counters, speed) {
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-count");
          const count = +counter.innerText;
          const increment = target / (speed / 100);
          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    },
    scrollToElement(element) {
      const headerOffset = 50;
      const elementPosition = (void 0).querySelector(element).offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      (void 0).scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    this.initCardAnimation();
    this.initCounters();
    this.$router.afterEach((to, from) => {
      if (to.name === "index") {
        setTimeout(() => {
          this.initCardAnimation();
        }, 100);
      }
    });
  }
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    defineOgImage({ url: "https://gsstudio.com.br/img/thumb_gsstudio.jpg", width: 1200, height: 600, alt: "GS STUDIO - Markteting, comunicação e desenvolvimento web" });
    useHead({
      meta: [
        { name: "lang", content: "pt-BR" },
        { name: "language", content: "pt-BR" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "canonical", content: "https://www.gsstudio.com.br" },
        { name: "keywords", content: "marketing digital, criação de sites, otimização de sites (SEO), Google Ads, campanhas online, agência digital, agência de marketing, lojas virtuais, e-commerce, gestão de redes sociais, desenvolvimento web, design responsivo, tráfego pago, branding, identidade visual, marketing para empresas, marketing para pequenas empresas, marketing em Sertãozinho, marketing em Ribeirão Preto, SEO local, social media marketing, estratégia de marketing digital, anúncios online, agência de SEO, criação de conteúdo, marketing de conteúdo, hospedagem de sites, otimização de conversão (CRO), email marketing, automação de marketing, consultoria em marketing digital, campanhas pagas no Google, performance digital, WordPress, criação de blogs, gestão de tráfego, otimização de desempenho do site, desenvolvimento de sistemas web, produção audiovisual, estratégias de marketing SP, agência de marketing em SP." }
      ],
      link: [
        { rel: "canonical", href: "https://gsstudio.com.br" }
      ]
    });
    useSeoMeta({
      title: "Marketing, Comunicação e Desenvolvimento Web em Ribeirão Preto, Sertãozinho, São Paulo, Brasil",
      description: "Agência full service especializada em design, marketing e tecnologia estamos localizados em Ribeirão Preto para região e Brasil.",
      ogTitle: "Marketing, Comunicação e Desenvolvimento Web em Ribeirão Preto, Sertãozinho, São Paulo, Brasil",
      ogDescription: "Agência full service especializada em design, marketing e tecnologia, oferecendo soluções completas com foco em resultados.",
      ogUrl: "https://gsstudio.com.br/",
      ogType: "website",
      robots: "index, follow",
      ogLocale: "pt-br"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$1;
      _push(`<!--[--><section class="d-flex align-items-center mt-5 py-5" id="index" data-v-b421e175><div class="container text-center my-5 py-5" data-v-b421e175><div class="row" data-v-b421e175><div class="col" data-v-b421e175><h1 data-v-b421e175><em data-v-b421e175>Posicionamento, resultados e performance para sua empresa.</em></h1><p class="my-4" data-v-b421e175>Fazemos sua empresa crescer usando branding, tecnologia e marketing.</p><div class="d-flex justify-content-center flex-column flex-md-row align-items-center px-2" data-v-b421e175>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-primary-border my-2 ms-md-2"
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
      _push(`</div></div></div></div></section><section class="d-flex align-items-center bg-light py-5" id="sobre" data-v-b421e175><div class="container" data-v-b421e175><div class="row" data-v-b421e175><div class="col-12 col-md-5" data-v-b421e175><h2 data-v-b421e175>Somos especialistas</h2><p class="my-3" data-v-b421e175> A GS Studio é uma agência que combina marketing, design e tecnologia para criar soluções criativas que impulsionam o sucesso de negócios. Nosso foco está em entregar resultados que realmente fazem a diferença. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/sobre",
        class: "btn btn-primary d-none d-md-inline-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Conheça mais sobre nós `);
          } else {
            return [
              createTextVNode(" Conheça mais sobre nós ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-12 col-md-7 text-center d-flex align-items-sm-center justify-content-sm-end" data-v-b421e175><div class="row w-100" data-v-b421e175><div class="col-12 col-sm-6 col-md-4 d-flex mb-3 mb-md-0" data-v-b421e175><div class="gscard gscard-border w-100" data-v-b421e175>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/icon-design.svg",
        class: "p-2 my-1",
        alt: "GS STUDIO - Design para marketing e comunicação"
      }, null, _parent));
      _push(`<h3 data-v-b421e175>Design</h3></div></div><div class="col-12 col-sm-6 col-md-4 d-flex mb-3 mb-md-0" data-v-b421e175><div class="gscard gscard-border w-100" data-v-b421e175>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/icon-marketing.svg",
        class: "p-2 my-1",
        alt: "GS STUDIO - Marketing e comunicação digital"
      }, null, _parent));
      _push(`<h3 data-v-b421e175>Marketing</h3></div></div><div class="col-12 col-sm-6 col-md-4 d-flex" data-v-b421e175><div class="gscard gscard-border w-100" data-v-b421e175>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/icon-tecnologia.svg",
        class: "p-2 my-1",
        alt: "GS STUDIO - Tecnologia para sites e comunicação"
      }, null, _parent));
      _push(`<h3 data-v-b421e175>Tecnologia</h3></div></div><div class="mt-5" data-v-b421e175>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/sobre",
        class: "btn btn-primary d-md-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Conheça mais sobre nós `);
          } else {
            return [
              createTextVNode(" Conheça mais sobre nós ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></section><section class="text-center my-5 py-5 d-flex justify-content-center align-items-center" id="conquistas" data-v-b421e175><div class="container" data-v-b421e175><div class="row" data-v-b421e175><div class="col-12 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-b421e175><div class="gscard gscard-border" data-v-b421e175><h3 data-v-b421e175><em data-v-b421e175>+ de <em class="count" data-count="65" data-v-b421e175>0</em></em></h3><span data-v-b421e175>Sites produzidos</span></div></div><div class="col-12 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-b421e175><div class="gscard gscard-border" data-v-b421e175><h3 data-v-b421e175><em data-v-b421e175>+ de <em class="count" data-count="400" data-v-b421e175>0</em></em></h3><span data-v-b421e175>Clientes ativos</span></div></div><div class="col-12 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-b421e175><div class="gscard gscard-border" data-v-b421e175><h3 data-v-b421e175><em data-v-b421e175>+ de <em class="count" data-count="80" data-v-b421e175>0</em></em></h3><span data-v-b421e175>Marcas desenvolvidas</span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-b421e175><div class="gscard gscard-border" data-v-b421e175><h3 data-v-b421e175><em data-v-b421e175>+ de <em class="count" data-count="7" data-v-b421e175>0</em></em></h3><span data-v-b421e175>Anos de mercado</span></div></div></div></div></section><section class="my-5 d-flex align-items-center justify-content-center" id="parceiros" data-v-b421e175><div class="container text-center my-5" data-v-b421e175><div class="row" data-v-b421e175><h2 data-v-b421e175>Parceiros e clientes</h2><div id="app" data-v-b421e175><div class="col" data-v-b421e175>`);
      _push(ssrRenderComponent(CarouselParceiros, null, null, _parent));
      _push(`</div></div></div></div></section><section class="d-flex align-items-center justify-content-center bg-light py-5" id="servicos" data-v-b421e175><div class="container text-center my-5" data-v-b421e175><div class="row" data-v-b421e175><h2 data-v-b421e175>Soluções e serviços</h2><p class="my-3" data-v-b421e175> A GS STUDIO está comprometida com resultados. Acreditamos que a criatividade e o design, alinhados com uma estratégia eficaz, geram resultados melhores e duradouros. </p><div class="row p-3" data-v-b421e175><div class="col-6 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-b421e175><div class="gscard gscard-border" data-v-b421e175>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/servicos/sites.svg",
        class: "p-2 my-1",
        alt: "GS STUDIO - Criação de sites e comunicação"
      }, null, _parent));
      _push(`<h3 data-v-b421e175>Sites</h3></div></div><div class="col-6 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-b421e175><div class="gscard gscard-border" data-v-b421e175>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/servicos/gestao_de_conteudo.svg",
        class: "p-2 my-1",
        alt: "GS STUDIO - Gestão de conteúdo e redes sociais"
      }, null, _parent));
      _push(`<h3 data-v-b421e175>Redes sociais</h3></div></div><div class="col-6 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-b421e175><div class="gscard gscard-border" data-v-b421e175>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/servicos/lojas_virtuais.svg",
        class: "p-2 my-1",
        alt: "GS STUDIO - Lojas virtuais e marketing digital"
      }, null, _parent));
      _push(`<h3 class="h1" data-v-b421e175>Lojas virtuais</h3></div></div><div class="col-6 col-sm-6 col-md-3" data-v-b421e175><div class="gscard gscard-border" data-v-b421e175>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/servicos/branding.svg",
        class: "p-2 my-1",
        alt: "GS STUDIO - Criação de marcas e branding"
      }, null, _parent));
      _push(`<h3 data-v-b421e175>Marcas</h3></div></div></div><div class="row mt-5" data-v-b421e175><div class="col" data-v-b421e175>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/servicos",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ver todos os serviços`);
          } else {
            return [
              createTextVNode("Ver todos os serviços")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section>`);
      _push(ssrRenderComponent(Portifolio, null, null, _parent));
      _push(`<section class="text-center gscard my-5" id="cta" data-v-b421e175><div class="container d-flex align-items-center justify-content-center bg-cta my-5" data-v-b421e175><div class="row" data-v-b421e175><div class="col text-light" data-v-b421e175><h2 class="text-light" data-v-b421e175>Transforme Resultados com Design, Marketing e Tecnologia!</h2><div class="subheadline d-flex justify-content-center py-2" data-v-b421e175><p data-v-b421e175>Potencialize seu negócio com soluções criativas e inovadoras. Nós entregamos resultados excepcionais através de estratégias personalizadas e tecnologia de ponta.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<em data-v-b421e175${_scopeId}>Entrar agora em contato</em>`);
          } else {
            return [
              createVNode("em", null, "Entrar agora em contato")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b421e175"]]);
export {
  index as default
};
//# sourceMappingURL=index.vue.mjs.map
