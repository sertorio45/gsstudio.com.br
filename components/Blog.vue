<template>
  <section class="my-5 py-5 min-vh-100 justify-content-center align-content-center bg-light" id="blog">
    <div class="container my-5">
      <div class="row">
        <h2 class="text-center">Blog</h2>
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
          <NuxtLink to="/blog" class="btn btn-primary">Ver mais artigos</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Blog',
  setup() {
    const { articles, categories, loading, getCategoryTitle } = useBlogCards();

    return {
      articles,
      categories,
      loading,
      getCategoryTitle,
    };
  },
});
</script>
