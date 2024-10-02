import { defineComponent, ref, useSSRContext } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/index.mjs';
import axios from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/axios/index.js';
import { useRoute, useRouter } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-router/dist/vue-router.node.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr } from 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/h3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/devalue/index.js';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/ssr/dist/index.mjs';
import '../routes/api/portifolio.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/destr/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/klona/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/scule/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ohash/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unenv/runtime/npm/consola.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/ipx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unhead/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/giovannisertorio/Desktop/Sites/gsstudio2/node_modules/imask/esm/index.js';

const _sfc_main = defineComponent({
  name: "ArticleDetail",
  setup() {
    const article = ref(null);
    const loading = ref(true);
    const imageLoaded = ref(false);
    const socialNetworks = ref([]);
    useRoute();
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
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-e4d6d82c><section class="my-5" id="article-detail" data-v-e4d6d82c><div class="container my-5" data-v-e4d6d82c><div class="row" data-v-e4d6d82c><div class="col-lg-2 col-sm-12 col-md-12 mb-4" data-v-e4d6d82c><div class="back-fixed" data-v-e4d6d82c><button class="btn btn-primary-border" data-v-e4d6d82c>&lt; Voltar</button><div class="social-share d-flex" data-v-e4d6d82c><!--[-->`);
  ssrRenderList(_ctx.socialNetworks, (network, index) => {
    _push(`<a${ssrRenderAttr("href", network.url)} target="_blank" class="social-icon"${ssrRenderAttr("title", network.name)} data-v-e4d6d82c><i class="${ssrRenderClass(network.icon)}" data-v-e4d6d82c></i></a>`);
  });
  _push(`<!--]--></div></div></div><div class="col-sm-7 col-md-12 col-lg-7" data-v-e4d6d82c>`);
  if (_ctx.loading) {
    _push(`<div data-v-e4d6d82c><div class="d-flex mb-3" data-v-e4d6d82c><div class="skeleton skeleton-category me-2" data-v-e4d6d82c></div><div class="skeleton skeleton-date" data-v-e4d6d82c></div></div><div class="skeleton skeleton-title mb-3" data-v-e4d6d82c></div><div class="skeleton skeleton-img mb-3" data-v-e4d6d82c></div><div class="skeleton skeleton-content mb-3" data-v-e4d6d82c></div></div>`);
  } else if (_ctx.article) {
    _push(`<div class="content_blog" data-v-e4d6d82c><div class="mb-3 mx-0" data-v-e4d6d82c><span class="article-category" data-v-e4d6d82c>${ssrInterpolate(_ctx.article.category.title)}</span><span class="mx-3 publish_date" data-v-e4d6d82c>${(_a = _ctx.formatDate(_ctx.article.published_at)) != null ? _a : ""}</span></div><h1 data-v-e4d6d82c>${ssrInterpolate(_ctx.article.titulo)}</h1><div class="my-4" data-v-e4d6d82c>`);
    if (_ctx.hasThumbnail(_ctx.article)) {
      _push(`<picture data-v-e4d6d82c><source${ssrRenderAttr("srcset", _ctx.getArticleImage(_ctx.article))} data-v-e4d6d82c><img${ssrRenderAttr("src", _ctx.getArticleImage(_ctx.article))} class="${ssrRenderClass([{ "blurred": !_ctx.imageLoaded }, "img-fluid blur-effect"])}"${ssrRenderAttr("alt", _ctx.article.titulo)} loading="lazy" data-v-e4d6d82c></picture>`);
    } else {
      _push(`<img src="https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp" class="${ssrRenderClass([{ "blurred": !_ctx.imageLoaded }, "img-fluid blur-effect"])}" alt="Default Image" loading="lazy" style="${ssrRenderStyle({ "width": "100%" })}" data-v-e4d6d82c>`);
    }
    _push(`</div><div data-v-e4d6d82c>${(_b = _ctx.article.content) != null ? _b : ""}</div></div>`);
  } else {
    _push(`<div data-v-e4d6d82c><p data-v-e4d6d82c>Artigo n\xE3o encontrado.</p></div>`);
  }
  _push(`</div><div class="col-sm-12 col-md-12 col-lg-3" data-v-e4d6d82c><div class="newsletter-cta p-4 bg-light rounded news-fixed my-xl-0 my-4" data-v-e4d6d82c><h3 data-v-e4d6d82c>Assine para novas atualiza\xE7\xF5es.</h3><form class="form" data-v-e4d6d82c><div class="mb-3" data-v-e4d6d82c><input${ssrRenderAttr("value", _ctx.email)} type="email" class="form-control" id="email" name="email" placeholder="E-mail" required data-v-e4d6d82c></div><div class="" data-v-e4d6d82c><button type="submit" class="${ssrRenderClass(["btn", _ctx.isSubmitting ? "btn-secondary" : _ctx.success ? "btn-success" : _ctx.error ? "btn-danger" : "btn-primary"])}"${ssrIncludeBooleanAttr(_ctx.isSubmitting) ? " disabled" : ""} data-v-e4d6d82c>`);
  if (_ctx.isSubmitting) {
    _push(`<span data-v-e4d6d82c><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-e4d6d82c></span> Enviando... </span>`);
  } else if (_ctx.success) {
    _push(`<span data-v-e4d6d82c><i class="bx bx-check-circle" data-v-e4d6d82c></i> Sucesso! </span>`);
  } else if (_ctx.error) {
    _push(`<span data-v-e4d6d82c><i class="bx bx-error" data-v-e4d6d82c></i> Erro ao enviar! </span>`);
  } else {
    _push(`<span data-v-e4d6d82c><i class="bx bx-send" data-v-e4d6d82c></i> Inscrever-se </span>`);
  }
  _push(`</button></div></form></div></div></div></div></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e4d6d82c"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-DwPKBFhG.mjs.map
