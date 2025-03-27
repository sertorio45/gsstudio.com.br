import { Head, Title, Meta } from "../node_modules/nuxt/dist/head/runtime/components.mjs";
import Form from "../components/Form.vue.mjs";
import { defineComponent, computed, ref, withCtx, unref, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import "/Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/hookable/dist/index.mjs";
import { useRoute, useRouter } from "../node_modules/nuxt/dist/app/composables/router.mjs";
import { useAsyncData } from "../node_modules/nuxt/dist/app/composables/asyncData.mjs";
import { useHead, useSeoMeta } from "../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
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
    const categoryTitle = computed(() => {
      var _a2, _b2;
      return ((_b2 = (_a2 = article.value) == null ? void 0 : _a2.categorie) == null ? void 0 : _b2.title_categorie) ?? "";
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
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_Form = Form;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b3;
                if (_push3) {
                  _push3(`${ssrInterpolate((_a3 = unref(article)) == null ? void 0 : _a3.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString((_b3 = unref(article)) == null ? void 0 : _b3.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: (_a2 = unref(article)) == null ? void 0 : _a2.meta_description
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createTextVNode(toDisplayString((_a3 = unref(article)) == null ? void 0 : _a3.title), 1)
                  ];
                }),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: (_b2 = unref(article)) == null ? void 0 : _b2.meta_description
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="my-5" id="article-detail" data-v-64207232><div class="container my-5" data-v-64207232><div class="row" data-v-64207232><div class="col-lg-2 col-sm-12 col-md-12 mb-4" data-v-64207232><div class="back-fixed" data-v-64207232><button class="btn btn-primary-border" data-v-64207232>Voltar</button><div class="social-share d-flex" data-v-64207232><!--[-->`);
      ssrRenderList(unref(socialNetworks), (network, index) => {
        _push(`<a${ssrRenderAttr("href", network.url)} target="_blank" class="social-icon"${ssrRenderAttr("title", network.name)} data-v-64207232><i class="${ssrRenderClass(network.icon)}" data-v-64207232></i></a>`);
      });
      _push(`<!--]--></div></div></div><div class="col-sm-7 col-md-12 col-lg-9" data-v-64207232>`);
      if (unref(pending)) {
        _push(`<div class="loading-state" data-v-64207232><div class="d-flex mb-3" data-v-64207232><div class="skeleton skeleton-category me-2" data-v-64207232></div><div class="skeleton skeleton-date" data-v-64207232></div></div><div class="skeleton skeleton-title mb-3" data-v-64207232></div><div class="skeleton skeleton-content mb-3" data-v-64207232></div></div>`);
      } else if (unref(article)) {
        _push(`<div class="content_blog" data-v-64207232><div class="mb-3 mx-0" data-v-64207232><span class="article-category" data-v-64207232>${ssrInterpolate(unref(categoryTitle))}</span><span class="mx-3 publish_date" data-v-64207232>${formatDate(unref(article).date_created) ?? ""}</span></div><h1 data-v-64207232>${ssrInterpolate(unref(article).title)}</h1><div class="my-4" data-v-64207232>${unref(article).content ?? ""}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section data-v-64207232><div class="container" data-v-64207232><div class="row" data-v-64207232><div class="col-md-6 col-sm-12 align-content-center mb-5 sm-mb-5" data-v-64207232><h1 data-v-64207232>Fale agora conosco</h1><p data-v-64207232>Entre em contato conosco para tirar suas dúvidas ou solicitar um orçamento.</p></div><div class="col-md-6 col-sm-12" data-v-64207232>`);
      _push(ssrRenderComponent(_component_Form, null, null, _parent));
      _push(`</div></div></div></section><!--]-->`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_.vue3.mjs.map
