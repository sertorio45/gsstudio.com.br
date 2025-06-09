<script setup>
import { useCardAnimation } from '~/composables/useCardAnimation';
import HeroAnimated from '~/components/HeroAnimated.vue';
import CarouselParceiros from '~/components/CarouselParceiros.vue';
import Portifolio from '~/components/Portifolio.vue';
import Blog from '~/components/Blog.vue';
import { onMounted } from 'vue';

defineOgImage({ url: 'https://gsstudio.com.br/img/thumb_gsstudio.jpg', width: 1200, height: 600, alt: 'GS STUDIO - Markteting, comunicação e desenvolvimento web' })

useHead({
  meta: [
        { name: 'lang', content: 'pt-BR' },
        { name: 'language', content: 'pt-BR' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'canonical', content: 'https://www.gsstudio.com.br' },
        { name: 'keywords', content: 'marketing digital, criação de sites, otimização de sites (SEO), Google Ads, campanhas online, agência digital, agência de marketing, lojas virtuais, e-commerce, gestão de redes sociais, desenvolvimento web, design responsivo, tráfego pago, branding, identidade visual, marketing para empresas, marketing para pequenas empresas, marketing em Sertãozinho, marketing em Ribeirão Preto, SEO local, social media marketing, estratégia de marketing digital, anúncios online, agência de SEO, criação de conteúdo, marketing de conteúdo, hospedagem de sites, otimização de conversão (CRO), email marketing, automação de marketing, consultoria em marketing digital, campanhas pagas no Google, performance digital, WordPress, criação de blogs, gestão de tráfego, otimização de desempenho do site, desenvolvimento de sistemas web, produção audiovisual, estratégias de marketing SP, agência de marketing em SP.' },
      ],
  link: [
    { rel: 'canonical', href: 'https://gsstudio.com.br' }
  ]
});

useSeoMeta({
  title: 'Marketing, Comunicação e Desenvolvimento Web em Ribeirão Preto, Sertãozinho, São Paulo, Brasil',
  description: 'Agência full service especializada em design, marketing e tecnologia estamos localizados em Ribeirão Preto para região e Brasil.',
  ogTitle: 'Marketing, Comunicação e Desenvolvimento Web em Ribeirão Preto, Sertãozinho, São Paulo, Brasil',
  ogDescription: 'Agência full service especializada em design, marketing e tecnologia, oferecendo soluções completas com foco em resultados.',
  ogUrl: 'https://gsstudio.com.br/',
  ogType: 'website',
  robots: 'index, follow',
  ogLocale: 'pt-br',
});

// Chame o composable para inicializar a animação dos cartões
useCardAnimation();

// Funções e métodos do componente padrão
function importAll(r) {
  return r.keys().map(r);
}

function initCardAnimation() {
  const cards = document.querySelectorAll('.gscard');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const randomDelay = Math.random() * 1000;
        setTimeout(() => {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }, randomDelay);
      }
    });
  }, {
    threshold: 0.5
  });
  cards.forEach(card => {
    observer.observe(card);
  });
}

function startCounting(counters, speed) {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const increment = target / (speed / 100);
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

function initCounters() {
  const counters = document.querySelectorAll('.count');
  const speed = 9000;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting(counters, speed);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 1
  });
  const target = document.getElementById('conquistas');
  if (target) {
    observer.observe(target);
  }
}

