import { defineComponent, useSSRContext, withAsyncContext, computed, withCtx, unref, createTextVNode, toDisplayString, createVNode } from 'vue';
import { _ as _export_sfc, u as useHead, b as useRoute, d as useRouter, e as useRuntimeConfig, f as useServerSeoMeta } from './server.mjs';
import { _ as __nuxt_component_2 } from './Form-CsiMYFQ8.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { u as useAsyncData } from './asyncData-BJ_g-bK9.mjs';
import '../nitro/nitro.mjs';
import 'lru-cache';
import 'devalue';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'packrup';
import 'nodemailer';
import '@dword-design/functions';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@unhead/schema-org';
import '@unhead/schema-org/vue';
import 'imask';
import 'pinia';

const removeUndefinedProps = (props) => {
  const filteredProps = /* @__PURE__ */ Object.create(null);
  for (const key in props) {
    const value = props[key];
    if (value !== void 0) {
      filteredProps[key] = value;
    }
  }
  return filteredProps;
};
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
    const textContent = slotVnodes ? slotVnodes.filter(({ children }) => children).map(({ children }) => children).join("") : "";
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const { data: article, pending: loading, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `article-${route.params.slug}`,
      async () => {
        try {
          return await $fetch(`/api/articles/${route.params.slug}`);
        } catch (err) {
          return null;
        }
      },
      {
        watch: [() => route.params.slug],
        server: true,
        default: () => null
      }
    )), __temp = await __temp, __restore(), __temp);
    const categoryTitle = computed(() => {
      var _a;
      return ((_a = article.value) == null ? void 0 : _a.category_title) || "Sem categoria";
    });
    const canonicalUrl = `${useRuntimeConfig().public.baseUrl || "https://gsstudio.com.br"}${route.fullPath}`;
    const getTitle = computed(() => {
      var _a;
      return ((_a = article.value) == null ? void 0 : _a.title) || "Artigo";
    });
    const getDescription = computed(() => {
      var _a;
      return ((_a = article.value) == null ? void 0 : _a.description) || "";
    });
    useServerSeoMeta({
      title: getTitle,
      description: getDescription,
      robots: "index, follow",
      ogTitle: getTitle,
      ogDescription: getDescription,
      ogType: "article",
      ogUrl: canonicalUrl,
      ogLocale: "pt_BR",
      ogImageAlt: getTitle,
      twitterCard: "summary",
      twitterTitle: getTitle,
      twitterDescription: getDescription,
      fbAppId: "603230818880308"
    });
    const socialNetworks = computed(() => {
      const url = canonicalUrl;
      return [
        { name: "Facebook", url: `https://facebook.com/sharer/sharer.php?u=${url}`, icon: "bx bxl-facebook" },
        { name: "Twitter", url: `https://twitter.com/intent/tweet?url=${url}`, icon: "bx bxl-twitter" },
        { name: "LinkedIn", url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`, icon: "bx bxl-linkedin" },
        { name: "WhatsApp", url: `https://wa.me/?text=${url}`, icon: "bx bxl-whatsapp" },
        { name: "Email", url: `mailto:?subject=Confira este artigo&body=${url}`, icon: "bx bx-envelope" },
        { name: "Link", url, icon: "bx bx-link" }
      ];
    });
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
      var _a, _b;
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Form = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`${ssrInterpolate(((_a2 = unref(article)) == null ? void 0 : _a2.title) || "Artigo")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(((_b2 = unref(article)) == null ? void 0 : _b2.title) || "Artigo"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createTextVNode(toDisplayString(((_a2 = unref(article)) == null ? void 0 : _a2.title) || "Artigo"), 1)
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="my-5" id="article-detail" data-v-e8c1504e><div class="container my-5" data-v-e8c1504e><div class="row" data-v-e8c1504e><div class="col-lg-2 col-sm-12 col-md-12 mb-4" data-v-e8c1504e><div class="back-fixed" data-v-e8c1504e><button class="btn btn-primary-border" data-v-e8c1504e>Voltar</button><div class="social-share d-flex" data-v-e8c1504e><!--[-->`);
      ssrRenderList(socialNetworks.value, (network, index) => {
        _push(`<a${ssrRenderAttr("href", network.url)} target="_blank" class="social-icon"${ssrRenderAttr("title", network.name)} data-v-e8c1504e><i class="${ssrRenderClass(network.icon)}" data-v-e8c1504e></i></a>`);
      });
      _push(`<!--]--></div></div></div><div class="col-sm-7 col-md-12 col-lg-9" data-v-e8c1504e>`);
      if (unref(loading)) {
        _push(`<div class="loading-state" data-v-e8c1504e><div class="d-flex mb-3" data-v-e8c1504e><div class="skeleton skeleton-category me-2" data-v-e8c1504e></div><div class="skeleton skeleton-date" data-v-e8c1504e></div></div><div class="skeleton skeleton-title mb-3" data-v-e8c1504e></div><div class="skeleton skeleton-content mb-3" data-v-e8c1504e></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="error-state" data-v-e8c1504e><div class="alert alert-danger" data-v-e8c1504e><h4 data-v-e8c1504e>Erro ao carregar o artigo</h4><p data-v-e8c1504e>${ssrInterpolate(unref(error))}</p><button class="btn btn-primary" data-v-e8c1504e>Voltar</button></div></div>`);
      } else if (unref(article)) {
        _push(`<div class="content_blog" data-v-e8c1504e><div class="mb-3 mx-0" data-v-e8c1504e><span class="article-category" data-v-e8c1504e>${ssrInterpolate(categoryTitle.value)}</span><span class="mx-3 publish_date" data-v-e8c1504e>${(_a = formatDate(unref(article).created_at)) != null ? _a : ""}</span></div><h1 data-v-e8c1504e>${ssrInterpolate(unref(article).title)}</h1><div class="my-4" data-v-e8c1504e>${(_b = unref(article).content) != null ? _b : ""}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section data-v-e8c1504e><div class="container" data-v-e8c1504e><div class="row" data-v-e8c1504e><div class="col-md-6 col-sm-12 align-content-center mb-5 sm-mb-5" data-v-e8c1504e><h1 data-v-e8c1504e>Fale agora conosco</h1><p data-v-e8c1504e>Entre em contato conosco para tirar suas d\xFAvidas ou solicitar um or\xE7amento.</p></div><div class="col-md-6 col-sm-12" data-v-e8c1504e>`);
      _push(ssrRenderComponent(_component_Form, null, null, _parent));
      _push(`</div></div></div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e8c1504e"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-Cxwv2axZ.mjs.map
