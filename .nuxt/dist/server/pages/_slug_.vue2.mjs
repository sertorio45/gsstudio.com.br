import Form from "../components/Form.vue.mjs";
import { defineComponent, computed, ref, unref } from "vue";
import { ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "/Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/hookable/dist/index.mjs";
import { useHead, useSeoMeta } from "../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
import { useAsyncData } from "../node_modules/nuxt/dist/app/composables/asyncData.mjs";
import { useRoute, useRouter } from "../node_modules/nuxt/dist/app/composables/router.mjs";
import "/Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/destr/dist/index.mjs";
import "/Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/klona/dist/index.mjs";
import "/Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const { data: article, pending, refresh } = useAsyncData(
      `article-${route.params.slug}`,
      async () => {
        var _a;
        const slug = route.params.slug;
        if (!slug) return null;
        const response = await $fetch(
          "/items/articles",
          {
            baseURL: "https://painel.gsadmin.app",
            method: "GET",
            headers: { "Content-Type": "application/json" },
            query: {
              fields: "id,title,meta_keywords,meta_description,content,date_created,slug,categorie.id,categorie.title_categorie",
              "filter[slug][_eq]": slug
            }
          }
        );
        return ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a[0]) || null;
      },
      {
        server: true,
        lazy: false,
        default: () => null
      }
    );
    const title = computed(() => {
      var _a;
      return ((_a = article.value) == null ? void 0 : _a.title) ?? "";
    });
    const description = computed(() => {
      var _a;
      return ((_a = article.value) == null ? void 0 : _a.meta_description) ?? "";
    });
    const categoryTitle = computed(() => {
      var _a, _b;
      return ((_b = (_a = article.value) == null ? void 0 : _a.categorie) == null ? void 0 : _b.title_categorie) ?? "";
    });
    useHead({
      meta: [
        {
          name: "canonical",
          content: `https://gsstudio.com.br/${route.params.slug}`
        }
      ]
    });
    useSeoMeta({
      title,
      description,
      robots: "index, follow",
      ogLocale: "pt-br",
      ogImageAlt: title,
      ogTitle: title,
      ogType: "article",
      ogUrl: `https://gsstudio.com.br/${route.params.slug}`,
      ogDescription: description,
      twitterTitle: title,
      twitterDescription: description,
      twitterCard: "summary",
      fbAppId: "603230818880308"
    });
    const socialNetworks = ref([]);
    const formatDate = (date) => {
      if (!date) return "";
      try {
        return new Date(date).toLocaleDateString("pt-BR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      } catch {
        return (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Form = Form;
      _push(`<!--[--><section class="my-5" id="article-detail" data-v-fddc78ab><div class="container my-5" data-v-fddc78ab><div class="row" data-v-fddc78ab><div class="col-lg-2 col-sm-12 col-md-12 mb-4" data-v-fddc78ab><div class="back-fixed" data-v-fddc78ab><button class="btn btn-primary-border" data-v-fddc78ab>Voltar</button><div class="social-share d-flex" data-v-fddc78ab><!--[-->`);
      ssrRenderList(socialNetworks.value, (network, index) => {
        _push(`<a${ssrRenderAttr("href", network.url)} target="_blank" class="social-icon"${ssrRenderAttr("title", network.name)} data-v-fddc78ab><i class="${ssrRenderClass(network.icon)}" data-v-fddc78ab></i></a>`);
      });
      _push(`<!--]--></div></div></div><div class="col-sm-7 col-md-12 col-lg-9" data-v-fddc78ab>`);
      if (unref(pending)) {
        _push(`<div class="loading-state" data-v-fddc78ab><div class="d-flex mb-3" data-v-fddc78ab><div class="skeleton skeleton-category me-2" data-v-fddc78ab></div><div class="skeleton skeleton-date" data-v-fddc78ab></div></div><div class="skeleton skeleton-title mb-3" data-v-fddc78ab></div><div class="skeleton skeleton-content mb-3" data-v-fddc78ab></div></div>`);
      } else if (unref(article)) {
        _push(`<div class="content_blog" data-v-fddc78ab><div class="mb-3 mx-0" data-v-fddc78ab><span class="article-category" data-v-fddc78ab>${ssrInterpolate(categoryTitle.value)}</span><span class="mx-3 publish_date" data-v-fddc78ab>${formatDate(unref(article).date_created) ?? ""}</span></div><h1 data-v-fddc78ab>${ssrInterpolate(unref(article).title)}</h1><div class="my-4" data-v-fddc78ab>${unref(article).content ?? ""}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section data-v-fddc78ab><div class="container" data-v-fddc78ab><div class="row" data-v-fddc78ab><div class="col-md-6 col-sm-12 align-content-center mb-5 sm-mb-5" data-v-fddc78ab><h1 data-v-fddc78ab>Fale agora conosco</h1><p data-v-fddc78ab>Entre em contato conosco para tirar suas dúvidas ou solicitar um orçamento.</p></div><div class="col-md-6 col-sm-12" data-v-fddc78ab>`);
      _push(ssrRenderComponent(_component_Form, null, null, _parent));
      _push(`</div></div></div></section><!--]-->`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_.vue2.mjs.map
