import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHost, getRequestProtocol, getQuery as getQuery$1, createError, setResponseStatus, setResponseHeader, send, getRequestHeaders, removeResponseHeader, getResponseHeader, setHeader, getHeader, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/hookable/dist/index.mjs';
import { klona } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/scule/dist/index.mjs';
import defu, { defuFn, defu as defu$1, createDefu } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, hasProtocol, withHttps, withoutProtocol, withTrailingSlash, withLeadingSlash, withoutTrailingSlash, withBase, withoutLeadingSlash, decodePath, parsePath, parseQuery, stringifyQuery, encodePath, stringifyParsedURL } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ufo/dist/index.mjs';
import { createStorage, defineDriver, prefixStorage, normalizeKey } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs.mjs';
import fsDriver from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs-lite.mjs';
import lruCacheDriver from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/lru-cache.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/radix3/dist/index.mjs';
import { toValue } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/index.mjs';
import { createConsola } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/npm/consola.mjs';
import { packString } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/packrup/dist/index.mjs';
import { parse } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/devalue/index.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve as resolve$1, isAbsolute } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/pathe/dist/index.mjs';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ipx/dist/index.mjs';

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "c716b60f-59e9-413b-a841-67930e74faa7",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/:slug": {
        "isr": 60
      },
      "/sitemap.xsl": {
        "headers": {
          "Content-Type": "application/xslt+xml"
        }
      },
      "/sitemap.xml": {
        "swr": 600,
        "cache": {
          "swr": true,
          "maxAge": 600,
          "varies": [
            "X-Forwarded-Host",
            "X-Forwarded-Proto",
            "Host"
          ]
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "gtm": {
      "devtools": true,
      "id": "GTM-N3X2JT4",
      "defer": true,
      "compatibility": false,
      "nonce": "2726c7f26c",
      "enabled": true,
      "debug": true,
      "loadScript": true,
      "enableRouterSync": true,
      "trackOnNextTick": false
    },
    "cookieControl": {
      "barPosition": "bottom-full",
      "closeModalOnClickOutside": false,
      "colors": {
        "barBackground": "#000",
        "barButtonBackground": "#fff",
        "barButtonColor": "#000",
        "barButtonHoverBackground": "#333",
        "barButtonHoverColor": "#fff",
        "barTextColor": "#fff",
        "checkboxActiveBackground": "#000",
        "checkboxActiveCircleBackground": "#fff",
        "checkboxDisabledBackground": "#ddd",
        "checkboxDisabledCircleBackground": "#fff",
        "checkboxInactiveBackground": "#000",
        "checkboxInactiveCircleBackground": "#fff",
        "controlButtonBackground": "#fff",
        "controlButtonHoverBackground": "#000",
        "controlButtonIconColor": "#000",
        "controlButtonIconHoverColor": "#fff",
        "focusRingColor": "#808080",
        "modalBackground": "#fff",
        "modalButtonBackground": "#000",
        "modalButtonColor": "#fff",
        "modalButtonHoverBackground": "#333",
        "modalButtonHoverColor": "#fff",
        "modalOverlay": "#000",
        "modalOverlayOpacity": 0.8,
        "modalTextColor": "#000",
        "modalUnsavedColor": "#fff"
      },
      "cookies": {
        "necessary": [],
        "optional": []
      },
      "cookieExpiryOffsetMs": 31536000000,
      "cookieNameIsConsentGiven": "ncc_c",
      "cookieNameCookiesEnabledIds": "ncc_e",
      "cookieOptions": {
        "path": "/",
        "sameSite": "strict",
        "secure": true
      },
      "isAcceptNecessaryButtonEnabled": true,
      "isControlButtonEnabled": true,
      "isCookieIdVisible": false,
      "isCssEnabled": true,
      "isCssPonyfillEnabled": false,
      "isDashInDescriptionEnabled": true,
      "isIframeBlocked": false,
      "isModalForced": false,
      "locales": [
        "en"
      ],
      "localeTexts": {
        "en": {
          "accept": "Accept",
          "acceptAll": "Accept all",
          "bannerDescription": "We use our own cookies and third-party cookies so that we can display this website correctly and better understand how this website is used, with a view to improving the services we offer. A decision on cookie usage permissions can be changed anytime using the cookie button that will appear after a selection has been made on this banner.",
          "bannerTitle": "Cookies",
          "close": "Close",
          "cookiesFunctional": "Functional cookies",
          "cookiesNecessary": "Necessary cookies",
          "cookiesOptional": "Optional cookies",
          "decline": "Decline",
          "declineAll": "Decline all",
          "here": "here",
          "iframeBlocked": "To see this, please enable functional cookies",
          "manageCookies": "Learn more and customize",
          "save": "Save",
          "settingsUnsaved": "You have unsaved settings"
        }
      }
    }
  },
  "sitemap": {
    "isI18nMapped": false,
    "sitemapName": "sitemap.xml",
    "isMultiSitemap": false,
    "excludeAppSources": [],
    "cacheMaxAgeSeconds": 600,
    "autoLastmod": false,
    "defaultSitemapsChunkSize": 1000,
    "minify": false,
    "sortEntries": true,
    "debug": false,
    "discoverImages": true,
    "discoverVideos": true,
    "sitemapsPathPrefix": "/__sitemap__/",
    "isNuxtContentDocumentDriven": false,
    "xsl": "/__sitemap__/style.xsl",
    "xslTips": true,
    "xslColumns": [
      {
        "label": "URL",
        "width": "50%"
      },
      {
        "label": "Images",
        "width": "25%",
        "select": "count(image:image)"
      },
      {
        "label": "Last Updated",
        "width": "25%",
        "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
      }
    ],
    "credits": true,
    "version": "6.1.1",
    "sitemaps": {
      "sitemap.xml": {
        "sitemapName": "sitemap.xml",
        "route": "sitemap.xml",
        "defaults": {},
        "include": [],
        "exclude": [
          "/_nuxt/**",
          "/_**"
        ],
        "includeAppSources": true
      }
    }
  },
  "nuxt-schema-org": {
    "reactive": false,
    "minify": true,
    "scriptAttributes": {
      "id": "schema-org-graph"
    },
    "identity": "",
    "version": "3.3.9"
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "gsstudio2",
        "env": "production"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "nuxt-app"
      },
      {
        "_priority": -3,
        "_context": "nuxt-site-config:config",
        "url": "https://gsstudio.com.br",
        "name": "GS STUDIO"
      }
    ],
    "version": "2.2.18",
    "debug": false
  },
  "nuxt-robots": {
    "version": "4.1.7",
    "usingNuxtContent": false,
    "debug": false,
    "credits": true,
    "groups": [
      {
        "userAgent": [
          "*"
        ],
        "disallow": [
          ""
        ],
        "allow": [],
        "_indexable": true,
        "_rules": []
      }
    ],
    "sitemap": [
      "/sitemap.xml"
    ],
    "header": true,
    "robotsEnabledValue": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "robotsDisabledValue": "noindex, nofollow",
    "cacheControl": "max-age=14400, must-revalidate"
  },
  "nuxt-simple-robots": {
    "version": "4.1.7",
    "usingNuxtContent": false,
    "debug": false,
    "credits": true,
    "groups": [
      {
        "userAgent": [
          "*"
        ],
        "disallow": [
          ""
        ],
        "allow": [],
        "_indexable": true,
        "_rules": []
      }
    ],
    "sitemap": [
      "/sitemap.xml"
    ],
    "header": true,
    "robotsEnabledValue": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "robotsDisabledValue": "noindex, nofollow",
    "cacheControl": "max-age=14400, must-revalidate"
  },
  "nuxt-og-image": {
    "version": "3.0.4",
    "satoriOptions": {},
    "resvgOptions": {},
    "sharpOptions": {},
    "publicStoragePath": "root:public",
    "defaults": {
      "emojis": "noto",
      "renderer": "satori",
      "component": "NuxtSeo",
      "extension": "png",
      "width": 1200,
      "height": 600,
      "cacheMaxAgeSeconds": 259200
    },
    "debug": false,
    "baseCacheKey": "/cache/nuxt-og-image/3.0.4",
    "fonts": [
      {
        "cacheKey": "Inter:400",
        "style": "normal",
        "weight": 400,
        "name": "Inter",
        "key": "nuxt-og-image:fonts:Inter-400.ttf.base64"
      },
      {
        "cacheKey": "Inter:700",
        "style": "normal",
        "weight": 700,
        "name": "Inter",
        "key": "nuxt-og-image:fonts:Inter-700.ttf.base64"
      }
    ],
    "hasNuxtIcon": false,
    "colorPreference": "light",
    "isNuxtContentDocumentDriven": false
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "/Users/giovannisertorio/Desktop/Sites/gsstudio2/public"
      ]
    },
    "http": {
      "domains": [
        "s3.gsstudio.com.br",
        "gsstudio.com.br"
      ]
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"nuxt-og-image:fonts","dir":"/Users/giovannisertorio/Desktop/Sites/gsstudio2/.nuxt/cache/nuxt-og-image@3.0.4/_fonts"},{"baseName":"server","dir":"/Users/giovannisertorio/Desktop/Sites/gsstudio2/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const normalizeFsKey = (item) => item.replaceAll(":", "_");
const _47Users_47giovannisertorio_47Desktop_47Sites_47gsstudio2_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js = defineDriver((opts) => {
  const fs = fsDriver({ base: opts.base });
  const lru = lruCacheDriver({ max: 1e3 });
  return {
    ...fs,
    // fall back to file system - only the bottom three methods are used in renderer
    async setItem(key, value, opts2) {
      await Promise.all([
        fs.setItem?.(normalizeFsKey(key), value, opts2),
        lru.setItem?.(key, value, opts2)
      ]);
    },
    async hasItem(key, opts2) {
      return await lru.hasItem(key, opts2) || await fs.hasItem(normalizeFsKey(key), opts2);
    },
    async getItem(key, opts2) {
      return await lru.getItem(key, opts2) || await fs.getItem(normalizeFsKey(key), opts2);
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', _47Users_47giovannisertorio_47Desktop_47Sites_47gsstudio2_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js({"driver":"/Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js","base":"/Users/giovannisertorio/Desktop/Sites/gsstudio2/.nuxt/cache/nitro/prerender"}));
storage.mount('data', fsDriver({"driver":"fsLite","base":"/Users/giovannisertorio/Desktop/Sites/gsstudio2/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/giovannisertorio/Desktop/Sites/gsstudio2","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/giovannisertorio/Desktop/Sites/gsstudio2/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/giovannisertorio/Desktop/Sites/gsstudio2/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/giovannisertorio/Desktop/Sites/gsstudio2/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function getSiteIndexable(e) {
  const { env, indexable } = useSiteConfig(e);
  if (typeof indexable !== "undefined")
    return String(indexable) === "true";
  return env === "production";
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(config.url, { acceptRelative: true, strict: false }))
    config.url = withHttps(config.url);
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0)
      return;
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length > 0)
      stack.push(entry);
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined") {
          siteConfig[k] = val;
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0].toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port = false;
  let protocol = cert && key || !false ? "https" : "http";
  if (process.env.__NUXT_DEV__) {
    const origin = JSON.parse(process.env.__NUXT_DEV__).proxy.url;
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else if (process.env.NUXT_VITE_NODE_OPTIONS) {
    const origin = JSON.parse(process.env.NUXT_VITE_NODE_OPTIONS).baseURL.replace("/__nuxt_vite_node__", "");
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return withTrailingSlash(`${protocol}://${host}${port}`);
}

function useSiteConfig(e, _options) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu$1(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
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
  const lastSegment = path.split("/").pop();
  return !!(lastSegment || path).match(/\.[0-9a-z]+$/i)?.[0];
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || true ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}
function withSiteUrl(e, path, options = {}) {
  const siteConfig = e.context.siteConfig?.get();
  let siteUrl = e.context.siteConfigNitroOrigin;
  if ((options.canonical !== false || true) && siteConfig.url)
    siteUrl = siteConfig.url;
  return resolveSitePath(path, {
    absolute: true,
    siteUrl,
    trailingSlash: siteConfig.trailingSlash,
    base: e.context.nitro.baseURL,
    withBase: options.withBase
  });
}

function defineNitroPlugin(def) {
  return def;
}

function withoutQuery$2(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher$2() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery$2(path)), app.baseURL)
    ).reverse());
  };
}

