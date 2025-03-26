import Form from "../components/Form.vue.mjs";
import { defineComponent, ref, unref } from "vue";
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
    var _a, _b, _c, _d, _e, _f, _g;
    const route = useRoute();
    useRouter();
    const { data: article, pending, refresh } = useAsyncData(
      `article-${route.params.slug}`,
      async () => {
        var _a2;
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
        return ((_a2 = response == null ? void 0 : response.data) == null ? void 0 : _a2[0]) || null;
      },
      {
        server: true,
        lazy: false,
        default: () => null
      }
    );
    useHead({
      meta: [
        {
          name: "canonical",
          content: `https://gsstudio.com.br/${route.params.slug}`
        }
      ]
    });
    useSeoMeta({
      title: ((_a = article.value) == null ? void 0 : _a.title) ?? "",
      description: ((_b = article.value) == null ? void 0 : _b.meta_description) ?? "",
      robots: "index, follow",
      ogLocale: "pt-br",
      ogImageAlt: ((_c = article.value) == null ? void 0 : _c.title) ?? "",
      ogTitle: ((_d = article.value) == null ? void 0 : _d.title) ?? "",
      ogType: "article",
      ogUrl: `https://gsstudio.com.br/${route.params.slug}`,
      ogDescription: ((_e = article.value) == null ? void 0 : _e.meta_description) ?? "",
      twitterTitle: ((_f = article.value) == null ? void 0 : _f.title) ?? "",
      twitterDescription: ((_g = article.value) == null ? void 0 : _g.meta_description) ?? "",
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
      var _a2, _b2;
      const _component_Form = Form;
      _push(`<!--[--><section class="my-5" id="article-detail" data-v-5a14f090><div class="container my-5" data-v-5a14f090><div class="row" data-v-5a14f090><div class="col-lg-2 col-sm-12 col-md-12 mb-4" data-v-5a14f090><div class="back-fixed" data-v-5a14f090><button class="btn btn-primary-border" data-v-5a14f090>Voltar</button><div class="social-share d-flex" data-v-5a14f090><!--[-->`);
      ssrRenderList(socialNetworks.value, (network, index) => {
        _push(`<a${ssrRenderAttr("href", network.url)} target="_blank" class="social-icon"${ssrRenderAttr("title", network.name)} data-v-5a14f090><i class="${ssrRenderClass(network.icon)}" data-v-5a14f090></i></a>`);
      });
      _push(`<!--]--></div></div></div><div class="col-sm-7 col-md-12 col-lg-9" data-v-5a14f090>`);
      if (unref(pending)) {
        _push(`<div class="loading-state" data-v-5a14f090><div class="d-flex mb-3" data-v-5a14f090><div class="skeleton skeleton-category me-2" data-v-5a14f090></div><div class="skeleton skeleton-date" data-v-5a14f090></div></div><div class="skeleton skeleton-title mb-3" data-v-5a14f090></div><div class="skeleton skeleton-content mb-3" data-v-5a14f090></div></div>`);
      } else if (unref(article)) {
        _push(`<div class="content_blog" data-v-5a14f090><div class="mb-3 mx-0" data-v-5a14f090><span class="article-category" data-v-5a14f090>${ssrInterpolate((_b2 = (_a2 = unref(article).value) == null ? void 0 : _a2.categorie) == null ? void 0 : _b2.title_categorie)}</span><span class="mx-3 publish_date" data-v-5a14f090>${formatDate(unref(article).date_created) ?? ""}</span></div><h1 data-v-5a14f090>${ssrInterpolate(unref(article).title)}</h1><div class="my-4" data-v-5a14f090>${unref(article).content ?? ""}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section data-v-5a14f090><div class="container" data-v-5a14f090><div class="row" data-v-5a14f090><div class="col-md-6 col-sm-12 align-content-center mb-5 sm-mb-5" data-v-5a14f090><h1 data-v-5a14f090>Fale agora conosco</h1><p data-v-5a14f090>Entre em contato conosco para tirar suas dúvidas ou solicitar um orçamento.</p></div><div class="col-md-6 col-sm-12" data-v-5a14f090>`);
      _push(ssrRenderComponent(_component_Form, null, null, _parent));
      _push(`</div></div></div></section><!--]-->`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_.vue2.mjs.map
