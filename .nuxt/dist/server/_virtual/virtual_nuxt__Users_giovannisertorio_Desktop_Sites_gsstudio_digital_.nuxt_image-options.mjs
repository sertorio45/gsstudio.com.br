import * as ipx from "../node_modules/_nuxt/image/dist/runtime/providers/ipx.mjs";
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
  "provider": "ipx",
  "domains": [
    "s3.gsstudio.com.br",
    "gsstudio.com.br",
    "painel.gsadmin.app"
  ],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ],
  "quality": 75
};
imageOptions.providers = {
  ["ipx"]: { provider: ipx, defaults: {} }
};
export {
  imageOptions
};
//# sourceMappingURL=virtual_nuxt__Users_giovannisertorio_Desktop_Sites_gsstudio_digital_.nuxt_image-options.mjs.map
