<template>
  <main>
    <section class="my-5" id="article-detail">
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-2 col-sm-12 col-md-12 mb-4">
            <div class="back-fixed">
              <button @click="goBack" class="btn btn-primary-border">< Voltar</button>
              <!-- Ícones de Compartilhamento Social -->
              <div class="social-share d-flex">
                <a
                  v-for="(network, index) in socialNetworks"
                  :key="index"
                  :href="network.url"
                  target="_blank"
                  class="social-icon"
                  :title="network.name"
                  @click.prevent="share(network)"
                >
                  <i :class="network.icon"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-7 col-md-12 col-lg-7">
            <div v-if="loading">
              <div class="d-flex mb-3">
                <div class="skeleton skeleton-category me-2"></div>
                <div class="skeleton skeleton-date"></div>
              </div>
              <div class="skeleton skeleton-title mb-3"></div>
              <div class="skeleton skeleton-img mb-3"></div>
              <div class="skeleton skeleton-content mb-3"></div>
            </div>
            <div v-else-if="article" class="content_blog">
              <div class="mb-3 mx-0">
                <span class="article-category">{{ article.category.title }}</span>
                <span v-html="formatDate(article.published_at)" class="mx-3 publish_date"></span>
              </div>
              <h1>{{ article.titulo }}</h1>
              <div class="my-4">
                <picture v-if="hasThumbnail(article)">
                  <source :srcset="getArticleImage(article)" @load="onImageLoad" />
                  <img 
                    :src="getArticleImage(article)" 
                    class="img-fluid blur-effect" 
                    :class="{ 'blurred': !imageLoaded }" 
                    :alt="article.titulo" 
                    @load="onImageLoad" 
                    @error="handleImageError" 
                    loading="lazy" 
                  />
                </picture>
                <img 
                  v-else 
                  src="https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp" 
                  class="img-fluid blur-effect" 
                  :class="{ 'blurred': !imageLoaded }" 
                  alt="Default Image" 
                  loading="lazy" 
                  @load="onImageLoad" 
                  style="width: 100%;" 
                />
              </div>
              <div v-html="article.content"></div>
            </div>
            <div v-else>
              <p>Artigo não encontrado.</p>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-3">
            <!-- Formulário de Newsletter -->
            <div class="newsletter-cta p-4 bg-light rounded news-fixed my-xl-0 my-4">
              <h3>Assine para novas atualizações.</h3>
              <form @submit.prevent="submitNewsletterForm" class="form">
                <div class="mb-3">
                  <input v-model="email" type="email" class="form-control" id="email" name="email" placeholder="E-mail" required>
                </div>
                <div class="">
                  <button
                    type="submit"
                    :class="['btn', isSubmitting ? 'btn-secondary' : success ? 'btn-success' : error ? 'btn-danger' : 'btn-primary']"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting">
                      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Enviando...
                    </span>
                    <span v-else-if="success">
                      <i class="bx bx-check-circle"></i> Sucesso!
                    </span>
                    <span v-else-if="error">
                      <i class="bx bx-error"></i> Erro ao enviar!
                    </span>
                    <span v-else>
                      <i class="bx bx-send"></i> Inscrever-se
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import axios from 'axios';

interface Article {
  id: number;
  slug: string;
  titulo: string;
  seo_description: string;
  seo_keywords: string;
  thumb?: {
    url?: string;
  };
  published_at: string;
  category: {
    id: number;
    title: string;
  };
  content: string;
}

interface SocialNetwork {
  name: string;
  url: string;
  icon: string;
}

