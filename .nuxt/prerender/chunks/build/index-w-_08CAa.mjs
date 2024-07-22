import { u as useHead } from './index-BabADJUJ.mjs';
import { a as useNuxtApp, _ as _export_sfc, u as useRequestEvent, N, b as useRuntimeConfig } from './server.mjs';
import { defineComponent, ref, computed, h, useSSRContext, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/index.mjs';
import { defu } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/defu/dist/defu.mjs';
import { encodeParam, hasProtocol, withLeadingSlash, joinURL, parseURL, encodePath } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ufo/dist/index.mjs';
import { appendHeader } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/h3/dist/index.mjs';
import { Autoplay } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/swiper/modules/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/server-renderer/index.mjs';
import { Swiper, SwiperSlide } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/swiper/swiper-vue.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/devalue/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/destr/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/klona/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/scule/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ohash/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ipx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unhead/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-router/dist/vue-router.node.mjs';

async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/image-meta/dist/index.mjs').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function prerenderStaticImages(src = "", srcset = "") {
  const paths = [
    src,
    ...srcset.split(", ").map((s) => s.trim().split(" ")[0].trim())
  ].filter((s) => s && s.includes("/_ipx/"));
  if (!paths.length) {
    return;
  }
  appendHeader(
    useRequestEvent(),
    "x-nitro-prerender",
    paths.map((p) => encodeURIComponent(p)).join(", ")
  );
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    {
      prerenderStaticImages(image.url);
    }
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxStaticRuntime$JUzwYaxdW8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipxStatic",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipxStatic"]: { provider: ipxStaticRuntime$JUzwYaxdW8, defaults: {} }
};
const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, default: void 0 },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: {
    type: [Boolean, Object],
    default: void 0
  },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: {
    type: String,
    default: void 0,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], default: void 0 }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 },
  placeholderClass: { type: String, default: void 0 }
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    {
      prerenderStaticImages(src.value, sizes.value.srcset);
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs,
      class: props.placeholder && !placeholderLoaded.value ? [props.placeholderClass] : void 0,
      src: src.value
    });
  }
});
const _sfc_main$2 = {
  __name: "CarouselParceiros",
  __ssrInlineRender: true,
  setup(__props) {
    const parceiros = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper-container my-5" }, _attrs))} data-v-b8c3a271>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay)],
        "slides-per-view": 7,
        "space-between": 10,
        loop: true,
        autoplay: { delay: 1e3, disableOnInteraction: false }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(parceiros.value, (parceiro, index2) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index2 }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", parceiro)} class="d-block w-100 parceiro-img"${ssrRenderAttr("alt", "Parceiros" + (index2 + 1))} data-v-b8c3a271${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: parceiro,
                        class: "d-block w-100 parceiro-img",
                        alt: "Parceiros" + (index2 + 1)
                      }, null, 8, ["src", "alt"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(parceiros.value, (parceiro, index2) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index2 }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: parceiro,
                      class: "d-block w-100 parceiro-img",
                      alt: "Parceiros" + (index2 + 1)
                    }, null, 8, ["src", "alt"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="swiper-gradient-left" data-v-b8c3a271></div><div class="swiper-gradient-right" data-v-b8c3a271></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CarouselParceiros.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b8c3a271"]]);
const __default__ = {
  name: "Portifolio",
  components: {
    VueEasyLightbox: N
  }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const images = ref([]);
    const perRow = 6;
    const rows = ref(2);
    const loading = ref(false);
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const imageRows = computed(() => {
      const rowsArr = [];
      for (let i = 0; i < rows.value; i++) {
        rowsArr.push(images.value.slice(i * perRow, (i + 1) * perRow));
      }
      return rowsArr;
    });
    const onHide = () => {
      visibleRef.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6b595f6f><!--[-->`);
      ssrRenderList(imageRows.value, (row, rowIndex) => {
        _push(`<div class="image-row" data-v-6b595f6f><!--[-->`);
        ssrRenderList(row, (image, index2) => {
          _push(`<img${ssrRenderAttr("src", image.src)} class="image-thumbnail" data-v-6b595f6f>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--><button${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-6b595f6f>Carregar mais</button>`);
      _push(ssrRenderComponent(unref(N), {
        visible: visibleRef.value,
        imgs: images.value,
        index: indexRef.value,
        onHide
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Portifolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6b595f6f"]]);
const _sfc_main = defineComponent({
  name: "IndexPage",
  components: {
    CarouselParceiros: __nuxt_component_1,
    Portifolio: __nuxt_component_2
  },
  methods: {
    importAll(r) {
      return r.keys().map(r);
    },
    initCardAnimation() {
      const cards = (void 0).querySelectorAll(".gscard");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const randomDelay = Math.random() * 1e3;
            setTimeout(() => {
              entry.target.classList.add("animate");
              observer.unobserve(entry.target);
            }, randomDelay);
          }
        });
      }, {
        threshold: 0.5
        // Adjust this value as needed
      });
      cards.forEach((card) => {
        observer.observe(card);
      });
    },
    initCounters() {
      const counters = (void 0).querySelectorAll(".count");
      const speed = 9e3;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.startCounting(counters, speed);
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 1
        // Iniciar a contagem quando 100% da seção estiver visível
      });
      const target = (void 0).getElementById("conquistas");
      if (target) {
        observer.observe(target);
      }
    },
    startCounting(counters, speed) {
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-count");
          const count = +counter.innerText;
          const increment = target / (speed / 100);
          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    },
    scrollToElement(element) {
      const headerOffset = 50;
      const elementPosition = (void 0).querySelector(element).offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      (void 0).scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    this.initCardAnimation();
    this.initCounters();
    this.$router.afterEach((to, from) => {
      if (to.name === "index") {
        setTimeout(() => {
          this.initCardAnimation();
        }, 100);
      }
    });
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtImg = __nuxt_component_0;
  const _component_CarouselParceiros = __nuxt_component_1;
  const _component_Portifolio = __nuxt_component_2;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-9403af06><section class="d-flex align-items-center min-vh-100" id="index" data-v-9403af06><div class="container text-center" data-v-9403af06><div class="row" data-v-9403af06><div class="col" data-v-9403af06><h1 data-v-9403af06>Aumente a <em data-v-9403af06>performance</em> da sua <em data-v-9403af06>empresa.</em></h1><p class="my-4" data-v-9403af06>Destaque sua empresa \xE0 frente de seus concorrentes com estrat\xE9gias de branding, marketing e tecnologia.</p><div class="d-flex justify-content-center" data-v-9403af06><button class="btn btn-primary" data-v-9403af06>Nos conhe\xE7a um pouco</button><button class="btn btn-primary-border" data-v-9403af06>Entre em contato rapidamente</button></div></div></div></div></section><section class="d-flex align-items-center bg-light py-5" id="sobre" data-v-9403af06><div class="container" data-v-9403af06><div class="row" data-v-9403af06><div class="col-5" data-v-9403af06><h2 data-v-9403af06>Somos especialistas</h2><p class="my-3 d-block" data-v-9403af06> Design publicit\xE1rio, marketing online/offline e websites. Na GS STUDIO, combinamos criatividade e estrat\xE9gias comprovadas para desenvolver campanhas de marketing eficazes e impactantes. Nossos especialistas em tecnologia oferecem solu\xE7\xF5es personalizadas para maximizar a efici\xEAncia do seu neg\xF3cio. </p></div><div class="col-7 text-center align-content-center content-justify-center px-5" data-v-9403af06><div data-v-9403af06><div class="d-flex" data-v-9403af06><div class="col-4 gscard gscard-border" data-v-9403af06>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "icons/icon-design.svg",
    class: "p-2 m-2"
  }, null, _parent));
  _push(`<h3 data-v-9403af06>Design</h3><a href="#none" data-v-9403af06>Saiba mais</a></div><div class="col-4 gscard gscard-border" data-v-9403af06>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "icons/icon-marketing.svg",
    class: "p-2 m-2"
  }, null, _parent));
  _push(`<h3 data-v-9403af06>Marketing</h3><a href="#none" data-v-9403af06>Saiba mais</a></div><div class="col-4 gscard gscard-border" data-v-9403af06>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "icons/icon-tecnologia.svg",
    class: "p-2 m-2"
  }, null, _parent));
  _push(`<h3 data-v-9403af06>Tecnologia</h3><a href="#none" data-v-9403af06>Saiba mais</a></div></div></div></div></div></div></section><section class="py-5 text-center" id="conquistas" data-v-9403af06><div class="container my-3" data-v-9403af06><div class="row" data-v-9403af06><div class="col-12 col-sm-6 col-md-3" data-v-9403af06><div class="gscard gscard-border" data-v-9403af06><h3 data-v-9403af06><em data-v-9403af06>+ de <em class="count" data-count="65" data-v-9403af06>0</em></em></h3><span data-v-9403af06>Sites produzidos</span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-9403af06><div class="gscard gscard-border" data-v-9403af06><h3 data-v-9403af06><em data-v-9403af06>+ de <em class="count" data-count="250" data-v-9403af06>0</em></em></h3><span data-v-9403af06>Clientes ativos</span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-9403af06><div class="gscard gscard-border" data-v-9403af06><h3 data-v-9403af06><em data-v-9403af06>+ de <em class="count" data-count="80" data-v-9403af06>0</em></em></h3><span data-v-9403af06>Marcas desenvolvidas</span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-9403af06><div class="gscard gscard-border" data-v-9403af06><h3 data-v-9403af06><em data-v-9403af06>+ de <em class="count" data-count="7" data-v-9403af06>0</em></em></h3><span data-v-9403af06>Anos de mercado</span></div></div></div></div></section><section class="my-5 align-content-center justify-content-center" id="parceiros" data-v-9403af06><div class="container text-center my-5" data-v-9403af06><div class="row" data-v-9403af06><h2 data-v-9403af06>Parceiros e clientes</h2><div id="app" data-v-9403af06><div class="col" data-v-9403af06>`);
  _push(ssrRenderComponent(_component_CarouselParceiros, null, null, _parent));
  _push(`</div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_Portifolio, null, null, _parent));
  _push(`<section class="min-vh-100 align-content-center justify-content-center bg-light" id="servicos" data-v-9403af06><div class="container text-center" data-v-9403af06><div class="row justify-content-center align-content-center" data-v-9403af06><h2 data-v-9403af06>Solu\xE7\xF5es e servi\xE7os</h2><p class="my-3" data-v-9403af06> A GS STUDIO est\xE1 comprometida com resultados. Acreditamos que a criatividade e o design, alinhados com uma estrat\xE9gia eficaz, geram resultados melhores e duradouros. </p><div class="row mt-3" data-v-9403af06><div class="col-12 col-sm-6 col-md-3" data-v-9403af06><div class="gscard gscard-border" data-v-9403af06>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "icons/servicos/sites.svg",
    class: "p-2 m-2"
  }, null, _parent));
  _push(`<h3 data-v-9403af06>Sites</h3><span data-v-9403af06><a href="#none" data-v-9403af06>Saiba mais</a></span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-9403af06><div class="gscard gscard-border" data-v-9403af06>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "icons/servicos/gestao_de_conteudo.svg",
    class: "p-2 m-2"
  }, null, _parent));
  _push(`<h3 data-v-9403af06>Redes sociais</h3><span data-v-9403af06><a href="#none" data-v-9403af06>Saiba mais</a></span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-9403af06><div class="gscard gscard-border" data-v-9403af06>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "icons/servicos/lojas_virtuais.svg",
    class: "p-2 m-2"
  }, null, _parent));
  _push(`<h3 data-v-9403af06>Lojas virtuais</h3><span data-v-9403af06><a href="#none" data-v-9403af06>Saiba mais</a></span></div></div><div class="col-12 col-sm-6 col-md-3" data-v-9403af06><div class="gscard gscard-border" data-v-9403af06>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "icons/servicos/branding.svg",
    class: "p-2 m-2"
  }, null, _parent));
  _push(`<h3 data-v-9403af06>Lojas virtuais</h3><h3 data-v-9403af06>Marcas</h3><span data-v-9403af06><a href="#none" data-v-9403af06>Saiba mais</a></span></div></div></div><div class="row mt-5" data-v-9403af06><div class="col" data-v-9403af06><button class="btn btn-primary" data-v-9403af06> Veja mais servi\xE7os</button></div></div></div></div></section><section class="text-center gscard my-5" id="cta" data-v-9403af06><div class="container justify-content-center align-content-center bg-cta my-5" data-v-9403af06><div class="row" data-v-9403af06><div class="col text-light" data-v-9403af06><h2 class="text-light" data-v-9403af06>Transforme Resultados com Design, Marketing e Tecnologia!</h2><div class="subheadline d-flex justify-content-center py-2" data-v-9403af06><p data-v-9403af06>Potencialize seu neg\xF3cio com solu\xE7\xF5es criativas e inovadoras. N\xF3s entregamos resultados excepcionais atrav\xE9s de estrat\xE9gias personalizadas e tecnologia de ponta.</p></div><button class="btn btn-white" data-v-9403af06><em data-v-9403af06>Come\xE7ar or\xE7amento</em></button></div></div></div></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9403af06"]]);

export { index as default };
//# sourceMappingURL=index-w-_08CAa.mjs.map
