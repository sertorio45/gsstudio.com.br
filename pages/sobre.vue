<template>
  <!-- Topo da página -->
  <section class="py-5 bg-dark d-flex mt-5 text-ligth">
    <div class="container d-flex justify-content-center align-items-center my-5 py-5">
      <div class="row">
        <div class="col text-center text-light my-2">
          <div class="my-2">
            <NuxtLink to="/" class="text-light">Página inicial</NuxtLink> /
            <span>Sobre</span>
          </div>
          <h1 class="text-light">Sobre a GS STUDIO</h1>
        </div>
      </div>
    </div>
  </section>

  <!-- Seção 1: Nossa História -->
<section class="py-5 min-vh-100 d-flex align-items-center justify-items-center bg-dark text-light" id="topo">
  <div class="container">
    <div class="row align-items-center g-5 my-5">
      <div class="col-md-6 mb-4 order-2 order-md-1">
        <img src="/img/ceo.webp" alt="Foto de Giovanni Sertorio" class="img-fluid">
        <!-- Botão que aparece apenas no mobile -->
        <a href="#marcos" class="btn btn-primary d-sm-block d-md-none my-4">Um pouco mais sobre nossa história</a>
      </div>
      <div class="col-md-6 order-1 order-md-2">
        <h2 class="text-light">Nossa Trajetória</h2>
        <p>
          A GS STUDIO foi fundada por Giovanni Sertorio, um entusiasta de tecnologia e design. Desde a adolescência, 
          Giovanni aprimorou suas habilidades em design gráfico, web design, hardware e programação. Com experiência em ensino, 
          ele formou diversos alunos nas áreas em que atua. Motivado a transformar o mercado de comunicação visual e marketing, 
          Giovanni criou a GS STUDIO para ajudar empresas a se destacarem com soluções criativas e de alta qualidade, 
          focadas em criar conexões impactantes com seus consumidores.
        </p>
        <!-- Botão que aparece apenas em tablets e telas maiores -->
        <a href="#marcos" class="btn btn-primary d-none d-md-inline-flex">Um pouco mais sobre nossa história</a>
      </div>
    </div>
  </div>
</section>

<section class="mission-vision-values">
  <div class="container">
    <div class="row">
      <!-- Missão -->
      <div class="col-md-4 col-sm-12 text-center">
        <i class="bx bxs-rocket"></i>
        <h3>Missão</h3>
        <p>Entregar excelência e inovação com agilidade, foco em resultados e total compromisso com clientes e parceiros.</p>
      </div>
      <!-- Visão -->
      <div class="col-md-4 col-sm-12 text-center">
        <i class="bx bxs-bulb"></i>
        <h3>Visão</h3>
        <p>Ser referência em soluções criativas e de alta qualidade, desenvolvendo projetos que integram comunicação visual, design, web design e marketing.</p>
      </div>
      <!-- Valores -->
      <div class="col-md-4 col-sm-12 text-center">
        <i class="bx bxs-heart"></i>
        <h3>Valores</h3>
        <p>Transformar a percepção de produtos e serviços através de estratégias eficazes, com foco em atrair clientes e gerar resultados comerciais.</p>
      </div>
    </div>
  </div>
