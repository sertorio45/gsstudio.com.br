import IMask from "imask";
import { defineNuxtPlugin } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import "vue";
import "/Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/destr/dist/index.mjs";
import "/Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/klona/dist/index.mjs";
import "/Users/giovannisertorio/Desktop/Sites/gsstudio_digital/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
const imask_omfLFb3SPcR2lajdB9Tw5bFAAg1lHLYLLsALKsDs_w4 = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("mask", {
    mounted(el, binding) {
      IMask(el, { mask: binding.value });
    },
    updated(el, binding) {
      IMask(el, { mask: binding.value });
    }
  });
});
export {
  imask_omfLFb3SPcR2lajdB9Tw5bFAAg1lHLYLLsALKsDs_w4 as default
};
//# sourceMappingURL=imask.mjs.map
