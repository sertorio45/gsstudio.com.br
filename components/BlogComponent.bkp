<template>
  <!-- Blog e Aprenda Conosco -->
  <section class="justify-content-center align-content-center my-5 bg-light min-vh-100" id="blog-index">
    <div class="container my-5">
      <div class="row">
        <h2 class="text-center">Blog</h2>
        <div class="col-12 mt-5">
          <div class="row">
            <div
              v-for="article in articles"
              :key="article.id"
              class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
              <vs-card class="vs-card-custom" type="1">
                <template #img>
                  <img 
                    v-if="hasThumbnail(article)" 
                    :src="getImageUrl(article.thumb.url)" 
                    class="img-fluid" 
                    :alt="article.titulo" 
                    style="width: 400px;">
                  <img 
                    v-else 
                    src="thumb_blog_gsstudio.webp" 
                    class="img-fluid" 
                    alt="Default Image">
                </template>
                <template #title>
                  <div class="mt-2">
                    <div class="mb-3">
                      <span v-html="article.category.title" class="article-category"></span>
                    </div>
                    <h3 class="blog-title">
                      <a :href="`/artigos/${article.slug}`">{{ article.titulo }}</a>
                    </h3>
                  </div>
                </template>
                <template #text>
                  <p></p>
                </template>
              </vs-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <div class="col">
        <button @click="scrollToElement('#none')" class="btn btn-primary">Ver mais</button>
      </div>
    </div>
  </section>
  <!-- Blog e Aprenda Conosco -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('articles', ['getArticles']),
    articles() {
      return this.getArticles;
    }
  },
  methods: {
    ...mapActions('articles', ['fetchArticles']),
    hasThumbnail(article) {
      return article.thumb && article.thumb.url;
    },
    getImageUrl(path) {
      const baseURL = process.env.VITE_STRAPI_URL || 'http://localhost:1337';
      const url = new URL(path, baseURL).href;
      console.log('Generated image URL:', url);
      return url;
    },
    scrollToElement(element) {
      const headerOffset = 50; // Ajuste este valor conforme necessário
      const elementPosition = document.querySelector(element).offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  },
  async created() {
    await this.fetchArticles();
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
#blog-index a {
  color: #000 !important;
  text-decoration: none;
}
#blog-index a:hover {
  color: #000 !important;
  text-decoration: underline;
}


.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.d-flex.align-items-stretch {
  display: flex;
  align-items: stretch;
}

.vs-card-custom {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.row.flex-fill {
  display: flex;
  flex-wrap: wrap;
}

.col-12.col-sm-6.col-md-4.col-lg-3.mb-4.d-flex.align-items-stretch {
  display: flex;
  flex: 1;
}


.gscard {
  padding: 0 !important;
  height: 100% !important;
}
</style>
