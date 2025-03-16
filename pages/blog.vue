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
          <a href="#blog"><Icon icon="bx bxs-chevrons-down my-3" fontSize="3em" color="#fff" /></a>
        </div>
      </div>
    </div>
  </section>

  <!-- Seção do blog -->
  <section class="my-5 py-5 justify-content-center align-content-center" id="blog">
    <div class="container my-5">
      <div class="row">
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
              <a :href="`/${article.slug}`">
                {{ article.title }}
              </a>
            </div>
          </div>
        </div>

        <!-- Nenhum Artigo Encontrado -->
        <div v-else class="col text-center my-5">
          <p class="text-muted">Nenhum artigo encontrado.</p>
        </div>
      </div>

      <!-- Botão "Ver Mais" -->
      <div class="row my-3">
        <div class="col d-flex align-content-center justify-content-center">
          <button @click="refresh" :disabled="pending" class="btn btn-primary">
            <span v-if="pending" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span v-else>Ver mais artigos</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: articles, pending, error, refresh } = useLazyFetch("https://painel.gsadmin.app/items/articles?fields=id,title,meta_keywords,meta_description,content,slug,categorie.id,categorie.title_categorie", {
  transform: (response) => response.data.map(article => ({
    ...article,
    category_title: article.categorie?.title_categorie || "Sem categoria",
  }))
});

// Chamar refresh quando a página for carregada
onMounted(() => {
  refresh();
});
</script>
