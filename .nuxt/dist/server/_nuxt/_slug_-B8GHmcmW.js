import { defineComponent, ref, watch, useSSRContext } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import "hookable";
import { b as useSeoMeta, u as useHead, _ as _export_sfc } from "../server.mjs";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "ufo";
import "cookie-es";
import "ohash";
import "@gtm-support/vue-gtm";
import "@unhead/schema-org";
import "@unhead/schema-org/vue";
import "imask";
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
      var _a;
      return ((_a = article2.thumb) == null ? void 0 : _a.url) ? new URL(article2.thumb.url, baseURL).href : "https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp";
    };
    const formatDate = (date) => {
      if (!date) return "";
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-BR", options);
    };
    const hasThumbnail = (article2) => {
      var _a;
      return !!((_a = article2.thumb) == null ? void 0 : _a.url);
    };
    const onImageLoad = () => {
      imageLoaded.value = true;
    };
    const handleImageError = (event) => {
      const img = event.target;
      img.src = "https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp";
    };
    const goBack = () => {
      if ((void 0).history.length > 1) {
        router.back();
      } else {
        router.push("/");
      }
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
        if (response.status >= 200) {
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
      var _a;
      if (newArticle) {
        useSeoMeta({
          title: newArticle.titulo,
          description: newArticle.seo_description,
          keywords: newArticle.seo_keywords,
          ogTitle: newArticle.titulo,
          ogDescription: newArticle.seo_description,
          ogUrl: `https://www.gsstudio.com.br/blog/${newArticle.slug}`,
          ogSiteName: "GS STUDIO",
          ogImage: ((_a = newArticle.thumb) == null ? void 0 : _a.url) ? getArticleImage(newArticle) : "https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp",
          ogLocale: "pt_BR"
        });
        useHead({
          meta: [
            { name: "robots", content: "index, follow" },
            { name: "canonical", content: `https://www.gsstudio.com.br/${newArticle.slug}` }
          ]
        });
      }
    });
    route.params.slug;
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
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-4a7dc1d7><section class="my-5" id="article-detail" data-v-4a7dc1d7><div class="container my-5" data-v-4a7dc1d7><div class="row" data-v-4a7dc1d7><div class="col-lg-2 col-sm-12 col-md-12 mb-4" data-v-4a7dc1d7><div class="back-fixed" data-v-4a7dc1d7><button class="btn btn-primary-border" data-v-4a7dc1d7>&lt; Voltar</button><div class="social-share d-flex" data-v-4a7dc1d7><!--[-->`);
  ssrRenderList(_ctx.socialNetworks, (network, index) => {
    _push(`<a${ssrRenderAttr("href", network.url)} target="_blank" class="social-icon"${ssrRenderAttr("title", network.name)} data-v-4a7dc1d7><i class="${ssrRenderClass(network.icon)}" data-v-4a7dc1d7></i></a>`);
  });
  _push(`<!--]--></div></div></div><div class="col-sm-7 col-md-12 col-lg-7" data-v-4a7dc1d7>`);
  if (_ctx.loading) {
    _push(`<div data-v-4a7dc1d7><div class="d-flex mb-3" data-v-4a7dc1d7><div class="skeleton skeleton-category me-2" data-v-4a7dc1d7></div><div class="skeleton skeleton-date" data-v-4a7dc1d7></div></div><div class="skeleton skeleton-title mb-3" data-v-4a7dc1d7></div><div class="skeleton skeleton-img mb-3" data-v-4a7dc1d7></div><div class="skeleton skeleton-content mb-3" data-v-4a7dc1d7></div></div>`);
  } else if (_ctx.article) {
    _push(`<div class="content_blog" data-v-4a7dc1d7><div class="mb-3 mx-0" data-v-4a7dc1d7><span class="article-category" data-v-4a7dc1d7>${ssrInterpolate(_ctx.article.category.title)}</span><span class="mx-3 publish_date" data-v-4a7dc1d7>${_ctx.formatDate(_ctx.article.published_at) ?? ""}</span></div><h1 data-v-4a7dc1d7>${ssrInterpolate(_ctx.article.titulo)}</h1><div class="my-4" data-v-4a7dc1d7>`);
    if (_ctx.hasThumbnail(_ctx.article)) {
      _push(`<picture data-v-4a7dc1d7><source${ssrRenderAttr("srcset", _ctx.getArticleImage(_ctx.article))} data-v-4a7dc1d7><img${ssrRenderAttr("src", _ctx.getArticleImage(_ctx.article))} class="${ssrRenderClass([{ "blurred": !_ctx.imageLoaded }, "img-fluid blur-effect"])}"${ssrRenderAttr("alt", _ctx.article.titulo)} loading="lazy" data-v-4a7dc1d7></picture>`);
    } else {
      _push(`<img src="https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp" class="${ssrRenderClass([{ "blurred": !_ctx.imageLoaded }, "img-fluid blur-effect"])}" alt="Default Image" loading="lazy" style="${ssrRenderStyle({ "width": "100%" })}" data-v-4a7dc1d7>`);
    }
    _push(`</div><div data-v-4a7dc1d7>${_ctx.article.content ?? ""}</div></div>`);
  } else {
    _push(`<div data-v-4a7dc1d7><p data-v-4a7dc1d7>Artigo não encontrado.</p></div>`);
  }
  _push(`</div><div class="col-sm-12 col-md-12 col-lg-3" data-v-4a7dc1d7><div class="newsletter-cta p-4 bg-light rounded news-fixed my-xl-0 my-4" data-v-4a7dc1d7><h3 data-v-4a7dc1d7>Assine para novas atualizações.</h3><form class="form" data-v-4a7dc1d7><div class="mb-3" data-v-4a7dc1d7><input${ssrRenderAttr("value", _ctx.email)} type="email" class="form-control" id="email" name="email" placeholder="E-mail" required data-v-4a7dc1d7></div><div data-v-4a7dc1d7><button type="submit" class="${ssrRenderClass(["btn", _ctx.isSubmitting ? "btn-secondary" : _ctx.success ? "btn-success" : _ctx.error ? "btn-danger" : "btn-primary"])}"${ssrIncludeBooleanAttr(_ctx.isSubmitting) ? " disabled" : ""} data-v-4a7dc1d7>`);
  if (_ctx.isSubmitting) {
    _push(`<span data-v-4a7dc1d7><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-4a7dc1d7></span> Enviando... </span>`);
  } else if (_ctx.success) {
    _push(`<span data-v-4a7dc1d7><i class="bx bx-check-circle" data-v-4a7dc1d7></i> Sucesso! </span>`);
  } else if (_ctx.error) {
    _push(`<span data-v-4a7dc1d7><i class="bx bx-error" data-v-4a7dc1d7></i> Erro ao enviar! </span>`);
  } else {
    _push(`<span data-v-4a7dc1d7><i class="bx bx-send" data-v-4a7dc1d7></i> Inscrever-se </span>`);
  }
  _push(`</button></div></form></div></div></div></div></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4a7dc1d7"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-B8GHmcmW.js.map
