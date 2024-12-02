<template>
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
  <section class="my-5 py-5 justify-content-center align-content-center" id="blog">
    <div class="container my-5">
      <div class="row">
        <!-- Skeleton Cards -->
        <div v-if="loading" class="col-md-3 my-5" v-for="n in 4" :key="n">
          <div class="card">
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
            <div class="card-body">
              <div class="mb-2">
                <span class="article-category">{{ getCategoryTitle(article.category) }}</span>
              </div>
              <nuxt-link :to="`${article.slug}`">
                {{ article.titulo }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-3">
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
import { defineComponent } from 'vue';
import { useBlogCards } from '~/composables/useBlogCards';

export default defineComponent({
  name: 'Blog',
  setup() {
    const { articles, categories, loading, loadingMore, loadMoreArticles, hasMoreArticles, getCategoryTitle } = useBlogCards();

    return {
      articles,
      categories,
      loading,
      loadingMore,
      loadMoreArticles,
      hasMoreArticles,
      getCategoryTitle,
    };
  },
});

</script>

