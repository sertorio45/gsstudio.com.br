<template>
  <section class="my-5 py-5 min-vh-100 justify-content-center align-content-center bg-light" id="blog">
    <div class="container my-5">
      <div class="row">
        <h2 class="text-center">Blog</h2>
        
        <!-- Erro -->
        <div v-if="error" class="col-12 my-3">
          <div class="alert alert-danger">
            Erro ao carregar artigos: {{ error.message || error }}
          </div>
        </div>

        <!-- Skeleton Cards -->
        <div v-else-if="loading" class="col-md-3 my-5" v-for="n in 4" :key="n">
          <div class="card">
            <div class="card-body">
              <div class="mb-2">
                <div class="skeleton skeleton-category"></div>
              </div>
              <div class="skeleton skeleton-title"></div>
            </div>
          </div>
        </div>

        <!-- Lista de Artigos -->
        <div v-else-if="articles && articles.length > 0" class="col-sm-3 my-2" v-for="article in articles" :key="article.id">
          <div class="card">
            <div class="card-body">
              <div class="mb-2">
                <span class="article-category">{{ article.category_title }}</span>
              </div>
              <NuxtLink :to="`/${article.slug}`" class="article-link">
                {{ article.title }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Nenhum Artigo Encontrado -->
        <div v-else class="col text-center my-5">
          <p class="text-muted">Nenhum artigo encontrado.</p>
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

<script setup lang="ts">
import { ref } from 'vue'

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

const { data: articles, pending: loading, error } = await useAsyncData<Article[]>(
  'articles',
  async () => {
    return await $fetch<Article[]>('/api/articles')
  },
  {
    server: true,
    default: () => []
  }
)
</script>

