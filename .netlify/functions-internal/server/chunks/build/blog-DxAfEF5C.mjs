import { u as useHead, e as useSeoMeta, a as __nuxt_component_0$1 } from './server.mjs';
import { _ as _sfc_main$1 } from './Icon-CFOBcUeQ.mjs';
import { defineComponent, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { d as defineOgImage } from './defineOgImage-DOY8uik7.mjs';
import { a as useLazyFetch } from './fetch-C_532iVK.mjs';
import '../nitro/nitro.mjs';
import 'lru-cache';
import 'devalue';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'packrup';
import 'nodemailer';
import '@dword-design/functions';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@unhead/schema-org';
import '@unhead/schema-org/vue';
import 'imask';
import 'pinia';
import './asyncData-7owwyAlj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    defineOgImage({ url: "https://gsstudio.com.br/img/thumb_gsstudio.webp", width: 1200, height: 600, alt: "GS STUDIO - Markteting, comunica\xE7\xE3o e desenvolvimento web" });
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
      ogTitle: "Blog",
      ogUrl: "https://gsstudio.com.br/blog",
      ogSiteName: "GS STUDIO",
      ogLocale: "pt_BR"
    });
    const { data: articles, pending, error, refresh } = useLazyFetch("https://painel.gsadmin.app/items/articles?fields=id,title,meta_keywords,meta_description,content,slug,categorie.id,categorie.title_categorie", {
      transform: (response) => response.data.map((article) => {
        var _a;
        return {
          ...article,
          category_title: ((_a = article.categorie) == null ? void 0 : _a.title_categorie) || "Sem categoria"
        };
      })
    }, "$5sKWOZt1n5");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = _sfc_main$1;
      _push(`<!--[--><section class="py-5 bg-dark d-flex my-5" id="topo"><div class="container d-flex justify-content-center align-items-center my-5 py-5"><div class="row"><div class="col text-center text-light my-2"><div class="my-2">`);
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
      _push(` / <span>Blog</span></div><h1 class="text-light">Blog</h1><a href="#blog">`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "bx bxs-chevrons-down my-3",
        fontSize: "3em",
        color: "#fff"
      }, null, _parent));
      _push(`</a></div></div></div></section><section class="my-5 py-5 justify-content-center align-content-center" id="blog"><div class="container my-5"><div class="row">`);
      if (unref(pending)) {
        _push(`<!--[-->`);
        ssrRenderList(4, (n) => {
          _push(`<div class="col-md-3 my-5"><div class="card"><div class="card-body"><div class="mb-2"><div class="skeleton skeleton-category"></div></div><div class="skeleton skeleton-title"></div></div></div></div>`);
        });
        _push(`<!--]-->`);
      } else if (unref(articles) && unref(articles).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(articles), (article) => {
          _push(`<div class="col-sm-3 my-2"><div class="card"><div class="card-body"><div class="mb-2"><span class="article-category">${ssrInterpolate(article.category_title)}</span></div><a${ssrRenderAttr("href", `/${article.slug}`)}>${ssrInterpolate(article.title)}</a></div></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="col text-center my-5"><p class="text-muted">Nenhum artigo encontrado.</p></div>`);
      }
      _push(`</div><div class="row my-3"><div class="col d-flex align-content-center justify-content-center"><button${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""} class="btn btn-primary">`);
      if (unref(pending)) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
      } else {
        _push(`<span>Ver mais artigos</span>`);
      }
      _push(`</button></div></div></div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blog-DxAfEF5C.mjs.map
