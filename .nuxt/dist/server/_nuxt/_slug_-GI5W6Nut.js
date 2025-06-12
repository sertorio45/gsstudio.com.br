import { computed, toValue, reactive, defineComponent, withAsyncContext, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { f as fetchDefaults, b as useRequestFetch, u as useHead, d as useRoute, e as useRouter, g as useSeoMeta, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_2 } from "./Form-vnudnxHi.js";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { hash } from "ohash";
import { u as useAsyncData } from "./asyncData-BYrznCe9.js";
import { d as defineOgImage } from "./defineOgImage-7HGbAy6q.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "klona";
import "devalue";
import "cookie-es";
import "destr";
import "@gtm-support/vue-gtm";
import "@unhead/schema-org";
import "scule";
import "@unhead/schema-org/vue";
import "imask";
import "pinia";
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
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
function defineOgImageComponent(component, props = {}, options = {}) {
  return defineOgImage({
    ...options,
    component,
    props
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const canonicalUrl = `https://gsstudio.com.br${route.fullPath}`;
    const { data: article, pending: loading, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `/api/articles/${route.params.slug}`,
      {
        server: true,
        key: `article-${route.params.slug}`,
        default: () => null
      },
      "$Tp5y69NxkZ"
    )), __temp = await __temp, __restore(), __temp);
    defineOgImageComponent("NuxtSeo", {
      title: "",
      description: (_a = article.value) == null ? void 0 : _a.meta_description,
      theme: "#ff0000",
      colorMode: "dark"
    });
    useSeoMeta({
      title: (_b = article.value) == null ? void 0 : _b.title,
      description: (_c = article.value) == null ? void 0 : _c.meta_description,
      robots: "index, follow",
      ogTitle: (_d = article.value) == null ? void 0 : _d.title,
      ogDescription: (_e = article.value) == null ? void 0 : _e.meta_description,
      ogType: "article",
      ogUrl: canonicalUrl,
      ogLocale: "pt_BR",
      ogImageAlt: (_f = article.value) == null ? void 0 : _f.title,
      twitterCard: "summary",
      twitterTitle: (_g = article.value) == null ? void 0 : _g.title,
      twitterDescription: (_h = article.value) == null ? void 0 : _h.meta_description,
      fbAppId: "603230818880308"
    });
    const categoryTitle = computed(() => {
      var _a2;
      return ((_a2 = article.value) == null ? void 0 : _a2.category_title) || "Sem categoria";
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
                  _push3(`${ssrInterpolate((_a2 = unref(article)) == null ? void 0 : _a2.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString((_b2 = unref(article)) == null ? void 0 : _b2.title), 1)
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
                    createTextVNode(toDisplayString((_a2 = unref(article)) == null ? void 0 : _a2.title), 1)
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="my-5" id="article-detail" data-v-bd607cb7><div class="container my-5" data-v-bd607cb7><div class="row" data-v-bd607cb7><div class="col-lg-2 col-sm-12 col-md-12 mb-4" data-v-bd607cb7><div class="back-fixed" data-v-bd607cb7><button class="btn btn-primary-border" data-v-bd607cb7>Voltar</button><div class="social-share d-flex" data-v-bd607cb7><!--[-->`);
      ssrRenderList(unref(socialNetworks), (network, index) => {
        _push(`<a${ssrRenderAttr("href", network.url)} target="_blank" class="social-icon"${ssrRenderAttr("title", network.name)} data-v-bd607cb7><i class="${ssrRenderClass(network.icon)}" data-v-bd607cb7></i></a>`);
      });
      _push(`<!--]--></div></div></div><div class="col-sm-7 col-md-12 col-lg-9" data-v-bd607cb7>`);
      if (unref(loading)) {
        _push(`<div class="loading-state" data-v-bd607cb7><div class="d-flex mb-3" data-v-bd607cb7><div class="skeleton skeleton-category me-2" data-v-bd607cb7></div><div class="skeleton skeleton-date" data-v-bd607cb7></div></div><div class="skeleton skeleton-title mb-3" data-v-bd607cb7></div><div class="skeleton skeleton-content mb-3" data-v-bd607cb7></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="error-state" data-v-bd607cb7><div class="alert alert-danger" data-v-bd607cb7><h4 data-v-bd607cb7>Erro ao carregar o artigo</h4><p data-v-bd607cb7>${ssrInterpolate(unref(error))}</p><button class="btn btn-primary" data-v-bd607cb7>Voltar</button></div></div>`);
      } else if (unref(article)) {
        _push(`<div class="content_blog" data-v-bd607cb7><div class="mb-3 mx-0" data-v-bd607cb7><span class="article-category" data-v-bd607cb7>${ssrInterpolate(unref(categoryTitle))}</span><span class="mx-3 publish_date" data-v-bd607cb7>${formatDate(unref(article).created_at) ?? ""}</span></div><h1 data-v-bd607cb7>${ssrInterpolate(unref(article).title)}</h1><div class="my-4" data-v-bd607cb7>${unref(article).content ?? ""}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section data-v-bd607cb7><div class="container" data-v-bd607cb7><div class="row" data-v-bd607cb7><div class="col-md-6 col-sm-12 align-content-center mb-5 sm-mb-5" data-v-bd607cb7><h1 data-v-bd607cb7>Fale agora conosco</h1><p data-v-bd607cb7>Entre em contato conosco para tirar suas dúvidas ou solicitar um orçamento.</p></div><div class="col-md-6 col-sm-12" data-v-bd607cb7>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bd607cb7"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-GI5W6Nut.js.map
