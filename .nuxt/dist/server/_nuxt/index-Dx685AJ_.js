import { _ as __nuxt_component_0$1 } from "./nuxt-link-D1zm17Ab.js";
import { _ as __nuxt_component_0 } from "./nuxt-img-BEtjlaZ7.js";
import { defineComponent, ref, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, computed, mergeProps, createTextVNode, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { _ as _export_sfc, N } from "../server.mjs";
import "ufo";
import "./index-xyyCGchu.js";
import "@unhead/shared";
import "defu";
import "h3";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "unhead";
import "vue-router";
import "radix3";
import "devalue";
import "destr";
import "klona";
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
      "img/parceiros/cliente-50.webp",
      "img/parceiros/cliente-51.webp",
      "img/parceiros/cliente-52.webp"
    ]);
    const metade = Math.ceil(parceiros.value.length / 2);
    const parceiros1 = ref(parceiros.value.slice(0, metade));
    const parceiros2 = ref(parceiros.value.slice(metade));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<!--[--><div class="swiper-container my-5" data-v-b59baedd>`);
      _push(ssrRenderComponent(_component_Swiper, {
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay)],
        "slides-per-view": 7,
        "space-between": 45,
        loop: true,
        autoplay: { delay: 1e3, disableOnInteraction: false },
        breakpoints: {
          300: {
            slidesPerView: 4
          },
          640: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 4
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
      _push(`<div class="swiper-gradient-left" data-v-b59baedd></div><div class="swiper-gradient-right" data-v-b59baedd></div></div><div class="swiper-container my-5" data-v-b59baedd>`);
      _push(ssrRenderComponent(_component_Swiper, {
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay)],
        "slides-per-view": 7,
        "space-between": 45,
        loop: true,
        autoplay: { delay: 1e3, disableOnInteraction: false, reverseDirection: true },
        breakpoints: {
          300: {
            slidesPerView: 4
          },
          640: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 4
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
      _push(`<div class="swiper-gradient-left" data-v-b59baedd></div><div class="swiper-gradient-right" data-v-b59baedd></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CarouselParceiros.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CarouselParceiros = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b59baedd"]]);
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
    const tabs = ref(["Todos", "Gestão de Conteúdo", "Branding", "Comunicação Visual"]);
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-section my-5 py-5 text-center" }, _attrs))} data-v-e9464b4e><div class="container-fluid my-5" data-v-e9464b4e><div class="row" data-v-e9464b4e><div class="col-12 text-center" data-v-e9464b4e><h2 data-v-e9464b4e>Portifolio</h2><div class="tabs my-5 d-flex justify-content-center flex-wrap" data-v-e9464b4e><!--[-->`);
      ssrRenderList(tabs.value, (tab) => {
        _push(`<button class="${ssrRenderClass([{ active: selectedTab.value === tab }, "tab-btn m-1"])}" data-v-e9464b4e>${ssrInterpolate(tab)}</button>`);
      });
      _push(`<!--]--></div></div></div><div class="row justify-content-center my-5" data-v-e9464b4e><div class="col-12 image-grid" data-v-e9464b4e><!--[-->`);
      ssrRenderList(filteredImages.value, (image, index2) => {
        _push(`<div class="image-container" data-v-e9464b4e><img${ssrRenderAttr("src", image.src)} class="image-thumbnail img-fluid" loading="lazy" data-v-e9464b4e></div>`);
      });
      _push(`<!--]--></div></div><div class="row justify-content-center" data-v-e9464b4e><div class="col-auto" data-v-e9464b4e><button${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="btn btn-primary" data-v-e9464b4e>`);
      if (loading.value) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-e9464b4e></span>`);
      } else {
        _push(`<span data-v-e9464b4e>Ver mais</span>`);
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
const Portifolio = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e9464b4e"]]);
const _sfc_main$1 = defineComponent({
  name: "Blog",
  setup() {
    const articles = ref([]);
    const categories = ref([]);
    const loading = ref(true);
    const baseURL = "https://str-gsstudio.gsstudio.com.br";
    const getArticleImage = (article) => {
      if (article.thumb && article.thumb.url) {
        const url = new URL(article.thumb.url, baseURL).href;
        console.log("Generated image URL:", url);
        return url;
      }
      return "thumb_blog_gsstudio.webp";
    };
    const formatDate = (date) => {
      if (!date) return "";
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-BR", options);
    };
    const getCategoryTitle = (categoryId) => {
      if (!categoryId) return "";
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_NuxtImg = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "my-5 min-vh-100 justify-content-center align-content-center bg-light",
    id: "blog"
  }, _attrs))} data-v-3e398b1b><div class="container my-5" data-v-3e398b1b><div class="row" data-v-3e398b1b><h2 class="text-center" data-v-3e398b1b>Blog</h2>`);
  if (_ctx.loading) {
    _push(`<!--[-->`);
    ssrRenderList(4, (n) => {
      _push(`<div class="col-md-3 my-5" data-v-3e398b1b><div class="card" data-v-3e398b1b><div class="image-container" data-v-3e398b1b><div class="skeleton skeleton-img" data-v-3e398b1b></div></div><div class="card-body" data-v-3e398b1b><div class="mb-2" data-v-3e398b1b><div class="skeleton skeleton-category" data-v-3e398b1b></div></div><div class="skeleton skeleton-title" data-v-3e398b1b></div></div></div></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.articles, (article) => {
      _push(`<div class="col-md-3 my-5" data-v-3e398b1b><div class="card" data-v-3e398b1b><div class="image-container" data-v-3e398b1b>`);
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
              loading: "lazy"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: _ctx.getArticleImage(article),
                class: ["img-fluid blur-effect", { "blurred": !article.imageLoaded }],
                alt: article.titulo,
                onLoad: ($event) => article.imageLoaded = true,
                loading: "lazy"
              }, null, 8, ["src", "class", "alt", "onLoad"])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div><div class="card-body" data-v-3e398b1b><div class="mb-2" data-v-3e398b1b><span class="article-category" data-v-3e398b1b>${ssrInterpolate(_ctx.getCategoryTitle(article.category))}</span></div>`);
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
  _push(`</div><div class="row" data-v-3e398b1b><div class="col d-flex align-content-center justify-content-center" data-v-3e398b1b>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
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
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3e398b1b"]]);
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-3b9160f2><section class="d-flex align-items-center min-vh-100" id="index" data-v-3b9160f2><div class="container text-center" data-v-3b9160f2><div class="row" data-v-3b9160f2><div class="col" data-v-3b9160f2><h1 data-v-3b9160f2>Aumente a <em data-v-3b9160f2>performance</em> da sua <em data-v-3b9160f2>empresa.</em></h1><p class="my-4" data-v-3b9160f2>Destaque sua empresa à frente de seus concorrentes com estratégias de branding, marketing e tecnologia.</p><div class="d-flex justify-content-center flex-wrap" data-v-3b9160f2><button class="btn btn-primary my-2" data-v-3b9160f2>Nos conheça um pouco</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-primary-border my-2"
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
      _push(`</div></div></div></div></section><section class="d-flex align-items-center bg-light py-5" id="sobre" data-v-3b9160f2><div class="container" data-v-3b9160f2><div class="row" data-v-3b9160f2><div class="col-12 col-md-5" data-v-3b9160f2><h2 data-v-3b9160f2>Somos especialistas</h2><p class="my-3" data-v-3b9160f2> Design publicitário, marketing online/offline e websites. Na GS STUDIO, combinamos criatividade e estratégias comprovadas para desenvolver campanhas de marketing eficazes e impactantes. Nossos especialistas em tecnologia oferecem soluções personalizadas para maximizar a eficiência do seu negócio. </p></div><div class="col-12 col-md-7 text-center d-flex align-items-center justify-content-center px-5" data-v-3b9160f2><div class="row w-100" data-v-3b9160f2><div class="col-12 col-sm-6 col-md-4 d-flex mb-3 mb-md-0" data-v-3b9160f2><div class="gscard gscard-border w-100" data-v-3b9160f2>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/icon-design.svg",
        class: "p-2 my-1"
      }, null, _parent));
      _push(`<h3 data-v-3b9160f2>Design</h3></div></div><div class="col-12 col-sm-6 col-md-4 d-flex mb-3 mb-md-0" data-v-3b9160f2><div class="gscard gscard-border w-100" data-v-3b9160f2>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/icon-marketing.svg",
        class: "p-2 my-1"
      }, null, _parent));
      _push(`<h3 data-v-3b9160f2>Marketing</h3></div></div><div class="col-12 col-sm-6 col-md-4 d-flex" data-v-3b9160f2><div class="gscard gscard-border w-100" data-v-3b9160f2>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/icon-tecnologia.svg",
        class: "p-2 my-1"
      }, null, _parent));
      _push(`<h3 data-v-3b9160f2>Tecnologia</h3></div></div></div></div></div></div></section><section class="text-center my-5 py-5 d-flex justify-content-center align-items-center" id="conquistas" data-v-3b9160f2><div class="container" data-v-3b9160f2><div class="row" data-v-3b9160f2><div class="col-12 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-3b9160f2><div class="gscard gscard-border" data-v-3b9160f2><h3 data-v-3b9160f2><em data-v-3b9160f2>+ de <em class="count" data-count="65" data-v-3b9160f2>0</em></em></h3><span data-v-3b9160f2>Sites produzidos</span></div></div><div class="col-12 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-3b9160f2><div class="gscard gscard-border" data-v-3b9160f2><h3 data-v-3b9160f2><em data-v-3b9160f2>+ de <em class="count" data-count="250" data-v-3b9160f2>0</em></em></h3><span data-v-3b9160f2>Clientes ativos</span></div></div><div class="col-12 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-3b9160f2><div class="gscard gscard-border" data-v-3b9160f2><h3 data-v-3b9160f2><em data-v-3b9160f2>+ de <em class="count" data-count="80" data-v-3b9160f2>0</em></em></h3><span data-v-3b9160f2>Marcas desenvolvidas</span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-3b9160f2><div class="gscard gscard-border" data-v-3b9160f2><h3 data-v-3b9160f2><em data-v-3b9160f2>+ de <em class="count" data-count="7" data-v-3b9160f2>0</em></em></h3><span data-v-3b9160f2>Anos de mercado</span></div></div></div></div></section><section class="my-5 d-flex align-items-center justify-content-center" id="parceiros" data-v-3b9160f2><div class="container text-center my-5" data-v-3b9160f2><div class="row" data-v-3b9160f2><h2 data-v-3b9160f2>Parceiros e clientes</h2><div id="app" data-v-3b9160f2><div class="col" data-v-3b9160f2>`);
      _push(ssrRenderComponent(CarouselParceiros, null, null, _parent));
      _push(`</div></div></div></div></section><section class="d-flex align-items-center justify-content-center bg-light py-5" id="servicos" data-v-3b9160f2><div class="container text-center my-5" data-v-3b9160f2><div class="row" data-v-3b9160f2><h2 data-v-3b9160f2>Soluções e serviços</h2><p class="my-3" data-v-3b9160f2> A GS STUDIO está comprometida com resultados. Acreditamos que a criatividade e o design, alinhados com uma estratégia eficaz, geram resultados melhores e duradouros. </p><div class="row p-3" data-v-3b9160f2><div class="col-6 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-3b9160f2><div class="gscard gscard-border" data-v-3b9160f2>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/servicos/sites.svg",
        class: "p-2 my-1"
      }, null, _parent));
      _push(`<h3 data-v-3b9160f2>Sites</h3></div></div><div class="col-6 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-3b9160f2><div class="gscard gscard-border" data-v-3b9160f2>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/servicos/gestao_de_conteudo.svg",
        class: "p-2 my-1"
      }, null, _parent));
      _push(`<h3 data-v-3b9160f2>Redes sociais</h3></div></div><div class="col-6 col-sm-6 col-md-3 mb-3 mb-md-0" data-v-3b9160f2><div class="gscard gscard-border" data-v-3b9160f2>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/servicos/lojas_virtuais.svg",
        class: "p-2 my-1"
      }, null, _parent));
      _push(`<h3 data-v-3b9160f2>Lojas virtuais</h3></div></div><div class="col-6 col-sm-6 col-md-3" data-v-3b9160f2><div class="gscard gscard-border" data-v-3b9160f2>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "icons/servicos/branding.svg",
        class: "p-2 my-1"
      }, null, _parent));
      _push(`<h3 data-v-3b9160f2>Marcas</h3></div></div></div><div class="row mt-5" data-v-3b9160f2><div class="col" data-v-3b9160f2>`);
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
      _push(`<section class="text-center gscard my-5" id="cta" data-v-3b9160f2><div class="container d-flex align-items-center justify-content-center bg-cta my-5" data-v-3b9160f2><div class="row" data-v-3b9160f2><div class="col text-light" data-v-3b9160f2><h2 class="text-light" data-v-3b9160f2>Transforme Resultados com Design, Marketing e Tecnologia!</h2><div class="subheadline d-flex justify-content-center py-2" data-v-3b9160f2><p data-v-3b9160f2>Potencialize seu negócio com soluções criativas e inovadoras. Nós entregamos resultados excepcionais através de estratégias personalizadas e tecnologia de ponta.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<em data-v-3b9160f2${_scopeId}>Entrar agora em contato</em>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b9160f2"]]);
export {
  index as default
};
//# sourceMappingURL=index-Dx685AJ_.js.map
