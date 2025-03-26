import { defineComponent, ref, computed, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import N from "../node_modules/vue-easy-lightbox/dist/vue-easy-lightbox.esm.min.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "portfolio-section my-5 py-5 text-center",
        id: "portifolio"
      }, _attrs))} data-v-17257a9b><div class="container-fluid my-5" data-v-17257a9b><div class="row" data-v-17257a9b><div class="col-12 text-center" data-v-17257a9b><h2 data-v-17257a9b>Portifolio</h2><div class="tabs my-5 d-flex justify-content-center flex-wrap" data-v-17257a9b><!--[-->`);
      ssrRenderList(tabs.value, (tab) => {
        _push(`<button class="${ssrRenderClass([{ active: selectedTab.value === tab }, "tab-btn m-1"])}" data-v-17257a9b>${ssrInterpolate(tab)}</button>`);
      });
      _push(`<!--]--></div></div></div><div class="row justify-content-center my-5" data-v-17257a9b><div class="col-12 image-grid" data-v-17257a9b><!--[-->`);
      ssrRenderList(filteredImages.value, (image, index) => {
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
export {
  _sfc_main as default
};
//# sourceMappingURL=Portifolio.vue2.mjs.map
