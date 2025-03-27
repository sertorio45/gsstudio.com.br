import { TemplateParamsPlugin } from 'unhead/plugins';
import { t as toRouteMatcher, c as createRouter, w as withoutTrailingSlash, a as defu, b as withoutBase } from '../nitro/nitro.mjs';
import { f as useRuntimeConfig, c as useNuxtApp, g as useRoute, i as injectHead, h as useOgImageRuntimeConfig, n as normaliseOptions, s as separateProps, j as createOgImageMeta, k as getOgImagePath } from './server.mjs';
import { ref } from 'vue';

function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries((nitro == null ? void 0 : nitro.routeRules) || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery(path)), app.baseURL)
    ).reverse());
  };
}

function defineOgImage(_options = {}) {
  var _a, _b, _c;
  const nuxtApp = useNuxtApp();
  const route = useRoute();
  const head = injectHead();
  head.use(TemplateParamsPlugin);
  const basePath = route.path || "/";
  if (nuxtApp.payload.path === basePath) {
    const state = ref(false);
    state.value = true;
  }
  const ogImageInstances = nuxtApp.ssrContext._ogImageInstances || [];
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const routeRules = routeRuleMatcher(basePath).ogImage;
  if (!_options || ((_c = (_b = (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event.context._nitro) == null ? void 0 : _b.routeRules) == null ? void 0 : _c.ogImage) === false || typeof routeRules !== "undefined" && routeRules === false) {
    ogImageInstances.forEach((e) => {
      e.dispose();
    });
    nuxtApp.ssrContext._ogImageInstances = void 0;
    return;
  }
  const { defaults } = useOgImageRuntimeConfig();
  const options = normaliseOptions(defu({
    ..._options
  }, {
    component: defaults.component
  }));
  if (route.query)
    options._query = route.query;
  const resolvedOptions = normaliseOptions(defu(separateProps(_options), separateProps(routeRules), defaults));
  if (resolvedOptions.url) {
    createOgImageMeta(null, options, resolvedOptions, nuxtApp.ssrContext);
  } else {
    const path = getOgImagePath(basePath, defu(resolvedOptions, { _query: options._query }));
    createOgImageMeta(path, options, resolvedOptions, nuxtApp.ssrContext);
  }
}

export { defineOgImage as d };
//# sourceMappingURL=defineOgImage.mjs.map
