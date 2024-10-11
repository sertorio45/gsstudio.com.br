
<script setup>
import { useCardAnimation } from '~/composables/useCardAnimation';

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
</script>


<template>
<!-- Topo -->
<section class="d-flex align-items-center min-vh-100" id="index">
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h1><em>Posicionamento, resultados e performance para sua empresa.</em></h1>
        <p class="my-4">Fazemos sua empresa crescer usando branding, tecnologia e marketing.</p>
        <div class="d-flex justify-content-center flex-column flex-md-row align-items-center px-2">
          <button @click="scrollToElement('#sobre')" class="btn btn-primary my-2">Nos conheça um pouco</button>
          <NuxtLink to="/contato" class="btn btn-primary-border my-2 ms-md-2">Faça agora seu orçamento</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Topo -->


    <!-- Quem somos -->
    <section class="d-flex align-items-center bg-light py-5" id="sobre">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5">
            <h2>Somos especialistas</h2>
            <p class="my-3">
              A GS Studio é uma agência que combina marketing, design e tecnologia para criar soluções criativas que impulsionam o sucesso de negócios. 
              Nosso foco está em entregar resultados que realmente fazem a diferença.
            </p>
            <NuxtLink to="/sobre" class="btn btn-primary">
              Conheça mais sobre nós
            </NuxtLink>
          </div>
          <div class="col-12 col-md-7 text-center d-flex align-items-center justify-content-end">
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
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Quem somos -->

    <!-- Conquistas -->
    <section class="text-center my-5 py-5 d-flex justify-content-center align-items-center" id="conquistas">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-3 mb-3 mb-md-0">
            <div class="gscard gscard-border">
              <h3><em>+ de <em class="count" data-count="65">0</em></em></h3>
              <span>Sites produzidos</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3 mb-3 mb-md-0">
            <div class="gscard gscard-border">
              <h3><em>+ de <em class="count" data-count="400">0</em></em></h3>
              <span>Clientes ativos</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3 mb-3 mb-md-0">
            <div class="gscard gscard-border">
              <h3><em>+ de <em class="count" data-count="80">0</em></em></h3>
              <span>Marcas desenvolvidas</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="gscard gscard-border">
              <h3><em>+ de <em class="count" data-count="7">0</em></em></h3>
              <span>Anos de mercado</span>
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
              <div class="gscard gscard-border">
                <NuxtImg src="icons/servicos/sites.svg" class="p-2 my-1" alt="GS STUDIO - Criação de sites e comunicação" />
                <h3>Sites</h3>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-3 mb-3 mb-md-0">
              <div class="gscard gscard-border">
                <NuxtImg src="icons/servicos/gestao_de_conteudo.svg" class="p-2 my-1" alt="GS STUDIO - Gestão de conteúdo e redes sociais" />
                <h3>Redes sociais</h3>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-3 mb-3 mb-md-0">
              <div class="gscard gscard-border">
                <NuxtImg src="icons/servicos/lojas_virtuais.svg" class="p-2 my-1" alt="GS STUDIO - Lojas virtuais e marketing digital" />
                <h3>Lojas virtuais</h3>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-3">
              <div class="gscard gscard-border">
                <NuxtImg src="icons/servicos/branding.svg" class="p-2 my-1" alt="GS STUDIO - Criação de marcas e branding" />
                <h3>Marcas</h3>
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

    <!-- CTA -->
    <section class="text-center gscard my-5" id="cta">
      <div class="container d-flex align-items-center justify-content-center bg-cta my-5">
        <div class="row">
          <div class="col text-light">
            <h2 class="text-light">Transforme Resultados com Design, Marketing e Tecnologia!</h2>
            <div class="subheadline d-flex justify-content-center py-2">
              <p>Potencialize seu negócio com soluções criativas e inovadoras. Nós entregamos resultados excepcionais através de estratégias personalizadas e tecnologia de ponta.</p>
            </div>
            <NuxtLink to="/contato" class="btn btn-white"><em>Entrar agora em contato</em></NuxtLink>  
          </div>
        </div>
      </div>
    </section>
    <!-- CTA -->

    <Blog />

</template>

<script>
import CarouselParceiros from '~/components/CarouselParceiros.vue';
import Portifolio from '~/components/Portifolio.vue';
import Blog from '~/components/Blog.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    CarouselParceiros,
    Portifolio,
    Blog
  },
 
  methods: {
    importAll(r) {
      return r.keys().map(r);
    },
    initCardAnimation() {
      const cards = document.querySelectorAll('.gscard');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const randomDelay = Math.random() * 1000; // Random delay between 0 and 1000ms
            setTimeout(() => {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target); // Stop observing once animated
            }, randomDelay);
          }
        });
      }, {
        threshold: 0.5 // Adjust this value as needed
      });

      cards.forEach(card => {
        observer.observe(card);
      });
    },
    initCounters() {
      const counters = document.querySelectorAll('.count');
      const speed = 9000; // Tempo de execução em milissegundos

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startCounting(counters, speed);
            observer.unobserve(entry.target); // Desobservar após a contagem iniciar
          }
        });
      }, {
        threshold: 1 // Iniciar a contagem quando 100% da seção estiver visível
      });

      const target = document.getElementById('conquistas');
      if (target) {
        observer.observe(target);
      }
    },
    startCounting(counters, speed) {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerText;

          const increment = target / (speed / 100); // Incremento para o tempo total

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10); // Atualizar a cada 10ms
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
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
  mounted() {
    this.initCardAnimation();
    this.initCounters();
    this.$router.afterEach((to, from) => {
      if (to.name === 'index') {
        setTimeout(() => {
          this.initCardAnimation();
        }, 100);
      }
    });
  }
});
</script>

<style scoped>
#index h1 {
  font-size: var(--texto-grande) !important;
}
#index p {
  font-size: var(--texto-medio) !important;
}

#sobre img, #servicos img {
  width: 100px !important;
}

#conquistas h3 {
  font-size: 1.5em !important;
  font-weight: bold;
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
