import __nuxt_page_meta from "../pages/_slug_.vue2.mjs";
function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "blog",
    path: "/blog",
    component: () => import("../pages/blog.vue.mjs")
  },
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "sobre",
    path: "/sobre",
    component: () => import("../pages/sobre.vue.mjs")
  },
  {
    name: "slug",
    path: "/:slug()",
    meta: __nuxt_page_meta || {},
    component: () => import("../pages/_slug_.vue.mjs")
  },
  {
    name: "contato",
    path: "/contato",
    component: () => import("../pages/contato.vue.mjs")
  },
  {
    name: "servicos",
    path: "/servicos",
    component: () => import("../pages/servicos.vue.mjs")
  },
  {
    name: "politica-de-privacidade",
    path: "/politica-de-privacidade",
    component: () => import("../pages/politica-de-privacidade.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt__Users_giovannisertorio_Desktop_Sites_gsstudio_digital_.nuxt_routes.mjs.map
