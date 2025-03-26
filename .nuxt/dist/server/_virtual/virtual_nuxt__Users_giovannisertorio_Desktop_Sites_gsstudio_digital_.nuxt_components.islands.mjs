import { defineAsyncComponent } from "vue";
const islandComponents = {
  "BrandedLogo": defineAsyncComponent(() => import(
    "../node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.vue.mjs"
    /* webpackChunkName: "components/branded-logo-server" */
  ).then((c) => c.default || c)),
  "Frame": defineAsyncComponent(() => import(
    "../node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue.mjs"
    /* webpackChunkName: "components/frame-server" */
  ).then((c) => c.default || c)),
  "Nuxt": defineAsyncComponent(() => import(
    "../node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Nuxt.vue.mjs"
    /* webpackChunkName: "components/nuxt-server" */
  ).then((c) => c.default || c)),
  "NuxtSeo": defineAsyncComponent(() => import(
    "../node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.vue.mjs"
    /* webpackChunkName: "components/nuxt-seo-server" */
  ).then((c) => c.default || c)),
  "Pergel": defineAsyncComponent(() => import(
    "../node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Pergel.vue.mjs"
    /* webpackChunkName: "components/pergel-server" */
  ).then((c) => c.default || c)),
  "SimpleBlog": defineAsyncComponent(() => import(
    "../node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.vue.mjs"
    /* webpackChunkName: "components/simple-blog-server" */
  ).then((c) => c.default || c)),
  "UnJs": defineAsyncComponent(() => import(
    "../node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/UnJs.vue.mjs"
    /* webpackChunkName: "components/un-js-server" */
  ).then((c) => c.default || c)),
  "Wave": defineAsyncComponent(() => import(
    "../node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Wave.vue.mjs"
    /* webpackChunkName: "components/wave-server" */
  ).then((c) => c.default || c)),
  "WithEmoji": defineAsyncComponent(() => import(
    "../node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.vue.mjs"
    /* webpackChunkName: "components/with-emoji-server" */
  ).then((c) => c.default || c))
};
export {
  islandComponents
};
//# sourceMappingURL=virtual_nuxt__Users_giovannisertorio_Desktop_Sites_gsstudio_digital_.nuxt_components.islands.mjs.map
