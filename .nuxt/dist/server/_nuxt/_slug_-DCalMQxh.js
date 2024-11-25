import { ref, shallowRef, toRef, getCurrentInstance, onServerPrefetch, unref, defineComponent, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { b as useNuxtApp, d as asyncDataDefaults, c as createError, u as useHead, e as useRoute, f as useRouter, _ as _export_sfc } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { d as defineOgImage } from "./defineOgImage-DZtjH7qo.js";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "devalue";
import "cookie-es";
import "ohash";
import "@gtm-support/vue-gtm";
import "@unhead/schema-org";
import "@unhead/schema-org/vue";
import "imask";
import "pinia";
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a, _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = !import.meta.prerender || !((_a = nuxtApp.ssrContext) == null ? void 0 : _a._sharedPrerenderCache) ? _handler : () => {
    const value = nuxtApp.ssrContext._sharedPrerenderCache.get(key);
    if (value) {
      return value;
    }
    const promise = Promise.resolve().then(() => nuxtApp.runWithContext(_handler));
    nuxtApp.ssrContext._sharedPrerenderCache.set(key, promise);
    return promise;
  };
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  options.dedupe = options.dedupe ?? "cancel";
  const initialCachedData = options.getCachedData(key, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_b = nuxtApp.payload._errors)[key] ?? (_b[key] = asyncDataDefaults.errorValue);
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer(opts.dedupe ?? options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
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
const Meta = defineComponent({
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
  setup(__props) {
    defineOgImage({ url: "https://gsstudio.com.br/img/thumb_gsstudio.jpg", width: 1200, height: 600, alt: "GS STUDIO - Marketing, comunicação e desenvolvimento web" });
    const route = useRoute();
    useRouter();
    const baseURL = "https://str-gsstudio.gsstudio.com.br";
    const email = ref("");
    const isSubmitting = ref(false);
    const success = ref(false);
    const error = ref(false);
    const slug = ref(route.params.slug);
    const { data: article, pending: loading, error: fetchError } = useAsyncData(
      "fetchArticle",
      async () => {
        if (!slug.value) throw new Error("Slug não fornecido");
        const response = await $fetch(`${baseURL}/articles?slug=${slug.value}`);
        if (response.length > 0) {
          return response[0];
        } else {
          throw new Error("Artigo não encontrado");
        }
      }
    );
    const title = computed(() => {
      var _a;
      return ((_a = article.value) == null ? void 0 : _a.titulo) || "Artigo";
    });
    const description = computed(() => {
      var _a;
      return ((_a = article.value) == null ? void 0 : _a.seo_description) || "Leia mais sobre marketing, design e desenvolvimento web.";
    });
    const ogImage = computed(() => {
      var _a, _b;
      return ((_b = (_a = article.value) == null ? void 0 : _a.thumb) == null ? void 0 : _b.url) || "https://gsstudio.com.br/img/thumb_gsstudio.jpg";
    });
    computed(() => {
      var _a;
      return ((_a = article.value) == null ? void 0 : _a.slug) === slug.value;
    });
    const formatDate = (date) => {
      if (!date) return "";
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-BR", options);
    };
    const socialNetworks = computed(() => {
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "my-5",
        id: "article-detail"
      }, _attrs))} data-v-d426ec05>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(title.value)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(title.value), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: description.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:title",
              content: title.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:description",
              content: description.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:image",
              content: ogImage.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(title.value), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: description.value
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:title",
                content: title.value
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:description",
                content: description.value
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:image",
                content: ogImage.value
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container my-5" data-v-d426ec05><div class="row" data-v-d426ec05><div class="col-lg-2 col-sm-12 col-md-12 mb-4" data-v-d426ec05><div class="back-fixed" data-v-d426ec05><button class="btn btn-primary-border" data-v-d426ec05>&lt; Voltar</button><div class="social-share d-flex" data-v-d426ec05><!--[-->`);
      ssrRenderList(socialNetworks.value, (network, index) => {
        _push(`<a${ssrRenderAttr("href", network.url)} target="_blank" class="social-icon"${ssrRenderAttr("title", network.name)} data-v-d426ec05><i class="${ssrRenderClass(network.icon)}" data-v-d426ec05></i></a>`);
      });
      _push(`<!--]--></div></div></div><div class="col-sm-7 col-md-12 col-lg-7" data-v-d426ec05>`);
      if (unref(loading)) {
        _push(`<div data-v-d426ec05><div class="d-flex mb-3" data-v-d426ec05><div class="skeleton skeleton-category me-2" data-v-d426ec05></div><div class="skeleton skeleton-date" data-v-d426ec05></div></div><div class="skeleton skeleton-title mb-3" data-v-d426ec05></div><div class="skeleton skeleton-content mb-3" data-v-d426ec05></div></div>`);
      } else if (unref(article)) {
        _push(`<div class="content_blog" data-v-d426ec05><div class="mb-3 mx-0" data-v-d426ec05><span class="article-category" data-v-d426ec05>${ssrInterpolate(unref(article).category.title)}</span><span class="mx-3 publish_date" data-v-d426ec05>${formatDate(unref(article).published_at) ?? ""}</span></div><h1 data-v-d426ec05>${ssrInterpolate(unref(article).titulo)}</h1><div class="my-4" data-v-d426ec05>${unref(article).content ?? ""}</div></div>`);
      } else if (unref(fetchError)) {
        _push(`<div data-v-d426ec05><p data-v-d426ec05>Erro: ${ssrInterpolate(unref(fetchError).message)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-sm-12 col-md-12 col-lg-3" data-v-d426ec05><div class="newsletter-cta p-4 bg-light rounded news-fixed my-xl-0 my-4" data-v-d426ec05><h3 data-v-d426ec05>Assine para novas atualizações.</h3><form class="form" data-v-d426ec05><div class="mb-3" data-v-d426ec05><input${ssrRenderAttr("value", email.value)} type="email" class="form-control" id="email" name="email" placeholder="E-mail" required data-v-d426ec05></div><div class="" data-v-d426ec05><button type="submit" class="${ssrRenderClass(["btn", isSubmitting.value ? "btn-secondary" : success.value ? "btn-success" : error.value ? "btn-danger" : "btn-primary"])}"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-d426ec05>`);
      if (isSubmitting.value) {
        _push(`<span data-v-d426ec05><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-d426ec05></span> Enviando... </span>`);
      } else if (success.value) {
        _push(`<span data-v-d426ec05><i class="bx bx-check-circle" data-v-d426ec05></i> Sucesso! </span>`);
      } else if (error.value) {
        _push(`<span data-v-d426ec05><i class="bx bx-error" data-v-d426ec05></i> Erro ao enviar! </span>`);
      } else {
        _push(`<span data-v-d426ec05><i class="bx bx-send" data-v-d426ec05></i> Inscrever-se </span>`);
      }
      _push(`</button></div></form></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d426ec05"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-DCalMQxh.js.map
