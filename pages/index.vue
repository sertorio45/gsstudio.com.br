<template>
  <main>
    <!-- Topo -->
    <section class="d-flex align-items-center min-vh-100" id="index">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h1>Aumente a <em>performance</em> da sua <em>empresa.</em></h1>
            <p class="my-4">Destaque sua empresa à frente de seus concorrentes com estratégias de branding, marketing e tecnologia.</p>
            <div class="d-flex justify-content-center">
              <button @click="scrollToElement('#sobre')" class="btn btn-primary">Nos conheça um pouco</button>
              <button @click="scrollToElement('#contato')" class="btn btn-primary-border">Entre em contato rapidamente</button>
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
          <div class="col-5">
            <h2>Somos especialistas</h2>
            <p class="my-3 d-block">
              Design publicitário, marketing online/offline e websites.
              Na GS STUDIO, combinamos criatividade e estratégias comprovadas para desenvolver campanhas de marketing eficazes e impactantes.
              Nossos especialistas em tecnologia oferecem soluções personalizadas para maximizar a eficiência do seu negócio.
            </p>
          </div>
          <div class="col-7 text-center align-content-center content-justify-center px-5">
            <div>
              <div class="d-flex">
                <div class="col-4 gscard gscard-border">
                  <NuxtImg src="icons/icon-design.svg" class="p-2 m-2"/>
                  <h3>Design</h3>
                  <a href="#none">Saiba mais</a>
                </div>
                <div class="col-4 gscard gscard-border">
                  <NuxtImg src="icons/icon-marketing.svg" class="p-2 m-2"/>
                  <h3>Marketing</h3>
                  <a href="#none">Saiba mais</a>
                </div>
                <div class="col-4 gscard gscard-border">
                  <NuxtImg src="icons/icon-tecnologia.svg" class="p-2 m-2"/>
                  <h3>Tecnologia</h3>
                  <a href="#none">Saiba mais</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Quem somos -->

    <!-- Conquistas -->
    <section class="py-5 text-center" id="conquistas">
      <div class="container my-3">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-3">
            <div class="gscard gscard-border">
              <h3><em>+ de <em class="count" data-count="65">0</em></em></h3>
              <span>Sites produzidos</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="gscard gscard-border">
              <h3><em>+ de <em class="count" data-count="250">0</em></em></h3>
              <span>Clientes ativos</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
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
    <section class="my-5 align-content-center justify-content-center" id="parceiros">
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

    <!-- Portifolio -->
    <Portifolio />
  

    <!-- Solucoes e servicos -->
    <section class="min-vh-100 align-content-center justify-content-center bg-light" id="servicos">
      <div class="container text-center">
        <div class="row justify-content-center align-content-center">
          <h2>Soluções e serviços</h2>
          <p class="my-3">
            A GS STUDIO está comprometida com resultados. Acreditamos que a criatividade e o design, 
            alinhados com uma estratégia eficaz, geram resultados melhores e duradouros. 
          </p>
          <div class="row mt-3">
            <div class="col-12 col-sm-6 col-md-3">
              <div class="gscard gscard-border">
                <NuxtImg src="icons/servicos/sites.svg" class="p-2 m-2"/>
                <h3>Sites</h3>
                <span><a href="#none">Saiba mais</a></span>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="gscard gscard-border">
                <NuxtImg src="icons/servicos/gestao_de_conteudo.svg" class="p-2 m-2"/>
                <h3>Redes sociais</h3>
                <span><a href="#none">Saiba mais</a></span>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="gscard gscard-border">
                <NuxtImg src="icons/servicos/lojas_virtuais.svg" class="p-2 m-2"/>
                <h3>Lojas virtuais</h3>
                <span><a href="#none">Saiba mais</a></span>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="gscard gscard-border">
                <NuxtImg src="icons/servicos/branding.svg" class="p-2 m-2"/>
                <h3>Lojas virtuais</h3>
                <h3>Marcas</h3>
                <span><a href="#none">Saiba mais</a></span>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col"><button @click="scrollToElement('#none')" class="btn btn-primary"> Veja mais serviços</button></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Solucoes e servicos -->

    <!-- CTA -->
    <section class="text-center gscard my-5" id="cta">
      <div class="container justify-content-center align-content-center bg-cta my-5">
        <div class="row">
          <div class="col text-light">
            <h2 class="text-light">Transforme Resultados com Design, Marketing e Tecnologia!</h2>
            <div class="subheadline d-flex justify-content-center py-2">
              <p>Potencialize seu negócio com soluções criativas e inovadoras. Nós entregamos resultados excepcionais através de estratégias personalizadas e tecnologia de ponta.</p>
            </div>
            <button @click="scrollToElement('#none')" class="btn btn-white"><em>Começar orçamento</em></button>  
          </div>
        </div>
      </div>
    </section>
    <!-- CTA -->

    <Blog />
  </main>
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
  font-size: var(--texto-grande);
}
#index p {
  font-size: var(--texto-medio) !important;
}

#sobre img {
  width: 100px !important;
}

#conquistas h3 {
  font-size: 1.5em !important;
  font-weight: bold;
}

/* parceiros */
.carousel-item {
  transition: transform 0.5s ease, opacity 0.5s ease !important;
}
.carousel-fade .carousel-item {
  opacity: 0 !important;
  transition-duration: 0.5s !important;
  transition-property: opacity !important;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  opacity: 1 !important;
}
.carousel-fade .carousel-item-next,
.carousel-fade .carousel-item-prev,
.carousel-fade .carousel-item.active.carousel-item-start,
.carousel-fade .carousel-item.active.carousel-item-end {
  transform: translateX(0) !important;
}
.carousel-item img {
  filter: blur(5px) !important;
  transition: filter 0.5s ease !important;
}
.carousel-item.active img {
  filter: blur(0) !important;
}

/* servicos */
#servicos p {
  width: calc(1100px - 30%) !important;
}
#servicos img {
  width: 50% !important;
}
#servicos .gscard {
  width: auto !important;
  margin: 1px !important;
  padding: 2rem !important;
  height: 100% !important;
}

/* cta */
#cta .container {
  height: 50vh !important;
  border-radius: 10px !important;
}
#cta .col p {
  width: calc(900px - 20%) !important;
}
#cta section h2 {
  color: #fff !important;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
