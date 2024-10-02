import IMask from 'imask';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('mask', {
    mounted(el, binding) {
      IMask(el, { mask: binding.value });
    },
    updated(el, binding) {
      IMask(el, { mask: binding.value });
    },
  });
});
