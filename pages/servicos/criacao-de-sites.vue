<template>
  <!-- HERO -->
  <section id="hero" class="min-vh-100 d-flex justify-content-center align-items-center background-topo py-5">
    <div class="container">
      <div class="row">
        <div class="col text-center text-dark my-2">
          <div class="my-2">
            <NuxtLink to="/" class="text-dark">Página inicial</NuxtLink> /
            <NuxtLink to="/servicos" class="text-dark">Serviços</NuxtLink> /
            <span>Criação de Sites</span>
          </div>
          <h1 class="fw-bold mb-3">Seu site profissional começa aqui</h1>
          <p class="lead mb-4">Transforme sua presença digital com um site rápido, bonito e pronto para converter visitantes em clientes.</p>
          <div class="d-flex gap-3 justify-content-center mb-4">
            <ButtonPrimary class="me-2">Solicitar Orçamento</ButtonPrimary>
          </div>
          <div class="text-center mt-4">
            <a href="#features"><i class="bx bxs-chevrons-down" style="font-size:3em; color:#000;" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section id="features" class="container-fluid bg-dark py-5">
    <div class="container py-5 my-5">
      <h2 class="text-center mb-4 fw-bold mb-5 text-light">O que entregamos</h2>
    <div class="row justify-content-center align-items-center g-4 my-3">
      <div 
        class="col-12 col-sm-6 col-md-4 col-lg-4 d-flex" 
        v-for="(feature, i) in features" 
        :key="feature.title" 
        :data-gsap="'stagger fade-in'"
      >
        <div class="gscard gscard-border w-100 text-center d-flex flex-column align-items-center justify-content-center py-4" style="min-height: 50vh;">
          <i :class="'bx ' + feature.icon" style="font-size:3rem; color:var(--bs-light); background-color: var(--bs-dark); border-radius: 50%; padding: 20px; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1); margin: 10px;" aria-hidden="true"></i>
          <h5 class="fw-semibold mt-2">{{ feature.title }}</h5>
          <div class="small text-muted">{{ feature.desc }}</div>
        </div>
      </div>
    </div>
  </div>
  </section>

  <!-- TECH -->
  <section id="tech" class="container py-5 my-5">
    <h2 class="text-center mb-4 fw-bold mb-5">Tecnologias Utilizadas</h2>
    <div class="row justify-content-center align-items-center g-4 my-3">
      <div 
        class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" 
        v-for="(tech, i) in techs" 
        :key="tech.name"
      >
        <div class="gscard gscard-border w-100 text-center d-flex flex-column align-items-center justify-content-center py-4" style="min-height: 50vh; justify-content: top;">
          <i :class="'bx ' + tech.icon" style="font-size:3rem; color:var(--bs-light); background-color: var(--bs-dark); border-radius: 50%; padding: 20px; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1); margin: 10px;" aria-hidden="true"></i>
          <div class="fw-semibold mt-2">{{ tech.name }}</div>
          <div class="small text-muted">{{ tech.desc }}</div>
        </div>
      </div>
      <!-- Se o número de cards for ímpar, adiciona um card neutro para manter o layout -->
      <div v-if="techs.length % 2 !== 0" class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
        <div class="gscard gscard-border w-100 text-center d-flex flex-column align-items-center justify-content-center py-4 bg-light border-0" style="opacity:0.5; min-height: 160px;">
          <i class="bx bx-dots-horizontal-rounded" style="font-size:2.5rem; color:#ced4da;" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </section>

  <!-- FERRAMENTAS DE LOJAS E PERFORMANCE -->
  <section id="ferramentas" class="container-fluid py-5 my-5 bg-dark">
    <div class="container py-5">
      <h2 class="text-center mb-4 fw-bold text-light mb-5">Integramos o seu site com as melhores ferramentas</h2>
      <p class="text-center text-light mb-5">Usamos plataformas robustas para lojas virtuais e sites voltados para performance em marketing e vendas.</p>
      <div class="row justify-content-center align-items-center g-4 mt-3">
        <div 
          class="col-12 col-sm-6 col-md-4 col-lg-4 d-flex" 
          v-for="tool in tools" 
          :key="tool.name"
        >
          <div class="gscard gscard-border w-100 text-center d-flex flex-column align-items-center justify-content-center py-4 bg-light" style="min-height: 11vh;">
            <div class="fw-semibold mt-2">{{ tool.name }}</div>
            <div class="small text-muted">{{ tool.desc }}</div>
          </div>
        </div>
        <!-- Se o número de cards for ímpar, adiciona um card neutro para manter o layout -->
        <div v-if="tools.length % 2 !== 0" class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
          <div class="gscard gscard-border w-100 text-center d-flex flex-column align-items-center justify-content-center py-4 bg-light border-0" style="opacity:0.5; min-height: 160px;">
            <i class="bx bx-dots-horizontal-rounded" style="font-size:2.5rem; color:#ced4da;" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROCESS -->
  <section id="process" class="container-fluid py-5 my-5">
    <div class="container py-5 my-5">
      <h2 class="text-center mb-4 fw-bold mb-5 text-black">Nossa Metodologia</h2>
      <div class="timeline-horizontal d-none d-md-flex flex-row justify-content-between align-items-center position-relative" style="gap: 0;">
        <template v-for="(step, i) in process" :key="step.title">
          <div v-if="i < process.length - 1" class="timeline-connector d-none d-md-block position-absolute" :style="{
            left: `calc(${(i + 0.5) / process.length * 100}% - 1px)`,
            top: '20%',
            width: `calc(100% / ${process.length})`,
            height: '2px',
            background: 'linear-gradient(to right, #fff, #000, #fff)',
            zIndex: 0,
            transform: 'translateY(-50%)',
          }"></div>
          <div 
            class="timeline-step d-flex flex-column align-items-center flex-fill px-2 position-relative"
            style="z-index: 1; min-width: 120px;"
          >
            <div class="timeline-icon d-flex align-items-center justify-content-center mb-3" style="width: 64px; height: 64px; border-radius: 50%; background: #000; box-shadow: 0 0 10px 0 rgba(0,0,0,0.08);">
              <i :class="'bx ' + step.icon" style="font-size:2.2rem; color:#fff;" aria-hidden="true"></i>
            </div>
            <div class="text-center">
              <h5 class="fw-semibold text-black mb-2">{{ step.title }}</h5>
              <div class="small text-black">{{ step.desc }}</div>
            </div>
          </div>
        </template>
      </div>
      <!-- MOBILE VERSION -->
      <div class="timeline-mobile d-flex d-md-none flex-row w-100">
        <div class="timeline-mobile-icons d-flex flex-column align-items-center justify-content-between position-relative" style="min-width: 64px;">
          <template v-for="(step, i) in process" :key="'icon-' + step.title">
            <div class="timeline-mobile-icon d-flex align-items-center justify-content-center" style="width: 48px; height: 48px; border-radius: 50%; background: #000; position: relative; z-index: 2;">
              <i :class="'bx ' + step.icon" style="font-size:1.5rem; color:#fff;" aria-hidden="true"></i>
            </div>
            <!-- Linha vertical entre os ícones, exceto o último -->
            <div v-if="i < process.length - 1" class="timeline-mobile-connector" style="width: 3px; height: 60px; background: linear-gradient(to bottom, #fff, #000, #fff); margin: 0 auto; z-index: 1;"></div>
          </template>
        </div>
        <div class="timeline-mobile-texts d-flex flex-column justify-content-between flex-grow-1">
          <template v-for="(step, i) in process" :key="'text-' + step.title">
            <div class="mb-4">
              <h5 class="fw-semibold text-black mb-1">{{ step.title }}</h5>
              <div class="small text-black">{{ step.desc }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>

  <!-- TIMELINE -->
  <section id="timeline" class="container-fluid py-5 my-5 bg-black">
    <div class="container py-5">
      <h2 class="text-center mb-4 fw-bold text-light mb-5">Cronograma de Entrega</h2>
      <div class="table-responsive">
        <table class="table glass-table align-middle text-center rounded-2 overflow-hidden shadow-lg small" style="background: rgba(24,24,27,0.45);">
          <thead>
            <tr>
              <th class="py-2 px-1 text-uppercase text-secondary fw-bold border-0">Etapa</th>
              <th class="py-2 px-1 text-uppercase text-secondary fw-bold border-0">Entrega</th>
              <th class="py-2 px-1 text-uppercase text-secondary fw-bold border-0">Tempo Estimado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idx) in timeline" :key="row.etapa" :class="idx % 2 === 0 ? 'glass-zebra' : ''" style="transition: background 0.2s;">
              <td class="py-2 px-1 text-light border-0">{{ row.etapa }}</td>
              <td class="py-2 px-1 text-light border-0">{{ row.entrega }}</td>
              <td class="py-2 px-1 text-light border-0">{{ row.tempo }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-center text-light my-3 bg-danger p-3 rounded-3">Os prazos apresentados são estimativas médias para sites institucionais com conteúdo básico. Projetos mais complexos podem requerer um cronograma personalizado.</p>
    </div>
  </section>

  <!-- DIFFERENTIALS -->
  <section id="differentials" class="container py-5">
    <h2 class="text-center my-5 fw-bold">Nossos Diferenciais</h2>
    <div class="row row-cols-2 row-cols-md-5 g-4 justify-content-center">
      <div 
        class="col d-flex" 
        v-for="(diff, i) in differentials" 
        :key="diff.title" 
        :data-gsap="'zoom fade-in'"
      >
        <div class="gscard gscard-border w-100 text-center d-flex flex-column align-items-center justify-content-center py-4" style="min-height: 30vh;">
          <div class="d-flex align-items-center justify-content-center mb-2" style="width: 64px; height: 64px; border-radius: 50%; background: #000; box-shadow: 0 0 10px 0 rgba(13,110,253,0.10);">
            <i :class="'bx ' + diff.icon" style="font-size:2.2rem; color:#fff;" aria-hidden="true"></i>
          </div>
          <div class="fw-semibold mt-2">{{ diff.title }}</div>
          <div class="small text-muted">{{ diff.desc }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="bg-black text-white py-5 my-5">
    <div class="container py-5">
      <h2 class="text-center mb-5 fw-bold text-light">Perguntas Frequentes</h2>
    <div class="accordion" id="faqAccordion">
      <div class="accordion-item" v-for="(faq, i) in faqs" :key="faq.q">
        <h2 class="accordion-header" :id="'heading' + i">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + i" aria-expanded="false" :aria-controls="'collapse' + i">
            {{ faq.q }}
          </button>
        </h2>
        <div :id="'collapse' + i" class="accordion-collapse collapse" :aria-labelledby="'heading' + i" data-bs-parent="#faqAccordion">
          <div class="accordion-body">{{ faq.a }}</div>
        </div>
      </div>
    </div>
    </div>
  </section>

  <!-- CTA FINAL -->
  <section id="cta-final" class="container py-5 d-flex flex-column align-items-center justify-content-center text-center" data-gsap="fade-in scale">
    <h2 class="fw-bold mb-3">Pronto mudar o seu negócio?</h2>
    <p class="lead mb-4">Solicite um orçamento sem compromisso ou veja nosso portfólio de cases de sucesso.</p>
    <div class="d-flex gap-3 justify-content-center mb-4">
      <Form />
    </div>
  </section>
</template>

<script lang="ts" setup>


defineOgImage({ url: 'https://gsstudio.com.br/img/thumb_gsstudio.jpg', width: 1200, height: 600, alt: 'GS STUDIO - Markteting, comunicação e desenvolvimento web' })


useHead ({
      meta: [
        { name: 'lang', content: 'pt-BR' },
        { name: 'language', content: 'pt-BR' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'canonical', content: 'https://www.gsstudio.com.br/servicos/criacao-de-sites' },
        { name: 'canonical', content: 'https://www.gsstudio.com.br/servicos/criacao-de-sites' },
      ],
    })
    
    useSeoMeta({
      title: 'Criação de sites',
      ogTitle: 'Criação de sites',
      ogUrl: 'https://gsstudio.com.br/servicos/criacao-de-sites',
      ogSiteName: 'GS STUDIO',
      ogLocale: 'pt_BR',
    });

// Chame o composable para inicializar a animação dos cartões
useCardAnimation();

const features = [
  { icon: 'bx-brush', title: 'Design personalizado', desc: 'Layout exclusivo, alinhado à identidade da sua marca e focado em conversão.' },
  { icon: 'bx-mobile-alt', title: 'Responsividade total', desc: 'Seu site perfeito em qualquer dispositivo: mobile, tablet e desktop.' },
  { icon: 'bx-rocket', title: 'SEO e performance', desc: 'Carregamento rápido, otimização para Google e melhores resultados.' },
  { icon: 'bx-plug', title: 'Integrações', desc: 'Conecte WhatsApp, CRM, Analytics e outras ferramentas essenciais.' },
  { icon: 'bx-cog', title: 'Painel de gestão', desc: 'Gerencie conteúdos facilmente com autonomia e praticidade.' },
  { icon: 'bx-support', title: 'Suporte técnico', desc: 'Acompanhamento dedicado durante e após o projeto.' },
]

const techs = [
  { name: 'HTML5', icon: 'bxl-html5', desc: 'Estrutura semântica e moderna para web responsiva.' },
  { name: 'CSS3', icon: 'bxl-css3', desc: 'Estilização avançada, responsiva e visual atraente.' },
  { name: 'Vue 3', icon: 'bxl-vuejs', desc: 'Framework para interfaces modernas e performáticas.' },
  { name: 'PostgreSQL', icon: 'bxl-postgresql', desc: 'Banco de dados relacional e NoSQL, com autenticação e integração com API.' },
]

const process = [
  { icon: 'bx-bulb', title: 'Briefing', desc: 'Entendimento do projeto, objetivos e necessidades do cliente.' },
  { icon: 'bx-layout', title: 'Wireframe', desc: 'Criação do protótipo navegável para validação da estrutura.' },
  { icon: 'bx-paint', title: 'Design', desc: 'Desenvolvimento visual alinhado à identidade e experiência do usuário.' },
  { icon: 'bx-code-alt', title: 'Desenvolvimento', desc: 'Implementação do site, integrações e recursos personalizados.' },
  { icon: 'bx-rocket', title: 'Publicação', desc: 'Testes finais, ajustes e lançamento do site para o público.' },
]

const timeline = [
  { etapa: 'Briefing', entrega: 'Reunião e levantamento', tempo: '1-2 dias úteis' },
  { etapa: 'Wireframe', entrega: 'Protótipo navegável', tempo: '2-3 dias úteis' },
  { etapa: 'Design', entrega: 'Layout aprovado', tempo: '3-4 dias úteis' },
  { etapa: 'Desenvolvimento', entrega: 'Site funcional', tempo: '6-8 dias úteis' },
  { etapa: 'Publicação', entrega: 'Entrega final', tempo: '2-3 dias úteis' },
]

const differentials = [
  { icon: 'bx-user-voice', title: 'Foco em UX', desc: 'Experiência do usuário sempre em primeiro lugar.' },
  { icon: 'bx-search-alt-2', title: 'SEO avançado', desc: 'Seu site com máxima visibilidade no Google.' },
  { icon: 'bx-timer', title: 'Entrega ágil', desc: 'Processo rápido, transparente e sem burocracia.' },
  { icon: 'bx-headphone', title: 'Suporte online', desc: 'Acompanhamento próximo durante e após o projeto.' },
  { icon: 'bx-shield-quarter', title: 'Segurança total', desc: 'Proteção de dados e estabilidade para seu site.' },
]

const faqs = [
  { q: 'Quanto tempo leva para criar um site?', a: 'O prazo médio é de 15 a 20 dias úteis, dependendo da complexidade.' },
  { q: 'O site é responsivo?', a: 'Sim, todos os sites são 100% responsivos para mobile, tablet e desktop.' },
{ q: 'Posso gerenciar o conteúdo?', a: 'Sim, você terá acesso a um painel de gestão simples e intuitivo. Se o site for dinâmico, você poderá gerenciar o conteúdo.' },
  { q: 'O site é otimizado para Google?', a: 'Sim, entregamos com SEO técnico, entregamos de acordo com as métricas de Google.' },
  { q: 'Vocês oferecem suporte?', a: 'Sim, se for contrato o serviço mensal, nosso suporte acompanha você durante e após o projeto.' },
]

const tools = [
  { name: 'WordPress', desc: 'CMS flexível e robusto para sites, blogs e portais de conteúdo, com milhares de plugins e temas.' },
  { name: 'Blimber', desc: 'Hub de soluções para lojas online e físicas, com módulos de automação, gestão e vendas.' },
  { name: 'Tray', desc: 'Plataforma nacional para e-commerces, fácil de usar, com integrações e recursos para vendas online.' },
  { name: 'VTEX', desc: 'Solução robusta para grandes operações de e-commerce, com foco em escalabilidade e omnichannel.' },
  { name: 'Shopify', desc: 'Plataforma global para criação de lojas virtuais, intuitiva, segura e com diversos apps.' },
  { name: 'Nuvemshop', desc: 'Plataforma popular no Brasil e América Latina, ideal para pequenos e médios negócios online.' },
]
</script>

<style scoped>
/* section {
  scroll-margin-top: 80px;
}

#process {
  background: #f8f9fa;
}
#process .card {
  transition: box-shadow 0.2s, transform 0.2s;
  border-radius: 1.25rem;
  border: none;
}
#process .card:hover {
  box-shadow: 0 8px 32px rgba(13,110,253,0.10);
  transform: translateY(-6px) scale(1.03);
}
#process .bx {
  display: block;
  margin-bottom: 0.5rem;
}
#process .rounded-circle {
  border: 2px solid #0d6efd;
} */

.background-topo {
  background: url('/img/fundoherotec.svg') center center no-repeat fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#hero {
  height: 100vh;
  min-height: 100%;
}

.timeline-horizontal {
  margin-top: 3rem;
  margin-bottom: 3rem;
  min-height: 180px;
  position: relative;
}
.timeline-connector {
  height: 2px !important;
  background: linear-gradient(to right, #fff, #000, #fff) !important;
  top: -20%;
  transform: translateY(-50%);
  z-index: 0;
}
.timeline-step {
  min-width: 120px;
  max-width: 200px;
  position: relative;
}
@media (max-width: 991px) {
  .timeline-horizontal {
    display: none !important;
  }
  .timeline-mobile {
    display: flex !important;
    flex-direction: row !important;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .timeline-mobile-icons {
    min-width: 64px;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }
  .timeline-mobile-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #b53030;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  .timeline-mobile-connector {
    width: 4px;
    height: 32px;
    background: linear-gradient(to bottom, #fff, #000, #fff);
    margin: 0 auto;
    z-index: 1;
  }
  .timeline-mobile-texts {
    padding-left: 1rem;
    flex-grow: 1;
    justify-content: flex-start;
  }
  .timeline-mobile-texts h5, .timeline-mobile-texts .small {
    text-align: left !important;
  }
}
.glass-table {
  background: rgba(24,24,27,0.45) !important;
  border-radius: 1.5rem !important;
  overflow: hidden !important;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.12) !important;
}
.glass-table th, .glass-table td {
  color: #fff !important;
  border: none !important;
  font-size: 0.95rem !important;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
  background: transparent !important;
}
.glass-table thead th {
  background: rgba(36,36,42,0.7) !important;
  color: #a1a1aa !important;
  letter-spacing: 0.05em;
  font-size: 0.95rem !important;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  border-bottom: 1px solid rgba(255,255,255,0.10) !important;
}
.glass-zebra {
  background: rgba(36,36,42,0.25) !important;
}
.glass-table tbody tr:hover {
  background: rgba(39,39,42,0.35) !important;
  transition: background 0.2s;
}

@media (max-width: 1440px) {
  #hero {
    margin-top: 80px!important;
    height: 100vh;
    min-height: 100%;
}
}

@media (max-width: 1199.98px) {
  #hero {
    margin-top: 60px!important;
    height: 100vh;
    min-height: 100%;
}
}

@media (max-width: 991.98px) {

}

@media (max-width: 767.98px) {
  #hero {
    margin-top: 110px!important;
    height: 100vh;
    min-height: 100%;
}
}

@media (max-width: 575.98px) {
  #hero h1{
  font-size: 2rem!important;
}
  #hero p{
    font-size: 1rem!important;
  }
  #hero span {
    font-size: 0.85rem!important;
  }
  #hero {
    margin-top: 50px!important;
    height: 100vh;
    min-height: 100%;
}
}

</style>