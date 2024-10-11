import { u as useHead, e as useSeoMeta, _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { _ as _sfc_main$1 } from "./Icon-5pRBvot5.js";
import { defineComponent, ref, computed, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { d as defineOgImage } from "./defineOgImage-D8QI4VYf.js";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "destr";
import "klona";
import "devalue";
import "cookie-es";
import "ohash";
import "@gtm-support/vue-gtm";
import "@unhead/schema-org";
import "@unhead/schema-org/vue";
import "imask";
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
    defineOgImage({ url: "https://gsstudio.com.br/img/thumb_gsstudio.jpg", width: 1200, height: 600, alt: "GS STUDIO - Markteting, comunicação e desenvolvimento web" });
    useHead({
      meta: [
        { name: "lang", content: "pt-BR" },
        { name: "language", content: "pt-BR" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "canonical", content: "https://www.gsstudio.com.br/blog" },
        { name: "keywords", content: "marketing digital, criação de sites, otimização de sites (SEO), Google Ads, campanhas online, agência digital, agência de marketing, lojas virtuais, e-commerce, gestão de redes sociais, desenvolvimento web, design responsivo, tráfego pago, branding, identidade visual, marketing para empresas, marketing para pequenas empresas, marketing em Sertãozinho, marketing em Ribeirão Preto, SEO local, social media marketing, estratégia de marketing digital, anúncios online, agência de SEO, criação de conteúdo, marketing de conteúdo, hospedagem de sites, otimização de conversão (CRO), email marketing, automação de marketing, consultoria em marketing digital, campanhas pagas no Google, performance digital, WordPress, criação de blogs, gestão de tráfego, otimização de desempenho do site, desenvolvimento de sistemas web, produção audiovisual, estratégias de marketing SP, agência de marketing em SP." },
        { name: "canonical", content: "https://www.gsstudio.com.br/blog" }
      ]
    });
    useSeoMeta({
      title: "Blog",
      description: "Artigos para você aprender, novidades sobre tecnologia, marketing e toda área de comunicação on e offline.",
      ogTitle: "Blog",
      ogDescription: "Artigos para você aprender, novidades sobre tecnologia, marketing e toda área de comunicação on e offline.",
      ogUrl: "https://gsstudio.com.br/blog",
      ogSiteName: "GS STUDIO",
      ogLocale: "pt_BR"
    });
    const loadMoreArticles = () => {
      if (loadingMore.value || !hasMoreArticles.value) return;
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
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Icon = _sfc_main$1;
  _push(`<!--[--><section class="py-5 bg-dark d-flex my-5" id="topo" data-v-7b0ccee6><div class="container d-flex justify-content-center align-items-center my-5 py-5" data-v-7b0ccee6><div class="row" data-v-7b0ccee6><div class="col text-center text-light my-2" data-v-7b0ccee6><div class="my-2" data-v-7b0ccee6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Página inicial`);
      } else {
        return [
          createTextVNode("Página inicial")
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
export {
  blog as default
};
//# sourceMappingURL=blog-DGAYkbPb.js.map