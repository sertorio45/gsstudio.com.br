import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { defineComponent, ref, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CarouselParceiros",
  __ssrInlineRender: true,
  setup(__props) {
    const parceiros = ref([
      "img/parceiros/cliente-1.webp",
      "img/parceiros/cliente-2.webp",
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
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<!--[--><div class="swiper-container my-5" data-v-eeadcda5>`);
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
            ssrRenderList(parceiros1.value, (parceiro, index) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", parceiro)} class="d-block w-100 parceiro-img" alt="Parceiros GS STUDIO" loading="lazy" width="300px" height="300px" data-v-eeadcda5${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: parceiro,
                        class: "d-block w-100 parceiro-img",
                        alt: "Parceiros GS STUDIO",
                        loading: "lazy",
                        width: "300px",
                        height: "300px"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(parceiros1.value, (parceiro, index) => {
                return openBlock(), createBlock(_component_SwiperSlide, { key: index }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: parceiro,
                      class: "d-block w-100 parceiro-img",
                      alt: "Parceiros GS STUDIO",
                      loading: "lazy",
                      width: "300px",
                      height: "300px"
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="swiper-gradient-left" data-v-eeadcda5></div><div class="swiper-gradient-right" data-v-eeadcda5></div></div><div class="swiper-container my-5" data-v-eeadcda5>`);
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
            ssrRenderList(parceiros2.value, (parceiro, index) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", parceiro)} class="d-block w-100 parceiro-img"${ssrRenderAttr("alt", "Parceiro " + (index + 1))} loading="lazy" width="300px" height="300px" data-v-eeadcda5${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: parceiro,
                        class: "d-block w-100 parceiro-img",
                        alt: "Parceiro " + (index + 1),
                        loading: "lazy",
                        width: "300px",
                        height: "300px"
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
              (openBlock(true), createBlock(Fragment, null, renderList(parceiros2.value, (parceiro, index) => {
                return openBlock(), createBlock(_component_SwiperSlide, { key: index }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: parceiro,
                      class: "d-block w-100 parceiro-img",
                      alt: "Parceiro " + (index + 1),
                      loading: "lazy",
                      width: "300px",
                      height: "300px"
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
      _push(`<div class="swiper-gradient-left" data-v-eeadcda5></div><div class="swiper-gradient-right" data-v-eeadcda5></div></div><!--]-->`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=CarouselParceiros.vue2.mjs.map
