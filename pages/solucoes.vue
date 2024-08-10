<template>
  <!-- Fale conosco -->
  <section class="topo bg-light">
    <div class="container">
      <div class="row">
        <div class="col d-flex align-items-center flex-wrap">
          <NuxtLink to="/" class="m-1">Página inicial</NuxtLink> / 
          <h1 class="m-1">Soluções</h1>
        </div>
      </div>
    </div>
  </section>

  <!-- Soluções Section -->
  <section id="solucoes" class="py-5 justify-items-center align-items-center">
    <div class="container my-5">
      <div class="row">
        <div class="col text-center">
          <h2>Nossas Soluções</h2>
          <p>Explore as ferramentas que podem transformar seu negócio</p>
        </div>
      </div>
      <div class="row text-center my-3">
        <div class="col-12 col-sm-6 col-md-3">
          <div class="gscard gscard-border">
            <NuxtImg src="https://s3.gsstudio.com.br/gsstudio/branding/simbolo.svg" width="100px" class="rotate-image mb-3" />
            <h3>gscloud</h3>
            <p>Uma solução robusta de servidor em nuvem, ideal para hospedagem de sites, gerenciamento de lojas virtuais e e-mails corporativos, com alta segurança e escalabilidade.</p>
            
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <div class="gscard gscard-border">
            <NuxtImg src="https://s3.gsstudio.com.br/gsstudio/branding/simbolo.svg" width="100px" class="rotate-image mb-3" />
            <h3>gschat</h3>
            <p>Ferramenta poderosa para envio de mensagens em múltiplas plataformas, incluindo WhatsApp, chat integrado para websites, Messenger, e muito mais, proporcionando uma comunicação eficiente e centralizada.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <div class="gscard gscard-border">
            <NuxtImg src="https://s3.gsstudio.com.br/gsstudio/branding/simbolo.svg" width="100px" class="rotate-image mb-3" />
            <h3>gscrm</h3>
            <p>Plataforma completa de CRM para controle e gerenciamento de contatos, otimizada para melhorar a organização e eficiência no relacionamento com seus clientes.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <div class="gscard gscard-border">
            <NuxtImg src="https://s3.gsstudio.com.br/gsstudio/branding/simbolo.svg" width="100px" class="rotate-image mb-3" />
            <h3>gsendy</h3>
            <p>Solução avançada para envio de campanhas de e-mail marketing, com alta taxa de entrega e capacidade de segmentação, ideal para alcançar o público certo de forma eficaz.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Depoimentos Section -->
  <section id="depoimentos" class="bg-light py-5 justify-items-center align-items-center">
    <div class="container my-5">
      <div class="row">
        <div class="col text-center">
          <h2 class="mb-4">O que nossos clientes dizem</h2>
        </div>
      </div>  
      <div class="row text-center">
        <div class="col-12 col-md-4 d-flex">
          <div class="gscard gscard-border d-flex flex-column justify-content-center align-items-center">
            <p class="mb-4 text-center">"O gscloud transformou a maneira como gerenciamos nossos recursos digitais. A segurança, escalabilidade e acessibilidade são incomparáveis!"</p>
            <span>João Silva, <cite title="Source Title">Empresa XYZ</cite></span>
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex">
          <div class="gscard gscard-border d-flex flex-column justify-content-center align-items-center">
            <p class="mb-4 text-center">"Com o gscrm, nosso controle de contatos se tornou muito mais eficiente, o que resultou em um aumento significativo nas vendas e na satisfação dos clientes!"</p>
            <span>Ana Pereira, <cite title="Source Title">Loja ABC</cite></span>
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex">
          <div class="gscard gscard-border d-flex flex-column justify-content-center align-items-center">
            <p class="mb-4 text-center">"O gsendy elevou nossas campanhas de e-mail marketing a um novo patamar. Agora conseguimos alcançar nosso público-alvo com precisão e eficiência. Super recomendo!"</p>
            <span>Carlos Lima, <cite title="Source Title">Startup DEF</cite></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section id="faq" class="py-5">
    <div class="container my-5">
      <div class="row mb-4">
        <div class="col text-center">
          <h2>Perguntas Frequentes</h2>
        </div>
      </div>
      <div class="accordion" id="accordionFAQ">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Como funciona o gscloud?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
              O gscloud oferece uma infraestrutura de servidor em nuvem que permite hospedar sites, gerenciar lojas virtuais e operar e-mails corporativos com segurança, confiabilidade e alta performance.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              O que é o gschat?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
              O gschat é uma solução integrada para comunicação via mensagens, que abrange WhatsApp, chat para websites, Messenger e muito mais, permitindo que empresas mantenham uma comunicação direta e eficiente com seus clientes.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Quais os benefícios do gscrm?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
              O gscrm é ideal para o gerenciamento completo de contatos e clientes, oferecendo funcionalidades que auxiliam na organização de dados, acompanhamento de vendas e otimização do atendimento ao cliente.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Como o gsendy pode ajudar meu negócio?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
              O gsendy é projetado para potencializar suas campanhas de e-mail marketing, garantindo alta taxa de entrega, personalização das mensagens e análise de desempenho, maximizando o alcance e o impacto de suas campanhas.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="text-center gscard my-5 bg-light" id="cta">
    <div class="container justify-content-center align-content-center bg-cta my-5">
      <div class="row">
        <div class="col text-light">
          <h2 class="text-light">Pronto para impulsionar seu negócio com nossas soluções?</h2>
          <div class="subheadline d-flex justify-content-center py-2">
            <p>Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer e prosperar no ambiente digital.</p>
          </div>
          <NuxtLink to="/contato" class="btn btn-white"><em>Entre em contato</em></NuxtLink>  
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
/* Seção "topo" */
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

/* Seção CTA */
#cta {
  padding: 60px 0; /* Aumenta o espaçamento superior e inferior */
  background-color: #f8f9fa;
  text-align: center;
}

#cta .subheadline p {
  margin-bottom: 0;
  padding: 0 10px;
}

/* Accordion Styles */
.accordion-button {
  color: #000;
}

.accordion-button:not(.collapsed) {
  background-color: var(--color-tags);
  color: var(--color-secondary);
}

.accordion-button:focus {
  box-shadow: none;
}

.accordion-body {
  font-size: 0.95rem;
  color: #6c757d;
}

</style>