function matches(pattern, path) {
  const pathLength = path.length;
  const patternLength = pattern.length;
  const matchingLengths = Array.from({ length: pathLength + 1 }).fill(0);
  let numMatchingLengths = 1;
  let p = 0;
  while (p < patternLength) {
    if (pattern[p] === "$" && p + 1 === patternLength) {
      return matchingLengths[numMatchingLengths - 1] === pathLength;
    }
    if (pattern[p] === "*") {
      numMatchingLengths = pathLength - matchingLengths[0] + 1;
      for (let i = 1; i < numMatchingLengths; i++) {
        matchingLengths[i] = matchingLengths[i - 1] + 1;
      }
    } else {
      let numMatches = 0;
      for (let i = 0; i < numMatchingLengths; i++) {
        const matchLength = matchingLengths[i];
        if (matchLength < pathLength && path[matchLength] === pattern[p]) {
          matchingLengths[numMatches++] = matchLength + 1;
        }
      }
      if (numMatches === 0) {
        return false;
      }
      numMatchingLengths = numMatches;
    }
    p++;
  }
  return true;
}
function matchPathToRule(path, _rules) {
  let matchedRule = null;
  const rules = _rules.filter(Boolean);
  const rulesLength = rules.length;
  let i = 0;
  while (i < rulesLength) {
    const rule = rules[i];
    if (!matches(rule.pattern, path)) {
      i++;
      continue;
    }
    if (!matchedRule || rule.pattern.length > matchedRule.pattern.length) {
      matchedRule = rule;
    } else if (rule.pattern.length === matchedRule.pattern.length && rule.allow && !matchedRule.allow) {
      matchedRule = rule;
    }
    i++;
  }
  return matchedRule;
}
function asArray(v) {
  return typeof v === "undefined" ? [] : Array.isArray(v) ? v : [v];
}
function generateRobotsTxt({ groups, sitemaps }) {
  const lines = [];
  for (const group of groups) {
    for (const comment of group.comment || [])
      lines.push(`# ${comment}`);
    for (const userAgent of group.userAgent || ["*"])
      lines.push(`User-agent: ${userAgent}`);
    for (const allow of group.allow || [])
      lines.push(`Allow: ${allow}`);
    for (const disallow of group.disallow || [])
      lines.push(`Disallow: ${disallow}`);
    for (const cleanParam of group.cleanParam || [])
      lines.push(`Clean-param: ${cleanParam}`);
    lines.push("");
  }
  for (const sitemap of sitemaps)
    lines.push(`Sitemap: ${sitemap}`);
  return lines.join("\n");
}
createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function normaliseRobotsRouteRule(config) {
  let allow;
  if (typeof config.robots === "boolean")
    allow = config.robots;
  else if (typeof config.robots === "object" && typeof config.robots.indexable !== "undefined")
    allow = config.robots.indexable;
  else if (typeof config.index !== "undefined")
    allow = config.index;
  let rule;
  if (typeof config.robots === "object" && typeof config.robots.rule !== "undefined")
    rule = config.robots.rule;
  else if (typeof config.robots === "string")
    rule = config.robots;
  if (rule && !allow)
    allow = rule !== "none" && !rule.includes("noindex");
  if (typeof allow === "undefined" && typeof rule === "undefined")
    return;
  return {
    allow,
    rule
  };
}

function getPathRobotConfig(e, options) {
  const { robotsDisabledValue, robotsEnabledValue, usingNuxtContent } = useRuntimeConfig()["nuxt-robots"];
  if (!options?.skipSiteIndexable) {
    if (!getSiteRobotConfig(e).indexable) {
      return {
        rule: robotsDisabledValue,
        indexable: false
      };
    }
  }
  const path = options?.path || e.path;
  let userAgent = options?.userAgent;
  if (!userAgent) {
    try {
      userAgent = getRequestHeader(e, "User-Agent");
    } catch {
    }
  }
  const nitroApp = useNitroApp();
  const groups = [
    // run explicit user agent matching first
    ...nitroApp._robots.ctx.groups.filter((g) => {
      if (userAgent) {
        return g.userAgent.some((ua) => ua.toLowerCase().includes(userAgent.toLowerCase()));
      }
      return false;
    }),
    // run wildcard matches second
    ...nitroApp._robots.ctx.groups.filter((g) => g.userAgent.includes("*"))
  ];
  for (const group of groups) {
    if (!group._indexable) {
      return {
        indexable: false,
        rule: robotsDisabledValue,
        debug: {
          source: "/robots.txt",
          line: `Disallow: /`
        }
      };
    }
    const robotsTxtRule = matchPathToRule(path, group._rules);
    if (robotsTxtRule) {
      if (!robotsTxtRule.allow) {
        return {
          indexable: false,
          rule: robotsDisabledValue,
          debug: {
            source: "/robots.txt",
            line: `Disallow: ${robotsTxtRule.pattern}`
          }
        };
      }
      break;
    }
  }
  if (usingNuxtContent && nitroApp._robots?.nuxtContentUrls?.has(withoutTrailingSlash(path))) {
    return {
      indexable: false,
      rule: robotsDisabledValue,
      debug: {
        source: "Nuxt Content"
      }
    };
  }
  nitroApp._robotsRuleMactcher = nitroApp._robotsRuleMactcher || createNitroRouteRuleMatcher$2();
  const routeRules = normaliseRobotsRouteRule(nitroApp._robotsRuleMactcher(path));
  if (routeRules && (routeRules.allow || routeRules.rule)) {
    return {
      indexable: routeRules.allow,
      rule: routeRules.rule || (routeRules.allow ? robotsEnabledValue : robotsDisabledValue),
      debug: {
        source: "Route Rules"
      }
    };
  }
  return {
    indexable: true,
    rule: robotsEnabledValue
  };
}

function getSiteRobotConfig(e) {
  const query = getQuery$1(e);
  const hints = [];
  const { groups, debug } = useRuntimeConfig(e)["nuxt-robots"];
  let indexable = getSiteIndexable(e);
  const queryIndexableEnabled = String(query.mockProductionEnv) === "true" || query.mockProductionEnv === "";
  if (debug || false) {
    const { _context } = useSiteConfig(e, { debug: debug || false });
    if (queryIndexableEnabled) {
      indexable = true;
      hints.push("You are mocking a production enviroment with ?mockProductionEnv query.");
    } else if (!indexable && _context.indexable === "nuxt-robots:config") {
      hints.push("You are blocking indexing with your Nuxt Robots config.");
    } else if (!queryIndexableEnabled && !_context.indexable) {
      hints.push(`Indexing is blocked in development. You can mock a production environment with ?mockProductionEnv query.`);
    } else if (!indexable && !queryIndexableEnabled) {
      hints.push(`Indexing is blocked by site config set by ${_context.indexable}.`);
    } else if (indexable && !queryIndexableEnabled) {
      hints.push(`Indexing is enabled from ${_context.indexable}.`);
    }
  }
  if (groups.some((g) => g.userAgent.includes("*") && g.disallow.includes("/"))) {
    indexable = false;
    hints.push("You are blocking all user agents with a wildcard `Disallow /`.");
  } else if (groups.some((g) => g.disallow.includes("/"))) {
    hints.push("You are blocking specific user agents with `Disallow /`.");
  }
  return { indexable, hints };
}

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
const unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
const reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
const escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
const objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  let logNum = 0;
  function log(message) {
    if (logNum < 100) {
      console.warn(message);
      logNum += 1;
    }
  }
  function walk(thing) {
    if (typeof thing === "function") {
      log(`Cannot stringify a function ${thing.name}`);
      return;
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            if (typeof thing.toJSON !== "function") {
              log(`Cannot stringify arbitrary non-POJOs ${thing.constructor.name}`);
            }
          } else if (Object.getOwnPropertySymbols(thing).length > 0) {
            log(`Cannot stringify POJOs with symbolic keys ${Object.getOwnPropertySymbols(thing).map((symbol) => symbol.toString())}`);
          } else {
            Object.keys(thing).forEach((key) => walk(thing[key]));
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    const type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return thing.toString();
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map((v, i) => i in thing ? stringify(v) : "");
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        if (thing.toJSON) {
          let json = thing.toJSON();
          if (getType(json) === "String") {
            try {
              json = JSON.parse(json);
            } catch (e) {
            }
          }
          return stringify(json);
        }
        if (Object.getPrototypeOf(thing) === null) {
          if (Object.keys(thing).length === 0) {
            return "Object.create(null)";
          }
          return `Object.create(null,{${Object.keys(thing).map((key) => `${safeKey(key)}:{writable:true,enumerable:true,value:${stringify(thing[key])}}`).join(",")}})`;
        }
        return `{${Object.keys(thing).map((key) => `${safeKey(key)}:${stringify(thing[key])}`).join(",")}}`;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (isPrimitive(thing)) {
        values.push(stringifyPrimitive(thing));
        return;
      }
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push("new Set");
          statements.push(`${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`);
          break;
        case "Map":
          values.push("new Map");
          statements.push(`${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`);
          break;
        default:
          values.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach((key) => {
            statements.push(`${name}${safeProp(key)}=${stringify(thing[key])}`);
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(";")}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function getName(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string") {
    return stringifyString(thing);
  }
  if (thing === void 0) {
    return "void 0";
  }
  if (thing === 0 && 1 / thing < 0) {
    return "-0";
  }
  const str = String(thing);
  if (typeof thing === "number") {
    return str.replace(/^(-)?0\./, "$1.");
  }
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? `.${key}` : `[${escapeUnsafeChars(JSON.stringify(key))}]`;
}
function stringifyString(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

const PRERENDER_NO_SSR_ROUTES$1 = /* @__PURE__ */ new Set(["/index.html", "/200.html", "/404.html"]);
const _1OecQxelmZ = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    const url = event.path;
    const noSSR = event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (PRERENDER_NO_SSR_ROUTES$1.has(url) );
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(useSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

async function resolveRobotsTxtContext(e, nitro = useNitroApp()) {
  const { groups, sitemap: sitemaps } = useRuntimeConfig()["nuxt-robots"];
  const generateRobotsTxtCtx = {
    event: e,
    context: e ? "robots.txt" : "init",
    ...JSON.parse(JSON.stringify({ groups, sitemaps }))
  };
  await nitro.hooks.callHook("robots:config", generateRobotsTxtCtx);
  nitro._robots.ctx = generateRobotsTxtCtx;
  return generateRobotsTxtCtx;
}

const logger$1 = createConsola({
  defaults: { tag: "@nuxtjs/robots" }
});

const PRERENDER_NO_SSR_ROUTES = /* @__PURE__ */ new Set(["/index.html", "/200.html", "/404.html"]);
const _n98FBqtowz = defineNitroPlugin(async (nitroApp) => {
  const { usingNuxtContent, robotsDisabledValue } = useRuntimeConfig()["nuxt-robots"];
  nitroApp._robots = {};
  await resolveRobotsTxtContext(void 0, nitroApp);
  const nuxtContentUrls = /* @__PURE__ */ new Set();
  if (usingNuxtContent) {
    let urls;
    try {
      urls = await (await nitroApp.localFetch("/__robots__/nuxt-content.json", {})).json();
    } catch (e) {
      logger$1.error("Failed to read robot rules from content files.", e);
    }
    if (urls && Array.isArray(urls) && urls.length) {
      urls.forEach((url) => nuxtContentUrls.add(withoutTrailingSlash(url)));
    }
  }
  nitroApp._robots.nuxtContentUrls = nuxtContentUrls;
  {
    nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
      const routeOptions = getRouteRules(event);
      const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
      const noSSR = event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (PRERENDER_NO_SSR_ROUTES.has(event.path) );
      if (noSSR) {
        let rule = event.context.robots?.rule;
        if (event.path === "/404.html")
          rule = robotsDisabledValue;
        if (rule)
          ctx.head.push(`<meta name="robots" content="${rule}" />`);
      }
    });
  }
});

const script = "function eventListeners(){const c=new AbortController;const p=new Promise(resolve=>{const hydrateOnEvents=\"mousemove,scroll,keydown,click,touchstart,wheel\".split(\",\");function handler(e){hydrateOnEvents.forEach(e=>w.removeEventListener(e,handler));requestAnimationFrame(()=>resolve(e))}hydrateOnEvents.forEach(e=>{w.addEventListener(e,handler,{capture:true,once:true,passive:true,signal:c.signal})})});return{c:()=>c.abort(),p:p}}function idleListener(){let id;const p=new Promise(resolve=>{const isMobile=w.innerWidth<640;const timeout=isMobile?Number.parseInt(\"5000\"):Number.parseInt(\"4000\");const timeoutDelay=()=>setTimeout(()=>requestAnimationFrame(()=>resolve(\"timeout\")),timeout);id=w.requestIdleCallback(timeoutDelay,{timeout:Number.parseInt(\"7000\")})});return{c:()=>window.cancelIdleCallback(id),p:p}}const triggers=[idleListener(),eventListeners()];const hydrationPromise=Promise.race(triggers.map(t=>t.p)).finally(()=>{triggers.forEach(t=>t.c())});";
const mode = "init";
const include = [];
const exclude = ["/_nuxt/**","/api/**"];

function createFilter$1(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, ...options }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

const SCRIPT_REGEX = /<script(.*?)>/g;
const _iqnh33vcMo = defineNitroPlugin((nitro) => {
  const filter = createFilter$1({ include, exclude });
  const config = useRuntimeConfig();
  nitro.hooks.hook("render:html", (htmlContext, ctx) => {
    const event = ctx.event;
    if (!filter(event.path))
      return;
    let currentMode = mode;
    if (typeof ctx.event.context._nitro?.routeRules?.delayHydration !== "undefined")
      currentMode = ctx.event.context._nitro?.routeRules?.delayHydration;
    if (!currentMode)
      return;
    if (currentMode === "manual") {
      if (!htmlContext.body.some((h) => h.includes("<!--[--><!--nuxt-delay-hydration-component--><!--[-->"))) {
        return;
      }
    }
    let extraScripts = "";
    if (currentMode === "init") {
      const ASSET_RE = new RegExp(`<script[^>]*src="${config.app.buildAssetsDir}[^>]+><\\/script>`);
      const LINK_ASSET_RE = new RegExp(`<link rel="modulepreload" as="script" [^>]*href="${config.app.buildAssetsDir}[^>]+>`, "g");
      htmlContext.head = htmlContext.head.map((head) => head.replaceAll(LINK_ASSET_RE, ""));
      const toLoad = [];
      const isPageSSR = htmlContext.bodyAppend.some((b) => b.includes("$snuxt-delay-hydration-mode"));
      if (!isPageSSR)
        return;
      htmlContext.bodyAppend = htmlContext.bodyAppend.filter(
        (b) => {
          if (b.includes("window.__NUXT__") || !ASSET_RE.test(b))
            return true;
          let match;
          while ((match = SCRIPT_REGEX.exec(b)) !== null) {
            if (match.index === SCRIPT_REGEX.lastIndex)
              SCRIPT_REGEX.lastIndex++;
            if (match)
              toLoad.push(packString(match[1]));
          }
          return false;
        }
      );
      extraScripts = `;window._$delayHydration.then(e => {
  ;(${JSON.stringify(toLoad)}).forEach(s => {
    const script = document.createElement('script');
    Object.entries(s).forEach(([k, v]) => script.setAttribute(k, v));
    document.body.appendChild(script);
  })
})`;
    }
    let html = `<script>
(function() {
  const w = window; w._$delayHydration = (function() { if (!('requestIdleCallback' in w) || !('requestAnimationFrame' in w)) { return new Promise(resolve => resolve('not supported')) } ${script} return hydrationPromise; })();
  ${"w._$delayHydration.then((e) => { console.log('[nuxt-delay-hydration] Hydration event', e) })" }
  ${extraScripts}
})();
<\/script>`;
    {
      html = html.replace(/\s+/g, " ").replace(/[\n\r]/g, "");
    }
    htmlContext.bodyAppend.push(html);
  });
});

const htmlPayloadCache = createStorage({
  // short cache time so we don't need many entries at runtime
  driver: lruCacheDriver({ max: 1e4  })
});
const prerenderOptionsCache = createStorage({
  driver: lruCacheDriver({ max: 1e4 })
}) ;
const fontCache = createStorage({
  driver: lruCacheDriver({ max: 10 })
});
const emojiCache = createStorage({
  driver: lruCacheDriver({ max: 1e3 })
});

function detectBase64MimeType(data) {
  const signatures = {
    "R0lGODdh": "image/gif",
    "R0lGODlh": "image/gif",
    "iVBORw0KGgo": "image/png",
    "/9j/": "image/jpeg",
    "UklGR": "image/webp",
    "AAABAA": "image/x-icon"
  };
  for (const s in signatures) {
    if (data.indexOf(s) === 0)
      return signatures[s];
  }
  return "image/svg+xml";
}
function toBase64Image(data) {
  const base64 = typeof data === "string" ? data : Buffer.from(data).toString("base64");
  const type = detectBase64MimeType(base64);
  return `data:${type};base64,${base64}`;
}
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
  const _props = defu$1(options.props, Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => !filterIsOgImageOption(k) && !ignoreKeys.includes(k))
  ));
  const props = {};
  Object.entries(_props).forEach(([key, val]) => {
    props[key.replace(/-([a-z])/g, (g) => g[1].toUpperCase())] = val;
  });
  return {
    ...Object.fromEntries(
      Object.entries({ ...options }).filter(([k]) => filterIsOgImageOption(k) || ignoreKeys.includes(k))
    ),
    props
  };
}
function normaliseFontInput(fonts) {
  return fonts.map((f) => {
    if (typeof f === "string") {
      const [name, weight] = f.split(":");
      return {
        cacheKey: f,
        name,
        weight: weight || 400,
        style: "normal",
        path: void 0
      };
    }
    return {
      cacheKey: f.key || `${f.name}:${f.weight}`,
      style: "normal",
      weight: 400,
      ...f
    };
  });
}

