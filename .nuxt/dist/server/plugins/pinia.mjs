import { createPinia } from "pinia";
import { defineNuxtPlugin } from "../node_modules/nuxt/dist/app/nuxt.mjs";
const pinia_2z8Ip_jWBRJR11oARwTuXOuYmKme2JpGLevDuCPfHcc = defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  nuxtApp.provide("pinia", pinia);
});
export {
  pinia_2z8Ip_jWBRJR11oARwTuXOuYmKme2JpGLevDuCPfHcc as default
};
//# sourceMappingURL=pinia.mjs.map