export default defineComponent({
  name: 'ArticleDetail',
  setup() {
    const article = ref<Article | null>(null);
    const loading = ref(true);
    const imageLoaded = ref(false);
    const socialNetworks = ref<SocialNetwork[]>([]);
    const route = useRoute();
    const router = useRouter();
    const baseURL = import.meta.env.VITE_STRAPI_URL;
    const email = ref('');

    const isSubmitting = ref(false);
    const success = ref(false);
    const error = ref(false);

    const fetchArticleBySlug = async (slug: string) => {
      try {
        const response = await axios.get(`${baseURL}/articles?slug=${slug}`);
        if (response.data.length) {
          article.value = response.data[0];
        }
      } catch (err) {
        console.error('Erro ao buscar o artigo:', err);
      } finally {
        loading.value = false;
      }
    };

    const getArticleImage = (article: Article) => {
      if (article.thumb && article.thumb.url) {
        return new URL(article.thumb.url, baseURL).href;
      }
      return 'https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp'; // Substitua por uma URL de imagem padrão
    };

    const formatDate = (date: string) => {
      if (!date) return '';
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('pt-BR', options);
    };

    const hasThumbnail = (article: Article) => {
      return article && article.thumb && article.thumb.url;
    };

    const onImageLoad = () => {
      imageLoaded.value = true;
    };

    const handleImageError = (event: Event) => {
      const img = event.target as HTMLImageElement;
      img.src = 'https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp';
    };

    const goBack = () => {
      router.go(-1);
    };

    const share = (network: SocialNetwork) => {
      if (network.name === 'Link') {
        navigator.clipboard.writeText(network.url);
      } else {
        window.open(network.url, '_blank', 'noopener,noreferrer');
      }
    };

    const submitNewsletterForm = async () => {
      isSubmitting.value = true;
      success.value = false;
      error.value = false;
      const webhookUrl = 'https://webhook.gsstudio.com.br/webhook/gsstudionewsletter';
      try {
        const response = await axios.post(webhookUrl, { email: email.value }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status >= 200 && response.status < 300) {
          success.value = true;
          setTimeout(() => {
            email.value = '';
            success.value = false;
          }, 2000);
        } else {
          error.value = true;
        }
      } catch (err) {
        error.value = true;
      } finally {
        isSubmitting.value = false;
      }
    };


// Atualiza os metadados de SEO quando o artigo for carregado
watch(article, (newArticle) => {
  if (newArticle) {
    const currentUrl = window.location.href; // Pega a URL atual da página

    useSeoMeta({
      title: newArticle.titulo,
      description: newArticle.seo_description,
      keywords: newArticle.seo_keywords,
      ogTitle: newArticle.titulo,
      ogDescription: newArticle.seo_description,
      ogUrl: currentUrl, // Define automaticamente a URL atual
      ogSiteName: 'GS STUDIO',
      ogImage: newArticle.thumb?.url
        ? getArticleImage(newArticle)
        : 'https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp',
      ogLocale: 'pt_BR',
    });

    useHead({
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'canonical', content: currentUrl }, // Define automaticamente a URL atual
      ],
    });
  }
});


    onMounted(async () => {
      const slug = route.params.slug as string;
      await fetchArticleBySlug(slug);

      if (process.client) {
        socialNetworks.value = [
          { name: 'Facebook', url: `https://facebook.com/sharer/sharer.php?u=${window.location.href}`, icon: 'bx bxl-facebook' },
          { name: 'Twitter', url: `https://twitter.com/intent/tweet?url=${window.location.href}`, icon: 'bx bxl-twitter' },
          { name: 'LinkedIn', url: `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`, icon: 'bx bxl-linkedin' },
          { name: 'WhatsApp', url: `https://wa.me/?text=${window.location.href}`, icon: 'bx bxl-whatsapp' },
          { name: 'Email', url: `mailto:?subject=Confira este artigo&body=${window.location.href}`, icon: 'bx bx-envelope' },
          { name: 'Link', url: window.location.href, icon: 'bx bx-link' },
        ];
      }
    });

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
      error,
    };
  },
});
</script>


<style scoped>
.content_blog h2 {
  font-size: 20px !important;
}

#article-detail {
  padding-top: 1.9rem;
}

.btn-primary-border {
  border: 1px solid var(--bs-primary);
  background: transparent;
  color: var(--bs-primary);
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton {
  background: linear-gradient(to right, #e0e0e0 0%, #f8f8f8 50%, #e0e0e0 100%);
  background-size: 200% 100%;
  border-radius: 4px;
  margin: 10px 0;
  animation: shimmer 1.5s infinite;
}

.skeleton-img {
  width: 100%;
  height: 400px;
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-title {
  height: 30px;
  width: 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-category {
  height: 20px;
  width: 30%;
  animation: shimmer 1.5s infinite;
}

.skeleton-date {
  height: 20px;
  width: 20%;
  animation: shimmer 1.5s infinite;
}

.skeleton-content {
  height: 100px;
  width: 100%;
  animation: shimmer 1.5s infinite;
}

.blur-effect {
  transition: filter 0.5s ease;
}
.blurred {
  filter: blur(20px);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #000;
  color: #fff !important;
  font-size: 14px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.social-icon:hover {
  background-color: var(--bs-secondary);
  color: #fff;
}

@media (max-width: 575px) {
  .publish_date {
    font-size: 0.9rem !important;
  }
  .social-links {
    display: none;
  }
  .social-share {
    gap: 0.3em;
  }
  .back-fixed {
    display: inline-flex;
    position: fixed !important;
    z-index: 9998 !important;
    width: 100%;
    background-color: #fff;
    bottom: 510px;
    padding-top: 25px;
    padding-bottom: 25px;
    gap: 10px;
  }
}

@media (min-width: 576px) {
  .publish_date {
    font-size: 1.1rem !important;
  }
  .social-links {
    display: none;
  }
  .back-fixed {
    display: inline-flex;
    position: fixed !important;
    z-index: 9998 !important;
    width: 100%;
    background-color: #fff;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: -60px;
    gap: 10px;
  }
  .social-share {
    display: inline-flex;
    gap: 0.3em;
  }
}

@media (min-width: 1200px) {
  .back-fixed {
    display: block;
    position: fixed !important;
    z-index: 9998 !important;
    width: 100%;
    background-color: transparent;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 0px;
  }

  .news-fixed {
    position: fixed;
    width: 20vw;
  }
  .social-share {
    display: flex;
    gap: 0.3em;
    margin-top: 0.5em;
  }
  .social-icon {
    width: 25px;
    height: 25px;
    padding: 0.18em;
    margin-top: 10px;
  }
}
</style>
