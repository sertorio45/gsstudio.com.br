<template>
  <section class="my-5 py-5 min-vh-100 justify-content-center align-content-center bg-light" id="blog">
    <div class="container my-5">
      <div class="row">
        <h2 class="text-center">Blog</h2>
        
        <!-- Skeleton Cards -->
        <div v-if="pending" class="col-md-3 my-5" v-for="n in 4" :key="n">
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
              <nuxt-link :to="article.slug">
                {{ article.title }}
              </nuxt-link>
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
const { data: articles, pending, error, refresh } = await useAsyncData(
  "articles",
  async () => {
    const response = await $fetch("https://painel.gsadmin.app/items/articles?fields=id,title,meta_keywords,meta_description,content,slug,categorie.id,categorie.title_categorie", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.data.map(article => ({
      ...article,
      category_title: article.categorie?.title_categorie || "Sem categoria",
    }));
  },
);

// Chamar refresh quando a página for carregada
onMounted(() => {
  refresh();
});


</script>