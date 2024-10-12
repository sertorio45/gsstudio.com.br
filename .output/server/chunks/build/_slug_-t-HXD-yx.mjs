import axios from 'axios';
import { defineComponent, ref, watch, useSSRContext } from 'vue';
import { b as useRoute, d as useRouter, e as useSeoMeta, u as useHead, _ as _export_sfc } from './server.mjs';
import { d as defineOgImage } from './defineOgImage-D8QI4VYf.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import '../routes/api/portifolio.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'packrup';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@unhead/schema-org';
import '@unhead/schema-org/vue';
import 'imask';

const _sfc_main = defineComponent({
  name: "ArticleDetail",
  setup() {
    const article = ref(null);
    const loading = ref(true);
    const imageLoaded = ref(false);
    const socialNetworks = ref([]);
    const route = useRoute();
    const router = useRouter();
    const baseURL = "https://str-gsstudio.gsstudio.com.br";
    const email = ref("");
    const isSubmitting = ref(false);
    const success = ref(false);
    const error = ref(false);
    const getArticleImage = (article2) => {
      if (article2.thumb && article2.thumb.url) {
        return new URL(article2.thumb.url, baseURL).href;
      }
      return "https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp";
    };
    const formatDate = (date) => {
      if (!date)
        return "";
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-BR", options);
    };
    const hasThumbnail = (article2) => {
      return article2 && article2.thumb && article2.thumb.url;
    };
    const onImageLoad = () => {
      imageLoaded.value = true;
    };
    const handleImageError = (event) => {
      const img = event.target;
      img.src = "https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp";
    };
    const goBack = () => {
      router.go(-1);
    };
    const share = (network) => {
      if (network.name === "Link") {
        (void 0).clipboard.writeText(network.url);
      } else {
        (void 0).open(network.url, "_blank", "noopener,noreferrer");
      }
    };
    const submitNewsletterForm = async () => {
      isSubmitting.value = true;
      success.value = false;
      error.value = false;
      const webhookUrl = "https://webhook.gsstudio.com.br/webhook/gsstudionewsletter";
      try {
        const response = await axios.post(webhookUrl, { email: email.value }, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (response.status >= 200 && response.status < 300) {
          success.value = true;
          setTimeout(() => {
            email.value = "";
            success.value = false;
          }, 2e3);
        } else {
          error.value = true;
        }
      } catch (err) {
        error.value = true;
      } finally {
        isSubmitting.value = false;
      }
    };
    watch(article, (newArticle) => {
      if (newArticle) {
        const currentUrl = (void 0).location.href;
        const ogImage = hasThumbnail(newArticle) ? getArticleImage(newArticle) : "https://gsstudio.com.br/img/thumb_gsstudio.jpg";
        useSeoMeta({
          title: newArticle.titulo,
          description: newArticle.seo_description,
          keywords: newArticle.seo_keywords,
          ogTitle: newArticle.titulo,
          ogDescription: newArticle.seo_description,
          ogUrl: currentUrl,
          // Define automaticamente a URL atual
          ogSiteName: "GS STUDIO",
          ogLocale: "pt_BR",
          ogImage,
          // Imagem dinâmica
          ogImageAlt: newArticle.titulo || "GS STUDIO - Marketing, comunica\xE7\xE3o e desenvolvimento web",
          ogType: "article"
        });
        defineOgImage({
          url: ogImage,
          width: 1200,
          height: 600,
          alt: newArticle.titulo || "GS STUDIO - Marketing, comunica\xE7\xE3o e desenvolvimento web"
        });
        useHead({
          meta: [
            { name: "robots", content: "index, follow" },
            { name: "canonical", content: currentUrl },
            // Define automaticamente a URL atual
            { property: "og:type", content: "article" },
            { property: "og:title", content: newArticle.titulo },
            { property: "og:description", content: newArticle.seo_description },
            { property: "og:url", content: currentUrl },
            { property: "og:site_name", content: "GS STUDIO" },
            { property: "og:image", content: ogImage },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "600" },
            { property: "og:image:alt", content: newArticle.titulo || "GS STUDIO - Marketing, comunica\xE7\xE3o e desenvolvimento web" }
          ]
        });
      }
    });
    console.log(route.params.slug);
    return {
      article,
      loading,
      imageLoaded,
      email,
      socialNetworks,
      getArticleImage,
      hasThumbnail,
      formatDate,
      onImageLoad,
      goBack,
      share,
      submitNewsletterForm,
      handleImageError,
      isSubmitting,
      success,
      error
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-3af192cf><section class="my-5" id="article-detail" data-v-3af192cf><div class="container my-5" data-v-3af192cf><div class="row" data-v-3af192cf><div class="col-lg-2 col-sm-12 col-md-12 mb-4" data-v-3af192cf><div class="back-fixed" data-v-3af192cf><button class="btn btn-primary-border" data-v-3af192cf>&lt; Voltar</button><div class="social-share d-flex" data-v-3af192cf><!--[-->`);
  ssrRenderList(_ctx.socialNetworks, (network, index) => {
    _push(`<a${ssrRenderAttr("href", network.url)} target="_blank" class="social-icon"${ssrRenderAttr("title", network.name)} data-v-3af192cf><i class="${ssrRenderClass(network.icon)}" data-v-3af192cf></i></a>`);
  });
  _push(`<!--]--></div></div></div><div class="col-sm-7 col-md-12 col-lg-7" data-v-3af192cf>`);
  if (_ctx.loading) {
    _push(`<div data-v-3af192cf><div class="d-flex mb-3" data-v-3af192cf><div class="skeleton skeleton-category me-2" data-v-3af192cf></div><div class="skeleton skeleton-date" data-v-3af192cf></div></div><div class="skeleton skeleton-title mb-3" data-v-3af192cf></div><div class="skeleton skeleton-img mb-3" data-v-3af192cf></div><div class="skeleton skeleton-content mb-3" data-v-3af192cf></div></div>`);
  } else if (_ctx.article) {
    _push(`<div class="content_blog" data-v-3af192cf><div class="mb-3 mx-0" data-v-3af192cf><span class="article-category" data-v-3af192cf>${ssrInterpolate(_ctx.article.category.title)}</span><span class="mx-3 publish_date" data-v-3af192cf>${(_a = _ctx.formatDate(_ctx.article.published_at)) != null ? _a : ""}</span></div><h1 data-v-3af192cf>${ssrInterpolate(_ctx.article.titulo)}</h1><div class="my-4" data-v-3af192cf>`);
    if (_ctx.hasThumbnail(_ctx.article)) {
      _push(`<picture data-v-3af192cf><source${ssrRenderAttr("srcset", _ctx.getArticleImage(_ctx.article))} data-v-3af192cf><img${ssrRenderAttr("src", _ctx.getArticleImage(_ctx.article))} class="${ssrRenderClass([{ "blurred": !_ctx.imageLoaded }, "img-fluid blur-effect"])}"${ssrRenderAttr("alt", _ctx.article.titulo)} loading="lazy" data-v-3af192cf></picture>`);
    } else {
      _push(`<img src="https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp" class="${ssrRenderClass([{ "blurred": !_ctx.imageLoaded }, "img-fluid blur-effect"])}" alt="Default Image" loading="lazy" style="${ssrRenderStyle({ "width": "100%" })}" data-v-3af192cf>`);
    }
    _push(`</div><div data-v-3af192cf>${(_b = _ctx.article.content) != null ? _b : ""}</div></div>`);
  } else {
    _push(`<div data-v-3af192cf><p data-v-3af192cf>Artigo n\xE3o encontrado.</p></div>`);
  }
  _push(`</div><div class="col-sm-12 col-md-12 col-lg-3" data-v-3af192cf><div class="newsletter-cta p-4 bg-light rounded news-fixed my-xl-0 my-4" data-v-3af192cf><h3 data-v-3af192cf>Assine para novas atualiza\xE7\xF5es.</h3><form class="form" data-v-3af192cf><div class="mb-3" data-v-3af192cf><input${ssrRenderAttr("value", _ctx.email)} type="email" class="form-control" id="email" name="email" placeholder="E-mail" required data-v-3af192cf></div><div class="" data-v-3af192cf><button type="submit" class="${ssrRenderClass(["btn", _ctx.isSubmitting ? "btn-secondary" : _ctx.success ? "btn-success" : _ctx.error ? "btn-danger" : "btn-primary"])}"${ssrIncludeBooleanAttr(_ctx.isSubmitting) ? " disabled" : ""} data-v-3af192cf>`);
  if (_ctx.isSubmitting) {
    _push(`<span data-v-3af192cf><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-3af192cf></span> Enviando... </span>`);
  } else if (_ctx.success) {
    _push(`<span data-v-3af192cf><i class="bx bx-check-circle" data-v-3af192cf></i> Sucesso! </span>`);
  } else if (_ctx.error) {
    _push(`<span data-v-3af192cf><i class="bx bx-error" data-v-3af192cf></i> Erro ao enviar! </span>`);
  } else {
    _push(`<span data-v-3af192cf><i class="bx bx-send" data-v-3af192cf></i> Inscrever-se </span>`);
  }
  _push(`</button></div></form></div></div></div></div></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3af192cf"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-t-HXD-yx.mjs.map
