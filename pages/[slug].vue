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
                  <source :srcset="getArticleImage(article)" @load="onImageLoad">
                  <NuxtImg 
                    :src="getArticleImage(article)" 
                    class="img-fluid blur-effect" 
                    :class="{ 'blurred': !imageLoaded }" 
                    :alt="article.titulo" 
                    @load="onImageLoad" 
                    lazy="loading" 
                  />
                </picture>
                <NuxtImg 
                  v-else 
                  src="/thumb_blog_gsstudio.webp" 
                  class="img-fluid blur-effect" 
                  :class="{ 'blurred': !imageLoaded }" 
                  alt="Default Image" 
                  lazy="loading" 
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
              <form @submit.prevent="submitForm" class="form">
                <div class="mb-3">
                  <input v-model="email" type="email" class="form-control" id="email" name="email" placeholder="E-mail" required>
                </div>
                <button type="submit" class="btn btn-primary">Inscrever-se</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

interface Article {
  id: number;
  slug: string;
  titulo: string;
  seo_description: string;
  seo_keywords: string;  // Adicionando campo para keywords
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

export default defineComponent({
  name: 'ArticleDetail',
  setup() {
    const article = ref<Article | null>(null);
    const loading = ref(true);
    const imageLoaded = ref(false); // Controle de carregamento da imagem
    const route = useRoute();
    const router = useRouter();
    const baseURL = import.meta.env.VITE_STRAPI_URL;
    const email = ref(''); // Campo para armazenar o email do formulário

    const socialNetworks = ref([
      { name: 'Facebook', url: `https://facebook.com/sharer/sharer.php?u=${window.location.href}`, icon: 'bx bxl-facebook' },
      { name: 'Twitter', url: `https://twitter.com/intent/tweet?url=${window.location.href}`, icon: 'bx bxl-twitter' },
      { name: 'LinkedIn', url: `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`, icon: 'bx bxl-linkedin' },
      { name: 'WhatsApp', url: `https://wa.me/?text=${window.location.href}`, icon: 'bx bxl-whatsapp' },
      { name: 'Email', url: `mailto:?subject=Confira este artigo&body=${window.location.href}`, icon: 'bx bx-envelope' },
      { name: 'Link', url: window.location.href, icon: 'bx bx-link' },
    ]);

    const fetchArticleBySlug = async (slug: string) => {
      try {
        const response = await axios.get(`${baseURL}/articles?slug=${slug}`);
        if (response.data.length) {
          article.value = response.data[0];
          updateMetaTags(); // Atualiza as meta tags SEO após o artigo ser carregado
        } else {
          console.error('Artigo não encontrado');
        }
      } catch (error: unknown) {  
        if (axios.isAxiosError(error)) {
          console.error('Erro ao buscar o artigo:', error.response ? error.response.data : error.message);
        } else {
          console.error('Erro inesperado:', error);
        }
      } finally {
        loading.value = false;
      }
    };

    const getArticleImage = (article: Article) => {
      if (article.thumb && article.thumb.url) {
        return new URL(article.thumb.url, baseURL).href;
      }
      return '/thumb_blog_gsstudio.webp'; // Substitua por uma URL de imagem padrão
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
      imageLoaded.value = true;  // A imagem foi carregada, remova o blur
    };

    const goBack = () => {
      router.go(-1);
    };

    const share = (network: { name: string, url: string }) => {
      if (network.name === 'Link') {
        navigator.clipboard.writeText(network.url).then(() => {
          alert('Link copiado para a área de transferência!');
        });
      } else {
        window.open(network.url, '_blank', 'noopener,noreferrer');
      }
    };

    const submitForm = async () => {
      const webhookUrl = 'https://webhook.gsstudio.com.br/webhook/e99c7f8d-d097-4bc3-8052-3b492824d00b';
      try {
        const response = await axios.post(webhookUrl, { email: email.value }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        alert('Formulário enviado com sucesso!');
        email.value = ''; // Limpa o campo de email após o envio
      } catch (error) {
        alert('Erro ao enviar o formulário.');
      }
    };

    // Atualiza as meta tags dinamicamente com os dados do artigo
    const updateMetaTags = () => {
      if (article.value) {
        useHead({
          title: article.value.titulo,
          meta: [
            { name: 'description', content: article.value.seo_description },
            { name: 'keywords', content: article.value.seo_keywords },  // Adicionando meta tag de keywords
            { property: 'og:title', content: article.value.titulo },
            { property: 'og:description', content: article.value.seo_description },
            { property: 'og:image', content: getArticleImage(article.value) },
            { property: 'og:type', content: 'article' },
            { property: 'og:url', content: window.location.href },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: article.value.titulo },
            { name: 'twitter:description', content: article.value.seo_description },
            { name: 'twitter:image', content: getArticleImage(article.value) },
          ],
          link: [{ rel: 'canonical', href: window.location.href }],
        });
      }
    };

    onMounted(async () => {
      const slug = route.params.slug as string;
      await fetchArticleBySlug(slug);
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
      submitForm,
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
