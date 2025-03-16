<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

// Captura o slug da URL
const route = useRoute();
const router = useRouter();
const slug = computed(() => route.params.slug as string);

// Busca o artigo com SSR habilitado
const { data: article, pending: isLoading, error: fetchError } = useFetch(
  () => `https://painel.gsadmin.app/items/articles`, 
  {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    query: {
      fields: "id,title,meta_keywords,meta_description,content,slug,categorie.id,categorie.title_categorie",
      "filter[slug][_eq]": slug.value,
    },
    transform: (response) => response.data?.length ? response.data[0] : null,
    server: true, // Garante que os dados sejam renderizados no servidor
    lazy: false,  // Garante que a requisição ocorra antes da renderização
  }
);

// Definir título da categoria dinamicamente
const categoryTitle = computed(() => article.value?.categorie?.title_categorie || "Sem categoria");

// Computed properties para SEO
const title = computed(() => article.value?.title || "Artigo");
const description = computed(() => article.value?.meta_description || "Leia mais sobre marketing, design e desenvolvimento web.");
const category = computed(() => article.value?.categorie?.title_categorie || "Sem categoria");
const keywords = computed(() => article.value?.meta_keywords || "");

// Configuração de SEO com SSR
useSeoMeta({
  title: title,
  description: description,
  keywords: keywords,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
});

// Configuração de imagem Open Graph
defineOgImageComponent("NuxtSeo", {
  title: title.value,
  description: description.value,
  colorMode: "dark",
  theme: "#1e00ff",
});

// Função para voltar e forçar a atualização da página anterior
const goBack = () => {
  router.back();
  setTimeout(() => refreshNuxtData("articles"), 200);
};

// Compartilhamento nas redes sociais (evita acessar `window` diretamente no SSR)
const socialNetworks = computed(() => {
  if (process.server) return []; // Evita erros no SSR
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

// Compartilhar nas redes sociais
const share = (network: any) => {
  if (network.name === "Link") {
    navigator.clipboard.writeText(network.url);
  } else {
    window.open(network.url, "_blank", "noopener,noreferrer");
  }
};

// Formatar data
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

        <div class="col-sm-7 col-md-12 col-lg-7">
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