function scrollToElement(element) {
  const headerOffset = 50;
  const elementPosition = document.querySelector(element).offsetTop;
  const offsetPosition = elementPosition - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

onMounted(() => {
  initCardAnimation();
  initCounters();
  if (typeof useRouter === 'function') {
    const router = useRouter();
    router.afterEach((to, from) => {
      if (to.name === 'index') {
        setTimeout(() => {
          initCardAnimation();
        }, 100);
      }
    });
  }
});
</script>


<template>
<!-- Topo -->
<HomeTopo />

<!-- Quem somos -->
<section class="d-flex align-items-center bg-light py-5" id="sobre">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-6">
        <h2>Somos especialistas</h2>
        <p class="my-3">
          A GS Studio é uma agência que combina marketing, design e tecnologia para criar soluções criativas que impulsionam o sucesso de negócios. 
          Nosso foco está em entregar resultados que realmente fazem a diferença.
        </p>
        <!-- Botão para desktop -->
        <NuxtLink to="/sobre" class="btn btn-primary d-none d-md-inline-block">
          Conheça mais sobre nós
        </NuxtLink>
       
      </div>
      <div class="col-12 col-md-12 col-lg-6 text-center d-flex align-items-sm-center justify-content-sm-end py-lg-0 py-md-5">
        <div class="row w-100">
          <div class="col-12 col-sm-6 col-md-4 d-flex mb-3 mb-md-0">
            <div class="gscard gscard-border w-100">
              <NuxtImg src="icons/icon-design.svg" class="p-2 my-1" alt="GS STUDIO - Design para marketing e comunicação" />
              <h3>Design</h3>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 d-flex mb-3 mb-md-0">
            <div class="gscard gscard-border w-100">
              <NuxtImg src="icons/icon-marketing.svg" class="p-2 my-1" alt="GS STUDIO - Marketing e comunicação digital" />
              <h3>Marketing</h3>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 d-flex">
            <div class="gscard gscard-border w-100">
              <NuxtImg src="/icons/icon-tecnologia.svg" class="p-2 my-1" alt="GS STUDIO - Tecnologia para sites e comunicação" />
              <h3>Tecnologia</h3>
            </div>
          </div>
          <div class="mt-5"> 
            <NuxtLink to="/sobre" class="btn btn-primary d-md-none">
              Conheça mais sobre nós
            </NuxtLink></div>
        </div>
        
      </div>
    </div>
  </div>
</section>
<!-- Quem somos -->


    <!-- Conquistas -->
    <section class="text-center py-5 d-flex justify-content-center align-items-center" id="conquistas">
      <div class="container">
        <div class="row g-4">
          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="gscard gscard-border d-flex flex-column justify-content-center align-items-center">
              <h3 class="mb-2"><em>+ de <em class="count" data-count="65">0</em></em></h3>
              <span class="text-muted">Sites produzidos</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="gscard gscard-border d-flex flex-column justify-content-center align-items-center">
              <h3 class="mb-2"><em>+ de <em class="count" data-count="400">0</em></em></h3>
              <span class="text-muted">Clientes ativos</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="gscard gscard-border d-flex flex-column justify-content-center align-items-center p-4">
              <h3 class="mb-2"><em>+ de <em class="count" data-count="80">0</em></em></h3>
              <span class="text-muted">Marcas desenvolvidas</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="gscard gscard-border d-flex flex-column justify-content-center align-items-center">
              <h3 class="mb-2"><em>+ de <em class="count" data-count="7">0</em></em></h3>
              <span class="text-muted">Anos de mercado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Conquistas -->

    <!-- Parceiros -->
    <section class="my-5 d-flex align-items-center justify-content-center" id="parceiros">
      <div class="container text-center my-5">
        <div class="row">
          <h2>Parceiros e clientes</h2>
          <div id="app">
            <div class="col">
              <CarouselParceiros />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Parceiros -->

    <!-- Solucoes e servicos -->
    <section class="d-flex align-items-center justify-content-center bg-light py-5" id="servicos">
      <div class="container text-center my-5">
        <div class="row">
          <h2>Soluções e serviços</h2>
          <p class="my-3">
            A GS STUDIO está comprometida com resultados. Acreditamos que a criatividade e o design, 
            alinhados com uma estratégia eficaz, geram resultados melhores e duradouros. 
          </p>
          <div class="row p-3">
            <div class="col-6 col-sm-6 col-md-3 mb-3 mb-md-0">
              <div class="gscard gscard-border h-100">
                <NuxtImg src="icons/servicos/sites.svg" class="p-2 my-1" alt="GS STUDIO - Criação de sites e comunicação" />
                <h3>Criação de sites</h3>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-3 mb-3 mb-md-0">
              <div class="gscard gscard-border h-100">
                <NuxtImg src="icons/servicos/gestao_de_conteudo.svg" class="p-2 my-1" alt="GS STUDIO - Gestão de conteúdo e redes sociais" />
                <h3>Redes sociais</h3>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-3 mb-3 mb-md-0">
              <div class="gscard gscard-border h-100">
                <NuxtImg src="icons/servicos/lojas_virtuais.svg" class="p-2 my-1" alt="GS STUDIO - Lojas virtuais e marketing digital" />
                <h3 class="h1">Lojas virtuais</h3>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-3">
              <div class="gscard gscard-border">
                <NuxtImg src="icons/servicos/branding.svg" class="p-2 my-1" alt="GS STUDIO - Criação de marcas e branding" />
                <h3>Produção de marcas</h3>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col">
              <NuxtLink to="/servicos" class="btn btn-primary">Ver todos os serviços</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Solucoes e servicos -->

    <!-- Portifolio -->
    <Portifolio />
    <!-- Portifolio -->

    <CtaContact />

    <Blog />

</template>

<style scoped>
#index h1 {
  font-size: var(--texto-grande) !important;
}
#index p {
  font-size: var(--texto-medio);
}

#sobre img, #servicos img {
  width: 100px !important;
}

#conquistas h3 {
  font-size: 1.5em !important;
  font-weight: bold;
}

#servicos h3{
  font-size: 1em !important;
}

.row {
  display: flex !important;
  flex-wrap: wrap !important;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

</style>
