<template>
  <!-- Fale conosco -->
  <section class="py-5 bg-dark d-flex my-5" id="topo">
    <div class="container d-flex justify-content-center align-items-center my-5 py-5">
      <div class="row">
        <div class="col text-center text-light my-2">
          <div class="my-2">
            <NuxtLink to="/" class="text-light">Página inicial</NuxtLink> /
            <span>Blog</span>
          </div>
          <h1 class="text-light">Blog</h1>
          <a href="#blog"><Icon icon="bx bxs-chevrons-down my-3" fontSize="3em" color="#fff"/></a>
        </div>
      </div>
    </div>
  </section>

  <!-- Blog Section -->
  <section class="py-5 justify-content-center align-content-center" id="blog">
    <div class="container my-5">
      <div class="row">
        <!-- Skeleton Cards -->
        <div v-if="loading && articles.length === 0" class="col-md-3 my-5" v-for="n in 4" :key="n">
          <div class="card">
            <div class="image-container">
              <div class="skeleton skeleton-img"></div>
            </div>
            <div class="card-body">
              <div class="mb-2">
                <div class="skeleton skeleton-category"></div>
              </div>
              <div class="skeleton skeleton-title"></div>
            </div>
          </div>
        </div>

        <!-- Actual Cards -->
        <div v-else class="col-sm-3 my-2" v-for="article in articles" :key="article.id">
          <div class="card">
            <div class="image-container">
              <NuxtLink :to="`${article.slug}`">
                <img
                  :src="getArticleImage(article)" 
                  class="img-fluid blur-effect"
                  :class="{ 'blurred': !article.imageLoaded }"
                  :alt="article.titulo"
                  @load="article.imageLoaded = true"
                  @error="handleImageError($event)"
                  loading="lazy"
                />
              </NuxtLink>
            </div>
            <div class="card-body">
              <div class="mb-2">
                <span class="article-category">{{ getCategoryTitle(article.category) }}</span>
              </div>
              <NuxtLink :to="`${article.slug}`">
                {{ article.titulo }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="row my-5">
        <div class="col d-flex align-content-center justify-content-center">
          <button @click="loadMoreArticles" :disabled="loadingMore || !hasMoreArticles" class="btn btn-primary">
            <span v-if="loadingMore" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span v-else>Ver mais artigos</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import axios from 'axios';
import type { Article, Category } from '~/types';

export default defineComponent({
  name: 'Blog',
  setup() {
    const articles = ref<Article[]>([]);
    const categories = ref<Category[]>([]);
    const loading = ref(true);
    const loadingMore = ref(false);
    const baseURL = import.meta.env.VITE_STRAPI_URL || 'https://str-gsstudio.gsstudio.com.br';
    const VITE_STRAPI_TENANT_ID = import.meta.env.VITE_STRAPI_TENANT_ID;
    const articlesPerPage = 4;
    const loadedArticlesCount = ref(articlesPerPage); // Inicialmente carrega apenas 4 artigos

    useHead ({
      meta: [
        { name: 'robots', content: 'index,follow' },
        { name: 'canonical', content: 'https://www.gsstudio.com.br/blog' },
      ],
    })
    
    useSeoMeta({
      title: 'Blog | GS STUDIO',
      description: 'Artigos para você aprender, novidades sobre tecnologia, marketing e toda área de comunicação on e offline.',
      ogTitle: 'Blog | GS STUDIO',
      ogDescription: 'Artigos para você aprender, novidades sobre tecnologia, marketing e toda área de comunicação on e offline.',
      ogUrl: 'https://gsstudio.com.br/blog',
      ogSiteName: 'GS STUDIO',
      ogLocale: 'pt_BR',
    });

    const fetchArticles = async (tenantId: string) => {
      try {
        const response = await axios.get(`${baseURL}/tenants/${tenantId}`);
        articles.value = response.data.articles
          .sort((a: Article, b: Article) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
          .map((article: Article) => ({ ...article, imageLoaded: false }));
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        loading.value = false;
      }
    };

    const loadMoreArticles = () => {
      if (loadingMore.value || !hasMoreArticles.value) return;

      loadingMore.value = true;

      setTimeout(() => {
        loadedArticlesCount.value += articlesPerPage;
        loadingMore.value = false;
      }, 1000);
    };

    const displayedArticles = computed(() => {
      return articles.value.slice(0, loadedArticlesCount.value);
    });

    const hasMoreArticles = computed(() => {
      return loadedArticlesCount.value < articles.value.length;
    });

    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseURL}/categories`);
        categories.value = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const getArticleImage = (article: Article) => {
      if (article.thumb && article.thumb.url) {
        return new URL(article.thumb.url, baseURL).href;
      }
      return 'https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp';
    };

    const handleImageError = (event: Event) => {
      const img = event.target as HTMLImageElement;
      img.src = 'https://s3.gsstudio.com.br/gsstudio/site/img/thumb_blog_gsstudio.webp';
    };

    const getCategoryTitle = (categoryId: number) => {
      const category = categories.value.find(cat => cat.id === categoryId);
      return category ? category.title : 'Categoria desconhecida';
    };

    onMounted(() => {
      fetchArticles(VITE_STRAPI_TENANT_ID);
      fetchCategories();
    });

    return {
      articles: displayedArticles,
      loading,
      loadingMore,
      getArticleImage,
      getCategoryTitle,
      loadMoreArticles,
      hasMoreArticles,
      handleImageError,
    };
  },
});
</script>


<style scoped>
.topo .col {
  display: flex;
  align-items: center;
}

.topo .col h1 {
  margin-left: 5px;
  display: inline;
  font-weight: normal !important;
  color: #000;
}

.card {
  margin-bottom: 20px;
  border: 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: box-shadow 0.3s, margin-bottom 0.3s, transform 0.3s;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.image-container {
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
}

.card img {
  transition: transform 0.3s;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card:hover {
  transform: scale(0.97);
  box-shadow: none;
}

.card-body a {
  text-decoration: none;
  color: var(--color-text) !important;
  transition: color 0.3s, text-decoration 0.3s;
}

.card-body a:hover {
  text-decoration: underline;
  color: var(--color-text) !important;
}

.card h5 {
  font-size: 16px !important;
}

.card img:hover {
  transform: scale(1.5);
}

.card img {
  transition: transform 0.3s ease;
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
  animation: shimmer 1.5s infinite;
}

.skeleton-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
}

.skeleton-title {
  height: 20px;
  width: 100%;
  background: linear-gradient(to right, #e0e0e0 0%, #f8f8f8 50%, #e0e0e0 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-category {
  height: 15px;
  width: 60%;
  background: linear-gradient(to right, #e0e0e0 0%, #f8f8f8 50%, #e0e0e0 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.blur-effect {
  transition: filter 0.2s ease;
}

.blurred {
  filter: blur(20px);
}
</style>
