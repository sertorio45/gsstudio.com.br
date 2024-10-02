import { _ as __nuxt_component_0 } from './nuxt-link-Bk9AKvJX.mjs';
import { _ as _sfc_main$4 } from './NuxtImg-BTn44R2x.mjs';
import { useSSRContext, defineComponent, ref, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, computed, mergeProps, createTextVNode, toDisplayString } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/server-renderer/index.mjs';
import { S as Swiper2, a as SwiperSlide } from './entry-styles-1.mjs-BOr9JiZg.mjs';
import { Autoplay } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/swiper/modules/index.mjs';
import { _ as _export_sfc, N, f as useSeoMeta } from './server.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/h3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/devalue/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/ssr/dist/index.mjs';
import '../routes/api/portifolio.mjs';
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
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/npm/consola.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ipx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unhead/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/imask/esm/index.js';

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
      "img/parceiros/cliente-33.webp",
      "img/parceiros/cliente-34.webp",
      "img/parceiros/cliente-35.webp",
      "img/parceiros/cliente-36.webp",
      "img/parceiros/cliente-37.webp",
      "img/parceiros/cliente-38.webp",
      "img/parceiros/cliente-39.webp",
      "img/parceiros/cliente-40.webp",
      "img/parceiros/cliente-41.webp",
      "img/parceiros/cliente-42.webp",
      "img/parceiros/cliente-43.webp",
      "img/parceiros/cliente-44.webp",
      "img/parceiros/cliente-45.webp",
      "img/parceiros/cliente-46.webp",
      "img/parceiros/cliente-47.webp",
      "img/parceiros/cliente-48.webp",
      "img/parceiros/cliente-49.webp",
      "img/parceiros/cliente-50.webp"
    ]);
    const metade = Math.ceil(parceiros.value.length / 2);
    const parceiros1 = ref(parceiros.value.slice(0, metade));
    const parceiros2 = ref(parceiros.value.slice(metade));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper2;
      const _component_SwiperSlide = SwiperSlide;
      const _component_NuxtImg = _sfc_main$4;
      _push(`<!--[--><div class="swiper-container my-5" data-v-17d2e8fe>`);
      _push(ssrRenderComponent(_component_Swiper, {
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay)],
        "slides-per-view": 7,
        "space-between": 35,
        loop: true,
        autoplay: { delay: 1e3, disableOnInteraction: false },
        breakpoints: {
          300: {
            slidesPerView: 3
          },
          640: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 7
          }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(parceiros1.value, (parceiro, index2) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, { key: index2 }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtImg, {
                      src: parceiro,
                      class: "d-block w-100 parceiro-img",
                      alt: "Parceiro " + (index2 + 1),
                      loading: "lazy"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtImg, {
                        src: parceiro,
                        class: "d-block w-100 parceiro-img",
                        alt: "Parceiro " + (index2 + 1),
                        loading: "lazy"
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
              (openBlock(true), createBlock(Fragment, null, renderList(parceiros1.value, (parceiro, index2) => {
                return openBlock(), createBlock(_component_SwiperSlide, { key: index2 }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtImg, {
                      src: parceiro,
                      class: "d-block w-100 parceiro-img",
                      alt: "Parceiro " + (index2 + 1),
                      loading: "lazy"
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
      _push(`<div class="swiper-gradient-left" data-v-17d2e8fe></div><div class="swiper-gradient-right" data-v-17d2e8fe></div></div><div class="swiper-container my-5" data-v-17d2e8fe>`);
      _push(ssrRenderComponent(_component_Swiper, {
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay)],
        "slides-per-view": 7,
        "space-between": 35,
        loop: true,
        autoplay: { delay: 1e3, disableOnInteraction: false, reverseDirection: true },
        breakpoints: {
          300: {
            slidesPerView: 3
          },
          640: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 7
          }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(parceiros2.value, (parceiro, index2) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, { key: index2 }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtImg, {
                      src: parceiro,
                      class: "d-block w-100 parceiro-img",
                      alt: "Parceiro " + (index2 + 1),
                      loading: "lazy"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtImg, {
                        src: parceiro,
                        class: "d-block w-100 parceiro-img",
                        alt: "Parceiro " + (index2 + 1),
                        loading: "lazy"
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
              (openBlock(true), createBlock(Fragment, null, renderList(parceiros2.value, (parceiro, index2) => {
                return openBlock(), createBlock(_component_SwiperSlide, { key: index2 }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtImg, {
                      src: parceiro,
                      class: "d-block w-100 parceiro-img",
                      alt: "Parceiro " + (index2 + 1),
                      loading: "lazy"
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
      _push(`<div class="swiper-gradient-left" data-v-17d2e8fe></div><div class="swiper-gradient-right" data-v-17d2e8fe></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CarouselParceiros.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CarouselParceiros = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-17d2e8fe"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Portifolio",
  __ssrInlineRender: true,
  setup(__props) {
    const images = ref([]);
    const rows = ref(2);
    const loading = ref(false);
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const selectedTab = ref("Todos");
    const tabs = ref(["Todos", "Gest\xE3o de Conte\xFAdo", "Branding", "Comunica\xE7\xE3o Visual"]);
    const onHide = () => {
      visibleRef.value = false;
    };
    const filteredImages = computed(() => {
      if (selectedTab.value === "Todos") {
        return images.value.slice(0, rows.value * 5);
      }
      return images.value.filter((image) => image.category === selectedTab.value).slice(0, rows.value * 5);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "portfolio-section my-5 py-5 text-center",
        id: "portifolio"
      }, _attrs))} data-v-17257a9b><div class="container-fluid my-5" data-v-17257a9b><div class="row" data-v-17257a9b><div class="col-12 text-center" data-v-17257a9b><h2 data-v-17257a9b>Portifolio</h2><div class="tabs my-5 d-flex justify-content-center flex-wrap" data-v-17257a9b><!--[-->`);
      ssrRenderList(tabs.value, (tab) => {
        _push(`<button class="${ssrRenderClass([{ active: selectedTab.value === tab }, "tab-btn m-1"])}" data-v-17257a9b>${ssrInterpolate(tab)}</button>`);
      });
      _push(`<!--]--></div></div></div><div class="row justify-content-center my-5" data-v-17257a9b><div class="col-12 image-grid" data-v-17257a9b><!--[-->`);
      ssrRenderList(filteredImages.value, (image, index2) => {
        _push(`<div class="image-container" data-v-17257a9b><img${ssrRenderAttr("src", image.src)} class="image-thumbnail img-fluid" loading="lazy" data-v-17257a9b></div>`);
      });
      _push(`<!--]--></div></div><div class="row justify-content-center" data-v-17257a9b><div class="col-auto" data-v-17257a9b><button${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="btn btn-primary" data-v-17257a9b>`);
      if (loading.value) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-17257a9b></span>`);
      } else {
        _push(`<span data-v-17257a9b>Ver mais</span>`);
      }
      _push(`</button></div></div>`);
      _push(ssrRenderComponent(unref(N), {
        visible: visibleRef.value,
        imgs: filteredImages.value,
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
const Portifolio = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-17257a9b"]]);
const _sfc_main$1 = defineComponent({
  name: "Blog",
  setup() {
    const articles = ref([]);
    const categories = ref([]);
    const loading = ref(true);
    const baseURL = "https://str-gsstudio.gsstudio.com.br";
    const fallbackImage = "https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp";
    const getArticleImage = (article) => {
      if (article.thumb && article.thumb.url) {
        return new URL(article.thumb.url, baseURL).href;
      }
      return fallbackImage;
    };
    const getCategoryTitle = (categoryId) => {
      const category = categories.value.find((cat) => cat.id === categoryId);
      return category ? category.title : "Categoria desconhecida";
    };
    const onImageError = (event) => {
      const target = event.target;
      target.src = fallbackImage;
    };
    return {
      articles,
      categories,
      loading,
      getArticleImage,
      getCategoryTitle,
      // Retornando a função getCategoryTitle
      onImageError
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "my-5 py-5 min-vh-100 justify-content-center align-content-center bg-light",
    id: "blog"
  }, _attrs))} data-v-ac9fe8f7><div class="container my-5" data-v-ac9fe8f7><div class="row" data-v-ac9fe8f7><h2 class="text-center" data-v-ac9fe8f7>Blog</h2>`);
  if (_ctx.loading) {
    _push(`<!--[-->`);
    ssrRenderList(4, (n) => {
      _push(`<div class="col-md-3 my-5" data-v-ac9fe8f7><div class="card" data-v-ac9fe8f7><div class="image-container" data-v-ac9fe8f7><div class="skeleton skeleton-img" data-v-ac9fe8f7></div></div><div class="card-body" data-v-ac9fe8f7><div class="mb-2" data-v-ac9fe8f7><div class="skeleton skeleton-category" data-v-ac9fe8f7></div></div><div class="skeleton skeleton-title" data-v-ac9fe8f7></div></div></div></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.articles, (article) => {
      _push(`<div class="col-sm-3 my-2" data-v-ac9fe8f7><div class="card" data-v-ac9fe8f7><div class="image-container" data-v-ac9fe8f7>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `${article.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _ctx.getArticleImage(article))} class="img-fluid blur-effect"${ssrRenderAttr("alt", article.titulo)} data-v-ac9fe8f7${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _ctx.getArticleImage(article),
                class: "img-fluid blur-effect",
                alt: article.titulo,
                onError: _ctx.onImageError
              }, null, 40, ["src", "alt", "onError"])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div><div class="card-body" data-v-ac9fe8f7><div class="mb-2" data-v-ac9fe8f7><span class="article-category" data-v-ac9fe8f7>${ssrInterpolate(_ctx.getCategoryTitle(article.category))}</span></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `${article.slug}`
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
  _push(`</div><div class="row my-3" data-v-ac9fe8f7><div class="col d-flex align-content-center justify-content-center" data-v-ac9fe8f7>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/blog",
    class: "btn btn-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ver mais artigos`);
      } else {
        return [
          createTextVNode("Ver mais artigos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ac9fe8f7"]]);
const __default__ = defineComponent({
  name: "IndexPage",
  components: {
    CarouselParceiros,
    Portifolio,
    Blog
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
    useSeoMeta({
      title: "In\xEDcio - Gs Studio - Ag\xEAncia de marketing, design e tecnologia"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$4;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-1d70f15f><section class="d-flex align-items-center min-vh-100" id="index" data-v-1d70f15f><div class="container text-center" data-v-1d70f15f><div class="row" data-v-1d70f15f><div class="col" data-v-1d70f15f><h1 data-v-1d70f15f>Aumente a <em data-v-1d70f15f>performance</em> da sua <em data-v-1d70f15f>empresa.</em></h1><p class="my-4" data-v-1d70f15f>Destaque sua empresa \xE0 frente de seus concorrentes com estrat\xE9gias de branding, marketing e tecnologia.</p><div class="d-flex justify-content-center flex-wrap" data-v-1d70f15f><button class="btn btn-primary my-2" data-v-1d70f15f>Nos conhe\xE7a um pouco</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-primary-border my-2"
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
      _push(`</div></div></div></div></section><section class="d-flex align-items-center bg-light py-5" id="sobre" data-v-1d70f15f><div class="container" data-v-1d70f15f><div class="row" data-v-1d70f15f><div class="col-12 col-md-5" data-v-1d70f15f><h2 data-v-1d70f15f>Somos especialistas</h2><p class="my-3" data-v-1d70f15f> Design publicit\xE1rio, marketing online/offline e websites. Na GS STUDIO, combinamos criatividade e estrat\xE9gias comprovadas para desenvolver campanhas de marketing eficazes e impactantes. Nossos especialistas em tecnologia oferecem solu\xE7\xF5es personalizadas para maximizar a efici\xEAncia do seu neg\xF3cio. </p></div><div class="col-12 col-md-7 text-center d-flex align-items-center justify-content-end" data-v-1d70f15f><div class="row w-100" data-v-1d70f15f><div class="col-12 col-sm-6 col-md-4 d-flex mb-3 mb-md-0" data-v-1d70f15f><div class="gscard gscard-border w-100" data-v-1d70f15f>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/icon-design.svg",
        class: "p-2 my-1",
        alt: "Icone de Design"
      }, null, _parent));
      _push(`<h3 data-v-1d70f15f>Design</h3></div></div><div class="col-12 col-sm-6 col-md-4 d-flex mb-3 mb-md-0" data-v-1d70f15f><div class="gscard gscard-border w-100" data-v-1d70f15f>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/icon-marketing.svg",
        class: "p-2 my-1",
        alt: "Icone de Marketing"
      }, null, _parent));
      _push(`<h3 data-v-1d70f15f>Marketing</h3></div></div><div class="col-12 col-sm-6 col-md-4 d-flex" data-v-1d70f15f><div class="gscard gscard-border w-100" data-v-1d70f15f>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/icons/icon-tecnologia.svg",
        class: "p-2 my-1",
        alt: "Icone de Tecnologia"
      }, null, _parent));
      _push(`<h3 data-v-1d70f15f>Tecnologia</h3></div></div></div></div></div></div></section><section class="text-center my-5 py-5 d-flex justify-content-center align-items-center" id="conquistas" data-v-1d70f15f><div class="container" data-v-1d70f15f><div class="row" data-v-1d70f15f><div class="col-12 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-1d70f15f><div class="gscard gscard-border" data-v-1d70f15f><h3 data-v-1d70f15f><em data-v-1d70f15f>+ de <em class="count" data-count="65" data-v-1d70f15f>0</em></em></h3><span data-v-1d70f15f>Sites produzidos</span></div></div><div class="col-12 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-1d70f15f><div class="gscard gscard-border" data-v-1d70f15f><h3 data-v-1d70f15f><em data-v-1d70f15f>+ de <em class="count" data-count="250" data-v-1d70f15f>0</em></em></h3><span data-v-1d70f15f>Clientes ativos</span></div></div><div class="col-12 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-1d70f15f><div class="gscard gscard-border" data-v-1d70f15f><h3 data-v-1d70f15f><em data-v-1d70f15f>+ de <em class="count" data-count="80" data-v-1d70f15f>0</em></em></h3><span data-v-1d70f15f>Marcas desenvolvidas</span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-1d70f15f><div class="gscard gscard-border" data-v-1d70f15f><h3 data-v-1d70f15f><em data-v-1d70f15f>+ de <em class="count" data-count="7" data-v-1d70f15f>0</em></em></h3><span data-v-1d70f15f>Anos de mercado</span></div></div></div></div></section><section class="my-5 d-flex align-items-center justify-content-center" id="parceiros" data-v-1d70f15f><div class="container text-center my-5" data-v-1d70f15f><div class="row" data-v-1d70f15f><h2 data-v-1d70f15f>Parceiros e clientes</h2><div id="app" data-v-1d70f15f><div class="col" data-v-1d70f15f>`);
      _push(ssrRenderComponent(CarouselParceiros, null, null, _parent));
      _push(`</div></div></div></div></section><section class="d-flex align-items-center justify-content-center bg-light py-5" id="servicos" data-v-1d70f15f><div class="container text-center my-5" data-v-1d70f15f><div class="row" data-v-1d70f15f><h2 data-v-1d70f15f>Solu\xE7\xF5es e servi\xE7os</h2><p class="my-3" data-v-1d70f15f> A GS STUDIO est\xE1 comprometida com resultados. Acreditamos que a criatividade e o design, alinhados com uma estrat\xE9gia eficaz, geram resultados melhores e duradouros. </p><div class="row p-3" data-v-1d70f15f><div class="col-6 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-1d70f15f><div class="gscard gscard-border" data-v-1d70f15f>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/servicos/sites.svg",
        class: "p-2 my-1",
        alt: "Sites"
      }, null, _parent));
      _push(`<h3 data-v-1d70f15f>Sites</h3></div></div><div class="col-6 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-1d70f15f><div class="gscard gscard-border" data-v-1d70f15f>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/servicos/gestao_de_conteudo.svg",
        class: "p-2 my-1",
        alt: "Redes sociais"
      }, null, _parent));
      _push(`<h3 data-v-1d70f15f>Redes sociais</h3></div></div><div class="col-6 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-1d70f15f><div class="gscard gscard-border" data-v-1d70f15f>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/servicos/lojas_virtuais.svg",
        class: "p-2 my-1",
        alt: "Lojas virtuais"
      }, null, _parent));
      _push(`<h3 data-v-1d70f15f>Lojas virtuais</h3></div></div><div class="col-6 col-sm-6 col-md-3" data-v-1d70f15f><div class="gscard gscard-border" data-v-1d70f15f>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/servicos/branding.svg",
        class: "p-2 my-1",
        alt: "Marcas"
      }, null, _parent));
      _push(`<h3 data-v-1d70f15f>Marcas</h3></div></div></div><div class="row mt-5" data-v-1d70f15f><div class="col" data-v-1d70f15f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/servicos",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ver todos os servi\xE7os`);
          } else {
            return [
              createTextVNode("Ver todos os servi\xE7os")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section>`);
      _push(ssrRenderComponent(Portifolio, null, null, _parent));
      _push(`<section class="text-center gscard my-5" id="cta" data-v-1d70f15f><div class="container d-flex align-items-center justify-content-center bg-cta my-5" data-v-1d70f15f><div class="row" data-v-1d70f15f><div class="col text-light" data-v-1d70f15f><h2 class="text-light" data-v-1d70f15f>Transforme Resultados com Design, Marketing e Tecnologia!</h2><div class="subheadline d-flex justify-content-center py-2" data-v-1d70f15f><p data-v-1d70f15f>Potencialize seu neg\xF3cio com solu\xE7\xF5es criativas e inovadoras. N\xF3s entregamos resultados excepcionais atrav\xE9s de estrat\xE9gias personalizadas e tecnologia de ponta.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<em data-v-1d70f15f${_scopeId}>Entrar agora em contato</em>`);
          } else {
            return [
              createVNode("em", null, "Entrar agora em contato")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
      _push(ssrRenderComponent(Blog, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d70f15f"]]);

export { index as default };
//# sourceMappingURL=index-Dsr9W21P.mjs.map
