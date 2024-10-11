import { u as useHead, e as useSeoMeta, _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { _ as _sfc_main$1 } from './Icon-5pRBvot5.mjs';
import { defineComponent, ref, computed, useSSRContext, withCtx, createTextVNode, createVNode, toDisplayString } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/vue/index.mjs';
import { d as defineOgImage } from './defineOgImage-D8QI4VYf.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/h3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/devalue/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/destr/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/ufo/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/@unhead/ssr/dist/index.mjs';
import '../routes/api/portifolio.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/hookable/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/klona/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/scule/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/defu/dist/defu.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/ohash/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/radix3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/packrup/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/pathe/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/ipx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/unhead/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/unctx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/@unhead/schema-org/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/@unhead/schema-org/dist/vue.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio/node_modules/imask/esm/index.js';

const _sfc_main = defineComponent({
  name: "Blog",
  setup() {
    const articles = ref([]);
    const categories = ref([]);
    const loading = ref(true);
    const loadingMore = ref(false);
    const baseURL = "https://str-gsstudio.gsstudio.com.br";
    const articlesPerPage = 4;
    const loadedArticlesCount = ref(articlesPerPage);
    defineOgImage({ url: "https://gsstudio.com.br/img/thumb_gsstudio.jpg", width: 1200, height: 600, alt: "GS STUDIO - Markteting, comunica\xE7\xE3o e desenvolvimento web" });
    useHead({
      meta: [
        { name: "lang", content: "pt-BR" },
        { name: "language", content: "pt-BR" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "canonical", content: "https://www.gsstudio.com.br/blog" },
        { name: "keywords", content: "marketing digital, cria\xE7\xE3o de sites, otimiza\xE7\xE3o de sites (SEO), Google Ads, campanhas online, ag\xEAncia digital, ag\xEAncia de marketing, lojas virtuais, e-commerce, gest\xE3o de redes sociais, desenvolvimento web, design responsivo, tr\xE1fego pago, branding, identidade visual, marketing para empresas, marketing para pequenas empresas, marketing em Sert\xE3ozinho, marketing em Ribeir\xE3o Preto, SEO local, social media marketing, estrat\xE9gia de marketing digital, an\xFAncios online, ag\xEAncia de SEO, cria\xE7\xE3o de conte\xFAdo, marketing de conte\xFAdo, hospedagem de sites, otimiza\xE7\xE3o de convers\xE3o (CRO), email marketing, automa\xE7\xE3o de marketing, consultoria em marketing digital, campanhas pagas no Google, performance digital, WordPress, cria\xE7\xE3o de blogs, gest\xE3o de tr\xE1fego, otimiza\xE7\xE3o de desempenho do site, desenvolvimento de sistemas web, produ\xE7\xE3o audiovisual, estrat\xE9gias de marketing SP, ag\xEAncia de marketing em SP." },
        { name: "canonical", content: "https://www.gsstudio.com.br/blog" }
      ]
    });
    useSeoMeta({
      title: "Blog",
      description: "Artigos para voc\xEA aprender, novidades sobre tecnologia, marketing e toda \xE1rea de comunica\xE7\xE3o on e offline.",
      ogTitle: "Blog",
      ogDescription: "Artigos para voc\xEA aprender, novidades sobre tecnologia, marketing e toda \xE1rea de comunica\xE7\xE3o on e offline.",
      ogUrl: "https://gsstudio.com.br/blog",
      ogSiteName: "GS STUDIO",
      ogLocale: "pt_BR"
    });
    const loadMoreArticles = () => {
      if (loadingMore.value || !hasMoreArticles.value)
        return;
      loadingMore.value = true;
      setTimeout(() => {
        loadedArticlesCount.value += articlesPerPage;
        loadingMore.value = false;
      }, 1e3);
    };
    const displayedArticles = computed(() => {
      return articles.value.slice(0, loadedArticlesCount.value);
    });
    const hasMoreArticles = computed(() => {
      return loadedArticlesCount.value < articles.value.length;
    });
    const getArticleImage = (article) => {
      if (article.thumb && article.thumb.url) {
        return new URL(article.thumb.url, baseURL).href;
      }
      return "https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp";
    };
    const handleImageError = (event) => {
      const img = event.target;
      img.src = "https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp";
    };
    const getCategoryTitle = (categoryId) => {
      const category = categories.value.find((cat) => cat.id === categoryId);
      return category ? category.title : "Categoria desconhecida";
    };
    return {
      articles: displayedArticles,
      loading,
      loadingMore,
      getArticleImage,
      getCategoryTitle,
      loadMoreArticles,
      hasMoreArticles,
      handleImageError
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_Icon = _sfc_main$1;
  _push(`<!--[--><section class="py-5 bg-dark d-flex my-5" id="topo" data-v-7b0ccee6><div class="container d-flex justify-content-center align-items-center my-5 py-5" data-v-7b0ccee6><div class="row" data-v-7b0ccee6><div class="col text-center text-light my-2" data-v-7b0ccee6><div class="my-2" data-v-7b0ccee6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`P\xE1gina inicial`);
      } else {
        return [
          createTextVNode("P\xE1gina inicial")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` / <span data-v-7b0ccee6>Blog</span></div><h1 class="text-light" data-v-7b0ccee6>Blog</h1><a href="#blog" data-v-7b0ccee6>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "bx bxs-chevrons-down my-3",
    fontSize: "3em",
    color: "#fff"
  }, null, _parent));
  _push(`</a></div></div></div></section><section class="py-5 justify-content-center align-content-center" id="blog" data-v-7b0ccee6><div class="container my-5" data-v-7b0ccee6><div class="row" data-v-7b0ccee6>`);
  if (_ctx.loading && _ctx.articles.length === 0) {
    _push(`<!--[-->`);
    ssrRenderList(4, (n) => {
      _push(`<div class="col-md-3 my-5" data-v-7b0ccee6><div class="card" data-v-7b0ccee6><div class="image-container" data-v-7b0ccee6><div class="skeleton skeleton-img" data-v-7b0ccee6></div></div><div class="card-body" data-v-7b0ccee6><div class="mb-2" data-v-7b0ccee6><div class="skeleton skeleton-category" data-v-7b0ccee6></div></div><div class="skeleton skeleton-title" data-v-7b0ccee6></div></div></div></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.articles, (article) => {
      _push(`<div class="col-sm-3 my-2" data-v-7b0ccee6><div class="card" data-v-7b0ccee6><div class="image-container" data-v-7b0ccee6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `${article.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _ctx.getArticleImage(article))} class="${ssrRenderClass([{ "blurred": !article.imageLoaded }, "img-fluid blur-effect"])}"${ssrRenderAttr("alt", article.titulo)} loading="lazy" data-v-7b0ccee6${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _ctx.getArticleImage(article),
                class: ["img-fluid blur-effect", { "blurred": !article.imageLoaded }],
                alt: article.titulo,
                onLoad: ($event) => article.imageLoaded = true,
                onError: ($event) => _ctx.handleImageError($event),
                loading: "lazy"
              }, null, 42, ["src", "alt", "onLoad", "onError"])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div><div class="card-body" data-v-7b0ccee6><div class="mb-2" data-v-7b0ccee6><span class="article-category" data-v-7b0ccee6>${ssrInterpolate(_ctx.getCategoryTitle(article.category))}</span></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `${article.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(article.titulo)}`);
          } else {
            return [
              createTextVNode(toDisplayString(article.titulo), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div></div>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</div><div class="row my-5" data-v-7b0ccee6><div class="col d-flex align-content-center justify-content-center" data-v-7b0ccee6><button${ssrIncludeBooleanAttr(_ctx.loadingMore || !_ctx.hasMoreArticles) ? " disabled" : ""} class="btn btn-primary" data-v-7b0ccee6>`);
  if (_ctx.loadingMore) {
    _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-7b0ccee6></span>`);
  } else {
    _push(`<span data-v-7b0ccee6>Ver mais artigos</span>`);
  }
  _push(`</button></div></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7b0ccee6"]]);

export { blog as default };
//# sourceMappingURL=blog-DGAYkbPb.mjs.map