</section>
  <!-- Seção 2: Linha do Tempo (Marcos Importantes) -->
  <section class="my-5 min-vh-100 py-5" id="marcos">
    <div class="container timeline-container my-5 py-5">
      <div class="row">
        <div class="col text-center">
          <h2 class="text-dark">Marcos Importantes</h2>
          <p>Ao longo dos anos, a GS STUDIO tem crescido e evoluído constantemente. Desde nossa fundação, expandimos nossos serviços, ampliamos nossa equipe e conquistamos projetos importantes que marcaram nossa trajetória.</p>
        </div>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content gscard gscard-border">
            <h4>2016</h4>
            <p>Início das atividades com redes sociais, focando em estratégias de comunicação e marketing indireto para gerar resultados eficazes.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content gscard gscard-border">
            <h4>2017</h4>
            <p>Fundação oficial da empresa em 17/03/2017, marcando o início de uma nova era.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content gscard gscard-border">
            <h4>2019</h4>
            <p>Expansão do ambiente online para uma sala comercial em Sertãozinho - SP, aumentando a proximidade com nossos clientes.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content gscard gscard-border">
            <h4>2020</h4>
            <p>Diante dos desafios impostos pela pandemia de COVID-19, voltamos a operar online, mas crescemos mais de 150%, demonstrando nossa resiliência e adaptabilidade.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content gscard gscard-border">
            <h4>2021</h4>
            <p>Giovanni Sertorio mudou-se para Ribeirão Preto com o objetivo de impulsionar ainda mais o crescimento da empresa. Mantivemos as operações online, com um crescimento contínuo e consistente a cada mês.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content gscard gscard-border">
            <h4>2022</h4>
            <p>A empresa se estabeleceu oficialmente em Ribeirão Preto, consolidando sua presença na região.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content gscard gscard-border">
            <h4>2023</h4>
            <p>Mudança para uma nova sala comercial, acompanhada de reformas estratégicas e a migração das equipes para modelos presenciais e híbridos. Também começamos a desenvolver e comercializar sistemas para facilitar vendas, gestão e atendimento de outras empresas.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content gscard gscard-border">
            <h4>2024</h4>
            <p>Com o avanço das tecnologias de desenvolvimento e as automações aprimoradas, continuamos a melhorar nossos processos de vendas, atendimento e produção. Nossos sistemas personalizados ajudam outras empresas a otimizar suas operações.</p>
          </div>
        </div>
      </div>
    </div>
  </section>




  <!-- Chamada para Ação -->
  <section class="py-5 bg-dark text-light text-center">
    <div class="container">
      <h2 class="mb-4  text-light ">Vamos Transformar Seu Negócio?</h2>
      <p class="lead">Se você deseja destacar sua marca e conectar-se de forma genuína com seus clientes, a GS STUDIO é o parceiro ideal.</p>
      <NuxtLink to="/contato" class="btn btn-primary btn-lg">Entre em Contato</NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { useCardAnimation } from '~/composables/useCardAnimation';

// Chame o composable para inicializar a animação dos cartões
useCardAnimation();
</script>

<style scoped>
.placeholder {
  background-color: #ccc; /* Cor cinza para os placeholders */
}

.timeline-container {
  max-width: 900px;
}


.timeline {
  position: relative;
  margin-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  border-left: 4px solid #ddd; /* Linha da timeline */
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 30px;
}

.timeline-item:before {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #6C2BD9; /* Cor dos pontos */
  left: -8px; /* Centraliza o ponto na linha */
  top: 0;
}

.timeline-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.timeline h4 {
  margin-bottom: 10px;
}

.topo .col {
  display: flex;
  align-items: center;
}

.topo .col h1 {
  margin-left: 5px;
  display: inline;
  font-weight: normal !important;
  color: #000;
}

.icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  border-radius: 50%;
  background-color: var(--color-tags) !important;
  margin-right: 15px;
  flex-shrink: 0;
}

.icon-circle i {
  font-size: 2rem;
  color: var(--color-secondary) !important;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

#contato .btn {
  margin-top: 15px;
}

#contato a {
  color: #000 !important;
  text-decoration: none;
}

.contact-options .contact-option {
  border-radius: 8px;
  color: #000;
}

.contact-options .contact-option a {
  color: #000;
  text-decoration: none;
}

.contact-options .contact-option h4 {
  margin-top: 15px;
}

.icon-circle {
  width: 60px;
  height: 60px;
  background-color: white;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.icon-circle i {
  color: #6C2BD9;
  font-size: 2rem;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 1rem);
}

.modal-content {
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}

#topo {
  background-image: 
    linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%, rgba(0, 0, 0, 0) 0%),
    url('img/fundo-header-section.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.mission-vision-values {
  padding: 50px 0;
  background-color: #f9f9f9;
}

.mission-vision-values .row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.mission-vision-values h3 {
  font-size: 1.8rem;
  margin-top: 20px;
  color: #333;
}

.mission-vision-values p {
  font-size: 1rem;
  color: #666;
  margin-top: 10px;
  padding: 0 15px;
}

.mission-vision-values .bx {
  font-size: 50px;
  color: var(--color-primary);
}

.mission-vision-values .col-md-4 {
  padding: 20px;
}

@media (max-width: 768px) {
  .mission-vision-values .col-md-4 {
    text-align: center;
  }
}

@media (max-width: 576px) {
  .mission-vision-values h3 {
    font-size: 1.5rem;
  }
  .mission-vision-values p {
    font-size: 0.9rem;
  }
  .mission-vision-values .bx {
    font-size: 40px;
  }
}

</style>
