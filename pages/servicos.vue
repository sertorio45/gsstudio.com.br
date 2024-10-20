<template>
  <!-- Hero Section -->
  <section class="bg-dark min-vh-100 d-flex justify-content-center align-items-center pt-5" id="topo">
    <div class="container d-flex ">
      <div class="row">
        <div class="col text-center text-light my-2">
          <div class="my-2">
            <NuxtLink to="/" class="text-light">Página inicial</NuxtLink> / 
            <span>Serviços</span>
          </div>
            <h1 class="text-light">Transformando <em>ideias</em> em <em>resultados</em> exponenciais.</h1>
            <p class="my-4">Descubra nossos serviços em Design, Marketing e Tecnologia para impulsionar o crescimento do seu negócio.</p>
            <a href="#tecnologia"><Icon icon="bx bxs-chevrons-down my-3" fontSize="3em" color="#fff"/></a>
        </div>
      </div>
    </div>
  </section>

  <!-- Tecnologia Section -->
  <section id="tecnologia" class="my-5 py-5 min-vh-100 d-flex">
    <div class="container justify-content-center align-content-center">
      <div class="row mb-4">
        <div class="col text-center">
          <h2>Tecnologia</h2>
          <p>Desenvolvimento de Sites, Lojas Virtuais, Soluções Personalizadas</p>
        </div>
      </div>
      <div class="row text-center gy-4">
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="/icons/servicos/sites.svg" class="p-2 my-1" width="100px" alt="Ícone de desenvolvimento de sites"/>
            <h3>Desenvolvimento de Sites</h3>
            <p>Construímos sites personalizados que não apenas parecem incríveis, mas também funcionam perfeitamente.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="/icons/servicos/lojas_virtuais.svg" class="p-2 my-1" width="100px" alt="Ícone de lojas virtuais"/>
            <h3>Lojas Virtuais</h3>
            <p>Criamos e-commerce robustos e escaláveis que proporcionam uma experiência de compra fluida para seus clientes.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="/icons/servicos/branding.svg" class="p-2 my-1" width="100px" alt="Ícone de soluções personalizadas"/>
            <h3>Soluções Personalizadas</h3>
            <p>Desenvolvemos soluções tecnológicas sob medida para atender às necessidades específicas do seu negócio.</p>
          </div>
        </div>
        <div class="my-5">
            <NuxtLink to="/contato" class="btn btn-primary">Faça agora seu orçamento</NuxtLink>
          </div>
      </div>
    </div>
  </section>

  <!-- Marketing Section -->
  <section id="marketing" class="py-5 bg-light min-vh-100 d-flex">
    <div class="container my-5 justify-content-center align-content-center text-center ">
      <div class="row mb-4">
        <div class="col text-center">
          <h2>Marketing</h2>
          <p>Gestão de Redes Sociais, Tráfego Pago, Otimização SEO, Audiovisual</p>
        </div>
      </div>
      <div class="row text-center gy-4">
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="/icons/servicos/gestao_de_conteudo.svg" class="p-2 my-1" width="100px" alt="Ícone de gestão de redes sociais"/>
            <h3>Gestão de Redes Sociais</h3>
            <p>Desenvolvemos estratégias personalizadas para aumentar a sua presença nas redes sociais.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="/icons/servicos/trafego_pago.svg" class="p-2 my-1" width="100px" alt="Ícone de tráfego pago"/>
            <h3>Tráfego Pago</h3>
            <p>Maximize o retorno sobre o investimento com campanhas de publicidade pagas eficientes.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="/icons/servicos/otimizacao_seo.svg" class="p-2 my-1" width="100px" alt="Ícone de otimização SEO"/>
            <h3>Otimização SEO</h3>
            <p>Melhore a visibilidade do seu site nos motores de busca com nossas técnicas avançadas de SEO.</p>
          </div>
        </div>
      </div>
      <div class="my-5">
            <NuxtLink to="/contato" class="btn btn-primary">Quero crescer minha marca, produtos e serviços</NuxtLink>
      </div>
    </div>
  </section>

  <!-- Design Section -->
  <section id="design" class="py-5 min-vh-100 d-flex">
    <div class="container my-5 justify-content-center align-content-center">
      <div class="row mb-4">
        <div class="col text-center">
          <h2>Design</h2>
          <p>Criação de Marcas, Comunicação Visual, Web Design</p>
        </div>
      </div>
      <div class="row text-center gy-4">
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="/icons/servicos/branding.svg" class="p-2 my-1" width="100px" alt="Ícone de criação de marcas"/>
            <h3>Criação de Marcas</h3>
            <p>Desenvolvemos identidades visuais que capturam a essência da sua empresa e se conectam com seu público-alvo.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="/icons/servicos/comunicacao_visual.svg" class="p-2 my-1" width="100px" alt="Ícone de comunicação visual"/>
            <h3>Comunicação Visual</h3>
            <p>Projetamos materiais visuais impactantes que reforçam a sua mensagem e destacam a sua marca.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="/icons/servicos/producao_de_video.svg" class="p-2 my-1" width="100px" alt="Ícone de produção audiovisual"/>
            <h3>Audiovisual</h3>
            <p>Produzimos vídeos e outros conteúdos audiovisuais que capturam a atenção e transmitem sua mensagem de forma envolvente.</p>
          </div>
        </div>
          <div class="my-5">
            <NuxtLink to="/contato" class="btn btn-primary">Quero posicionar minha marca</NuxtLink>
          </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="text-center gscard" id="cta">
      <div class="container d-flex align-items-center justify-content-center bg-cta">
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
</template>