function useOgImageRuntimeConfig() {
  return useRuntimeConfig()["nuxt-og-image"];
}

function htmlDecodeQuotes(html) {
  return html.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'");
}
function decodeHtml(html) {
  return html.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&cent;/g, "\xA2").replace(/&pound;/g, "\xA3").replace(/&yen;/g, "\xA5").replace(/&euro;/g, "\u20AC").replace(/&copy;/g, "\xA9").replace(/&reg;/g, "\xAE").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/").replace(/&#(\d+);/g, (full, int) => {
    return String.fromCharCode(Number.parseInt(int));
  });
}
function decodeObjectHtmlEntities(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "string")
      obj[key] = decodeHtml(value);
  });
  return obj;
}

function fetchIsland(e, component, props) {
  const hashId = hash([component, props]);
  return e.$fetch(`/__nuxt_island/${component}_${hashId}.json`, {
    params: {
      props: JSON.stringify(props)
    }
  });
}
function withoutQuery$1(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher$1() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery$1(path)), app.baseURL)
    ).reverse());
  };
}

const componentNames = [{"hash":"i0Vxmj8bqg","pascalName":"BrandedLogo","kebabName":"branded-logo","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"},{"hash":"tBHg51xiAt","pascalName":"Frame","kebabName":"frame","category":"community","credits":"@arashsheyda <https://github.com/arashsheyda>"},{"hash":"Sqc3OTP2KQ","pascalName":"Nuxt","kebabName":"nuxt","category":"community","credits":"NuxtLabs <https://nuxtlabs.com/>"},{"hash":"i7kLnGApLD","pascalName":"NuxtSeo","kebabName":"nuxt-seo","category":"community","credits":"Nuxt SEO <https://nuxtseo.com/>"},{"hash":"q432NYEB0T","pascalName":"Pergel","kebabName":"pergel","category":"community","credits":"Pergel <https://nuxtlabs.com/>"},{"hash":"6bQOH7FKu2","pascalName":"SimpleBlog","kebabName":"simple-blog","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"},{"hash":"wt558K6QyQ","pascalName":"UnJs","kebabName":"un-js","category":"community","credits":"UnJS <https://unjs.io/>"},{"hash":"6RdQZcuwZZ","pascalName":"Wave","kebabName":"wave","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"},{"hash":"gaB1TrbtTl","pascalName":"WithEmoji","kebabName":"with-emoji","category":"community","credits":"Full Stack Heroes <https://fullstackheroes.com/>"}];

function normaliseOptions(_options) {
  const options = { ..._options };
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
    options.component = componentNames[0]?.pascalName;
  }
  return options;
}

const satoriRendererInstance = { instance: void 0 };
const chromiumRendererInstance = { instance: void 0 };
async function useSatoriRenderer() {
  satoriRendererInstance.instance = satoriRendererInstance.instance || await import('../../_/renderer3.mjs').then((m) => m.default);
  return satoriRendererInstance.instance;
}
async function useChromiumRenderer() {
  chromiumRendererInstance.instance = chromiumRendererInstance.instance || await import('../../_/renderer2.mjs').then((m) => m.default);
  return chromiumRendererInstance.instance;
}

