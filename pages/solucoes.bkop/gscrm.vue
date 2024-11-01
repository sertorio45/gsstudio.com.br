<script setup>
import { useCardAnimation } from '../composables/useCardAnimation';

useSeoMeta({
  title: 'GSCRM - Aumente a Produtividade e Organize Suas Vendas',
  description: 'O GSCRM oferece uma solução completa para gerenciar leads, melhorar atendimento e maximizar vendas. Escolha o plano ideal para seu negócio!',
  ogTitle: 'GSCRM - Aumente a Produtividade e Organize Suas Vendas',
  ogDescription: 'Sistema moderno para simplificar a gestão de leads, aumentar performance de vendas e centralizar dados de clientes.',
  ogUrl: 'https://gscrm.com.br/',
  ogType: 'website',
  robots: 'index, follow',
  ogLocale: 'pt-br',
});

// Chama o composable para animação dos cartões
useCardAnimation();
</script>

<template>
  <!-- O Que é o GSCRM -->
  <section class="d-flex align-items-center justify-content-center min-vh-100" id="sobre">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5">
          <h2>Transforme a Gestão de Clientes com o GSCRM</h2>
          <p class="my-3">
            O GSCRM é um sistema moderno, desenvolvido para simplificar a gestão de leads, melhorar a performance do seu time de vendas e centralizar todos os dados do cliente em uma única plataforma.
          </p>
          <ul>
            <li>Acompanhe todas as etapas do funil de vendas</li>
            <li>Integração com e-mail e chat para comunicação ágil</li>
            <li>Dashboard intuitivo com relatórios em tempo real</li>
          </ul>
          <NuxtLink to="/planos" class="btn btn-primary">Conheça a Versão Completa</NuxtLink>
        </div>
        <div class="col-12 col-md-7 d-flex align-items-center justify-content-center text-center">
          <div class="row w-100">
            <div class="col-12 col-sm-6 col-md-4 d-flex mb-3">
              <div class="gscard gscard-border w-100">
                <i class="bx bx-user icon-circle"></i>
                <h3>Gestão de Leads</h3>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 d-flex mb-3">
              <div class="gscard gscard-border w-100">
                <i class="bx bx-line-chart icon-circle"></i>
                <h3>Relatórios de Vendas</h3>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 d-flex">
              <div class="gscard gscard-border w-100">
                <i class="bx bx-headphone icon-circle"></i>
                <h3>Suporte Integrado</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- O Que é o GSCRM -->

  <!-- Funcionalidades do GSCRM -->
  <section class="text-center d-flex align-items-center justify-content-center text-center my-5 py-5 bg-light py-5" id="funcionalidades">
    <div class="container">
      <h2>Funcionalidades Poderosas para Aumentar Sua Eficiência</h2>
      <p>Confira os recursos que fazem o GSCRM ser a escolha certa para sua empresa.</p>
      <div class="row">
        <div class="col-12 col-md-3 d-flex align-items-center justify-content-center mb-3">
          <div class="gscard gscard-border">
            <i class="bx bx-user icon-circle"></i>
            <h3>Gestão de Leads</h3>
            <p>Organize e priorize seus leads com automação e inteligência.</p>
          </div>
        </div>
        <div class="col-12 col-md-3 d-flex align-items-center justify-content-center mb-3">
          <div class="gscard gscard-border">
            <i class="bx bx-user icon-circle"></i>
            <h3>Relatórios e Análises</h3>
            <p>Acompanhe o desempenho das vendas em tempo real.</p>
          </div>
        </div>
        <div class="col-12 col-md-3 d-flex align-items-center justify-content-center mb-3">
          <div class="gscard gscard-border">
            <i class="bx bx-user icon-circle"></i>
            <h3>Suporte Integrado</h3>
            <p>Conexão direta com seu time de suporte para um atendimento de qualidade.</p>
          </div>
        </div>
        <div class="col-12 col-md-3 d-flex align-items-center justify-content-center mb-3">
          <div class="gscard gscard-border">
            <i class="bx bx-cog icon-circle"></i>
                <h3>Customização</h3>
            <p>Personalize o CRM de acordo com as necessidades do seu negócio.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Funcionalidades do GSCRM -->

  <!-- Planos e Preços -->
  <section class="text-center d-flex align-items-center justify-content-center text-center my-5 py-5 py-5" id="planos">
    <div class="container">
      <h2>Escolha o Plano Ideal para Sua Empresa</h2>
      <p>Dois planos sob medida para atender empresas de todos os portes.</p>
      <div class="row">
        <div class="col-12 col-md-6 d-flex align-items-center justify-content-center mb-3">
          <div class="gscard gscard-border w-100">
            <h3>GSCRM Essencial</h3>
            <p>Acesse todas as funcionalidades, sem suporte dedicado.</p>
            <h4>R$ 99/mês</h4>
            <NuxtLink to="/contato" class="btn btn-primary">Assinar Agora</NuxtLink>
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex align-items-center justify-content-center mb-3">
          <div class="gscard gscard-border w-100">
            <h3>GSCRM Premium</h3>
            <p>Funcionalidades completas + Suporte Premium para configuração.</p>
            <h4>R$ 199/mês</h4>
            <NuxtLink to="/contato" class="btn btn-primary">Assinar Agora</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Planos e Preços -->

  <!-- Depoimentos -->
  <section class="text-center d-flex align-items-center justify-content-center my-5 text-center py-5 bg-light py-5" id="depoimentos">
    <div class="container">
      <h2>O Que Nossos Clientes Dizem</h2>
      <div class="row">
        <div class="col-12 col-md-4 d-flex align-items-center justify-content-center mb-4">
          <div class="gscard gscard-border">
            <p>"O GSCRM revolucionou nossa gestão de clientes. Agora temos controle total sobre nosso pipeline e as vendas só aumentaram."</p>
            <h4>- João Silva, CEO da Empresa X</h4>
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex align-items-center justify-content-center mb-4">
          <div class="gscard gscard-border">
            <p>"O suporte premium fez toda a diferença. Configuraram tudo para nós, e o atendimento foi impecável."</p>
            <h4>- Maria Oliveira, Gerente de Vendas</h4>
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex align-items-center justify-content-center mb-4">
          <div class="gscard gscard-border">
            <p>"Usamos o GSCRM há 6 meses e a melhoria nos processos internos é visível. Recomendo para qualquer empresa!"</p>
            <h4>- Pedro Lima, Diretor de Operações</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Depoimentos -->
</template>

<script>
export default {
  methods: {
    scrollToElement(element) {
      const headerOffset = 50;
      const elementPosition = document.querySelector(element).offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  },
};
</script>

<style scoped>
h1, h2, h3, h4, h5 {
  font-family: 'Poppins', sans-serif;
}

/* Ícones bx dentro de círculos */
.icon-circle {
  display: inline-block;
  width: 60px;
  height: 60px;
  background-color: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto;
}


.gscard {
  padding: 2rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.gscard-border {
  border: 1px solid #e0e0e0;
}

/* Espaçamento com Bootstrap */
section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.btn-primary {
  background-color: #2575fc;
  border-color: #2575fc;
}

.btn-primary:hover {
  background-color: #6a11cb;
  border-color: #6a11cb;
}
</style>