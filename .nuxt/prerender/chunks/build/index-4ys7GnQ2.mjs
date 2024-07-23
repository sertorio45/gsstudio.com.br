import { _ as __nuxt_component_0 } from './nuxt-img-BEtjlaZ7.mjs';
import { Autoplay } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/swiper/modules/index.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, computed, createTextVNode, toDisplayString } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/server-renderer/index.mjs';
import { Swiper, SwiperSlide } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/swiper/swiper-vue.mjs';
import { _ as _export_sfc, N } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-D1zm17Ab.mjs';
import './index-xyyCGchu.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/h3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/devalue/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/destr/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/klona/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/scule/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ohash/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ipx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unhead/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/pinia/dist/pinia.prod.cjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CarouselParceiros",
  __ssrInlineRender: true,
  setup(__props) {
    const parceiros = ref([
      "img/parceiros/cliente-1.webp",
      "img/parceiros/cliente-2.webp",
      "img/parceiros/cliente-3.webp",
      "img/parceiros/cliente-4.webp",
      "img/parceiros/cliente-5.webp",
      "img/parceiros/cliente-6.webp",
      "img/parceiros/cliente-7.webp",
      "img/parceiros/cliente-8.webp",
      "img/parceiros/cliente-9.webp",
      "img/parceiros/cliente-10.webp",
      "img/parceiros/cliente-11.webp",
      "img/parceiros/cliente-12.webp",
      "img/parceiros/cliente-13.webp",
      "img/parceiros/cliente-14.webp",
      "img/parceiros/cliente-15.webp",
      "img/parceiros/cliente-16.webp",
      "img/parceiros/cliente-17.webp",
      "img/parceiros/cliente-18.webp",
      "img/parceiros/cliente-19.webp",
      "img/parceiros/cliente-20.webp",
      "img/parceiros/cliente-21.webp",
      "img/parceiros/cliente-22.webp",
      "img/parceiros/cliente-23.webp",
      "img/parceiros/cliente-24.webp",
      "img/parceiros/cliente-25.webp",
      "img/parceiros/cliente-26.webp",
      "img/parceiros/cliente-27.webp",
      "img/parceiros/cliente-28.webp",
      "img/parceiros/cliente-29.webp",
      "img/parceiros/cliente-30.webp",
      "img/parceiros/cliente-31.webp",
      "img/parceiros/cliente-32.webp",
      "img/parceiros/cliente-33.webp"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper-container my-5" }, _attrs))} data-v-8d50a90e>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay)],
        "slides-per-view": 7,
        "space-between": 10,
        loop: true,
        autoplay: { delay: 500, disableOnInteraction: false }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(parceiros.value, (parceiro, index2) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index2 }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", parceiro)} class="d-block w-100 parceiro-img"${ssrRenderAttr("alt", "Parceiro " + (index2 + 1))} data-v-8d50a90e${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: parceiro,
                        class: "d-block w-100 parceiro-img",
                        alt: "Parceiro " + (index2 + 1)
                      }, null, 8, ["src", "alt"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(parceiros.value, (parceiro, index2) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index2 }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: parceiro,
                      class: "d-block w-100 parceiro-img",
                      alt: "Parceiro " + (index2 + 1)
                    }, null, 8, ["src", "alt"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="swiper-gradient-left" data-v-8d50a90e></div><div class="swiper-gradient-right" data-v-8d50a90e></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CarouselParceiros.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8d50a90e"]]);
const perRow = 4;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Portifolio",
  __ssrInlineRender: true,
  setup(__props) {
    const images = ref([]);
    const rows = ref(2);
    const loading = ref(false);
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const imageRows = computed(() => {
      const rowsArr = [];
      for (let i = 0; i < rows.value; i++) {
        rowsArr.push(images.value.slice(i * perRow, (i + 1) * perRow));
      }
      return rowsArr;
    });
    const onHide = () => {
      visibleRef.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-section my-5 min-vh-100 text-center" }, _attrs))} data-v-404886bc><div class="container-fluid my-5" data-v-404886bc><div class="row" data-v-404886bc><div class="col-12 text-center" data-v-404886bc><h2 data-v-404886bc>Portifolio</h2></div></div><div class="row justify-content-center m-5" data-v-404886bc><!--[-->`);
      ssrRenderList(imageRows.value, (row, rowIndex) => {
        _push(`<div class="col-12 image-row" data-v-404886bc><div class="row justify-content-center" data-v-404886bc><!--[-->`);
        ssrRenderList(row, (image, index2) => {
          _push(`<div class="col-4 col-md-2 mb-4" data-v-404886bc><img${ssrRenderAttr("src", image.src)} class="image-thumbnail img-fluid" data-v-404886bc></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="row justify-content-center" data-v-404886bc><div class="col-auto" data-v-404886bc><button${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="btn btn-primary" data-v-404886bc>`);
      if (loading.value) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-404886bc></span>`);
      } else {
        _push(`<span data-v-404886bc>Ver mais</span>`);
      }
      _push(`</button></div></div>`);
      _push(ssrRenderComponent(unref(N), {
        visible: visibleRef.value,
        imgs: images.value,
        index: indexRef.value,
        onHide
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Portifolio.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-404886bc"]]);
const _sfc_main$1 = defineComponent({
  name: "Blog",
  setup() {
    const articles = ref([]);
    const categories = ref([]);
    const loading = ref(true);
    const baseURL = process.env.VITE_STRAPI_URL || "https://str-gsstudio.gsstudio.com.br";
    const getArticleImage = (article) => {
      if (article.thumb && article.thumb.url) {
        const url = new URL(article.thumb.url, baseURL).href;
        console.log("Generated image URL:", url);
        return url;
      }
      return "thumb_blog_gsstudio.webp";
    };
    const formatDate = (date) => {
      if (!date)
        return "";
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-BR", options);
    };
    const getCategoryTitle = (categoryId) => {
      if (!categoryId)
        return "";
      const category = categories.value.find((cat) => cat.id === categoryId);
      return category ? category.title : "";
    };
    return {
      articles,
      categories,
      loading,
      getArticleImage,
      getCategoryTitle,
      formatDate
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_NuxtImg = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "my-5 min-vh-100 justify-content-center align-content-center bg-light",
    id: "blog"
  }, _attrs))} data-v-c4f75634><div class="container my-5" data-v-c4f75634><div class="row" data-v-c4f75634><h2 class="text-center" data-v-c4f75634>Blog</h2>`);
  if (_ctx.loading) {
    _push(`<!--[-->`);
    ssrRenderList(4, (n) => {
      _push(`<div class="col-md-3 my-5" data-v-c4f75634><div class="card" data-v-c4f75634><div class="image-container" data-v-c4f75634><div class="skeleton skeleton-img" data-v-c4f75634></div></div><div class="card-body" data-v-c4f75634><div class="mb-2" data-v-c4f75634><div class="skeleton skeleton-category" data-v-c4f75634></div></div><div class="skeleton skeleton-title" data-v-c4f75634></div></div></div></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.articles, (article) => {
      _push(`<div class="col-md-3 my-5" data-v-c4f75634><div class="card" data-v-c4f75634><div class="image-container" data-v-c4f75634>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/artigos/${article.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: _ctx.getArticleImage(article),
              class: ["img-fluid blur-effect", { "blurred": !article.imageLoaded }],
              alt: article.titulo,
              onLoad: ($event) => article.imageLoaded = true,
              lazy: "loading"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: _ctx.getArticleImage(article),
                class: ["img-fluid blur-effect", { "blurred": !article.imageLoaded }],
                alt: article.titulo,
                onLoad: ($event) => article.imageLoaded = true,
                lazy: "loading"
              }, null, 8, ["src", "class", "alt", "onLoad"])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div><div class="card-body" data-v-c4f75634><div class="mb-2" data-v-c4f75634><span class="article-category" data-v-c4f75634>${ssrInterpolate(_ctx.getCategoryTitle(article.category))}</span></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/artigos/${article.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(article.titulo)}`);
          } else {
            return [
              createTextVNode(toDisplayString(article.titulo), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div></div>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</div><div class="row" data-v-c4f75634><div class="col d-flex align-content-center justify-content-center" data-v-c4f75634><button class="btn btn-primary" data-v-c4f75634>Ver mais artigos</button></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c4f75634"]]);
const _sfc_main = defineComponent({
  name: "IndexPage",
  components: {
    CarouselParceiros: __nuxt_component_1,
    Portifolio: __nuxt_component_2,
    Blog: __nuxt_component_3
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtImg = __nuxt_component_0;
  const _component_CarouselParceiros = __nuxt_component_1;
  const _component_Portifolio = __nuxt_component_2;
  const _component_Blog = __nuxt_component_3;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-a43378b0><section class="d-flex align-items-center min-vh-100" id="index" data-v-a43378b0><div class="container text-center" data-v-a43378b0><div class="row" data-v-a43378b0><div class="col" data-v-a43378b0><h1 data-v-a43378b0>Aumente a <em data-v-a43378b0>performance</em> da sua <em data-v-a43378b0>empresa.</em></h1><p class="my-4" data-v-a43378b0>Destaque sua empresa \xE0 frente de seus concorrentes com estrat\xE9gias de branding, marketing e tecnologia.</p><div class="d-flex justify-content-center" data-v-a43378b0><button class="btn btn-primary" data-v-a43378b0>Nos conhe\xE7a um pouco</button><button class="btn btn-primary-border" data-v-a43378b0>Entre em contato rapidamente</button></div></div></div></div></section><section class="d-flex align-items-center bg-light py-5" id="sobre" data-v-a43378b0><div class="container" data-v-a43378b0><div class="row" data-v-a43378b0><div class="col-5" data-v-a43378b0><h2 data-v-a43378b0>Somos especialistas</h2><p class="my-3 d-block" data-v-a43378b0> Design publicit\xE1rio, marketing online/offline e websites. Na GS STUDIO, combinamos criatividade e estrat\xE9gias comprovadas para desenvolver campanhas de marketing eficazes e impactantes. Nossos especialistas em tecnologia oferecem solu\xE7\xF5es personalizadas para maximizar a efici\xEAncia do seu neg\xF3cio. </p></div><div class="col-7 text-center align-content-center content-justify-center px-5" data-v-a43378b0><div data-v-a43378b0><div class="d-flex" data-v-a43378b0><div class="col-4 gscard gscard-border" data-v-a43378b0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "icons/icon-design.svg",
    class: "p-2 m-2"
  }, null, _parent));
  _push(`<h3 data-v-a43378b0>Design</h3><a href="#none" data-v-a43378b0>Saiba mais</a></div><div class="col-4 gscard gscard-border" data-v-a43378b0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "icons/icon-marketing.svg",
    class: "p-2 m-2"
  }, null, _parent));
  _push(`<h3 data-v-a43378b0>Marketing</h3><a href="#none" data-v-a43378b0>Saiba mais</a></div><div class="col-4 gscard gscard-border" data-v-a43378b0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "icons/icon-tecnologia.svg",
    class: "p-2 m-2"
  }, null, _parent));
  _push(`<h3 data-v-a43378b0>Tecnologia</h3><a href="#none" data-v-a43378b0>Saiba mais</a></div></div></div></div></div></div></section><section class="py-5 text-center" id="conquistas" data-v-a43378b0><div class="container my-3" data-v-a43378b0><div class="row" data-v-a43378b0><div class="col-12 col-sm-6 col-md-3" data-v-a43378b0><div class="gscard gscard-border" data-v-a43378b0><h3 data-v-a43378b0><em data-v-a43378b0>+ de <em class="count" data-count="65" data-v-a43378b0>0</em></em></h3><span data-v-a43378b0>Sites produzidos</span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-a43378b0><div class="gscard gscard-border" data-v-a43378b0><h3 data-v-a43378b0><em data-v-a43378b0>+ de <em class="count" data-count="250" data-v-a43378b0>0</em></em></h3><span data-v-a43378b0>Clientes ativos</span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-a43378b0><div class="gscard gscard-border" data-v-a43378b0><h3 data-v-a43378b0><em data-v-a43378b0>+ de <em class="count" data-count="80" data-v-a43378b0>0</em></em></h3><span data-v-a43378b0>Marcas desenvolvidas</span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-a43378b0><div class="gscard gscard-border" data-v-a43378b0><h3 data-v-a43378b0><em data-v-a43378b0>+ de <em class="count" data-count="7" data-v-a43378b0>0</em></em></h3><span data-v-a43378b0>Anos de mercado</span></div></div></div></div></section><section class="my-5 align-content-center justify-content-center" id="parceiros" data-v-a43378b0><div class="container text-center my-5" data-v-a43378b0><div class="row" data-v-a43378b0><h2 data-v-a43378b0>Parceiros e clientes</h2><div id="app" data-v-a43378b0><div class="col" data-v-a43378b0>`);
  _push(ssrRenderComponent(_component_CarouselParceiros, null, null, _parent));
  _push(`</div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_Portifolio, null, null, _parent));
  _push(`<section class="min-vh-100 align-content-center justify-content-center bg-light" id="servicos" data-v-a43378b0><div class="container text-center" data-v-a43378b0><div class="row justify-content-center align-content-center" data-v-a43378b0><h2 data-v-a43378b0>Solu\xE7\xF5es e servi\xE7os</h2><p class="my-3" data-v-a43378b0> A GS STUDIO est\xE1 comprometida com resultados. Acreditamos que a criatividade e o design, alinhados com uma estrat\xE9gia eficaz, geram resultados melhores e duradouros. </p><div class="row mt-3" data-v-a43378b0><div class="col-12 col-sm-6 col-md-3" data-v-a43378b0><div class="gscard gscard-border" data-v-a43378b0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "icons/servicos/sites.svg",
    class: "p-2 m-2"
  }, null, _parent));
  _push(`<h3 data-v-a43378b0>Sites</h3><span data-v-a43378b0><a href="#none" data-v-a43378b0>Saiba mais</a></span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-a43378b0><div class="gscard gscard-border" data-v-a43378b0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "icons/servicos/gestao_de_conteudo.svg",
    class: "p-2 m-2"
  }, null, _parent));
  _push(`<h3 data-v-a43378b0>Redes sociais</h3><span data-v-a43378b0><a href="#none" data-v-a43378b0>Saiba mais</a></span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-a43378b0><div class="gscard gscard-border" data-v-a43378b0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "icons/servicos/lojas_virtuais.svg",
    class: "p-2 m-2"
  }, null, _parent));
  _push(`<h3 data-v-a43378b0>Lojas virtuais</h3><span data-v-a43378b0><a href="#none" data-v-a43378b0>Saiba mais</a></span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-a43378b0><div class="gscard gscard-border" data-v-a43378b0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "icons/servicos/branding.svg",
    class: "p-2 m-2"
  }, null, _parent));
  _push(`<h3 data-v-a43378b0>Lojas virtuais</h3><h3 data-v-a43378b0>Marcas</h3><span data-v-a43378b0><a href="#none" data-v-a43378b0>Saiba mais</a></span></div></div></div><div class="row mt-5" data-v-a43378b0><div class="col" data-v-a43378b0><button class="btn btn-primary" data-v-a43378b0> Veja mais servi\xE7os</button></div></div></div></div></section><section class="text-center gscard my-5" id="cta" data-v-a43378b0><div class="container justify-content-center align-content-center bg-cta my-5" data-v-a43378b0><div class="row" data-v-a43378b0><div class="col text-light" data-v-a43378b0><h2 class="text-light" data-v-a43378b0>Transforme Resultados com Design, Marketing e Tecnologia!</h2><div class="subheadline d-flex justify-content-center py-2" data-v-a43378b0><p data-v-a43378b0>Potencialize seu neg\xF3cio com solu\xE7\xF5es criativas e inovadoras. N\xF3s entregamos resultados excepcionais atrav\xE9s de estrat\xE9gias personalizadas e tecnologia de ponta.</p></div><button class="btn btn-white" data-v-a43378b0><em data-v-a43378b0>Come\xE7ar or\xE7amento</em></button></div></div></div></section>`);
  _push(ssrRenderComponent(_component_Blog, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a43378b0"]]);

export { index as default };
//# sourceMappingURL=index-4ys7GnQ2.mjs.map
