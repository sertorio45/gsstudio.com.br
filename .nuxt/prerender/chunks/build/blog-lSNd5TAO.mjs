import { u as useHead, b as useSeoMeta, a as __nuxt_component_0$1, h as fetchDefaults, j as useRequestFetch } from './server.mjs';
import { _ as _sfc_main$1 } from './Icon-CFOBcUeQ.mjs';
import { defineComponent, computed, withCtx, createTextVNode, unref, useSSRContext, toValue, reactive } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue/server-renderer/index.mjs';
import { d as defineOgImage } from './defineOgImage-C32F1npy.mjs';
import { hash } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ohash/dist/index.mjs';
import { u as useAsyncData } from './asyncData-6UXi_9ej.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/h3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ufo/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/destr/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/hookable/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/klona/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/defu/dist/defu.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/scule/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/radix3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unctx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/packrup/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/devalue/index.js';
import 'node:fs';
import 'node:url';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/pathe/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/nodemailer/lib/nodemailer.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@dword-design/functions/dist/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ipx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unhead/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unhead/schema-org/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unhead/schema-org/dist/vue.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/imask/esm/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/pinia/dist/pinia.prod.cjs';

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
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
function useLazyFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  return useFetch(
    request,
    {
      ...opts,
      lazy: true
    },
    // @ts-expect-error we pass an extra argument with the resolved auto-key to prevent another from being injected
    autoKey
  );
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    defineOgImage({ url: "https://gsstudio.com.br/img/thumb_gsstudio.webp", width: 1200, height: 600, alt: "GS STUDIO - Markteting, comunica\xE7\xE3o e desenvolvimento web" });
    useHead({
      meta: [
        { name: "lang", content: "pt-BR" },
        { name: "language", content: "pt-BR" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "canonical", content: "https://www.gsstudio.com.br/blog" },
        { name: "keywords", content: "marketing digital, cria\xE7\xE3o de sites, otimiza\xE7\xE3o de sites (SEO), Google Ads, campanhas online, ag\xEAncia digital, ag\xEAncia de marketing, lojas virtuais, e-commerce, gest\xE3o de redes sociais, desenvolvimento web, design responsivo, tr\xE1fego pago, branding, identidade visual, marketing para empresas, marketing para pequenas empresas, marketing em Sert\xE3ozinho, marketing em Ribeir\xE3o Preto, SEO local, social media marketing, estrat\xE9gia de marketing digital, an\xFAncios online, ag\xEAncia de SEO, cria\xE7\xE3o de conte\xFAdo, marketing de conte\xFAdo, hospedagem de sites, otimiza\xE7\xE3o de convers\xE3o (CRO), email marketing, automa\xE7\xE3o de marketing, consultoria em marketing digital, campanhas pagas no Google, performance digital, WordPress, cria\xE7\xE3o de blogs, gest\xE3o de tr\xE1fego, otimiza\xE7\xE3o de desempenho do site, desenvolvimento de sistemas web, produ\xE7\xE3o audiovisual, estrat\xE9gias de marketing SP, ag\xEAncia de marketing em SP." },
        { name: "canonical", content: "https://www.gsstudio.com.br/blog" }
      ]
    });
    useSeoMeta({
      title: "Blog",
      ogTitle: "Blog",
      ogUrl: "https://gsstudio.com.br/blog",
      ogSiteName: "GS STUDIO",
      ogLocale: "pt_BR"
    });
    const { data: articlesData, pending, error, refresh } = useLazyFetch("/api/articles", {
      transform: (response) => response.data
    }, "$5sKWOZt1n5");
    const articles = computed(() => articlesData.value || []);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = _sfc_main$1;
      _push(`<!--[--><section class="py-5 bg-dark d-flex my-5" id="topo"><div class="container d-flex justify-content-center align-items-center my-5 py-5"><div class="row"><div class="col text-center text-light my-2"><div class="my-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`P\xE1gina inicial`);
          } else {
            return [
              createTextVNode("P\xE1gina inicial")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` / <span>Blog</span></div><h1 class="text-light">Blog</h1><a href="#blog">`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxs-chevrons-down my-3",
        fontSize: "3em",
        color: "#fff"
      }, null, _parent));
      _push(`</a></div></div></div></section><section class="my-5 py-5 justify-content-center align-content-center" id="blog"><div class="container my-5"><div class="row">`);
      if (unref(pending)) {
        _push(`<!--[-->`);
        ssrRenderList(4, (n) => {
          _push(`<div class="col-md-3 my-5"><div class="card"><div class="card-body"><div class="mb-2"><div class="skeleton skeleton-category"></div></div><div class="skeleton skeleton-title"></div></div></div></div>`);
        });
        _push(`<!--]-->`);
      } else if (unref(articles) && unref(articles).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(articles), (article) => {
          _push(`<div class="col-sm-3 my-2"><div class="card"><div class="card-body"><div class="mb-2"><span class="article-category">${ssrInterpolate(article.category_title)}</span></div><a${ssrRenderAttr("href", `/${article.slug}`)}>${ssrInterpolate(article.title)}</a></div></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="col text-center my-5"><p class="text-muted">Nenhum artigo encontrado.</p></div>`);
      }
      _push(`</div><div class="row my-3"><div class="col d-flex align-content-center justify-content-center"><button${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""} class="btn btn-primary">`);
      if (unref(pending)) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
      } else {
        _push(`<span>Ver mais artigos</span>`);
      }
      _push(`</button></div></div></div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blog-lSNd5TAO.mjs.map