function resolvePathCacheKey(e, path) {
  const siteConfig = e.context.siteConfig.get();
  const basePath = withoutTrailingSlash(withoutLeadingSlash(normalizeKey(path || e.path)));
  return [
    !basePath || basePath === "/" ? "index" : basePath,
    hash([
      basePath,
      siteConfig.url,
      hash(getQuery$1(e))
    ])
  ].join(":");
}
async function resolveContext(e) {
  const runtimeConfig = useOgImageRuntimeConfig();
  const path = parseURL(e.path).pathname;
  const extension = path.split(".").pop();
  if (!extension) {
    return createError({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Missing OG Image type.`
    });
  }
  if (!["png", "jpeg", "jpg", "svg", "html", "json"].includes(extension)) {
    return createError({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Unknown OG Image type ${extension}.`
    });
  }
  let queryParams = { ...getQuery$1(e) };
  queryParams.props = JSON.parse(queryParams.props || "{}");
  queryParams = separateProps(queryParams);
  let basePath = withoutTrailingSlash(
    path.replace(`/__og-image__/image`, "").replace(`/__og-image__/static`, "").replace(`/og.${extension}`, "")
  );
  if (queryParams._query)
    basePath = withQuery(basePath, JSON.parse(queryParams._query));
  const isDebugJsonPayload = extension === "json" && runtimeConfig.debug;
  const key = resolvePathCacheKey(e, basePath);
  let options = queryParams.options;
  if (!options) {
    options = await prerenderOptionsCache?.getItem(key);
    if (!options) {
      const payload = await fetchPathHtmlAndExtractOptions(e, basePath, key);
      if (payload instanceof Error)
        return payload;
      options = payload;
    }
  }
  delete queryParams.options;
  const routeRuleMatcher = createNitroRouteRuleMatcher$1();
  const routeRules = routeRuleMatcher(basePath);
  if (typeof routeRules.ogImage === "undefined" && !options) {
    return createError({
      statusCode: 400,
      statusMessage: "The route is missing the Nuxt OG Image payload or route rules."
    });
  }
  const ogImageRouteRules = separateProps(routeRules.ogImage);
  options = defu$1(queryParams, options, ogImageRouteRules, runtimeConfig.defaults);
  if (!options) {
    return createError({
      statusCode: 404,
      statusMessage: "[Nuxt OG Image] OG Image not found."
    });
  }
  let renderer;
  switch (options.renderer) {
    case "satori":
      renderer = await useSatoriRenderer();
      break;
    case "chromium":
      renderer = await useChromiumRenderer();
      break;
  }
  if (!renderer || renderer.__unenv__) {
    throw createError({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Renderer ${options.renderer} is missing.`
    });
  }
  const ctx = {
    e,
    key,
    renderer,
    isDebugJsonPayload,
    publicStoragePath: runtimeConfig.publicStoragePath,
    extension,
    basePath,
    options: normaliseOptions(options),
    _nitro: useNitroApp()
  };
  await ctx._nitro.hooks.callHook("nuxt-og-image:context", ctx);
  return ctx;
}
const PAYLOAD_REGEX = /<script.+id="nuxt-og-image-options"[^>]*>(.+?)<\/script>/;
function getPayloadFromHtml(html) {
  const match = String(html).match(PAYLOAD_REGEX);
  return match ? match[1] : null;
}
function extractAndNormaliseOgImageOptions(html) {
  const _payload = getPayloadFromHtml(html);
  if (!_payload)
    return false;
  let options = false;
  try {
    const payload2 = parse(_payload);
    Object.entries(payload2).forEach(([key, value]) => {
      if (!value)
        delete payload2[key];
    });
    options = payload2;
  } catch (e) {
  }
  if (!options)
    return false;
  if (typeof options.props?.description === "undefined") {
    const description = html.match(/<meta[^>]+name="description"[^>]*>/)?.[0];
    if (description) {
      const [, content] = description.match(/content="([^"]+)"/) || [];
      if (content && !options.props.description)
        options.props.description = content;
    }
  }
  const payload = decodeObjectHtmlEntities(options);
  return payload;
}
async function fetchPathHtmlAndExtractOptions(e, path, key) {
  const cachedHtmlPayload = await htmlPayloadCache.getItem(key);
  if (cachedHtmlPayload && cachedHtmlPayload.expiresAt < Date.now())
    return cachedHtmlPayload.value;
  let _payload = null;
  let html;
  try {
    html = await e.$fetch(path, {
      // follow redirects
      redirect: "follow",
      headers: {
        accept: "text/html"
      }
    });
    _payload = getPayloadFromHtml(html);
    if (!_payload) {
      const fallbackHtml = await globalThis.$fetch(path, {
        // follow redirects
        redirect: "follow",
        headers: {
          accept: "text/html"
        }
      });
      _payload = getPayloadFromHtml(fallbackHtml);
      if (_payload) {
        html = fallbackHtml;
      }
    }
  } catch (err) {
    return createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to read the path ${path} for og-image extraction. ${err.message}.`
    });
  }
  if (!_payload || !html) {
    return createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Got invalid response from ${path} for og-image extraction.`
    });
  }
  const payload = extractAndNormaliseOgImageOptions(html);
  if (payload) {
    await htmlPayloadCache.setItem(key, {
      // 60 minutes for prerender, 10 seconds for runtime
      expiresAt: Date.now() + 1e3 * (60 * 60 ),
      value: payload
    });
  }
  return payload;
}

const _AleS2kaKMk = defineNitroPlugin(async (nitro) => {
  const routeRuleMatcher = createNitroRouteRuleMatcher$1();
  nitro.hooks.hook("render:html", async (html, ctx) => {
    const { head, bodyAppend } = html;
    const path = parseURL(ctx.event.path).pathname;
    if (isInternalRoute(path))
      return;
    const routeRules = routeRuleMatcher(path);
    if (routeRules.ogImage === false)
      return;
    const options = extractAndNormaliseOgImageOptions([
      head.join("\n"),
      bodyAppend.join("\n")
    ].join("\n"));
    if (!options)
      return;
    const key = resolvePathCacheKey(ctx.event);
    await prerenderOptionsCache.setItem(key, options);
    const index = html.bodyAppend.findIndex((script) => script.includes('id="nuxt-og-image-options"'));
    if (index !== -1) {
      html.bodyAppend[index] = html.bodyAppend[index].replace(/<script id="nuxt-og-image-options" type="application\/json">[\s\S]*?<\/script>/, "");
      html.bodyAppend[index] = html.bodyAppend[index].replace(/<script id="nuxt-og-image-overrides" type="application\/json">[\s\S]*?<\/script>/, "");
    }
  });
});

const plugins = [
  _1OecQxelmZ,
_n98FBqtowz,
_iqnh33vcMo,
_AleS2kaKMk
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, (error.message || error.toString() || "internal server error") + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('../../_/error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/_payload.json": {
    "type": "application/json",
    "etag": "\"45-ek/CvyhOCU5SjJtYxJD4yw2ESzg\"",
    "mtime": "2024-10-11T21:12:33.400Z",
    "size": 69,
    "path": "../../.output/public/_payload.json"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"14ca8a-cn9K6724zuxGIIkye1dFetM+kKE\"",
    "mtime": "2024-10-11T21:12:30.263Z",
    "size": 1362570,
    "path": "../../.output/public/index.html"
  },
  "/aproveitando-o-potencial-das-redes-sociais-para-alavancar-o-seu-negocio/_payload.json": {
    "type": "application/json",
    "etag": "\"45-S0FG+hOdKLqPIUxeOCIFUI2ODQM\"",
    "mtime": "2024-10-11T21:12:29.641Z",
    "size": 69,
    "path": "../../.output/public/aproveitando-o-potencial-das-redes-sociais-para-alavancar-o-seu-negocio/_payload.json"
  },
  "/aproveitando-o-potencial-das-redes-sociais-para-alavancar-o-seu-negocio/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"142b5e-HWFHlxl393fPzdG2+mijucqjJTE\"",
    "mtime": "2024-10-11T21:12:29.537Z",
    "size": 1321822,
    "path": "../../.output/public/aproveitando-o-potencial-das-redes-sociais-para-alavancar-o-seu-negocio/index.html"
  },
  "/blog/_payload.json": {
    "type": "application/json",
    "etag": "\"45-Zy4iyswg6dFjO2BNuc9yMgpe2PU\"",
    "mtime": "2024-10-11T21:12:30.142Z",
    "size": 69,
    "path": "../../.output/public/blog/_payload.json"
  },
  "/blog/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1436ba-vkgGWedSh8X5LIx+jaC/DRezjtE\"",
    "mtime": "2024-10-11T21:12:29.962Z",
    "size": 1324730,
    "path": "../../.output/public/blog/index.html"
  },
  "/como-o-design-impacta-na-percepcao-da-sua-marca/_payload.json": {
    "type": "application/json",
    "etag": "\"45-S0FG+hOdKLqPIUxeOCIFUI2ODQM\"",
    "mtime": "2024-10-11T21:12:29.642Z",
    "size": 69,
    "path": "../../.output/public/como-o-design-impacta-na-percepcao-da-sua-marca/_payload.json"
  },
  "/como-o-design-impacta-na-percepcao-da-sua-marca/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"142ace-7FBwi0ldcCL0cZK5YIZlDYqzqPE\"",
    "mtime": "2024-10-11T21:12:29.539Z",
    "size": 1321678,
    "path": "../../.output/public/como-o-design-impacta-na-percepcao-da-sua-marca/index.html"
  },
  "/como-o-trafego-pago-impulsiona-sua-visibilidade-online/_payload.json": {
    "type": "application/json",
    "etag": "\"45-S0FG+hOdKLqPIUxeOCIFUI2ODQM\"",
    "mtime": "2024-10-11T21:12:29.642Z",
    "size": 69,
    "path": "../../.output/public/como-o-trafego-pago-impulsiona-sua-visibilidade-online/_payload.json"
  },
  "/como-o-trafego-pago-impulsiona-sua-visibilidade-online/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"142af8-JygFwtTYxP5V5hO49yjEH4Srz7Q\"",
    "mtime": "2024-10-11T21:12:29.539Z",
    "size": 1321720,
    "path": "../../.output/public/como-o-trafego-pago-impulsiona-sua-visibilidade-online/index.html"
  },
  "/como-um-site-influencia-a-sua-visibilidade-online/_payload.json": {
    "type": "application/json",
    "etag": "\"45-S0FG+hOdKLqPIUxeOCIFUI2ODQM\"",
    "mtime": "2024-10-11T21:12:29.642Z",
    "size": 69,
    "path": "../../.output/public/como-um-site-influencia-a-sua-visibilidade-online/_payload.json"
  },
  "/como-um-site-influencia-a-sua-visibilidade-online/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"142ada-9aZald8RvEuaiONmuPNxrO80bAk\"",
    "mtime": "2024-10-11T21:12:29.539Z",
    "size": 1321690,
    "path": "../../.output/public/como-um-site-influencia-a-sua-visibilidade-online/index.html"
  },
  "/contato/_payload.json": {
    "type": "application/json",
    "etag": "\"45-PZORuW3q7+sHpaG2tz5bCSu6bq0\"",
    "mtime": "2024-10-11T21:12:30.262Z",
    "size": 69,
    "path": "../../.output/public/contato/_payload.json"
  },
  "/contato/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"144194-HjnDZCicluPsaIEZ76cV9tjrglA\"",
    "mtime": "2024-10-11T21:12:30.142Z",
    "size": 1327508,
    "path": "../../.output/public/contato/index.html"
  },
  "/o-impacto-da-velocidade-de-carregamento-no-seo-do-seu-site/_payload.json": {
    "type": "application/json",
    "etag": "\"45-S0FG+hOdKLqPIUxeOCIFUI2ODQM\"",
    "mtime": "2024-10-11T21:12:29.641Z",
    "size": 69,
    "path": "../../.output/public/o-impacto-da-velocidade-de-carregamento-no-seo-do-seu-site/_payload.json"
  },
  "/o-impacto-da-velocidade-de-carregamento-no-seo-do-seu-site/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"142b10-p/Hha/Mr5Uz6UsWNIY2cwLB5otU\"",
    "mtime": "2024-10-11T21:12:29.537Z",
    "size": 1321744,
    "path": "../../.output/public/o-impacto-da-velocidade-de-carregamento-no-seo-do-seu-site/index.html"
  },
  "/politica-de-privacidade/_payload.json": {
    "type": "application/json",
    "etag": "\"45-LlCkdpp5Y16YcmQ4z74qlrEZAeg\"",
    "mtime": "2024-10-11T21:12:30.070Z",
    "size": 69,
    "path": "../../.output/public/politica-de-privacidade/_payload.json"
  },
  "/politica-de-privacidade/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"142ef2-nvjhxk/BMoPXeoPRPZnSiY5/0I8\"",
    "mtime": "2024-10-11T21:12:29.885Z",
    "size": 1322738,
    "path": "../../.output/public/politica-de-privacidade/index.html"
  },
  "/planos/_payload.json": {
    "type": "application/json",
    "etag": "\"45-ciVB5wa6pq/ul8F7xnTxdKFpOC0\"",
    "mtime": "2024-10-11T21:12:30.262Z",
    "size": 69,
    "path": "../../.output/public/planos/_payload.json"
  },
  "/planos/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1429d8-B83OZ9Kg0GqlbDRn9JTyq6HVP00\"",
    "mtime": "2024-10-11T21:12:30.143Z",
    "size": 1321432,
    "path": "../../.output/public/planos/index.html"
  },
  "/por-que-seu-site-precisa-de-um-blog/_payload.json": {
    "type": "application/json",
    "etag": "\"45-S0FG+hOdKLqPIUxeOCIFUI2ODQM\"",
    "mtime": "2024-10-11T21:12:29.641Z",
    "size": 69,
    "path": "../../.output/public/por-que-seu-site-precisa-de-um-blog/_payload.json"
  },
  "/por-que-seu-site-precisa-de-um-blog/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"142a86-EQJdyz1fpfV5bLLjnvcIutjd7lE\"",
    "mtime": "2024-10-11T21:12:29.537Z",
    "size": 1321606,
    "path": "../../.output/public/por-que-seu-site-precisa-de-um-blog/index.html"
  },
  "/servicos/_payload.json": {
    "type": "application/json",
    "etag": "\"45-GUgbLVen+F81o27P5OATeiV+Qf8\"",
    "mtime": "2024-10-11T21:12:30.143Z",
    "size": 69,
    "path": "../../.output/public/servicos/_payload.json"
  },
  "/servicos/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"14472e-8Ml1GUmyB6PGguMnLBSbW7FVdcI\"",
    "mtime": "2024-10-11T21:12:29.986Z",
    "size": 1328942,
    "path": "../../.output/public/servicos/index.html"
  },
  "/sobre/_payload.json": {
    "type": "application/json",
    "etag": "\"45-O0VF7i/5sYsx5aML3qHvDTMdTi4\"",
    "mtime": "2024-10-11T21:12:30.140Z",
    "size": 69,
    "path": "../../.output/public/sobre/_payload.json"
  },
  "/sobre/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"144937-kPKsjQfpcmX6q9pxhEbwtfm3TVM\"",
    "mtime": "2024-10-11T21:12:29.953Z",
    "size": 1329463,
    "path": "../../.output/public/sobre/index.html"
  },
  "/solucoes/gscrm/_payload.json": {
    "type": "application/json",
    "etag": "\"45-rBvaEq0GO/As4k8RBPmpBSipEVc\"",
    "mtime": "2024-10-11T21:12:30.114Z",
    "size": 69,
    "path": "../../.output/public/solucoes/gscrm/_payload.json"
  },
  "/solucoes/gscrm/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1437a0-ztBQYUofcs85D3DfrkGFFdDAiUU\"",
    "mtime": "2024-10-11T21:12:29.894Z",
    "size": 1324960,
    "path": "../../.output/public/solucoes/gscrm/index.html"
  },
  "/_ipx/q_80/icons/icon-design.svg": {
    "type": "image/svg+xml",
    "etag": "\"619-dtaEyLbKMEFS3Gf2bzPL3k6eyNU\"",
    "mtime": "2024-10-11T21:12:33.332Z",
    "size": 1561,
    "path": "../../.output/public/_ipx/q_80/icons/icon-design.svg"
  },
  "/_ipx/q_80/icons/icon-marketing.svg": {
    "type": "image/svg+xml",
    "etag": "\"799-77gNobb592PAK/F67DmtGvI2kio\"",
    "mtime": "2024-10-11T21:12:33.335Z",
    "size": 1945,
    "path": "../../.output/public/_ipx/q_80/icons/icon-marketing.svg"
  },
  "/_ipx/q_80/icons/icon-tecnologia.svg": {
    "type": "image/svg+xml",
    "etag": "\"68d-K+VthVckouIRhrsjceMd0gp7TFs\"",
    "mtime": "2024-10-11T21:12:33.335Z",
    "size": 1677,
    "path": "../../.output/public/_ipx/q_80/icons/icon-tecnologia.svg"
  },
  "/_ipx/q_80/icons/servicos/branding.svg": {
    "type": "image/svg+xml",
    "etag": "\"4c4-k9UaxLDDFbAh9YH6Oh2+YjQifCs\"",
    "mtime": "2024-10-11T21:12:33.709Z",
    "size": 1220,
    "path": "../../.output/public/_ipx/q_80/icons/servicos/branding.svg"
  },
  "/_ipx/q_80/icons/servicos/gestao_de_conteudo.svg": {
    "type": "image/svg+xml",
    "etag": "\"496-6CNyzE0kVFYWhj3wAWNL8ZZzJW8\"",
    "mtime": "2024-10-11T21:12:33.709Z",
    "size": 1174,
    "path": "../../.output/public/_ipx/q_80/icons/servicos/gestao_de_conteudo.svg"
  },
  "/_ipx/q_80/icons/servicos/lojas_virtuais.svg": {
    "type": "image/svg+xml",
    "etag": "\"487-QsJeVjJqw6p4bDxYBZLziRAx0A4\"",
    "mtime": "2024-10-11T21:12:33.709Z",
    "size": 1159,
    "path": "../../.output/public/_ipx/q_80/icons/servicos/lojas_virtuais.svg"
  },
  "/_ipx/q_80/icons/servicos/sites.svg": {
    "type": "image/svg+xml",
    "etag": "\"826-H86Sd5KGZZZLbRbZNlNrz1l5EtQ\"",
    "mtime": "2024-10-11T21:12:33.709Z",
    "size": 2086,
    "path": "../../.output/public/_ipx/q_80/icons/servicos/sites.svg"
  },
  "/_ipx/w_200&q_80/icons/servicos/branding.svg": {
    "type": "image/svg+xml",
    "etag": "\"4c4-k9UaxLDDFbAh9YH6Oh2+YjQifCs\"",
    "mtime": "2024-10-11T21:12:30.264Z",
    "size": 1220,
    "path": "../../.output/public/_ipx/w_200&q_80/icons/servicos/branding.svg"
  },
  "/_ipx/w_200&q_80/icons/servicos/comunicacao_visual.svg": {
    "type": "image/svg+xml",
    "etag": "\"445-4rDWmznFE0BLoeMruf2JQtERhjw\"",
    "mtime": "2024-10-11T21:12:30.263Z",
    "size": 1093,
    "path": "../../.output/public/_ipx/w_200&q_80/icons/servicos/comunicacao_visual.svg"
  },
  "/_ipx/w_200&q_80/icons/servicos/gestao_de_conteudo.svg": {
    "type": "image/svg+xml",
    "etag": "\"496-6CNyzE0kVFYWhj3wAWNL8ZZzJW8\"",
    "mtime": "2024-10-11T21:12:30.264Z",
    "size": 1174,
    "path": "../../.output/public/_ipx/w_200&q_80/icons/servicos/gestao_de_conteudo.svg"
  },
  "/_ipx/w_200&q_80/icons/servicos/lojas_virtuais.svg": {
    "type": "image/svg+xml",
    "etag": "\"487-QsJeVjJqw6p4bDxYBZLziRAx0A4\"",
    "mtime": "2024-10-11T21:12:30.264Z",
    "size": 1159,
    "path": "../../.output/public/_ipx/w_200&q_80/icons/servicos/lojas_virtuais.svg"
  },
  "/_ipx/w_200&q_80/icons/servicos/otimizacao_seo.svg": {
    "type": "image/svg+xml",
    "etag": "\"3f8-WENYWStYyCBlz2CD574qS8sdIXo\"",
    "mtime": "2024-10-11T21:12:30.264Z",
    "size": 1016,
    "path": "../../.output/public/_ipx/w_200&q_80/icons/servicos/otimizacao_seo.svg"
  },
  "/_ipx/w_200&q_80/icons/servicos/producao_de_video.svg": {
    "type": "image/svg+xml",
    "etag": "\"3d7-5uaqyY4KzAXMbKpwslCwjyo/Fk8\"",
    "mtime": "2024-10-11T21:12:30.263Z",
    "size": 983,
    "path": "../../.output/public/_ipx/w_200&q_80/icons/servicos/producao_de_video.svg"
  },
  "/_ipx/w_200&q_80/icons/servicos/sites.svg": {
    "type": "image/svg+xml",
    "etag": "\"826-H86Sd5KGZZZLbRbZNlNrz1l5EtQ\"",
    "mtime": "2024-10-11T21:12:30.264Z",
    "size": 2086,
    "path": "../../.output/public/_ipx/w_200&q_80/icons/servicos/sites.svg"
  },
  "/_ipx/w_200&q_80/icons/servicos/trafego_pago.svg": {
    "type": "image/svg+xml",
    "etag": "\"42a-bHBYzFG5ucHp3k6L44JCWOL2pvI\"",
    "mtime": "2024-10-11T21:12:30.264Z",
    "size": 1066,
    "path": "../../.output/public/_ipx/w_200&q_80/icons/servicos/trafego_pago.svg"
  },
  "/_ipx/q_80/img/parceiros/cliente-1.webp": {
    "type": "image/webp",
    "etag": "\"8e50-L6eAnt8tFhCpr4eue9nW70juaKA\"",
    "mtime": "2024-10-11T21:12:33.337Z",
    "size": 36432,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-1.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-10.webp": {
    "type": "image/webp",
    "etag": "\"7f18-mt7NydyjYX12G2F5R9giBlEAink\"",
    "mtime": "2024-10-11T21:12:33.337Z",
    "size": 32536,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-10.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-11.webp": {
    "type": "image/webp",
    "etag": "\"a71c-Wn/KKa9kh6dTu1ZB0VChqQ4J6q8\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 42780,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-11.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-12.webp": {
    "type": "image/webp",
    "etag": "\"86fa-JiK5m7Wg7e4O3RwnyZRptIkzEv4\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 34554,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-12.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-13.webp": {
    "type": "image/webp",
    "etag": "\"6a50-xQ/tUa6bQv6j3sNa3ysACoF+6KI\"",
    "mtime": "2024-10-11T21:12:33.337Z",
    "size": 27216,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-13.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-14.webp": {
    "type": "image/webp",
    "etag": "\"c944-SbTPXPZXztd2cjIRDfuf0w/GmnU\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 51524,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-14.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-15.webp": {
    "type": "image/webp",
    "etag": "\"eda0-XaH7Bgyci3oXdqbA7exOjNuMrRU\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 60832,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-15.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-16.webp": {
    "type": "image/webp",
    "etag": "\"a5bc-tbiFFoeAlWKg27Cn8c3C+GXPYZI\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 42428,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-16.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-17.webp": {
    "type": "image/webp",
    "etag": "\"be18-bRYYWDetN8AYSySUvDP3/0fQGQQ\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 48664,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-17.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-18.webp": {
    "type": "image/webp",
    "etag": "\"e7c8-oGlBchhI3bfbjDEC9uBRlZ7DC0c\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 59336,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-18.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-19.webp": {
    "type": "image/webp",
    "etag": "\"cca2-6LHr+iqi0wJu56ILaJqKnhEw30w\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 52386,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-19.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-2.webp": {
    "type": "image/webp",
    "etag": "\"147a-TFNrwSloSJ9zyv5FHMEeQPRZpbY\"",
    "mtime": "2024-10-11T21:12:33.334Z",
    "size": 5242,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-2.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-20.webp": {
    "type": "image/webp",
    "etag": "\"76da-OHSFiLAS6DPwZbclUq+b5DiAy+A\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 30426,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-20.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-21.webp": {
    "type": "image/webp",
    "etag": "\"ead0-9+wFC1iEzxQDHdi4AnOdmFfnqvM\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 60112,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-21.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-22.webp": {
    "type": "image/webp",
    "etag": "\"7e7a-tcs1Iz68gsnT4pqXeNlKk/ZCOHE\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 32378,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-22.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-23.webp": {
    "type": "image/webp",
    "etag": "\"6d0a-5HTgauzQHRuCYn8Xdf3KdrTF3Xg\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 27914,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-23.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-24.webp": {
    "type": "image/webp",
    "etag": "\"6688-rEIvBzqgDPpOvgvcXOv4CZUJoUE\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 26248,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-24.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-25.webp": {
    "type": "image/webp",
    "etag": "\"97c2-yLdFRMAUGVAA7LKv/kjtsW5lSFQ\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 38850,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-25.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-26.webp": {
    "type": "image/webp",
    "etag": "\"d278-Da503Eq0n0gUiThlQDZjaghbCF4\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 53880,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-26.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-27.webp": {
    "type": "image/webp",
    "etag": "\"db68-giY98sdtA28vH0pRbulibJTEbTg\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 56168,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-27.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-28.webp": {
    "type": "image/webp",
    "etag": "\"812a-pckYguu2gmsvh5dGH/RB05FXAjI\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 33066,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-28.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-29.webp": {
    "type": "image/webp",
    "etag": "\"b6f2-I2sQDKymXT1BA0ZseI+GCWLt9k4\"",
    "mtime": "2024-10-11T21:12:33.334Z",
    "size": 46834,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-29.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-3.webp": {
    "type": "image/webp",
    "etag": "\"58ea-cBNs7m0ZmotaL3sfHb8Ajban5jU\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 22762,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-3.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-30.webp": {
    "type": "image/webp",
    "etag": "\"881e-n8tShRfxA2OT5zf/kG+CF5C0CT4\"",
    "mtime": "2024-10-11T21:12:33.334Z",
    "size": 34846,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-30.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-31.webp": {
    "type": "image/webp",
    "etag": "\"c026-2dxA1P6PZkFhnG9/xPCn0xz/bDQ\"",
    "mtime": "2024-10-11T21:12:33.332Z",
    "size": 49190,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-31.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-32.webp": {
    "type": "image/webp",
    "etag": "\"1002a-7iRyYzgVAQKg4N1eRdgA2i4SL0I\"",
    "mtime": "2024-10-11T21:12:33.334Z",
    "size": 65578,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-32.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-33.webp": {
    "type": "image/webp",
    "etag": "\"a8b0-03r1yqI95zYMN+t7d//DModieQo\"",
    "mtime": "2024-10-11T21:12:33.334Z",
    "size": 43184,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-33.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-34.webp": {
    "type": "image/webp",
    "etag": "\"beb2-YiIH/laBthgU4pkgI1yuD8BRT5M\"",
    "mtime": "2024-10-11T21:12:33.334Z",
    "size": 48818,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-34.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-35.webp": {
    "type": "image/webp",
    "etag": "\"7958-ipawtgUZonXuQYD4NXFD6lA/deI\"",
    "mtime": "2024-10-11T21:12:33.338Z",
    "size": 31064,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-35.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-36.webp": {
    "type": "image/webp",
    "etag": "\"1633c-rhAG6GksrtdFRWIMWZ05jLEcBO8\"",
    "mtime": "2024-10-11T21:12:33.709Z",
    "size": 90940,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-36.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-37.webp": {
    "type": "image/webp",
    "etag": "\"8c92-KdP7b3LeRREMbjttiHD8PJwFL0Y\"",
    "mtime": "2024-10-11T21:12:33.708Z",
    "size": 35986,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-37.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-38.webp": {
    "type": "image/webp",
    "etag": "\"b2da-Jq4qnu+pRrnYK1TjkyZJGJLgotQ\"",
    "mtime": "2024-10-11T21:12:33.334Z",
    "size": 45786,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-38.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-39.webp": {
    "type": "image/webp",
    "etag": "\"101f2-yz/NJqH9xFJ13AUo0cISDL7K8so\"",
    "mtime": "2024-10-11T21:12:33.709Z",
    "size": 66034,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-39.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-4.webp": {
    "type": "image/webp",
    "etag": "\"a5ba-nLMdD+I/VgVgv+ZD3+Pp0RDoUtU\"",
    "mtime": "2024-10-11T21:12:33.337Z",
    "size": 42426,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-4.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-40.webp": {
    "type": "image/webp",
    "etag": "\"7b84-XoMGMTBJ5xppp/Wfmisx2bHK3rg\"",
    "mtime": "2024-10-11T21:12:33.709Z",
    "size": 31620,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-40.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-41.webp": {
    "type": "image/webp",
    "etag": "\"8474-+51T6IRHYlG4Z6SEDya+yY2Q/uQ\"",
    "mtime": "2024-10-11T21:12:33.709Z",
    "size": 33908,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-41.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-42.webp": {
    "type": "image/webp",
    "etag": "\"d148-ch5bpdRcZjqjVDZPz0QQMoYVQ+0\"",
    "mtime": "2024-10-11T21:12:33.940Z",
    "size": 53576,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-42.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-43.webp": {
    "type": "image/webp",
    "etag": "\"153c-uxgyJEYu3jUUx5WmOmqhAAyDnSA\"",
    "mtime": "2024-10-11T21:12:33.709Z",
    "size": 5436,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-43.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-44.webp": {
    "type": "image/webp",
    "etag": "\"30b0-2wrgBD2YAJGqdou6DDWA4cj6NoQ\"",
    "mtime": "2024-10-11T21:12:33.709Z",
    "size": 12464,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-44.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-45.webp": {
    "type": "image/webp",
    "etag": "\"181e-s2iHTu6TGC0T+tiH5uflsGi67b8\"",
    "mtime": "2024-10-11T21:12:33.709Z",
    "size": 6174,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-45.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-46.webp": {
    "type": "image/webp",
    "etag": "\"f48-W90A9J4GR62YU5i3qKE8F4rZbjM\"",
    "mtime": "2024-10-11T21:12:33.709Z",
    "size": 3912,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-46.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-47.webp": {
    "type": "image/webp",
    "etag": "\"1c0c-towOHr+hojCyvbswoIYBYmu7GOs\"",
    "mtime": "2024-10-11T21:12:33.709Z",
    "size": 7180,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-47.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-48.webp": {
    "type": "image/webp",
    "etag": "\"2424-aK5pPu78bvTBKsgmU0Sgsx9BQqY\"",
    "mtime": "2024-10-11T21:12:33.710Z",
    "size": 9252,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-48.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-49.webp": {
    "type": "image/webp",
    "etag": "\"14ac-Trd0UX75iKqjvekuBFdG4lY/log\"",
    "mtime": "2024-10-11T21:12:33.715Z",
    "size": 5292,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-49.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-5.webp": {
    "type": "image/webp",
    "etag": "\"a75a-0KVQP7SgNV2P/bUA2qCY8l4fhYk\"",
    "mtime": "2024-10-11T21:12:33.337Z",
    "size": 42842,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-5.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-50.webp": {
    "type": "image/webp",
    "etag": "\"10ea-sun74llPgCC19T8NQlPPk0Hrhf4\"",
    "mtime": "2024-10-11T21:12:33.719Z",
    "size": 4330,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-50.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-6.webp": {
    "type": "image/webp",
    "etag": "\"785c-vr05lB90KxaGdCtU0/flwe2ezks\"",
    "mtime": "2024-10-11T21:12:33.337Z",
    "size": 30812,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-6.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-7.webp": {
    "type": "image/webp",
    "etag": "\"db6e-rQZH9XtWBh333/triAhxxBYp6IY\"",
    "mtime": "2024-10-11T21:12:33.337Z",
    "size": 56174,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-7.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-8.webp": {
    "type": "image/webp",
    "etag": "\"d2b2-sahRqbfl7qJBp1v6ZrWCasGF7Qs\"",
    "mtime": "2024-10-11T21:12:33.337Z",
    "size": 53938,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-8.webp"
  },
  "/_ipx/q_80/img/parceiros/cliente-9.webp": {
    "type": "image/webp",
    "etag": "\"868e-AbjQh5TQidRVZmB7XZKjcuk/swE\"",
    "mtime": "2024-10-11T21:12:33.337Z",
    "size": 34446,
    "path": "../../.output/public/_ipx/q_80/img/parceiros/cliente-9.webp"
  },
  "/_ipx/w_100&q_80/icons/servicos/branding.svg": {
    "type": "image/svg+xml",
    "etag": "\"4c4-k9UaxLDDFbAh9YH6Oh2+YjQifCs\"",
    "mtime": "2024-10-11T21:12:30.264Z",
    "size": 1220,
    "path": "../../.output/public/_ipx/w_100&q_80/icons/servicos/branding.svg"
  },
  "/_ipx/w_100&q_80/icons/servicos/comunicacao_visual.svg": {
    "type": "image/svg+xml",
    "etag": "\"445-4rDWmznFE0BLoeMruf2JQtERhjw\"",
    "mtime": "2024-10-11T21:12:30.263Z",
    "size": 1093,
    "path": "../../.output/public/_ipx/w_100&q_80/icons/servicos/comunicacao_visual.svg"
  },
  "/_ipx/w_100&q_80/icons/servicos/gestao_de_conteudo.svg": {
    "type": "image/svg+xml",
    "etag": "\"496-6CNyzE0kVFYWhj3wAWNL8ZZzJW8\"",
    "mtime": "2024-10-11T21:12:30.264Z",
    "size": 1174,
    "path": "../../.output/public/_ipx/w_100&q_80/icons/servicos/gestao_de_conteudo.svg"
  },
  "/_ipx/w_100&q_80/icons/servicos/lojas_virtuais.svg": {
    "type": "image/svg+xml",
    "etag": "\"487-QsJeVjJqw6p4bDxYBZLziRAx0A4\"",
    "mtime": "2024-10-11T21:12:30.264Z",
    "size": 1159,
    "path": "../../.output/public/_ipx/w_100&q_80/icons/servicos/lojas_virtuais.svg"
  },
  "/_ipx/w_100&q_80/icons/servicos/otimizacao_seo.svg": {
    "type": "image/svg+xml",
    "etag": "\"3f8-WENYWStYyCBlz2CD574qS8sdIXo\"",
    "mtime": "2024-10-11T21:12:30.264Z",
    "size": 1016,
    "path": "../../.output/public/_ipx/w_100&q_80/icons/servicos/otimizacao_seo.svg"
  },
  "/_ipx/w_100&q_80/icons/servicos/producao_de_video.svg": {
    "type": "image/svg+xml",
    "etag": "\"3d7-5uaqyY4KzAXMbKpwslCwjyo/Fk8\"",
    "mtime": "2024-10-11T21:12:30.264Z",
    "size": 983,
    "path": "../../.output/public/_ipx/w_100&q_80/icons/servicos/producao_de_video.svg"
  },
  "/_ipx/w_100&q_80/icons/servicos/sites.svg": {
    "type": "image/svg+xml",
    "etag": "\"826-H86Sd5KGZZZLbRbZNlNrz1l5EtQ\"",
    "mtime": "2024-10-11T21:12:30.264Z",
    "size": 2086,
    "path": "../../.output/public/_ipx/w_100&q_80/icons/servicos/sites.svg"
  },
  "/_ipx/w_100&q_80/icons/servicos/trafego_pago.svg": {
    "type": "image/svg+xml",
    "etag": "\"42a-bHBYzFG5ucHp3k6L44JCWOL2pvI\"",
    "mtime": "2024-10-11T21:12:30.264Z",
    "size": 1066,
    "path": "../../.output/public/_ipx/w_100&q_80/icons/servicos/trafego_pago.svg"
  },
  "/_ipx/w_100&q_80/https:/s3.gsstudio.com.br/gsstudio/branding/simbolo.svg": {
    "type": "image/svg+xml",
    "etag": "\"502-71H38iOY+yZ3Jwrhvxde8HOxqzc\"",
    "mtime": "2024-10-11T21:12:33.711Z",
    "size": 1282,
    "path": "../../.output/public/_ipx/w_100&q_80/https:/s3.gsstudio.com.br/gsstudio/branding/simbolo.svg"
  },
  "/_ipx/w_200&q_80/https:/s3.gsstudio.com.br/gsstudio/branding/simbolo.svg": {
    "type": "image/svg+xml",
    "etag": "\"502-71H38iOY+yZ3Jwrhvxde8HOxqzc\"",
    "mtime": "2024-10-11T21:12:33.711Z",
    "size": 1282,
    "path": "../../.output/public/_ipx/w_200&q_80/https:/s3.gsstudio.com.br/gsstudio/branding/simbolo.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/~partytown/":{"maxAge":0},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _VPBd3A = defineEventHandler(async (e) => {
  if (e.context.siteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = createSiteConfigStack({
    debug: config.debug
  });
  const appConfig = useAppConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    // @ts-expect-error untyped
    ...envSiteConfig(globalThis._importMeta_.env)
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (appConfig.site) {
    siteConfig.push({
      _priority: -2,
      _context: "app:config",
      ...appConfig.site
    });
  }
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
});

const _Ti4J3T = defineEventHandler(async (e) => {
  const nitro = useNitroApp();
  const { indexable, hints } = getSiteRobotConfig(e);
  const { credits, usingNuxtContent, cacheControl } = useRuntimeConfig(e)["nuxt-robots"];
  let robotsTxtCtx = {
    sitemaps: [],
    groups: [
      {
        allow: [],
        comment: [],
        userAgent: ["*"],
        disallow: ["/"]
      }
    ]
  };
  if (indexable) {
    robotsTxtCtx = await resolveRobotsTxtContext(e);
    robotsTxtCtx.sitemaps = [...new Set(
      asArray(robotsTxtCtx.sitemaps).map((s) => !s.startsWith("http") ? withSiteUrl(e, s, { withBase: true, absolute: true }) : s)
    )];
    if (usingNuxtContent) {
      const contentWithRobotRules = await e.$fetch("/__robots__/nuxt-content.json", {
        headers: {
          Accept: "application/json"
        }
      });
      for (const group of robotsTxtCtx.groups) {
        if (group.userAgent.includes("*")) {
          group.disallow.push(...contentWithRobotRules);
          group.disallow = group.disallow.filter(Boolean);
        }
      }
    }
  }
  let robotsTxt = generateRobotsTxt(robotsTxtCtx);
  if (credits) {
    robotsTxt = [
      `# START nuxt-robots (${indexable ? "indexable" : "indexing disabled"})`,
      robotsTxt,
      "# END nuxt-robots"
    ].filter(Boolean).join("\n");
  }
  setHeader(e, "Content-Type", "text/plain; charset=utf-8");
  setHeader(e, "Cache-Control", globalThis._importMeta_.test || !cacheControl ? "no-store" : cacheControl);
  const hookCtx = { robotsTxt, e };
  await nitro.hooks.callHook("robots:robots-txt", hookCtx);
  return hookCtx.robotsTxt;
});

