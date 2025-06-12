<script setup lang="ts">
import { computed, watchEffect } from 'vue'

interface Article {
  id: string;
  slug: string;
  title: string;
  description?: string;
  content: string;
  category_id: string;
  category_title?: string;
  created_at: string;
  updated_at: string;
  publish_status: string;
  tenant_id: string;
}

const route = useRoute();
const router = useRouter();

// Busca otimizada: busca apenas o artigo específico da API
const { data: article, pending: loading, error } = await useAsyncData<Article | null>(
  `article-${route.params.slug}`,
  async () => {
    try {
      return await $fetch<Article>(`/api/articles/${route.params.slug}`)
    } catch (err) {
      return null
    }
  },
  {
    watch: [() => route.params.slug],
    server: true,
    default: () => null
  }
)

// Computed para categoria
const categoryTitle = computed(() => article.value?.category_title || "Sem categoria");

// SEO Meta Tags - renderizadas no servidor
const canonicalUrl = computed(() =>
  `${useRuntimeConfig().public.baseUrl || 'https://gsstudio.com.br'}${route.fullPath}`
);
const getTitle = computed(() => article.value?.title || 'Artigo');
const getDescription = computed(() => article.value?.description || '');

function setSeoMeta() {
  if (!article.value) return;
  useSeoMeta({
    title: getTitle,
    description: getDescription,
    robots: 'index, follow',
    ogTitle: getTitle,
    ogDescription: getDescription,
    ogType: 'article',
    ogUrl: canonicalUrl,
    ogLocale: 'pt_BR',
    ogImageAlt: getTitle,
    twitterCard: 'summary',
    twitterTitle: getTitle,
    twitterDescription: getDescription,
    fbAppId: '603230818880308'
  });
}

// SSR: seta meta ao carregar
if (process.server) {
  setSeoMeta();
}

// Client: reativa meta ao trocar de artigo dinamicamente
if (process.client) {
  watchEffect(() => {
    if (article.value) setSeoMeta();
  });
}

interface SocialNetwork {
  name: string;
  url: string;
  icon: string;
}

const socialNetworks = computed<SocialNetwork[]>(() => {
  const url = canonicalUrl.value;
  return [
    { name: "Facebook", url: `https://facebook.com/sharer/sharer.php?u=${url}`, icon: "bx bxl-facebook" },
    { name: "Twitter", url: `https://twitter.com/intent/tweet?url=${url}`, icon: "bx bxl-twitter" },
    { name: "LinkedIn", url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`, icon: "bx bxl-linkedin" },
    { name: "WhatsApp", url: `https://wa.me/?text=${url}`, icon: "bx bxl-whatsapp" },
    { name: "Email", url: `mailto:?subject=Confira este artigo&body=${url}`, icon: "bx bx-envelope" },
    { name: "Link", url, icon: "bx bx-link" },
  ];
});

const share = (network: SocialNetwork) => {
  if (process.server) return;

  try {
    if (network.name === "Link") {
      navigator.clipboard.writeText(network.url);
      alert("Link copiado para a área de transferência!");
    } else {
      const width = 600, height = 400;
      const left = (window.innerWidth - width) / 2;
      const top = (window.innerHeight - height) / 2;
      window.open(
        network.url,
        "_blank",
        `width=${width},height=${height},top=${top},left=${left}`
      );
    }
  } catch (err) {
    console.error("Erro ao compartilhar:", err);
  }
};

const goBack = () => {
  if (process.client && window.history.length > 1) {
    router.back();
  } else {
    router.push('/blog');
  }
};

const formatDate = (date: string | null | undefined) => {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return new Date().toLocaleDateString("pt-BR");
  }
};

</script>
<template>
  <Head>
    <Title>
      {{ article?.title || 'Artigo' }}
    </Title>
  </Head>
  <section class="my-5" id="article-detail">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-2 col-sm-12 col-md-12 mb-4">
          <div class="back-fixed">
            <button @click="goBack" class="btn btn-primary-border">Voltar</button>
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

        <div class="col-sm-7 col-md-12 col-lg-9">
          <!-- Estados de carregamento e erro -->
          <div v-if="loading" class="loading-state">
            <div class="d-flex mb-3">
              <div class="skeleton skeleton-category me-2"></div>
              <div class="skeleton skeleton-date"></div>
            </div>
            <div class="skeleton skeleton-title mb-3"></div>
            <div class="skeleton skeleton-content mb-3"></div>
          </div>

          <div v-else-if="error" class="error-state">
            <div class="alert alert-danger">
              <h4>Erro ao carregar o artigo</h4>
              <p>{{ error }}</p>
              <button @click="goBack" class="btn btn-primary">Voltar</button>
            </div>
          </div>

          <div v-else-if="article" class="content_blog">
            <div class="mb-3 mx-0">
              <span class="article-category">{{ categoryTitle }}</span>
              <span v-html="formatDate(article.created_at)" class="mx-3 publish_date"></span>
            </div>
            <h1>{{ article.title }}</h1>
            <div v-html="article.content" class="my-4"></div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- Section de contato condicional -->
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 align-content-center mb-5 sm-mb-5">
          <h1>Fale agora conosco</h1>
          <p>Entre em contato conosco para tirar suas dúvidas ou solicitar um orçamento.</p>
        </div>
        <div class="col-md-6 col-sm-12">
          <Form />
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

/* Skeleton Loading */
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

/* Blur Effect */
.blur-effect {
  transition: filter 0.5s ease;
}
.blurred {
  filter: blur(20px);
}

/* Social Icons */
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

/* Breakpoints */

/* Extra pequeno (até 575px) */
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
    display: flex;
    position: fixed !important;
    z-index: 9998 !important;
    width: 100%;
    background-color: #fff;
    top: 60px;
    padding: 20px;
    gap: 15px;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
  }
}

/* Pequeno (576px - 767px) */
@media (min-width: 576px) {
  .publish_date {
    font-size: 1.1rem !important;
  }
  .social-links {
    display: none;
  }
  .back-fixed {
    display: flex;
    position: fixed !important;
    z-index: 9998 !important;
    width: 100%;
    background-color: #fff;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px;
    gap: 10px;
  }
  .social-share {
    display: flex;
    gap: 0.3em;
  }
}

/* Médio (768px - 1199px) */
@media (min-width: 768px) {
  .back-fixed {
    display: flex;
    position: fixed !important;
    z-index: 9998 !important;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    gap: 10px;
    top: 67px;
    justify-content: center;
    align-items: center;
    }
  }

  
@media (min-width: 1024px) {
  .back-fixed {
    display: flex;
    position: fixed !important;
    z-index: 9998 !important;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    gap: 10px;
    top: 86px;
    justify-content: center;
    align-items: center;
    }
  }

/* Grande (1200px +) */
@media (min-width: 1200px) {
  .back-fixed {
    display: block;
    position: fixed !important;
    z-index: 9998 !important;
    width: 100%;
    background-color: transparent;
    padding: 0;
    top: 130px;
    left: 68px;
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

/* 4k (2560px +) */
@media (min-width: 1920px) {
  .back-fixed {
    display: block;
    position: fixed !important;
    z-index: 9998 !important;
    width: 100%;
    background-color: transparent;
    padding: 0;
    top: 130px;
    left: 250px;
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