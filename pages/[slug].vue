<script setup lang="ts">

const route = useRoute();
const router = useRouter();
const canonicalUrl = `https://gsstudio.com.br${route.fullPath}`
const { data: article, pending: loading, error } = await useFetch<Article>(
  () => `/api/articles/${route.params.slug}`,
  {
    server: true,
    key: `article-${route.params.slug}`,
    default: () => null
  }
)
defineOgImageComponent('NuxtSeo', {
  title: '',
  description: article.value?.meta_description,
  theme: '#ff0000',
  colorMode: 'dark',
})

useSeoMeta({
    title: article.value?.title,
    description: article.value?.meta_description,
    robots: 'index, follow',
    ogTitle: article.value?.title,
    ogDescription: article.value?.meta_description,
    ogType: 'article',
    ogUrl: canonicalUrl,
    ogLocale: 'pt_BR',
    ogImageAlt: article.value?.title,
    twitterCard: 'summary',
    twitterTitle: article.value?.title,
    twitterDescription: article.value?.meta_description,
    fbAppId: '603230818880308'
  })

// Computed para categoria
const categoryTitle = computed(() => article.value?.category_title || "Sem categoria");

interface SocialNetwork {
  name: string;
  url: string;
  icon: string;
}

const socialNetworks = computed<SocialNetwork[]>(() => {
  const url = canonicalUrl;
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
    <Title>{{ article?.title }}</Title>
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

        <div class="col-sm-7 col-md-12 col-lg-10">
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



/* Pequeno (576px - 767px) */
@media (max-width: 576px) {
  .publish_date {
    font-size: 0.8rem !important;
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
    top: 67px;
    left: 0;
    right: 0;
    padding: 20px;
    gap: 10px;
  }
  .social-share {
    display: flex;
    gap: 0.3em;
  }
  h1 {
  font-size: 2.5rem!important;
  }

}

/* Médio (768px - 1199px) */
@media (min-width: 768px) {
  .back-fixed {
    display: flex;
    position: fixed ;
    z-index: 2;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    gap: 10px;
    top: 67px;
    left: 0;
    justify-content: center;
    align-items: center;
  }
}

/* Desktop (a partir de 1024px) - NOVO ESTILO */
@media (min-width: 1024px) {
  .back-fixed {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: sticky;
    top: 120px;
    width: 100%;
    height: auto;
    background-color: transparent;
    padding: 0;
    margin-left: 0;
    transform: none;
    box-shadow: none;
  }
  .social-share {
    flex-direction: column;
    gap: 0.5em;
    margin-top: 1.5em;
  }
  .social-icon {
    width: 40px;
    height: 40px;
    padding: 0.5em;
    margin-top: 0;
    font-size: 18px;
  }
}

/* Grande (1200px +) */
@media (min-width: 1200px) {
  .back-fixed {
    left: 68px;
  }
}

@media (max-width: 1440px) {
  /* .back-fixed {
    left: 24px;
  } */
}

@media (min-width: 1920px) {
  .back-fixed {
    left: 24px;
  }
}
</style>