<script setup>
import { useCardAnimation } from '~/composables/useCardAnimation';

defineOgImage({ url: 'https://gsstudio.com.br/img/thumb_gsstudio.jpg', width: 1200, height: 600, alt: 'GS STUDIO - Marketing, comunicação e desenvolvimento web' })

useHead ({
      meta: [
        { name: 'lang', content: 'pt-BR' },
        { name: 'language', content: 'pt-BR' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'canonical', content: 'https://www.gsstudio.com.br/servicos' },
        { name: 'keywords', content: 'marketing digital, criação de sites, otimização de sites (SEO), Google Ads, campanhas online, agência digital, agência de marketing, lojas virtuais, e-commerce, gestão de redes sociais, desenvolvimento web, design responsivo, tráfego pago, branding, identidade visual, marketing para empresas, marketing para pequenas empresas, marketing em Sertãozinho, marketing em Ribeirão Preto, SEO local, social media marketing, estratégia de marketing digital, anúncios online, agência de SEO, criação de conteúdo, marketing de conteúdo, hospedagem de sites, otimização de conversão (CRO), email marketing, automação de marketing, consultoria em marketing digital, campanhas pagas no Google, performance digital, WordPress, criação de blogs, gestão de tráfego, otimização de desempenho do site, desenvolvimento de sistemas web, produção audiovisual, estratégias de marketing SP, agência de marketing em SP.' },
        { name: 'canonical', content: 'https://www.gsstudio.com.br/servicos' },
      ],
    })
    
    useSeoMeta({
      title: 'Serviços',
      description: 'Soluções completas para marketing, comunicação e desenvolvimento web.',
      ogTitle: 'Serviços',
      ogDescription: 'Soluções completas para marketing, comunicação e desenvolvimento web.',
      ogUrl: 'https://gsstudio.com.br/servicos',
      ogSiteName: 'GS STUDIO',
      ogLocale: 'pt_BR',
    });

// Chame o composable para inicializar a animação dos cartões
useCardAnimation();
</script>

<style scoped>
#topo {
  background-image: url('/img/fundo-header-default.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

#topo h1 {
  font-size: var(--texto-grande) !important;
}
#topo p {
  font-size: var(--texto-medio) !important;
}

.topo .col {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.topo .col h1 {
  margin-left: 5px;
  display: inline;
  font-weight: normal !important;
  color: #000;
}
</style>
