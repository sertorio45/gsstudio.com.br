<template>
  <!-- Fale conosco -->
  <section class="topo">
    <div class="container">
      <div class="row">
        <div class="col d-flex align-items-center flex-wrap">
          <NuxtLink to="/" class="m-1">Página inicial</NuxtLink> / 
          <h1 class="m-1">Serviços</h1>
        </div>
      </div>
    </div>
  </section>

  <!-- Hero Section -->
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col text-center text-md-start">
          <h1>Transforme Sua Visão em Realidade</h1>
          <p>Descubra nossos serviços em Design, Marketing e Tecnologia para impulsionar o crescimento do seu negócio.</p>
          <NuxtLink to="/contato" class="btn btn-primary btn-lg">Entre em Contato</NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Design Section -->
  <section id="design" class="py-5 min-vh-100">
    <div class="container">
      <div class="row mb-4">
        <div class="col text-center">
          <h2>Design</h2>
          <p>Criação de Marcas, Comunicação Visual, Web Design</p>
        </div>
      </div>
      <div class="row text-center gy-4">
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="icons/servicos/branding.svg" class="p-2 my-1" width="100px"/>
            <h3>Criação de Marcas</h3>
            <p>Desenvolvemos identidades visuais que capturam a essência da sua empresa e se conectam com seu público-alvo.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="icons/servicos/comunicacao_visual.svg" class="p-2 my-1" width="100px"/>
            <h3>Comunicação Visual</h3>
            <p>Projetamos materiais visuais impactantes que reforçam a sua mensagem e destacam a sua marca.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="icons/servicos/producao_de_video.svg" class="p-2 my-1" width="100px"/>
            <h3>Audiovisual</h3>
            <p>Produzimos vídeos e outros conteúdos audiovisuais que capturam a atenção e transmitem sua mensagem de forma envolvente.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Marketing Section -->
  <section id="marketing" class="py-5 bg-light min-vh-100">
    <div class="container">
      <div class="row mb-4">
        <div class="col text-center">
          <h2>Marketing</h2>
          <p>Gestão de Redes Sociais, Tráfego Pago, Otimização SEO, Audiovisual</p>
        </div>
      </div>
      <div class="row text-center gy-4">
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="icons/servicos/gestao_de_conteudo.svg" class="p-2 my-1" width="100px"/>
            <h3>Gestão de Redes Sociais</h3>
            <p>Desenvolvemos estratégias personalizadas para aumentar a sua presença nas redes sociais.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="icons/servicos/trafego_pago.svg" class="p-2 my-1" width="100px"/>
            <h3>Tráfego Pago</h3>
            <p>Maximize o retorno sobre o investimento com campanhas de publicidade pagas eficientes.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="icons/servicos/otimizacao_seo.svg" class="p-2 my-1" width="100px"/>
            <h3>Otimização SEO</h3>
            <p>Melhore a visibilidade do seu site nos motores de busca com nossas técnicas avançadas de SEO.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Tecnologia Section -->
  <section id="tecnologia" class="py-5 min-vh-100">
    <div class="container">
      <div class="row mb-4">
        <div class="col text-center">
          <h2>Tecnologia</h2>
          <p>Desenvolvimento de Sites, Lojas Virtuais, Soluções Personalizadas</p>
        </div>
      </div>
      <div class="row text-center gy-4">
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="icons/servicos/sites.svg" class="p-2 my-1" width="100px"/>
            <h3>Desenvolvimento de Sites</h3>
            <p>Construímos sites personalizados que não apenas parecem incríveis, mas também funcionam perfeitamente.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="icons/servicos/lojas_virtuais.svg" class="p-2 my-1" width="100px"/>
            <h3>Lojas Virtuais</h3>
            <p>Criamos e-commerce robustos e escaláveis que proporcionam uma experiência de compra fluida para seus clientes.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="gscard gscard-border">
            <NuxtImg src="icons/servicos/branding.svg" class="p-2 my-1" width="100px"/>
            <h3>Soluções Personalizadas</h3>
            <p>Desenvolvemos soluções tecnológicas sob medida para atender às necessidades específicas do seu negócio.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="text-center gscard my-5" id="cta">
    <div class="container justify-content-center align-content-center bg-cta my-5">
      <div class="row">
        <div class="col text-light">
          <h2 class="text-light">Transforme Resultados com Design, Marketing e Tecnologia!</h2>
          <div class="subheadline d-flex justify-content-center py-2">
            <p>Potencialize seu negócio com soluções criativas e inovadoras. Nós entregamos resultados excepcionais através de estratégias personalizadas e tecnologia de ponta.</p>
          </div>
          <NuxtLink to="/contato" class="btn btn-white"><em>Começar orçamento</em></NuxtLink>  
        </div>
      </div>
    </div>
  </section>
  <!-- CTA -->
</template>

<script setup>
import { useCardAnimation } from '~/composables/useCardAnimation';

// Chame o composable para inicializar a animação dos cartões
useCardAnimation();
</script>

<style scoped>
.topo .col {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.topo .col h1 {
  margin-left: 5px;
  display: inline;
  color: #000;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

/* Ajuste de espaçamento entre cartões no mobile */
.gscard {
  margin-bottom: 20px;
}

/* Ajustes para CTA */
#cta .subheadline p {
  margin-bottom: 0;
  padding: 0 10px;
}
</style>