const _pOElCc = defineEventHandler(async (e) => {
  if (e.path === "/robots.txt" || e.path.startsWith("/__") || e.path.startsWith("/api") || e.path.startsWith("/_nuxt"))
    return;
  const robotConfig = getPathRobotConfig(e);
  const { header } = useRuntimeConfig(e)["nuxt-robots"];
  if (header) {
    setHeader(e, "X-Robots-Tag", robotConfig.rule);
  }
  e.context.robots = robotConfig;
});

const logger = createConsola({
  defaults: {
    tag: "@nuxt/sitemap"
  }
});
const merger = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = merger(item, res[k] || {});
  });
  return Object.values(res);
}
function splitForLocales(path, locales) {
  const prefix = withLeadingSlash(path).split("/")[1];
  if (locales.includes(prefix))
    return [prefix, path.replace(`/${prefix}`, "")];
  return [null, path];
}
const StringifiedRegExpPattern = /\/(.*?)\/([gimsuy]*)$/;
function normalizeRuntimeFilters(input) {
  return (input || []).map((rule) => {
    if (rule instanceof RegExp || typeof rule === "string")
      return rule;
    const match = rule.regex.match(StringifiedRegExpPattern);
    if (match)
      return new RegExp(match[1], match[2]);
    return false;
  }).filter(Boolean);
}
function createPathFilter(options = {}) {
  const urlFilter = createFilter(options);
  return (loc) => {
    let path = loc;
    try {
      path = parseURL(loc).pathname;
    } catch {
      return false;
    }
    return urlFilter(path);
  };
}
function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, strictTrailingSlash: false }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function useSimpleSitemapRuntimeConfig(e) {
  const clone = JSON.parse(JSON.stringify(useRuntimeConfig(e).sitemap));
  for (const k in clone.sitemaps) {
    const sitemap = clone.sitemaps[k];
    sitemap.include = normalizeRuntimeFilters(sitemap.include);
    sitemap.exclude = normalizeRuntimeFilters(sitemap.exclude);
    clone.sitemaps[k] = sitemap;
  }
  return Object.freeze(clone);
}

