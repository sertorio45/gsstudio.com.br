<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter, useFetch } from "#app";

// Captura o slug da URL
const route = useRoute();
const router = useRouter();
const slug = computed(() => route.params.slug as string);

// Verifica se o slug está pronto
const isSlugReady = computed(() => !!slug.value);

// Busca o artigo com SSR habilitado usando useFetch
const { data: article, pending: isLoading, error: fetchError } = useFetch('https://painel.gsadmin.app/items/articles', {
  key: `article-${slug.value}`,
  params: {
    fields: "id,title,meta_keywords,meta_description,content,slug,categorie.id,categorie.title_categorie",
    "filter[slug][_eq]": slug.value,
  },
  method: "GET",
  headers: { "Content-Type": "application/json" },
  server: true,
  lazy: false,
  transform: (response: any) => {
    return response?.data?.length ? response.data[0] : null;
  },
});

// Definir título da categoria dinamicamente
const categoryTitle = computed(() => article.value?.categorie?.title_categorie || "Sem categoria");

// Computed properties para SEO
const title = computed(() => article.value?.title);
const description = computed(() => article.value?.meta_description);
const keywords = computed(() => article.value?.meta_keywords);

// Configuração de imagem Open Graph
defineOgImageComponent("NuxtSeo", {
  title: 'Blog',
  description: description.value,
  colorMode: "dark",
  theme: "#1e00ff",
});

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: keywords },
    { name: "canonical", content: `https://gsstudio.com.br/${slug.value}` },
  ],
});

useSeoMeta({
  title,
  description,
  keywords,
  ogLocale: 'pt-br',
  ogImageAlt: title,
  ogTitle: title,
  ogType: "article",
  ogUrl: `https://gsstudio.com.br/${slug.value}`,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
  twitterCard: 'summary',
  fbAppId: '603230818880308',
});

// Voltar com refresh
const goBack = () => {
  router.back();
  setTimeout(() => refreshNuxtData("articles"), 200);
};

// Compartilhamento
const socialNetworks = computed(() => {
  if (process.server) return [];
  const url = process.client ? window.location.href : "";
  return [
    { name: "Facebook", url: `https://facebook.com/sharer/sharer.php?u=${url}`, icon: "bx bxl-facebook" },
    { name: "Twitter", url: `https://twitter.com/intent/tweet?url=${url}`, icon: "bx bxl-twitter" },
    { name: "LinkedIn", url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`, icon: "bx bxl-linkedin" },
    { name: "WhatsApp", url: `https://wa.me/?text=${url}`, icon: "bx bxl-whatsapp" },
    { name: "Email", url: `mailto:?subject=Confira este artigo&body=${url}`, icon: "bx bx-envelope" },
    { name: "Link", url: url, icon: "bx bx-link" },
  ];
});

const share = (network: any) => {
  if (network.name === "Link") {
    navigator.clipboard.writeText(network.url);
  } else {
    window.open(network.url, "_blank", "noopener,noreferrer");
  }
};

const formatDate = (date: string) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<template>
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
          <div v-if="isLoading">
            <div class="d-flex mb-3">
              <div class="skeleton skeleton-category me-2"></div>
              <div class="skeleton skeleton-date"></div>
            </div>
            <div class="skeleton skeleton-title mb-3"></div>
            <div class="skeleton skeleton-content mb-3"></div>
          </div>

          <div v-else-if="article" class="content_blog">
            <div class="mb-3 mx-0">
              <span class="article-category">{{ categoryTitle }}</span>
              <span v-html="formatDate(article.date_created)" class="mx-3 publish_date"></span>
            </div>
            <h1>{{ article.title }}</h1>
            <div v-html="article.content" class="my-4"></div>
          </div>

          <div v-else-if="fetchError">
            <p class="text-danger">Erro ao carregar o artigo.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
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
