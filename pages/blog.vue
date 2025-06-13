<template>
  <section class="py-5 d-flex bg-black" id="topo">
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
              <NuxtLink :to="`/${article.slug}`">
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
    </div>
  </section>
</template>

<script setup lang="ts">
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


defineOgImage({ url: 'https://gsstudio.com.br/img/thumb_gsstudio.webp', width: 1200, height: 600, alt: 'GS STUDIO - Markteting, comunicação e desenvolvimento web' })

useHead ({
      meta: [
        { name: 'lang', content: 'pt-BR' },
        { name: 'language', content: 'pt-BR' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'canonical', content: 'https://www.gsstudio.com.br/blog' },
        { name: 'keywords', content: 'marketing digital, criação de sites, otimização de sites (SEO), Google Ads, campanhas online, agência digital, agência de marketing, lojas virtuais, e-commerce, gestão de redes sociais, desenvolvimento web, design responsivo, tráfego pago, branding, identidade visual, marketing para empresas, marketing para pequenas empresas, marketing em Sertãozinho, marketing em Ribeirão Preto, SEO local, social media marketing, estratégia de marketing digital, anúncios online, agência de SEO, criação de conteúdo, marketing de conteúdo, hospedagem de sites, otimização de conversão (CRO), email marketing, automação de marketing, consultoria em marketing digital, campanhas pagas no Google, performance digital, WordPress, criação de blogs, gestão de tráfego, otimização de desempenho do site, desenvolvimento de sistemas web, produção audiovisual, estratégias de marketing SP, agência de marketing em SP.' },
        { name: 'canonical', content: 'https://www.gsstudio.com.br/blog' },
      ],
    })
    
    useSeoMeta({
      title: 'Blog',
      ogTitle: 'Blog',
      ogUrl: 'https://gsstudio.com.br/blog',
      ogSiteName: 'GS STUDIO',
      ogLocale: 'pt_BR',
    });

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

<style>
#topo{
  background-color: #000!important;
}
</style>

