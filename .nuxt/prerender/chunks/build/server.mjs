import { hasInjectionContext, inject, version, ref, watchEffect, watch, getCurrentInstance, unref, defineComponent, createVNode, Fragment, reactive, computed, nextTick, onMounted, onBeforeUnmount, Teleport, Transition, h, provide, shallowReactive, Suspense, resolveComponent, isVNode, withModifiers, useSSRContext, mergeProps, createApp, effectScope, getCurrentScope, withCtx, createTextVNode, defineAsyncComponent, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, toRef, shallowRef, isReadonly, isRef, isShallow, isReactive, toRaw, toValue } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue/index.mjs';
import { $fetch as $fetch$1 } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ofetch/dist/node.mjs';
import { b as baseURL } from '../_/renderer.mjs';
import { createHooks } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unctx/dist/index.mjs';
import { createError as createError$1, sanitizeStatusCode, appendHeader, getRequestHeader, setCookie, getCookie, deleteCookie } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/h3/dist/index.mjs';
import { getActiveHead, CapoPlugin } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin, composableNames, unpackMeta } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unhead/shared/dist/index.mjs';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue-router/dist/vue-router.node.mjs';
import { toRouteMatcher, createRouter as createRouter$1 } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/radix3/dist/index.mjs';
import { defu } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/defu/dist/defu.mjs';
import { joinURL, withQuery, parseQuery, hasProtocol, isScriptProtocol, withTrailingSlash, withoutTrailingSlash, parseURL, withoutBase, withLeadingSlash, withBase } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ufo/dist/index.mjs';
import destr from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/destr/dist/index.mjs';
import { klona } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/klona/dist/index.mjs';
import { stringify, parse as parse$1 } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/devalue/index.js';
import { parse } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/cookie-es/dist/index.mjs';
import { isEqual } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ohash/dist/index.mjs';
import { SchemaOrgUnheadPlugin } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unhead/schema-org/dist/index.mjs';
import { defineWebSite, defineWebPage, definePerson, defineOrganization } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unhead/schema-org/dist/vue.mjs';
import IMask from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/imask/esm/index.js';
import { createPinia } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/pinia/dist/pinia.prod.cjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@unhead/ssr/dist/index.mjs';
import '../routes/api/portifolio.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/scule/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/packrup/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/pathe/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/nodemailer/lib/nodemailer.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/@dword-design/functions/dist/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/ipx/dist/index.mjs';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink", "prefetch": true, "prefetchOn": { "visibility": true } };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.13.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version[0] === "3";
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k2 in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k2)) {
        continue;
      }
      if (k2 === "titleTemplate" || k2[0] === "o" && k2[1] === "n") {
        resolved[k2] = unref(root[k2]);
        continue;
      }
      resolved[k2] = resolveUnrefHeadInput(root[k2]);
    }
    return resolved;
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "prerender" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
function useSeoMeta(input, options) {
  const { title, titleTemplate, ...meta } = input;
  return useHead({
    title,
    titleTemplate,
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t) {
      const meta2 = unpackMeta({ ...t._flatMeta });
      delete t._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t,
        meta: meta2
      };
    }
  });
}
function useServerHead(input, options = {}) {
  const head = options.head || injectHead();
  delete options.head;
  if (head)
    return head.push(input, { ...options, mode: "server" });
}
[CapoPlugin({ track: true })];
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m2) => {
    var _a;
    return ((_a = m2.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
const _routes = [
  {
    name: "slug",
    path: "/:slug()",
    component: () => import('./_slug_-DCalMQxh.mjs')
  },
  {
    name: "blog",
    path: "/blog",
    component: () => import('./blog-B77Bk9TO.mjs')
  },
  {
    name: "contato",
    path: "/contato",
    component: () => import('./contato-BnX8RY3O.mjs')
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-dfxTVMDQ.mjs')
  },
  {
    name: "politica-de-privacidade",
    path: "/politica-de-privacidade",
    component: () => import('./politica-de-privacidade-Dy72yD8b.mjs')
  },
  {
    name: "servicos",
    path: "/servicos",
    component: () => import('./servicos-Cls4f5qk.mjs')
  },
  {
    name: "sobre",
    path: "/sobre",
    component: () => import('./sobre-C84oMk_P.mjs')
  },
  {
    name: "solucoes.bkop-gscrm",
    path: "/solucoes.bkop/gscrm",
    component: () => import('./gscrm-CjNEQdiP.mjs')
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error));
      });
      return false;
    }
  });
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {
  "fetch-articles": () => import('./fetchArticles-TiBqBo5j.mjs')
};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes2 = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes: routes2
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    if (!((_b = nuxtApp.ssrContext) == null ? void 0 : _b.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.matched.length === 0) {
          await nuxtApp.runWithContext(() => showError(createError$1({
            statusCode: 404,
            fatal: false,
            statusMessage: `Page not found: ${to.fullPath}`,
            data: {
              path: to.fullPath
            }
          })));
        } else if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray$1(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function prerenderRoutes(path) {
  const paths = toArray(path);
  appendHeader(useRequestEvent(), "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ?? (opts.filter = (key) => key === name);
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
async function preloadRouteComponents(to, router = useRouter()) {
  {
    return;
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function resolveTrailingSlashBehavior(to, resolve) {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({ ...props, to });
    const href = computed(() => {
      var _a;
      if (!to.value || isAbsoluteUrl.value) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return resolveTrailingSlashBehavior(
          href2,
          router.resolve
          /* will not be called */
        );
      }
      if (typeof to.value === "object") {
        return ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null;
      }
      return resolveTrailingSlashBehavior(
        joinURL(config.app.baseURL, to.value),
        router.resolve
        /* will not be called */
      );
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (link == null ? void 0 : link.isActive) ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (link == null ? void 0 : link.isExactActive) ?? computed(() => to.value === router.currentRoute.value.path),
      route: (link == null ? void 0 : link.route) ?? computed(() => router.resolve(to.value)),
      async navigate() {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      function shouldPrefetch(mode2) {
        var _a, _b;
        return !prefetched.value && (typeof props.prefetchOn === "string" ? props.prefetchOn === mode2 : ((_a = props.prefetchOn) == null ? void 0 : _a[mode2]) ?? ((_b = options.prefetchOn) == null ? void 0 : _b[mode2])) && (props.prefetch ?? options.prefetch) !== false && props.noPrefetch !== true && props.target !== "_blank" && !isSlowConnection();
      }
      async function prefetch(nuxtApp = useNuxtApp()) {
        if (prefetched.value) {
          return;
        }
        prefetched.value = true;
        const path = typeof to.value === "string" ? to.value : isExternal.value ? resolveRouteObject(to.value) : router.resolve(to.value).fullPath;
        await Promise.all([
          nuxtApp.hooks.callHook("link:prefetch", path).catch(() => {
          }),
          !isExternal.value && !hasTarget.value && preloadRouteComponents(to.value, router).catch(() => {
          })
        ]);
      }
      return () => {
        var _a;
        if (!isExternal.value && !hasTarget.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (shouldPrefetch("interaction")) {
              routerLinkProps.onPointerenter = prefetch.bind(null, void 0);
              routerLinkProps.onFocus = prefetch.bind(null, void 0);
            }
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href: href.value || null, rel, target }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
  });
}
const __nuxt_component_0$1 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
function isSlowConnection() {
  {
    return;
  }
}
const _0_siteConfig_MwZUzHrRNP = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-site-config:init",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a;
    const state = useState("site-config");
    {
      const context = (_a = useRequestEvent()) == null ? void 0 : _a.context;
      nuxtApp.hooks.hook("app:rendered", () => {
        state.value = context == null ? void 0 : context.siteConfig.get({
          debug: (/* @__PURE__ */ useRuntimeConfig())["nuxt-site-config"].debug,
          resolveRefs: true
        });
      });
    }
    let stack = {};
    return {
      provide: {
        nuxtSiteConfig: stack
      }
    };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
{
  reducers.push(["Island", (data) => data && (data == null ? void 0 : data.__nuxt_island)]);
}
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const componentNames = [{ "hash": "i0Vxmj8bqg", "pascalName": "BrandedLogo", "kebabName": "branded-logo", "category": "community", "credits": "Full Stack Heroes <https://fullstackheroes.com/>" }, { "hash": "tBHg51xiAt", "pascalName": "Frame", "kebabName": "frame", "category": "community", "credits": "@arashsheyda <https://github.com/arashsheyda>" }, { "hash": "Sqc3OTP2KQ", "pascalName": "Nuxt", "kebabName": "nuxt", "category": "community", "credits": "NuxtLabs <https://nuxtlabs.com/>" }, { "hash": "i7kLnGApLD", "pascalName": "NuxtSeo", "kebabName": "nuxt-seo", "category": "community", "credits": "Nuxt SEO <https://nuxtseo.com/>" }, { "hash": "q432NYEB0T", "pascalName": "Pergel", "kebabName": "pergel", "category": "community", "credits": "Pergel <https://nuxtlabs.com/>" }, { "hash": "6bQOH7FKu2", "pascalName": "SimpleBlog", "kebabName": "simple-blog", "category": "community", "credits": "Full Stack Heroes <https://fullstackheroes.com/>" }, { "hash": "wt558K6QyQ", "pascalName": "UnJs", "kebabName": "un-js", "category": "community", "credits": "UnJS <https://unjs.io/>" }, { "hash": "6RdQZcuwZZ", "pascalName": "Wave", "kebabName": "wave", "category": "community", "credits": "Full Stack Heroes <https://fullstackheroes.com/>" }, { "hash": "gaB1TrbtTl", "pascalName": "WithEmoji", "kebabName": "with-emoji", "category": "community", "credits": "Full Stack Heroes <https://fullstackheroes.com/>" }];
function isInternalRoute(path) {
  return path.startsWith("/_") || path.startsWith("@");
}
function filterIsOgImageOption(key) {
  const keys = [
    "url",
    "extension",
    "width",
    "height",
    "fonts",
    "alt",
    "props",
    "renderer",
    "html",
    "component",
    "renderer",
    "emojis",
    "_query",
    "satori",
    "resvg",
    "sharp",
    "screenshot",
    "cacheMaxAgeSeconds"
  ];
  return keys.includes(key);
}
function separateProps(options, ignoreKeys = []) {
  options = options || {};
  const _props = defu(options.props, Object.fromEntries(
    Object.entries({ ...options }).filter(([k2]) => !filterIsOgImageOption(k2) && !ignoreKeys.includes(k2))
  ));
  const props = {};
  Object.entries(_props).forEach(([key, val]) => {
    props[key.replace(/-([a-z])/g, (g2) => g2[1].toUpperCase())] = val;
  });
  return {
    ...Object.fromEntries(
      Object.entries({ ...options }).filter(([k2]) => filterIsOgImageOption(k2) || ignoreKeys.includes(k2))
    ),
    props
  };
}
function withoutQuery(path) {
  return path.split("?")[0];
}
function getExtension(path) {
  path = withoutQuery(path);
  const lastSegment = path.split("/").pop() || path;
  return lastSegment.split(".").pop() || lastSegment;
}
function getOgImagePath(pagePath, _options) {
  const baseURL2 = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
  const options = defu(_options, useOgImageRuntimeConfig().defaults);
  return joinURL("/", baseURL2, `__og-image__/${"static" }`, pagePath, `og.${options.extension}`);
}
function useOgImageRuntimeConfig() {
  return (/* @__PURE__ */ useRuntimeConfig())["nuxt-og-image"];
}
function createOgImageMeta(src, input, resolvedOptions, ssrContext) {
  const _input = separateProps(defu(input, ssrContext._ogImagePayload));
  let url = src || input.url || resolvedOptions.url;
  if (!url)
    return;
  if (input._query && Object.keys(input._query).length && url)
    url = withQuery(url, { _query: input._query });
  let urlExtension = getExtension(url) || resolvedOptions.extension;
  if (urlExtension === "jpg")
    urlExtension = "jpeg";
  const meta = [
    { property: "og:image", content: url },
    { property: "og:image:type", content: `image/${urlExtension}` },
    { name: "twitter:card", content: "summary_large_image" },
    // we don't need this but avoids issue when using useSeoMeta({ twitterImage })
    { name: "twitter:image", content: url },
    { name: "twitter:image:src", content: url }
  ];
  if (resolvedOptions.width) {
    meta.push({ property: "og:image:width", content: resolvedOptions.width });
    meta.push({ name: "twitter:image:width", content: resolvedOptions.width });
  }
  if (resolvedOptions.height) {
    meta.push({ property: "og:image:height", content: resolvedOptions.height });
    meta.push({ name: "twitter:image:height", content: resolvedOptions.height });
  }
  if (resolvedOptions.alt) {
    meta.push({ property: "og:image:alt", content: resolvedOptions.alt });
    meta.push({ name: "twitter:image:alt", content: resolvedOptions.alt });
  }
  ssrContext._ogImageInstances = ssrContext._ogImageInstances || [];
  const script = [];
  if (src) {
    script.push({
      id: "nuxt-og-image-options",
      type: "application/json",
      processTemplateParams: true,
      innerHTML: () => {
        const payload = resolveUnrefHeadInput(_input);
        if (typeof payload.props.title === "undefined")
          payload.props.title = "%s";
        delete payload.url;
        return stringify(payload);
      },
      // we want this to be last in our head
      tagPosition: "bodyClose"
    });
  }
  const instance = useServerHead({
    script,
    meta
  }, {
    tagPriority: 35
  });
  ssrContext._ogImagePayload = _input;
  ssrContext._ogImageInstances.push(instance);
}
function normaliseOptions(_options) {
  var _a;
  const options = { ...unref(_options) };
  if (!options)
    return options;
  if (options.component && componentNames) {
    const originalName = options.component;
    for (const component of componentNames) {
      if (component.pascalName.endsWith(originalName) || component.kebabName.endsWith(originalName)) {
        options.component = component.pascalName;
        break;
      }
    }
  } else if (!options.component) {
    options.component = (_a = componentNames[0]) == null ? void 0 : _a.pascalName;
  }
  return options;
}
function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function isPathFile(path) {
  var _a;
  const lastSegment = path.split("/").pop();
  return !!((_a = (lastSegment || path).match(/\.[0-9a-z]+$/i)) == null ? void 0 : _a[0]);
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}
function useNitroOrigin(e) {
  {
    e = e || useRequestEvent();
    return e.context.siteConfigNitroOrigin;
  }
}
function useSiteConfig(options) {
  let stack;
  stack = useRequestEvent().context.siteConfig.get(defu({ resolveRefs: true }, options));
  return stack || {};
}
function createSitePathResolver(options = {}) {
  const siteConfig = useSiteConfig();
  const nitroOrigin = useNitroOrigin();
  const nuxtBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL || "/";
  return (path) => {
    return computed(() => resolveSitePath(unref(path), {
      absolute: unref(options.absolute),
      withBase: unref(options.withBase),
      siteUrl: unref(options.canonical) !== false || true ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    }));
  };
}
function withSiteUrl(path, options = {}) {
  const siteConfig = useSiteConfig();
  const nitroOrigin = useNitroOrigin();
  const base = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL || "/";
  return computed(() => {
    return resolveSitePath(unref(path), {
      absolute: true,
      siteUrl: unref(options.canonical) !== false || true ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base,
      withBase: unref(options.withBase)
    });
  });
}
function ogImageCanonicalUrls(nuxtApp) {
  nuxtApp.hooks.hook("app:rendered", async (ctx) => {
    const { ssrContext } = ctx;
    const e = useRequestEvent();
    const path = parseURL(e.path).pathname;
    if (isInternalRoute(path))
      return;
    ssrContext == null ? void 0 : ssrContext.head.use({
      key: "nuxt-og-image:overrides-and-canonical-urls",
      hooks: {
        "tags:resolve": async (ctx2) => {
          const hasPrimaryPayload = ctx2.tags.some((tag) => tag.tag === "script" && tag.props.id === "nuxt-og-image-options");
          let overrides;
          for (const tag of ctx2.tags) {
            if (tag.tag === "script" && tag.props.id === "nuxt-og-image-overrides") {
              if (hasPrimaryPayload) {
                overrides = separateProps(parse$1(tag.innerHTML || "{}"));
                delete ctx2.tags[ctx2.tags.indexOf(tag)];
              } else {
                tag.props.id = "nuxt-og-image-options";
                tag.innerHTML = stringify(separateProps(parse$1(tag.innerHTML || "{}")));
                tag._d = "script:id:nuxt-og-image-options";
              }
              break;
            }
          }
          ctx2.tags = ctx2.tags.filter(Boolean);
          for (const tag of ctx2.tags) {
            if (tag.tag === "meta" && (tag.props.property === "og:image" || ["twitter:image:src", "twitter:image"].includes(tag.props.name))) {
              if (!tag.props.content.startsWith("https")) {
                await nuxtApp.runWithContext(() => {
                  tag.props.content = toValue(withSiteUrl(tag.props.content, {
                    withBase: true
                  }));
                });
              }
            } else if (overrides && tag.tag === "script" && tag.props.id === "nuxt-og-image-options") {
              tag.innerHTML = stringify(defu(overrides, parse$1(tag.innerHTML)));
            }
          }
        }
      }
    });
  });
}
function routeRuleOgImage(nuxtApp) {
  nuxtApp.hooks.hook("app:rendered", async (ctx) => {
    var _a, _b, _c, _d, _e, _f;
    const { ssrContext } = ctx;
    const e = useRequestEvent();
    const path = parseURL(e.path).pathname;
    if (isInternalRoute(path))
      return;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (_b = (_a = ssrContext == null ? void 0 : ssrContext.runtimeConfig) == null ? void 0 : _a.nitro) == null ? void 0 : _b.routeRules })
    );
    let routeRules = defu({}, ..._routeRulesMatcher.matchAll(
      withoutBase(path.split("?")[0], (_c = ssrContext == null ? void 0 : ssrContext.runtimeConfig) == null ? void 0 : _c.app.baseURL)
    ).reverse()).ogImage;
    if (typeof routeRules === "undefined")
      return;
    const ogImageInstances = nuxtApp.ssrContext._ogImageInstances || [];
    if (routeRules === false) {
      ogImageInstances == null ? void 0 : ogImageInstances.forEach((e2) => {
        e2.dispose();
      });
      nuxtApp.ssrContext._ogImagePayload = void 0;
      nuxtApp.ssrContext._ogImageInstances = void 0;
      return;
    }
    const { defaults } = useOgImageRuntimeConfig();
    routeRules = normaliseOptions(defu((_f = (_e = (_d = nuxtApp.ssrContext) == null ? void 0 : _d.event.context._nitro) == null ? void 0 : _e.routeRules) == null ? void 0 : _f.ogImage, routeRules, {
      component: defaults.component
    }));
    const resolvedOptions = normaliseOptions(defu(routeRules, defaults));
    const src = getOgImagePath(ssrContext.url, resolvedOptions);
    createOgImageMeta(src, routeRules, resolvedOptions, nuxtApp.ssrContext);
  });
}
const og_image_canonical_urls_server_YYKCE0iokV = /* @__PURE__ */ defineNuxtPlugin({
  setup: ogImageCanonicalUrls
});
const route_rule_og_image_server_xL1rf4QeLE = /* @__PURE__ */ defineNuxtPlugin({
  setup: routeRuleOgImage
});
const mode = "manual";
const nuxt_plugin_6wEQMY3tee = /* @__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {
  var _a, _b, _c;
  const hydrationMode = useState("nuxt-delay-hydration-mode", () => mode);
  {
    const event = useRequestEvent();
    if ((_c = (_b = (_a = event == null ? void 0 : event.context) == null ? void 0 : _a._nitro) == null ? void 0 : _b.routeRules) == null ? void 0 : _c.delayHydration)
      hydrationMode.value = event.context._nitro.routeRules.delayHydration;
  }
});
const pwa_icons_plugin_LnrhIJeMG7 = /* @__PURE__ */ defineNuxtPlugin(() => {
  return {
    provide: {
      pwaIcons: {
        transparent: {},
        maskable: {},
        favicon: {},
        apple: {},
        appleSplashScreen: {}
      }
    }
  };
});
const COOKIE_ID_SEPARATOR = "~";
const getAllCookieIdsString = (moduleOptions) => getCookieIds([
  ...moduleOptions.cookies.necessary,
  ...moduleOptions.cookies.optional
]).join("");
const getCookieIds = (cookies) => cookies.map((cookie) => cookie.id);
const plugin_C2QvvtgUo3 = /* @__PURE__ */ defineNuxtPlugin((_nuxtApp) => {
  var _a;
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const moduleOptions = runtimeConfig.public.cookieControl;
  const cookieIsConsentGiven = useCookie(
    moduleOptions.cookieNameIsConsentGiven,
    moduleOptions.cookieOptions
  );
  const cookieCookiesEnabledIds = (_a = useCookie(
    moduleOptions.cookieNameCookiesEnabledIds,
    moduleOptions.cookieOptions
  ).value) == null ? void 0 : _a.split(COOKIE_ID_SEPARATOR);
  const isConsentGiven = ref(
    cookieIsConsentGiven.value === void 0 ? void 0 : cookieIsConsentGiven.value === getAllCookieIdsString(moduleOptions)
  );
  const cookiesEnabled = ref(
    cookieCookiesEnabledIds === void 0 ? void 0 : [
      ...moduleOptions.cookies.necessary.filter(
        (cookieNecessary) => cookieCookiesEnabledIds.includes(cookieNecessary.id)
      ),
      ...moduleOptions.cookies.optional.filter(
        (cookieOptional) => cookieCookiesEnabledIds.includes(cookieOptional.id)
      )
    ]
  );
  const cookiesEnabledIds = ref(cookieCookiesEnabledIds);
  const isModalActive = ref();
  const locale = ref();
  const state = {
    cookiesEnabled,
    cookiesEnabledIds,
    isConsentGiven,
    isModalActive,
    locale,
    moduleOptions
  };
  return {
    provide: {
      cookies: state
    }
  };
});
const plugin_tbFNToZNim = /* @__PURE__ */ defineNuxtPlugin((nuxt) => {
});
function useSchemaOrg(input) {
  var _a;
  const _config = /* @__PURE__ */ useRuntimeConfig();
  const config = _config["nuxt-schema-org"] || _config.public["nuxt-schema-org"];
  const script = {
    type: "application/ld+json",
    key: "schema-org-graph",
    nodes: input,
    ...(config == null ? void 0 : config.scriptAttributes) || {}
  };
  {
    const event = useRequestEvent();
    if (typeof (event == null ? void 0 : event.context.robots) !== "undefined" && !((_a = event.context.robots) == null ? void 0 : _a.indexable)) {
      return;
    }
    return useServerHead({
      script: [script]
    });
  }
}
function initPlugin(nuxtApp) {
  const head = injectHead();
  const _config = /* @__PURE__ */ useRuntimeConfig();
  const config = _config["nuxt-schema-org"] || _config.public["nuxt-schema-org"];
  const route = useRoute();
  const siteConfig = useSiteConfig();
  const resolvePath = createSitePathResolver({
    absolute: false,
    withBase: true
  });
  const resolveUrl = createSitePathResolver({
    canonical: true,
    absolute: true,
    withBase: true
  });
  const schemaOrg = computed(() => {
    var _a;
    return {
      ...((_a = route.meta) == null ? void 0 : _a.schemaOrg) || {},
      ...siteConfig,
      url: resolveUrl(route.path),
      host: withoutTrailingSlash(siteConfig.url),
      inLanguage: siteConfig.currentLocale || siteConfig.defaultLocale,
      path: resolvePath(route.path)
    };
  });
  head.push({ templateParams: { schemaOrg } });
  head.use(
    SchemaOrgUnheadPlugin({}, async () => {
      const meta = {};
      await nuxtApp.hooks.callHook("schema-org:meta", meta);
      return meta;
    }, {
      minify: config.minify,
      trailingSlash: siteConfig.trailingSlash
    })
  );
}
function maybeAddIdentitySchemaOrg() {
  const _config = /* @__PURE__ */ useRuntimeConfig();
  const runtimeConfig = _config["nuxt-schema-org"] || _config.public["nuxt-schema-org"];
  const siteConfig = useSiteConfig();
  if (runtimeConfig.identity || siteConfig.identity) {
    const identity = runtimeConfig.identity || siteConfig.identity;
    let identityPayload = {
      name: siteConfig.name,
      url: siteConfig.url
    };
    let identityType;
    if (typeof identity !== "string") {
      identityPayload = defu(identity, identityPayload);
      identityType = identity.type;
      delete identityPayload.type;
    } else {
      identityType = identity;
    }
    if (siteConfig.twitter) {
      const id = siteConfig.twitter.startsWith("@") ? siteConfig.twitter.slice(1) : siteConfig.twitter;
      identityPayload.sameAs = [
        `https://twitter.com/${id}`
      ];
    }
    useSchemaOrg([
      identityType === "Person" ? definePerson(identityPayload) : defineOrganization(identityPayload)
    ]);
  }
}
const defaults_JNk3m5wGSX = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-schema-org:defaults",
  dependsOn: [
    "nuxt-schema-org:init"
  ],
  setup() {
    const siteConfig = useSiteConfig();
    useSchemaOrg([
      defineWebSite({
        name: (siteConfig == null ? void 0 : siteConfig.name) || "",
        inLanguage: (siteConfig == null ? void 0 : siteConfig.currentLocale) || "",
        description: (siteConfig == null ? void 0 : siteConfig.description) || ""
      }),
      defineWebPage()
    ]);
    maybeAddIdentitySchemaOrg();
  }
});
const init_3TppeXojsQ = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-schema-org:init",
  setup(nuxtApp) {
    initPlugin(nuxtApp);
  }
});
const robot_meta_server_6Qhe4cPOr2 = /* @__PURE__ */ defineNuxtPlugin({
  setup() {
    var _a;
    const event = useRequestEvent();
    const ctx = (_a = event == null ? void 0 : event.context) == null ? void 0 : _a.robots;
    if (!ctx)
      return;
    const config = /* @__PURE__ */ useRuntimeConfig();
    useServerHead({
      meta: [
        {
          "name": "robots",
          "content": () => ctx.rule || "",
          "data-hint": () => {
            var _a2, _b;
            return ((_a2 = config["nuxt-robots"]) == null ? void 0 : _a2.debug) ? (_b = ctx.debug) == null ? void 0 : _b.source : void 0;
          }
        }
      ]
    });
  }
});
function m(e2, t2) {
  void 0 === t2 && (t2 = {});
  var o2 = t2.insertAt;
  if (e2 && false) {
    var l2 = (void 0).head || (void 0).getElementsByTagName("head")[0], n2 = (void 0).createElement("style");
    n2.type = "text/css", "top" === o2 && l2.firstChild ? l2.insertBefore(n2, l2.firstChild) : l2.appendChild(n2), n2.styleSheet ? n2.styleSheet.cssText = e2 : n2.appendChild((void 0).createTextNode(e2));
  }
}
m(".vel-fade-enter-active,.vel-fade-leave-active{-webkit-transition:all .3s ease;transition:all .3s ease}.vel-fade-enter-from,.vel-fade-leave-to{opacity:0}.vel-img-swiper{display:block;position:relative}.vel-modal{background:rgba(0,0,0,.5);bottom:0;left:0;margin:0;position:fixed;right:0;top:0;z-index:9998}.vel-img-wrapper{left:50%;margin:0;position:absolute;top:50%;-webkit-transform:translate(-50% -50%);transform:translate(-50% -50%);-webkit-transition:.3s linear;transition:.3s linear;will-change:transform opacity}.vel-img,.vel-img-wrapper{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-img{background-color:rgba(0,0,0,.7);-webkit-box-shadow:0 5px 20px 2px rgba(0,0,0,.7);box-shadow:0 5px 20px 2px rgba(0,0,0,.7);display:block;max-height:80vh;max-width:80vw;position:relative;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}@media (max-width:750px){.vel-img{max-height:95vh;max-width:85vw}}.vel-btns-wrapper{position:static}.vel-btns-wrapper .btn__close,.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{-webkit-tap-highlight-color:transparent;color:#fff;cursor:pointer;font-size:32px;opacity:.6;outline:none;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.15s linear;transition:.15s linear;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-btns-wrapper .btn__close:hover,.vel-btns-wrapper .btn__next:hover,.vel-btns-wrapper .btn__prev:hover{opacity:1}.vel-btns-wrapper .btn__close.disable,.vel-btns-wrapper .btn__close.disable:hover,.vel-btns-wrapper .btn__next.disable,.vel-btns-wrapper .btn__next.disable:hover,.vel-btns-wrapper .btn__prev.disable,.vel-btns-wrapper .btn__prev.disable:hover{cursor:default;opacity:.2}.vel-btns-wrapper .btn__next{right:12px}.vel-btns-wrapper .btn__prev{left:12px}.vel-btns-wrapper .btn__close{right:10px;top:24px}@media (max-width:750px){.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{font-size:20px}.vel-btns-wrapper .btn__close{font-size:24px}.vel-btns-wrapper .btn__next{right:4px}.vel-btns-wrapper .btn__prev{left:4px}}.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:12px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{left:auto;right:12px}@media (max-width:750px){.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:4px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{left:auto;right:4px}}.vel-modal.is-rtl .vel-img-title{direction:rtl}");
m('.vel-loading{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-loading .ring{display:inline-block;height:64px;width:64px}.vel-loading .ring:after{-webkit-animation:ring 1.2s linear infinite;animation:ring 1.2s linear infinite;border-color:hsla(0,0%,100%,.7) transparent;border-radius:50%;border-style:solid;border-width:5px;content:" ";display:block;height:46px;margin:1px;width:46px}@-webkit-keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}');
m(".vel-on-error{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-on-error .icon{color:#aaa;font-size:80px}");
m(".vel-img-title{bottom:60px;color:#ccc;cursor:default;font-size:12px;left:50%;line-height:1;max-width:80%;opacity:.8;overflow:hidden;position:absolute;text-align:center;text-overflow:ellipsis;-webkit-transform:translate(-50%);transform:translate(-50%);-webkit-transition:opacity .15s;transition:opacity .15s;white-space:nowrap}.vel-img-title:hover{opacity:1}");
m(".vel-icon{fill:currentColor;height:1em;overflow:hidden;vertical-align:-.15em;width:1em}");
m(".vel-toolbar{border-radius:4px;bottom:8px;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;opacity:.9;overflow:hidden;padding:0;position:absolute;-webkit-transform:translate(-50%);transform:translate(-50%)}.vel-toolbar,.vel-toolbar .toolbar-btn{background-color:#2d2d2d;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-toolbar .toolbar-btn{-ms-flex-negative:0;-webkit-tap-highlight-color:transparent;color:#fff;cursor:pointer;flex-shrink:0;font-size:20px;outline:none;padding:6px 10px}.vel-toolbar .toolbar-btn:active,.vel-toolbar .toolbar-btn:hover{background-color:#3d3d3d}");
const g = "vel", f = defineComponent({ name: "SvgIcon", props: { type: { type: String, default: "" } }, setup: (e2) => () => createVNode("svg", { class: `${g}-icon icon`, "aria-hidden": "true" }, [createVNode("use", { "xlink:href": `#icon-${e2.type}` }, null)]) }), w = () => {
};
const k = (e2) => {
  e2.preventDefault();
}, _ = Object.prototype.toString, D = (e2) => (t2) => _.call(t2).slice(8, -1) === e2;
const M = (e2) => !!e2 && D("Object")(e2), S = (e2) => !!e2 && D("String")(e2);
function L(e2) {
  return null != e2;
}
const C = defineComponent({ name: "Toolbar", props: { zoomIn: { type: Function, default: w }, zoomOut: { type: Function, default: w }, rotateLeft: { type: Function, default: w }, rotateRight: { type: Function, default: w }, resize: { type: Function, default: w }, rotateDisabled: { type: Boolean, default: false }, zoomDisabled: { type: Boolean, default: false } }, setup: (e2) => () => createVNode("div", { class: `${g}-toolbar` }, [!e2.zoomDisabled && createVNode(Fragment, null, [createVNode("div", { role: "button", "aria-label": "zoom in button", class: "toolbar-btn toolbar-btn__zoomin", onClick: e2.zoomIn }, [createVNode(f, { type: "zoomin" }, null)]), createVNode("div", { role: "button", "aria-label": "zoom out button", class: "toolbar-btn toolbar-btn__zoomout", onClick: e2.zoomOut }, [createVNode(f, { type: "zoomout" }, null)])]), createVNode("div", { role: "button", "aria-label": "resize image button", class: "toolbar-btn toolbar-btn__resize", onClick: e2.resize }, [createVNode(f, { type: "resize" }, null)]), !e2.rotateDisabled && createVNode(Fragment, null, [createVNode("div", { role: "button", "aria-label": "image rotate left button", class: "toolbar-btn toolbar-btn__rotate", onClick: e2.rotateLeft }, [createVNode(f, { type: "rotate-left" }, null)]), createVNode("div", { role: "button", "aria-label": "image rotate right button", class: "toolbar-btn toolbar-btn__rotate", onClick: e2.rotateRight }, [createVNode(f, { type: "rotate-right" }, null)])])]) }), Y = () => createVNode("div", { class: `${g}-loading` }, [createVNode("div", { class: "ring" }, null)]), B = () => createVNode("div", { class: `${g}-on-error` }, [createVNode("div", { class: "ring" }, null), createVNode(f, { type: "img-broken" }, null)]), X = (e2, o2) => {
  let { slots: l2 } = o2;
  return createVNode("div", { class: `${g}-img-title` }, [l2.default ? l2.default() : ""]);
}, E = defineComponent({ name: "DefaultIcons", setup: () => () => createVNode("svg", { "aria-hidden": true, style: "position: absolute; width: 0; height: 0; overflow: hidden; visibility: hidden;" }, [createVNode("symbol", { id: "icon-rotate-right", viewBox: "0 0 1024 1024" }, [createVNode("path", { d: "M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973z m282.559912-479.07185A509.887841 509.887841 0 0 0 511.99984 0.00032C229.215928 0.00032 0 229.216248 0 512.00016s229.215928 511.99984 511.99984 511.99984 511.99984-229.215928 511.99984-511.99984c0-3.743999-0.032-7.455998-0.128-11.167997-1.631999-11.295996-8.159997-27.103992-31.87199-27.103991-27.487991 0-31.67999 21.247993-32.03199 32.06399l0.032 4.127999a30.62399 30.62399 0 0 0 0.16 2.079999H959.9997c0 247.423923-200.575937 447.99986-447.99986 447.99986S63.99998 759.424083 63.99998 512.00016 264.575917 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 1 277.439913 96.22397l-94.91197 91.679971c-25.439992 24.607992-17.439995 44.991986 17.887994 45.599986l188.031942 3.295999a64.31998 64.31998 0 0 0 65.055979-62.84798l3.295999-188.127942C969.407697 15.040315 949.311703 5.792318 923.871711 30.368311l-87.999972 85.023973z", fill: "" }, null)]), createVNode("symbol", { id: "icon-rotate-left", viewBox: "0 0 1024 1024" }, [createVNode("path", { d: "M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973zM188.159941 115.392284A509.887841 509.887841 0 0 1 511.99984 0.00032c282.783912 0 511.99984 229.215928 511.99984 511.99984s-229.215928 511.99984-511.99984 511.99984S0 794.784072 0 512.00016c0-3.743999 0.032-7.455998 0.128-11.167997 1.631999-11.295996 8.159997-27.103992 31.87199-27.103991 27.487991 0 31.67999 21.247993 32.03199 32.06399L63.99998 509.920161a30.62399 30.62399 0 0 1-0.16 2.079999H63.99998c0 247.423923 200.575937 447.99986 447.99986 447.99986s447.99986-200.575937 447.99986-447.99986S759.423763 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 0-277.439913 96.22397l94.91197 91.679971c25.439992 24.607992 17.439995 44.991986-17.887994 45.599986L123.551961 300.800226a64.31998 64.31998 0 0 1-65.055979-62.84798l-3.295999-188.127942C54.591983 15.040315 74.687977 5.792318 100.127969 30.368311l87.999972 85.023973z", fill: "" }, null)]), createVNode("symbol", { id: "icon-resize", viewBox: "0 0 1024 1024" }, [createVNode("path", { d: "M456.036919 791.8108 270.553461 791.8108 460.818829 601.572038l-39.593763-39.567157L231.314785 751.915162l0.873903-183.953615c0-15.465227-12.515035-27.981285-27.981285-27.981285s-27.981285 12.515035-27.981285 27.981285l0 251.829516c0 8.3072 3.415796 14.975063 8.826016 19.564591 5.082762 5.192256 12.132318 8.416693 19.947308 8.416693l251.036453 0c15.46625 0 27.981285-12.514012 27.981285-27.981285C484.018204 804.325835 471.504192 791.8108 456.036919 791.8108zM838.945819 184.644347c-5.082762-5.191232-12.132318-8.416693-19.947308-8.416693L567.961034 176.227654c-15.46625 0-27.981285 12.515035-27.981285 27.981285 0 15.46625 12.514012 27.981285 27.981285 27.981285l185.483458 0L563.206754 422.427962l39.567157 39.567157 189.910281-189.910281-0.873903 183.953615c0 15.46625 12.514012 27.981285 27.981285 27.981285s27.981285-12.514012 27.981285-27.981285L847.772858 204.208938C847.771835 195.902762 844.356039 189.234899 838.945819 184.644347zM847.771835 64.303538 176.227142 64.303538c-61.809741 0-111.924115 50.115398-111.924115 111.924115l0 671.544693c0 61.809741 50.114374 111.924115 111.924115 111.924115l671.544693 0c61.809741 0 111.924115-50.114374 111.924115-111.924115l0-671.544693C959.69595 114.418936 909.581576 64.303538 847.771835 64.303538zM903.733381 847.772346c0 30.878265-25.056676 55.962569-55.962569 55.962569L176.227142 903.734916c-30.90487 0-55.962569-25.084305-55.962569-55.962569l0-671.544693c0-30.9325 25.056676-55.962569 55.962569-55.962569l671.544693 0c30.90487 0 55.962569 25.03007 55.962569 55.962569L903.734404 847.772346z" }, null)]), createVNode("symbol", { id: "icon-img-broken", viewBox: "0 0 1024 1024" }, [createVNode("path", { d: "M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m0 682.666667H213.333333v-195.413334l42.24 42.24 170.666667-170.666666 170.666667 170.666666 170.666666-170.24L810.666667 530.346667V810.666667z m0-401.493334l-43.093334-43.093333-170.666666 171.093333-170.666667-170.666666-170.666667 170.666666-42.24-42.666666V213.333333h597.333334v195.84z" }, null)]), createVNode("symbol", { id: "icon-prev", viewBox: "0 0 1024 1024" }, [createVNode("path", { d: "M784.652701 955.6957 346.601985 517.644983c-2.822492-2.822492-2.822492-7.902977 0-11.289967l439.179713-439.179713c6.77398-6.77398 10.725469-16.370452 10.725469-25.966924L796.507166 36.692393c0-20.32194-16.370452-36.692393-36.692393-36.692393l-4.515987 0c-9.596472 0-19.192944 3.951488-25.966924 10.725469L250.072767 489.420066c-12.418964 12.418964-12.418964 32.740904 0 45.159868l477.565601 477.565601c7.338479 7.338479 17.499449 11.854465 28.224917 11.854465l0 0c22.015436 0 40.079383-18.063947 40.079383-40.079383l0 0C796.507166 973.759647 791.99118 963.598677 784.652701 955.6957z" }, null)]), createVNode("symbol", { id: "icon-next", viewBox: "0 0 1024 1024" }, [createVNode("path", { d: "M246.121279 955.6957l438.050717-438.050717c2.822492-2.822492 2.822492-7.902977 0-11.289967L244.992282 67.175303c-6.77398-6.77398-10.725469-16.370452-10.725469-25.966924L234.266814 36.692393C234.266814 16.370452 250.637266 0 270.959206 0l4.515987 0c9.596472 0 19.192944 3.951488 25.966924 10.725469l478.694598 478.694598c12.418964 12.418964 12.418964 32.740904 0 45.159868l-477.565601 477.565601c-7.338479 7.338479-17.499449 11.854465-28.224917 11.854465l0 0c-22.015436 0-40.079383-18.063947-40.079383-40.079383l0 0C234.266814 973.759647 238.7828 963.598677 246.121279 955.6957z" }, null)]), createVNode("symbol", { id: "icon-zoomin", viewBox: "0 0 1024 1024" }, [createVNode("path", { d: "M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z" }, null), createVNode("path", { d: "M235.712 369.92h390.72v127.104H235.712z" }, null), createVNode("path", { d: "M367.488 238.144h127.104v390.72H367.488z" }, null)]), createVNode("symbol", { id: "icon-close", viewBox: "0 0 1024 1024" }, [createVNode("path", { d: "M570.24 512l259.2 259.2-58.88 58.24L512 570.24l-261.12 261.12-58.24-58.24L453.76 512 194.56 252.8l58.24-58.24L512 453.76l261.12-261.12 58.24 58.24z" }, null)]), createVNode("symbol", { id: "icon-zoomout", viewBox: "0 0 1024 1024" }, [createVNode("path", { d: "M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z" }, null), createVNode("path", { d: "M235.712 369.92h390.72v127.104H235.712z" }, null)])]) }), T = global;
let $ = Date.now();
function I(e2) {
  const t2 = Date.now(), o2 = Math.max(0, 16 - (t2 - $)), l2 = setTimeout(e2, o2);
  return $ = t2 + o2, l2;
}
function O(e2) {
  return (T.requestAnimationFrame || I).call(T, e2);
}
function R(e2) {
  (T.cancelAnimationFrame || T.clearTimeout).call(T, e2);
}
function A(e2, t2) {
  const o2 = e2.clientX - t2.clientX, l2 = e2.clientY - t2.clientY;
  return Math.sqrt(o2 * o2 + l2 * l2);
}
function j(e2) {
  return "function" == typeof e2 || "[object Object]" === Object.prototype.toString.call(e2) && !isVNode(e2);
}
var H = defineComponent({ name: "VueEasyLightbox", props: { imgs: { type: [Array, String], default: () => "" }, visible: { type: Boolean, default: false }, index: { type: Number, default: 0 }, scrollDisabled: { type: Boolean, default: true }, escDisabled: { type: Boolean, default: false }, moveDisabled: { type: Boolean, default: false }, titleDisabled: { type: Boolean, default: false }, maskClosable: { type: Boolean, default: true }, teleport: { type: [String, Object], default: null }, swipeTolerance: { type: Number, default: 50 }, loop: { type: Boolean, default: false }, rtl: { type: Boolean, default: false }, zoomScale: { type: Number, default: 0.12 }, maxZoom: { type: Number, default: 3 }, minZoom: { type: Number, default: 0.1 }, rotateDisabled: { type: Boolean, default: false }, zoomDisabled: { type: Boolean, default: false }, pinchDisabled: { type: Boolean, default: false }, dblclickDisabled: { type: Boolean, default: false } }, emits: { hide: () => true, "on-error": (e2) => true, "on-prev": (e2, t2) => true, "on-next": (e2, t2) => true, "on-prev-click": (e2, t2) => true, "on-next-click": (e2, t2) => true, "on-index-change": (e2, t2) => true, "on-rotate": (e2) => true }, setup(e2, o2) {
  let { emit: p2, slots: v2 } = o2;
  const { imgRef: m2, imgState: h2, setImgSize: w2 } = (() => {
    const e3 = ref(), t2 = reactive({ width: 0, height: 0, maxScale: 1 });
    return { imgRef: e3, imgState: t2, setImgSize: () => {
      if (e3.value) {
        const { width: o3, height: l2, naturalWidth: n2 } = e3.value;
        t2.maxScale = n2 / o3, t2.width = o3, t2.height = l2;
      }
    } };
  })(), x2 = ref(e2.index);
  ref("");
  const T2 = reactive({ scale: 1, lastScale: 1, rotateDeg: 0, top: 0, left: 0, initX: 0, initY: 0, lastX: 0, lastY: 0, touches: [] }), $2 = reactive({ loadError: false, loading: false, dragging: false, gesturing: false, wheeling: false }), I2 = computed(() => {
    return t2 = e2.imgs, D("Array")(t2) ? e2.imgs.map((e3) => "string" == typeof e3 ? { src: e3 } : function(e4) {
      return M(e4) && S(e4.src);
    }(e3) ? e3 : void 0).filter(L) : S(e2.imgs) ? [{ src: e2.imgs }] : [];
    var t2;
  }), H2 = computed(() => I2.value[x2.value]), F2 = computed(() => {
    var _a;
    return (_a = I2.value[x2.value]) == null ? void 0 : _a.src;
  }), N2 = computed(() => {
    var _a;
    return (_a = I2.value[x2.value]) == null ? void 0 : _a.title;
  }), P = computed(() => {
    var _a;
    return (_a = I2.value[x2.value]) == null ? void 0 : _a.alt;
  }), V = computed(() => ({ cursor: $2.loadError ? "default" : e2.moveDisabled ? $2.dragging ? "grabbing" : "grab" : "move", top: `calc(50% + ${T2.top}px)`, left: `calc(50% + ${T2.left}px)`, transition: $2.dragging || $2.gesturing ? "none" : "", transform: `translate(-50%, -50%) scale(${T2.scale}) rotate(${T2.rotateDeg}deg)` })), Z = () => {
    p2("hide");
  }, q = () => {
    T2.scale = 1, T2.lastScale = 1, T2.rotateDeg = 0, T2.top = 0, T2.left = 0, $2.loadError = false, $2.dragging = false, $2.loading = true;
  }, U = (t2, o3) => {
    const l2 = x2.value;
    q(), x2.value = t2, I2.value[x2.value] === I2.value[t2] && nextTick(() => {
      $2.loading = false;
    }), e2.visible && l2 !== t2 && (o3 && o3(l2, t2), p2("on-index-change", l2, t2));
  }, W = () => {
    const t2 = x2.value, o3 = e2.loop ? (t2 + 1) % I2.value.length : t2 + 1;
    !e2.loop && o3 > I2.value.length - 1 || U(o3, (e3, t3) => {
      p2("on-next", e3, t3), p2("on-next-click", e3, t3);
    });
  }, G = () => {
    const t2 = x2.value;
    let o3 = t2 - 1;
    if (0 === t2) {
      if (!e2.loop) return;
      o3 = I2.value.length - 1;
    }
    U(o3, (e3, t3) => {
      p2("on-prev", e3, t3), p2("on-prev-click", e3, t3);
    });
  }, J = (e3) => {
    Math.abs(1 - e3) < 0.05 ? e3 = 1 : Math.abs(h2.maxScale - e3) < 0.05 && (e3 = h2.maxScale), T2.lastScale = T2.scale, T2.scale = e3;
  }, K = () => {
    const t2 = T2.scale + e2.zoomScale;
    t2 < h2.maxScale * e2.maxZoom && J(t2);
  }, Q = () => {
    const t2 = T2.scale - e2.zoomScale;
    t2 > e2.minZoom && J(t2);
  }, ee = () => {
    const e3 = T2.rotateDeg % 360;
    p2("on-rotate", Math.abs(e3 < 0 ? e3 + 360 : e3));
  }, te = () => {
    T2.rotateDeg -= 90, ee();
  }, oe = () => {
    T2.rotateDeg += 90, ee();
  }, le = () => {
    T2.scale = 1, T2.top = 0, T2.left = 0;
  }, ne = function() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return !e2.moveDisabled && 0 === t2;
  }, { onMouseDown: ae, onMouseMove: re, onMouseUp: ie } = /* @__PURE__ */ ((e3, t2, o3) => {
    let l2, n2 = false;
    return { onMouseDown: (o4) => {
      e3.initX = e3.lastX = o4.clientX, e3.initY = e3.lastY = o4.clientY, t2.dragging = true, n2 = false, o4.stopPropagation();
    }, onMouseUp: (e4) => {
      o3(e4.button) && R(l2), t2.dragging = false, n2 = false;
    }, onMouseMove: (a2) => {
      if (t2.dragging) if (o3(a2.button)) {
        if (n2) return;
        n2 = true, l2 = O(() => {
          const { top: t3, left: o4, lastY: l3, lastX: r2 } = e3;
          e3.top = t3 - l3 + a2.clientY, e3.left = o4 - r2 + a2.clientX, e3.lastX = a2.clientX, e3.lastY = a2.clientY, n2 = false;
        });
      } else e3.lastX = a2.clientX, e3.lastY = a2.clientY;
      a2.stopPropagation();
    } };
  })(T2, $2, ne), { onTouchStart: se, onTouchMove: ce, onTouchEnd: ue } = /* @__PURE__ */ ((e3, t2, o3, l2, n2) => {
    let a2, r2 = false;
    return { onTouchStart: (e4) => {
      const { touches: l3 } = e4;
      l3.length > 1 && n2() ? (o3.gesturing = true, t2.touches = l3) : (t2.initX = t2.lastX = l3[0].clientX, t2.initY = t2.lastY = l3[0].clientY, o3.dragging = true), e4.stopPropagation();
    }, onTouchMove: (i2) => {
      if (r2) return;
      const { touches: s2 } = i2, { lastX: c2, lastY: u2, left: d2, top: p3, scale: b2 } = t2;
      if (!o3.gesturing && o3.dragging) {
        if (!s2[0]) return;
        const { clientX: e4, clientY: o4 } = s2[0];
        l2() ? a2 = O(() => {
          t2.lastX = e4, t2.lastY = o4, t2.top = p3 - u2 + o4, t2.left = d2 - c2 + e4, r2 = false;
        }) : (t2.lastX = e4, t2.lastY = o4);
      } else o3.gesturing && t2.touches.length > 1 && s2.length > 1 && n2() && (a2 = O(() => {
        const o4 = (A(t2.touches[0], t2.touches[1]) - A(s2[0], s2[1])) / e3.width;
        t2.touches = s2;
        const l3 = b2 - 1.3 * o4;
        l3 > 0.5 && l3 < 1.5 * e3.maxScale && (t2.scale = l3), r2 = false;
      }));
    }, onTouchEnd: () => {
      R(a2), o3.dragging = false, o3.gesturing = false, r2 = false;
    } };
  })(h2, T2, $2, ne, () => !e2.pinchDisabled), de = () => {
    e2.dblclickDisabled || (T2.scale !== h2.maxScale ? (T2.lastScale = T2.scale, T2.scale = h2.maxScale) : T2.scale = T2.lastScale);
  }, pe = (t2) => {
    $2.loadError || $2.gesturing || $2.loading || $2.dragging || $2.wheeling || !e2.scrollDisabled || e2.zoomDisabled || ($2.wheeling = true, setTimeout(() => {
      $2.wheeling = false;
    }, 80), t2.deltaY < 0 ? K() : Q());
  }, ve = () => {
    e2.maskClosable && Z();
  }, me = () => {
    w2();
  }, ge = () => {
    $2.loading = false;
  }, fe = (e3) => {
    $2.loading = false, $2.loadError = true, p2("on-error", e3);
  };
  watch(() => e2.index, (e3) => {
    e3 < 0 || e3 >= I2.value.length || U(e3);
  }), watch(() => $2.dragging, (t2, o3) => {
    const l2 = !t2 && o3;
    if (!ne() && l2) {
      const t3 = T2.lastX - T2.initX, o4 = T2.lastY - T2.initY, l3 = e2.swipeTolerance;
      Math.abs(t3) > Math.abs(o4) && (t3 < -1 * l3 ? W() : t3 > l3 && G());
    }
  }), watch(() => e2.visible, (t2) => {
    if (t2) {
      q();
      const t3 = I2.value.length;
      if (0 === t3) return x2.value = 0, $2.loading = false, void nextTick(() => $2.loadError = true);
      x2.value = e2.index >= t3 ? t3 - 1 : e2.index < 0 ? 0 : e2.index, e2.scrollDisabled && we();
    } else e2.scrollDisabled && xe();
  });
  const we = () => {
  }, xe = () => {
  };
  onMounted(() => {
  }), onBeforeUnmount(() => {
    e2.scrollDisabled && xe();
  });
  const ye = () => $2.loading ? v2.loading ? v2.loading({ key: "loading" }) : createVNode(Y, { key: "img-loading" }, null) : $2.loadError ? v2.onerror ? v2.onerror({ key: "onerror" }) : createVNode(B, { key: "img-on-error" }, null) : createVNode("div", { class: `${g}-img-wrapper`, style: V.value, key: "img-wrapper" }, [createVNode("img", { alt: P.value, ref: m2, draggable: "false", class: `${g}-img`, src: F2.value, onMousedown: ae, onMouseup: ie, onMousemove: re, onTouchstart: se, onTouchmove: ce, onTouchend: ue, onLoad: me, onDblclick: de, onDragstart: (e3) => {
    e3.preventDefault();
  } }, null)]), ze = () => {
    if (v2["prev-btn"]) return v2["prev-btn"]({ prev: G });
    if (I2.value.length <= 1) return;
    const o3 = !e2.loop && x2.value <= 0;
    return createVNode("div", { role: "button", "aria-label": "previous image button", class: "btn__prev " + (o3 ? "disable" : ""), onClick: G }, [e2.rtl ? createVNode(f, { type: "next" }, null) : createVNode(f, { type: "prev" }, null)]);
  }, ke = () => {
    if (v2["next-btn"]) return v2["next-btn"]({ next: W });
    if (I2.value.length <= 1) return;
    const o3 = !e2.loop && x2.value >= I2.value.length - 1;
    return createVNode("div", { role: "button", "aria-label": "next image button", class: "btn__next " + (o3 ? "disable" : ""), onClick: W }, [e2.rtl ? createVNode(f, { type: "prev" }, null) : createVNode(f, { type: "next" }, null)]);
  }, _e = () => {
    if (!(e2.titleDisabled || $2.loading || $2.loadError)) return v2.title ? v2.title({ currentImg: H2.value }) : N2.value ? createVNode(X, null, { default: () => [N2.value] }) : void 0;
  }, De = () => {
    let o3;
    if (e2.visible) return createVNode("div", { onTouchmove: k, class: [`${g}-modal`, e2.rtl ? "is-rtl" : ""], onClick: withModifiers(ve, ["self"]), onWheel: pe }, [createVNode(E, null, null), createVNode(Transition, { name: `${g}-fade`, mode: "out-in" }, j(o3 = ye()) ? o3 : { default: () => [o3] }), createVNode("img", { style: "display:none;", src: F2.value, onError: fe, onLoad: ge }, null), createVNode("div", { class: `${g}-btns-wrapper` }, [ze(), ke(), _e(), v2["close-btn"] ? v2["close-btn"]({ close: Z }) : createVNode("div", { role: "button", "aria-label": "close image preview button", class: "btn__close", onClick: Z }, [createVNode(f, { type: "close" }, null)]), v2.toolbar ? v2.toolbar({ toolbarMethods: { zoomIn: K, zoomOut: Q, rotate: te, rotateLeft: te, rotateRight: oe, resize: le }, zoomIn: K, zoomOut: Q, rotate: te, rotateLeft: te, rotateRight: oe, resize: le }) : createVNode(C, { zoomIn: K, zoomOut: Q, resize: le, rotateLeft: te, rotateRight: oe, rotateDisabled: e2.rotateDisabled, zoomDisabled: e2.zoomDisabled }, null)])]);
  };
  return () => {
    let o3;
    if (e2.teleport) {
      let o4;
      return createVNode(Teleport, { to: e2.teleport }, { default: () => [createVNode(Transition, { name: `${g}-fade` }, j(o4 = De()) ? o4 : { default: () => [o4] })] });
    }
    return createVNode(Transition, { name: `${g}-fade` }, j(o3 = De()) ? o3 : { default: () => [o3] });
  };
} });
const N = Object.assign(H, { install: (e2) => {
  e2.component(H.name, H);
} });
const plugin_ucMK8VhJjR = /* @__PURE__ */ defineNuxtPlugin((_nuxtApp) => {
  _nuxtApp.vueApp.use(N);
});
const plugin_nuxt3_gGdllsjxuZ = /* @__PURE__ */ defineNuxtPlugin(() => ({
  provide: {
    mail: {
      send: async (config) => {
        try {
          await $fetch("/mail/send", {
            body: config,
            method: "POST"
          });
        } catch (error) {
          throw new Error(error.response._data.statusMessage);
        }
      }
    }
  }
}));
const imask_nTmTWqzxUs = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("mask", {
    mounted(el, binding) {
      IMask(el, { mask: binding.value });
    },
    updated(el, binding) {
      IMask(el, { mask: binding.value });
    }
  });
});
const pinia_Uphuq97G1L = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  nuxtApp.provide("pinia", pinia);
});
let routes;
const prerender_server_LXx1wM9sKF = /* @__PURE__ */ defineNuxtPlugin(async () => {
  let __temp, __restore;
  if (routerOptions.hashMode) {
    return;
  }
  if (routes && !routes.length) {
    return;
  }
  routes || (routes = Array.from(processRoutes(([__temp, __restore] = executeAsync(() => {
    var _a;
    return (_a = routerOptions.routes) == null ? void 0 : _a.call(routerOptions, _routes);
  }), __temp = await __temp, __restore(), __temp) ?? _routes)));
  const batch = routes.splice(0, 10);
  prerenderRoutes(batch);
});
const OPTIONAL_PARAM_RE = /^\/?:.*(?:\?|\(\.\*\)\*)$/;
function processRoutes(routes2, currentPath = "/", routesToPrerender = /* @__PURE__ */ new Set()) {
  var _a;
  for (const route of routes2) {
    if (OPTIONAL_PARAM_RE.test(route.path) && !((_a = route.children) == null ? void 0 : _a.length)) {
      routesToPrerender.add(currentPath);
    }
    if (route.path.includes(":")) {
      continue;
    }
    const fullPath = joinURL(currentPath, route.path);
    routesToPrerender.add(fullPath);
    if (route.children) {
      processRoutes(route.children, fullPath, routesToPrerender);
    }
  }
  return routesToPrerender;
}
const plugins = [
  unhead_KgADcZ0jPj,
  plugin,
  _0_siteConfig_MwZUzHrRNP,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  og_image_canonical_urls_server_YYKCE0iokV,
  route_rule_og_image_server_xL1rf4QeLE,
  nuxt_plugin_6wEQMY3tee,
  pwa_icons_plugin_LnrhIJeMG7,
  plugin_C2QvvtgUo3,
  plugin_tbFNToZNim,
  defaults_JNk3m5wGSX,
  init_3TppeXojsQ,
  robot_meta_server_6Qhe4cPOr2,
  plugin_ucMK8VhJjR,
  plugin_nuxt3_gGdllsjxuZ,
  imask_nTmTWqzxUs,
  pinia_Uphuq97G1L,
  prerender_server_LXx1wM9sKF
];
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {
  __name: "CookieConsent",
  __ssrInlineRender: true,
  setup(__props) {
    const showCookieConsent = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (showCookieConsent.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "cookie-consent" }, _attrs))} data-v-f5594720><div class="cookie-card shadow-lg p-4 rounded" data-v-f5594720><div class="cookie-content" data-v-f5594720><p class="mb-3 text-light" data-v-f5594720> Este site utiliza cookies para analisar visitas e melhorar sua experiência. Para saber mais, leia nossa `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/politica-de-privacidade",
          class: "text-decoration-underline fw-bold"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Política de Privacidade`);
            } else {
              return [
                createTextVNode("Política de Privacidade")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`. </p><button class="btn btn-primary" data-v-f5594720>Ok, entendo</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieConsent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f5594720"]]);
const layouts = {
  default: () => import('./default-fdPcZB4n.mjs')
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_1 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: slots.default ? h(Fragment, void 0, slots.default(routeProps)) : routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray$1(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m2) => {
    var _a;
    return ((_a = m2.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CookieConsent = __nuxt_component_0;
  const _component_NuxtLayout = __nuxt_component_1;
  const _component_NuxtPage = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CookieConsent, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLayout, null, {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-BdiPG7OC.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-CFlSDs3v.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = defineAsyncComponent(() => import('./island-renderer-CmsZgoUs.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { N, _export_sfc as _, __nuxt_component_0$1 as a, useNuxtApp as b, createError as c, asyncDataDefaults as d, entry$1 as default, useRoute as e, useRouter as f, useRuntimeConfig as g, useOgImageRuntimeConfig as h, injectHead as i, createOgImageMeta as j, getOgImagePath as k, useRequestEvent as l, useSeoMeta as m, normaliseOptions as n, defineNuxtRouteMiddleware as o, executeAsync as p, useSiteConfig as q, separateProps as s, useHead as u };
//# sourceMappingURL=server.mjs.map
