<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter, useAsyncData } from '#app';

defineOgImage({ url: 'https://gsstudio.com.br/img/thumb_gsstudio.jpg', width: 1200, height: 600, alt: 'GS STUDIO - Marketing, comunicação e desenvolvimento web' });

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

const route = useRoute();
const router = useRouter();
const baseURL = import.meta.env.VITE_STRAPI_URL;

// Propriedades de estado
const email = ref<string>('');
const isSubmitting = ref<boolean>(false);
const success = ref<boolean>(false);
const error = ref<boolean>(false);

// Captura o slug da URL
const slug = ref<string | undefined>(route.params.slug as string);

// Busca pelo slug na URL
const { data: article, pending: loading, error: fetchError } = useAsyncData<Article>(
  'fetchArticle',
  async () => {
    if (!slug.value) throw new Error('Slug não fornecido');
    const response = await $fetch<Article[]>(`${baseURL}/articles?slug=${slug.value}`);
    if (response.length > 0) {
      return response[0]; // Retorna o artigo com base no slug
    } else {
      throw new Error('Artigo não encontrado');
    }
  }
);

// Computed properties para SEO
const title = computed(() => article.value?.titulo || 'Artigo');
const description = computed(() => article.value?.seo_description || 'Leia mais sobre marketing, design e desenvolvimento web.');
const ogImage = computed(() => article.value?.thumb?.url || 'https://gsstudio.com.br/img/thumb_gsstudio.jpg');

// Verifica se o slug corresponde ao artigo
const isSlugValid = computed(() => article.value?.slug === slug.value);
if (process.client && !loading.value && !isSlugValid.value) {
  router.push('/404'); // Redireciona para 404 se o slug for inválido
}

// Formata a data de publicação
const formatDate = (date: string) => {
  if (!date) return '';
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('pt-BR', options);
};

// Navegar para a página anterior
const goBack = () => {
  router.go(-1);
};

// Redes sociais dinâmicas
const socialNetworks = computed<SocialNetwork[]>(() => {
  if (!process.client) return [];
  const url = window.location.href;
  return [
    { name: 'Facebook', url: `https://facebook.com/sharer/sharer.php?u=${url}`, icon: 'bx bxl-facebook' },
    { name: 'Twitter', url: `https://twitter.com/intent/tweet?url=${url}`, icon: 'bx bxl-twitter' },
    { name: 'LinkedIn', url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`, icon: 'bx bxl-linkedin' },
    { name: 'WhatsApp', url: `https://wa.me/?text=${url}`, icon: 'bx bxl-whatsapp' },
    { name: 'Email', url: `mailto:?subject=Confira este artigo&body=${url}`, icon: 'bx bx-envelope' },
    { name: 'Link', url: url, icon: 'bx bx-link' },
  ];
});

// Compartilhar nas redes sociais
const share = (network: SocialNetwork) => {
  if (network.name === 'Link') {
    navigator.clipboard.writeText(network.url);
  } else {
    window.open(network.url, '_blank', 'noopener,noreferrer');
  }
};

// Método para enviar o formulário da newsletter
const submitNewsletterForm = async () => {
  isSubmitting.value = true;
  success.value = false;
  error.value = false;
  const webhookUrl = 'https://webhook.gsstudio.com.br/webhook/gsstudionewsletter';

  try {
    const response = await $fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // Configuração segura do cabeçalho
      body: JSON.stringify({ email: email.value }), // Garante que os dados sejam enviados corretamente
    });

    if (response) {
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
</script>


<template>
  <section class="my-5" id="article-detail">
    <!-- SEO meta tags dinâmicas -->
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Meta property="og:title" :content="title" />
      <Meta property="og:description" :content="description" />
      <Meta property="og:image" :content="ogImage" />
    </Head>

    <div class="container my-5">
      <div class="row">
        <div class="col-lg-2 col-sm-12 col-md-12 mb-4">
          <div class="back-fixed">
            <button @click="goBack" class="btn btn-primary-border">< Voltar</button>
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
            <div class="skeleton skeleton-content mb-3"></div>
          </div>
          <div v-else-if="article" class="content_blog">
            <div class="mb-3 mx-0">
              <span class="article-category">{{ article.category.title }}</span>
              <span v-html="formatDate(article.published_at)" class="mx-3 publish_date"></span>
            </div>
            <h1>{{ article.titulo }}</h1>
            <div v-html="article.content" class="my-4"></div>
          </div>
          <div v-else-if="fetchError">
            <p>Erro: {{ fetchError.message }}</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3">
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
</template>

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
    bottom: 694px;
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