const _zoiIGo = defineEventHandler(async (e) => {
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { sitemapName: fallbackSitemapName, cacheMaxAgeSeconds, version, xslColumns, xslTips } = useSimpleSitemapRuntimeConfig();
  setHeader(e, "Content-Type", "application/xslt+xml");
  if (cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const referrerPath = parseURL(referrer).pathname;
  const isNotIndexButHasIndex = referrerPath !== "/sitemap.xml" && referrerPath !== "/sitemap_index.xml" && referrerPath.endsWith(".xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || fallbackSitemapName;
  const title = `${siteName}${sitemapName !== "sitemap.xml" ? ` - ${sitemapName === "sitemap_index.xml" ? "index" : sitemapName}` : ""}`.replace(/&/g, "&amp;");
  const canonicalQuery = getQuery(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const conditionalTips = [
    'You are looking at a <a href="https://developer.mozilla.org/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview" style="color: #398465" target="_blank">XML stylesheet</a>. Read the <a href="https://nuxtseo.com/sitemap/guides/customising-ui" style="color: #398465" target="_blank">docs</a> to learn how to customize it. View the page source to see the raw XML.',
    `URLs missing? Check Nuxt Devtools Sitemap tab (or the <a href="${withQuery("/__sitemap__/debug.json", { sitemap: sitemapName })}" style="color: #398465" target="_blank">debug endpoint</a>).`
  ];
  if (!isShowingCanonical) {
    const canonicalPreviewUrl = withQuery(referrer, { canonical: "" });
    conditionalTips.push(`Your canonical site URL is <strong>${siteUrl}</strong>.`);
    conditionalTips.push(`You can preview your canonical sitemap by visiting <a href="${canonicalPreviewUrl}" style="color: #398465; white-space: nowrap;">${fixPath(canonicalPreviewUrl)}?canonical</a>`);
  } else {
    conditionalTips.push(`You are viewing the canonical sitemap. You can switch to using the request origin: <a href="${fixPath(referrer)}" style="color: #398465; white-space: nowrap ">${fixPath(referrer)}</a>`);
  }
  let columns = [...xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          .bg-yellow-200 {
            background-color: #fef9c3;
          }

          .p-5 {
            padding: 1.25rem;
          }

          .rounded {
            border-radius: 4px;
            }

          .shadow {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          .expl a {
            color: #398465
            font-weight: 600;
          }

          .expl a:visited {
            color: #398465
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          .text-2xl {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.25;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
          .fixed { position: fixed; }
          .right-2 { right: 2rem; }
          .top-2 { top: 2rem; }
          .w-30 { width: 30rem; }
          p { margin: 0; }
          li { padding-bottom: 0.5rem; line-height: 1.5; }
          h1 { margin: 0; }
          .mb-5 { margin-bottom: 1.25rem; }
          .mb-3 { margin-bottom: 0.75rem; }
        </style>
      </head>
      <body>
        <div style="grid-template-columns: 1fr 1fr; display: grid; margin: 3rem;">
            <div>
             <div id="content">
          <h1 class="text-2xl mb-3">XML Sitemap</h1>
          <h2>${title}</h2>
          ${isNotIndexButHasIndex ? `<p style="font-size: 12px; margin-bottom: 1rem;"><a href="${fixPath("/sitemap_index.xml")}">${fixPath("/sitemap_index.xml")}</a></p>` : ""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  ${columns.map((c) => `<th width="${c.width}">${c.label}</th>`).join("\n")}
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    ${columns.filter((c) => c.label !== "URL").map((c) => `<td>
<xsl:value-of select="${c.select}"/>
</td>`).join("\n")}
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
        </div>
                    ${""}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [path === "/" ? path : withoutTrailingSlash(path), rules])
      )
    })
  );
  return (pathOrUrl) => {
    const path = pathOrUrl[0] === "/" ? pathOrUrl : parseURL(pathOrUrl, app.baseURL).pathname;
    const pathWithoutQuery = withoutQuery(path);
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(pathWithoutQuery === "/" ? pathWithoutQuery : withoutTrailingSlash(pathWithoutQuery), app.baseURL)
    ).reverse());
  };
}

function resolve(s, resolvers) {
  if (typeof s === "undefined" || !resolvers)
    return s;
  s = typeof s === "string" ? s : s.toString();
  if (hasProtocol(s, { acceptRelative: true, strict: false }))
    return resolvers.fixSlashes(s);
  return resolvers.canonicalUrlResolver(s);
}
function removeTrailingSlash(s) {
  return s.replace(/\/(\?|#|$)/, "$1");
}
function preNormalizeEntry(_e, resolvers) {
  const e = typeof _e === "string" ? { loc: _e } : { ..._e };
  if (e.url && !e.loc) {
    e.loc = e.url;
    delete e.url;
  }
  if (typeof e.loc !== "string") {
    e.loc = "";
  }
  e.loc = removeTrailingSlash(e.loc);
  e._abs = hasProtocol(e.loc, { acceptRelative: false, strict: false });
  try {
    e._path = e._abs ? parseURL(e.loc) : parsePath(e.loc);
  } catch (e2) {
    e2._path = null;
  }
  if (e._path) {
    const query = parseQuery(e._path.search);
    const qs = stringifyQuery(query);
    e._relativeLoc = `${encodePath(e._path?.pathname)}${qs.length ? `?${qs}` : ""}`;
    if (e._path.host) {
      e.loc = stringifyParsedURL(e._path);
    } else {
      e.loc = e._relativeLoc;
    }
  } else {
    e.loc = encodeURI(e.loc);
  }
  if (e.loc === "")
    e.loc = `/`;
  e.loc = resolve(e.loc, resolvers);
  e._key = `${e._sitemap || ""}${withoutTrailingSlash(e.loc)}`;
  return e;
}
function normaliseEntry(_e, defaults, resolvers) {
  const e = defu$1(_e, defaults);
  if (e.lastmod) {
    const date = normaliseDate(e.lastmod);
    if (date)
      e.lastmod = date;
    else
      delete e.lastmod;
  }
  if (!e.lastmod)
    delete e.lastmod;
  e.loc = resolve(e.loc, resolvers);
  if (e.alternatives) {
    e.alternatives = mergeOnKey(e.alternatives.map((e2) => {
      const a = { ...e2 };
      if (typeof a.href === "string")
        a.href = resolve(a.href, resolvers);
      else if (typeof a.href === "object" && a.href)
        a.href = resolve(a.href.href, resolvers);
      return a;
    }), "hreflang");
  }
  if (e.images) {
    e.images = mergeOnKey(e.images.map((i) => {
      i = { ...i };
      i.loc = resolve(i.loc, resolvers);
      return i;
    }), "loc");
  }
  if (e.videos) {
    e.videos = e.videos.map((v) => {
      v = { ...v };
      if (v.content_loc)
        v.content_loc = resolve(v.content_loc, resolvers);
      return v;
    });
  }
  return e;
}
const IS_VALID_W3C_DATE = [
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
  /^\d{4}-[01]\d-[0-3]\d$/,
  /^\d{4}-[01]\d$/,
  /^\d{4}$/
];
function isValidW3CDate(d) {
  return IS_VALID_W3C_DATE.some((r) => r.test(d));
}
function normaliseDate(d) {
  if (typeof d === "string") {
    if (d.includes("T")) {
      const t = d.split("T")[1];
      if (!t.includes("+") && !t.includes("-") && !t.includes("Z")) {
        d += "Z";
      }
    }
    if (!isValidW3CDate(d))
      return false;
    d = new Date(d);
    d.setMilliseconds(0);
    if (Number.isNaN(d.getTime()))
      return false;
  }
  const z = (n) => `0${n}`.slice(-2);
  const date = `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}`;
  if (d.getUTCHours() > 0 || d.getUTCMinutes() > 0 || d.getUTCSeconds() > 0) {
    return `${date}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}Z`;
  }
  return date;
}

async function fetchDataSource(input, event) {
  const context = typeof input.context === "string" ? { name: input.context } : input.context || { name: "fetch" };
  context.tips = context.tips || [];
  const url = typeof input.fetch === "string" ? input.fetch : input.fetch[0];
  const options = typeof input.fetch === "string" ? {} : input.fetch[1];
  const start = Date.now();
  const timeout = options.timeout || 5e3;
  const timeoutController = new AbortController();
  const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
  let isHtmlResponse = false;
  try {
    const fetchContainer = url.startsWith("/") && event ? event : globalThis;
    const urls = await fetchContainer.$fetch(url, {
      ...options,
      responseType: "json",
      signal: timeoutController.signal,
      headers: defu$1(options?.headers, {
        Accept: "application/json"
      }, event ? { Host: getRequestHost(event, { xForwardedHost: true }) } : {}),
      // @ts-expect-error untyped
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isHtmlResponse = true;
      }
    });
    const timeTakenMs = Date.now() - start;
    if (isHtmlResponse) {
      context.tips.push("This is usually because the URL isn't correct or is throwing an error. Please check the URL");
      return {
        ...input,
        context,
        urls: [],
        timeTakenMs,
        error: "Received HTML response instead of JSON"
      };
    }
    return {
      ...input,
      context,
      timeTakenMs,
      urls
    };
  } catch (_err) {
    const error = _err;
    if (error.message.includes("This operation was aborted"))
      context.tips.push("The request has taken too long. Make sure app sources respond within 5 seconds or adjust the timeout fetch option.");
    else
      context.tips.push(`Response returned a status of ${error.response?.status || "unknown"}.`);
    console.error("[@nuxtjs/sitemap] Failed to fetch source.", { url, error });
    return {
      ...input,
      context,
      urls: [],
      error: error.message
    };
  } finally {
    if (abortRequestTimeout) {
      clearTimeout(abortRequestTimeout);
    }
  }
}
function globalSitemapSources() {
  return import('../../virtual/global-sources.mjs').then((m) => m.sources);
}
function childSitemapSources(definition) {
  return definition?._hasSourceChunk ? import('../../virtual/child-sources.mjs').then((m) => m.sources[definition.sitemapName] || []) : Promise.resolve([]);
}
async function resolveSitemapSources(sources, event) {
  return (await Promise.all(
    sources.map((source) => {
      if (typeof source === "object" && "urls" in source) {
        return {
          timeTakenMs: 0,
          ...source,
          urls: source.urls
        };
      }
      if (source.fetch)
        return fetchDataSource(source, event);
      return {
        ...source,
        error: "Invalid source"
      };
    })
  )).flat();
}

function sortSitemapUrls(urls) {
  return urls.sort(
    (a, b) => {
      const aLoc = typeof a === "string" ? a : a.loc;
      const bLoc = typeof b === "string" ? b : b.loc;
      return aLoc.localeCompare(bLoc, void 0, { numeric: true });
    }
  ).sort((a, b) => {
    const aLoc = (typeof a === "string" ? a : a.loc) || "";
    const bLoc = (typeof b === "string" ? b : b.loc) || "";
    const aSegments = aLoc.split("/").length;
    const bSegments = bLoc.split("/").length;
    if (aSegments > bSegments)
      return 1;
    if (aSegments < bSegments)
      return -1;
    return 0;
  });
}

function resolveKey(k) {
  switch (k) {
    case "images":
      return "image";
    case "videos":
      return "video";
    // news & others?
    case "news":
      return "news";
    default:
      return k;
  }
}
function handleObject(key, obj) {
  return [
    `        <${key}:${key}>`,
    ...Object.entries(obj).map(([sk, sv]) => {
      if (key === "video" && Array.isArray(sv)) {
        return sv.map((v) => {
          if (typeof v === "string") {
            return [
              `            `,
              `<${key}:${sk}>`,
              escapeValueForXml(v),
              `</${key}:${sk}>`
            ].join("");
          }
          const attributes = Object.entries(v).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            v[sk],
            `</${key}:${sk}>`
          ].join("");
        }).join("\n");
      }
      if (typeof sv === "object") {
        if (key === "video") {
          const attributes = Object.entries(sv).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            sv[sk],
            `</${key}:${sk}>`
          ].join("");
        }
        return [
          `            <${key}:${sk}>`,
          ...Object.entries(sv).map(([ssk, ssv]) => `                <${key}:${ssk}>${escapeValueForXml(ssv)}</${key}:${ssk}>`),
          `            </${key}:${sk}>`
        ].join("\n");
      }
      return `            <${key}:${sk}>${escapeValueForXml(sv)}</${key}:${sk}>`;
    }),
    `        </${key}:${key}>`
  ].join("\n");
}
function handleArray(key, arr) {
  if (arr.length === 0)
    return false;
  key = resolveKey(key);
  if (key === "alternatives") {
    return arr.map((obj) => [
      `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${escapeValueForXml(sv)}"`).join(" ")} />`
    ].join("\n")).join("\n");
  }
  return arr.map((obj) => handleObject(key, obj)).join("\n");
}
function handleEntry(k, e) {
  return Array.isArray(e[k]) ? handleArray(k, e[k]) : typeof e[k] === "object" ? handleObject(k, e[k]) : `        <${k}>${escapeValueForXml(e[k])}</${k}>`;
}
function wrapSitemapXml(input, resolvers, options) {
  const xsl = options.xsl ? resolvers.relativeBaseUrlResolver(options.xsl) : false;
  const credits = options.credits;
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  if (credits)
    input.push(`<!-- XML Sitemap generated by @nuxtjs/sitemap v${options.version} at ${(/* @__PURE__ */ new Date()).toISOString()} -->`);
  if (options.minify)
    return input.join("").replace(/(?<!<[^>]*)\s(?![^<]*>)/g, "");
  return input.join("\n");
}
function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function resolveSitemapEntries(sitemap, sources, runtimeConfig, resolvers) {
  const {
    autoI18n,
    isI18nMapped
  } = runtimeConfig;
  const filterPath = createPathFilter({
    include: sitemap.include,
    exclude: sitemap.exclude
  });
  const _urls = sources.flatMap((e) => e.urls).map((_e) => {
    const e = preNormalizeEntry(_e, resolvers);
    if (!e.loc || !filterPath(e.loc))
      return false;
    return e;
  }).filter(Boolean);
  let validI18nUrlsForTransform = [];
  const withoutPrefixPaths = {};
  if (autoI18n && autoI18n.strategy !== "no_prefix") {
    const localeCodes = autoI18n.locales.map((l) => l.code);
    validI18nUrlsForTransform = _urls.map((_e, i) => {
      if (_e._abs)
        return false;
      const split = splitForLocales(_e._relativeLoc, localeCodes);
      let localeCode = split[0];
      const pathWithoutPrefix = split[1];
      if (!localeCode)
        localeCode = autoI18n.defaultLocale;
      const e = _e;
      e._pathWithoutPrefix = pathWithoutPrefix;
      const locale = autoI18n.locales.find((l) => l.code === localeCode);
      if (!locale)
        return false;
      e._locale = locale;
      e._index = i;
      e._key = `${e._sitemap || ""}${e._path?.pathname || "/"}${e._path.search}`;
      withoutPrefixPaths[pathWithoutPrefix] = withoutPrefixPaths[pathWithoutPrefix] || [];
      if (!withoutPrefixPaths[pathWithoutPrefix].some((e2) => e2._locale.code === locale.code))
        withoutPrefixPaths[pathWithoutPrefix].push(e);
      return e;
    }).filter(Boolean);
    for (const e of validI18nUrlsForTransform) {
      if (!e._i18nTransform && !e.alternatives?.length) {
        const alternatives = withoutPrefixPaths[e._pathWithoutPrefix].map((u) => {
          const entries = [];
          if (u._locale.code === autoI18n.defaultLocale) {
            entries.push({
              href: u.loc,
              hreflang: "x-default"
            });
          }
          entries.push({
            href: u.loc,
            hreflang: u._locale._hreflang || autoI18n.defaultLocale
          });
          return entries;
        }).flat().filter(Boolean);
        if (alternatives.length)
          e.alternatives = alternatives;
      } else if (e._i18nTransform) {
        delete e._i18nTransform;
        if (autoI18n.strategy === "no_prefix") ;
        if (autoI18n.differentDomains) {
          e.alternatives = [
            {
              // apply default locale domain
              ...autoI18n.locales.find((l) => [l.code, l.language].includes(autoI18n.defaultLocale)),
              code: "x-default"
            },
            ...autoI18n.locales.filter((l) => !!l.domain)
          ].map((locale) => {
            return {
              hreflang: locale._hreflang,
              href: joinURL(withHttps(locale.domain), e._pathWithoutPrefix)
            };
          });
        } else {
          for (const l of autoI18n.locales) {
            let loc = joinURL(`/${l.code}`, e._pathWithoutPrefix);
            if (autoI18n.differentDomains || ["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy) && l.code === autoI18n.defaultLocale)
              loc = e._pathWithoutPrefix;
            const _sitemap = isI18nMapped ? l._sitemap : void 0;
            const newEntry = preNormalizeEntry({
              _sitemap,
              ...e,
              _index: void 0,
              _key: `${_sitemap || ""}${loc || "/"}${e._path.search}`,
              _locale: l,
              loc,
              alternatives: [{ code: "x-default", _hreflang: "x-default" }, ...autoI18n.locales].map((locale) => {
                const code = locale.code === "x-default" ? autoI18n.defaultLocale : locale.code;
                const isDefault = locale.code === "x-default" || locale.code === autoI18n.defaultLocale;
                let href = "";
                if (autoI18n.strategy === "prefix") {
                  href = joinURL("/", code, e._pathWithoutPrefix);
                } else if (["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy)) {
                  if (isDefault) {
                    href = e._pathWithoutPrefix;
                  } else {
                    href = joinURL("/", code, e._pathWithoutPrefix);
                  }
                }
                if (!filterPath(href))
                  return false;
                return {
                  hreflang: locale._hreflang,
                  href
                };
              }).filter(Boolean)
            }, resolvers);
            if (e._locale.code === newEntry._locale.code) {
              _urls[e._index] = newEntry;
              e._index = void 0;
            } else {
              _urls.push(newEntry);
            }
          }
        }
      }
      if (isI18nMapped) {
        e._sitemap = e._sitemap || e._locale._sitemap;
        e._key = `${e._sitemap || ""}${e.loc || "/"}${e._path.search}`;
      }
      if (e._index)
        _urls[e._index] = e;
    }
  }
  return _urls;
}
async function buildSitemapUrls(sitemap, resolvers, runtimeConfig) {
  const {
    sitemaps,
    // enhancing
    autoI18n,
    isI18nMapped,
    isMultiSitemap,
    // sorting
    sortEntries,
    // chunking
    defaultSitemapsChunkSize
  } = runtimeConfig;
  const isChunking = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemap.sitemapName));
  function maybeSort(urls) {
    return sortEntries ? sortSitemapUrls(urls) : urls;
  }
  function maybeSlice(urls) {
    if (isChunking && defaultSitemapsChunkSize) {
      const chunk = Number(sitemap.sitemapName);
      return urls.slice(chunk * defaultSitemapsChunkSize, (chunk + 1) * defaultSitemapsChunkSize);
    }
    return urls;
  }
  if (autoI18n?.differentDomains) {
    const domain = autoI18n.locales.find((e) => [e.language, e.code].includes(sitemap.sitemapName))?.domain;
    if (domain) {
      const _tester = resolvers.canonicalUrlResolver;
      resolvers.canonicalUrlResolver = (path) => resolveSitePath(path, {
        absolute: true,
        withBase: false,
        siteUrl: withHttps(domain),
        trailingSlash: _tester("/test/").endsWith("/"),
        base: "/"
      });
    }
  }
  const sources = sitemap.includeAppSources ? await globalSitemapSources() : [];
  sources.push(...await childSitemapSources(sitemap));
  const resolvedSources = await resolveSitemapSources(sources, resolvers.event);
  const enhancedUrls = resolveSitemapEntries(sitemap, resolvedSources, { autoI18n, isI18nMapped }, resolvers);
  const filteredUrls = enhancedUrls.filter((e) => {
    if (isMultiSitemap && e._sitemap && sitemap.sitemapName)
      return e._sitemap === sitemap.sitemapName;
    return true;
  });
  const sortedUrls = maybeSort(filteredUrls);
  return maybeSlice(sortedUrls);
}
function urlsToXml(urls, resolvers, { version, xsl, credits, minify }) {
  const urlset = urls.map((e) => {
    const keys = Object.keys(e).filter((k) => !k.startsWith("_"));
    return [
      "    <url>",
      keys.map((k) => handleEntry(k, e)).filter(Boolean).join("\n"),
      "    </url>"
    ].join("\n");
  });
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlset.join("\n"),
    "</urlset>"
  ], resolvers, { version, xsl, credits, minify });
}

function useNitroUrlResolvers(e) {
  const canonicalQuery = getQuery$1(e).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const siteConfig = useSiteConfig(e);
  return {
    event: e,
    fixSlashes: (path) => fixSlashes(siteConfig.trailingSlash, path),
    // we need these as they depend on the nitro event
    canonicalUrlResolver: createSitePathResolver(e, {
      canonical: isShowingCanonical || !false,
      absolute: true,
      withBase: true
    }),
    relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true })
  };
}
async function createSitemap(event, definition, runtimeConfig) {
  const { sitemapName } = definition;
  const nitro = useNitroApp();
  {
    const config = useSiteConfig(event);
    if (!config.url && !nitro._sitemapWarned) {
      nitro._sitemapWarned = true;
      logger.error("Sitemap Site URL missing!");
      logger.info("To fix this please add `{ site: { url: 'site.com' } }` to your Nuxt config or a `NUXT_PUBLIC_SITE_URL=site.com` to your .env. Learn more at https://nuxtseo.com/site-config/getting-started/how-it-works");
      throw new createError({
        statusMessage: "You must provide a site URL to prerender a sitemap.",
        statusCode: 500
      });
    }
  }
  const resolvers = useNitroUrlResolvers(event);
  let sitemapUrls = await buildSitemapUrls(definition, resolvers, runtimeConfig);
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const { autoI18n } = runtimeConfig;
  sitemapUrls = sitemapUrls.map((u) => {
    const path = u._path?.pathname || u.loc;
    if (!getPathRobotConfig(event, { path, skipSiteIndexable: true }).indexable)
      return false;
    let routeRules = routeRuleMatcher(path);
    if (autoI18n?.locales && autoI18n?.strategy !== "no_prefix") {
      const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
      const pathWithoutPrefix = match[1];
      if (pathWithoutPrefix && pathWithoutPrefix !== path)
        routeRules = defu$1(routeRules, routeRuleMatcher(pathWithoutPrefix));
    }
    if (routeRules.sitemap === false)
      return false;
    if (typeof routeRules.index !== "undefined" && !routeRules.index || typeof routeRules.robots !== "undefined" && !routeRules.robots) {
      return false;
    }
    const hasRobotsDisabled = Object.entries(routeRules.headers || {}).some(([name, value]) => name.toLowerCase() === "x-robots-tag" && value.toLowerCase().includes("noindex"));
    if (routeRules.redirect || hasRobotsDisabled)
      return false;
    return routeRules.sitemap ? defu$1(u, routeRules.sitemap) : u;
  }).filter(Boolean);
  const resolvedCtx = {
    urls: sitemapUrls,
    sitemapName
  };
  await nitro.hooks.callHook("sitemap:resolved", resolvedCtx);
  const maybeSort = (urls2) => runtimeConfig.sortEntries ? sortSitemapUrls(urls2) : urls2;
  const normalizedPreDedupe = resolvedCtx.urls.map((e) => normaliseEntry(e, definition.defaults, resolvers));
  const urls = maybeSort(mergeOnKey(normalizedPreDedupe, "_key").map((e) => normaliseEntry(e, definition.defaults, resolvers)));
  const sitemap = urlsToXml(urls, resolvers, runtimeConfig);
  const ctx = { sitemap, sitemapName };
  await nitro.hooks.callHook("sitemap:output", ctx);
  setHeader(event, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds)
    setHeader(event, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(event, "Cache-Control", `no-cache, no-store`);
  event.context._isSitemap = true;
  return ctx.sitemap;
}

const _BQUWeh = defineEventHandler(async (e) => {
  const runtimeConfig = useSimpleSitemapRuntimeConfig();
  const { sitemaps } = runtimeConfig;
  if ("index" in sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 301);
  }
  return createSitemap(e, Object.values(sitemaps)[0], runtimeConfig);
});

const _rf0h91 = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_jqIX24 = () => import('./parceiros.mjs');
const _lazy_b4sKXn = () => Promise.resolve().then(function () { return portifolio; });
const _lazy_3weOdp = () => import('../__og-image__/font/font.mjs');
const _lazy_LFXmnD = () => import('../__og-image__/image/image.mjs');
const _lazy_9YkBiL = () => import('../../_/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/parceiros', handler: _lazy_jqIX24, lazy: true, middleware: false, method: undefined },
  { route: '/api/portifolio', handler: _lazy_b4sKXn, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _VPBd3A, lazy: false, middleware: true, method: undefined },
  { route: '/robots.txt', handler: _Ti4J3T, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _pOElCc, lazy: false, middleware: false, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _zoiIGo, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _BQUWeh, lazy: false, middleware: false, method: undefined },
  { route: '/__og-image__/font/**', handler: _lazy_3weOdp, lazy: true, middleware: false, method: undefined },
  { route: '/__og-image__/image/**', handler: _lazy_LFXmnD, lazy: true, middleware: false, method: undefined },
  { route: '/__og-image__/static/**', handler: _lazy_LFXmnD, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _rf0h91, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_9YkBiL, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

const portifolio = /*#__PURE__*/Object.freeze({
  __proto__: null
});

export { useStorage as a, useNitroOrigin as b, useRuntimeConfig as c, useNitroApp as d, emojiCache as e, fetchIsland as f, getRouteRules as g, decodeHtml as h, htmlDecodeQuotes as i, fontCache as j, closePrerenderer as k, localFetch as l, normaliseFontInput as n, resolveContext as r, toBase64Image as t, useOgImageRuntimeConfig as u };
//# sourceMappingURL=portifolio.mjs.map
