<!-- components/Header.vue -->
<template>
  <header :class="[
    'custom-header fixed-top',
    { 'header-open-mobile': isOpen, 'header-closed-mobile': !isOpen && isMobile }]">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <!-- Logo -->
      <a href="/" class="navbar-brand p-0">
        <NuxtImg src="logotipo.svg" alt="Logo" loading="lazy" width="120px" placeholder densities="x1 x2" class="img-fluid-custom" />
      </a>

      <!-- Botão do Menu Hamburguer para Mobile -->
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <div :class="['nav-icon', { open: isOpen }]">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      
      <!-- Navegação Desktop -->
      <nav class="navbar navbar-expand-lg navbar-dark d-none d-lg-flex ms-auto">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="/" class="nav-link">Início</a>
            </li>
            <li class="nav-item">
              <a href="/sobre" class="nav-link">Sobre nós</a>
            </li>
            <li class="nav-item">
              <a href="/servicos" class="nav-link">Serviços</a>
            </li>
            <li class="nav-item">
              <a href="/#portifolio" class="nav-link">Portifolio</a>
            </li>
            <li class="nav-item">
              <a href="/blog" class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
              <a href="/contato" class="nav-link">Contato</a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Botão de Orçamento Desktop -->
      <div class="d-none d-lg-flex ms-auto">
        <a class="whatsicon" href="https://api.whatsapp.com/send/?phone=551640422901&text=Ol%C3%A1%2C+vim+pelo+site%2C+gostaria+de+tirar+algumas+d%C3%BAvidas.&type=phone_number&app_absent=0" target="_blank">
          <i class='bx bxl-whatsapp'></i> 
        </a>
      </div>
    </div>

    <!-- Navegação Mobile (Fullscreen) -->
    <div :class="['mobile-menu-fullscreen', { 'show-fullscreen': isOpen }]">
      <ul class="mobile-navbar-nav">
        <li class="nav-item">
          <a href="/" class="nav-link" @click="toggleMenu">Início</a>
        </li>
        <li class="nav-item">
          <a href="/sobre" class="nav-link" @click="toggleMenu">Sobre nós</a>
        </li>
        <li class="nav-item">
          <a href="/servicos" class="nav-link" @click="toggleMenu">Serviços</a>
        </li>
        <li class="nav-item">
          <a href="/#portifolio" class="nav-link" @click="toggleMenu">Portifolio</a>
        </li>
        <li class="nav-item">
          <a href="/blog" class="nav-link" @click="toggleMenu">Blog</a>
        </li>
        <li class="nav-item">
          <a href="/contato" class="nav-link" @click="toggleMenu">Contato</a>
        </li>
      </ul>
      <div class="mobile-cta-button mt-4">
        <a class="btn btn-white" href="https://api.whatsapp.com/send/?phone=551640422901&text=Ol%C3%A1%2C+vim+pelo+site%2C+gostaria+de+tirar+algumas+d%C3%BAvidas.&type=phone_number&app_absent=0" target="_blank" @click="toggleMenu">Atendimento rápido</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const isMobile = ref(false);

function checkMobile() {
  isMobile.value = window.innerWidth < 992; // Bootstrap's lg breakpoint is 992px
}

function toggleMenu() {
  isOpen.value = !isOpen.value;
  if (isMobile.value) {
    if (isOpen.value) {
      document.body.style.overflow = 'hidden'; // Evita scroll do body quando menu mobile está aberto
    } else {
      document.body.style.overflow = '';
    }
  }
}

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
  document.body.style.overflow = ''; // Reseta o scroll do body ao desmontar
});
</script>

<style scoped>
/* Icone do whatsapp */
.whatsicon {
  background-color: var(--bs-black) !important;
  padding: 0.5rem !important;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff !important;
  font-size: 1.5rem !important;
  text-decoration: none !important;
  transform: scale(1);
  transition: all 0.3s ease-in-out !important;
}
.whatsicon:hover {
  background-image: linear-gradient(to top, var(--bs-primary), var(--bs-secondary)) !important;  
  color: #ffffff !important;
  transform: scale(1.1);
  transition: all 0.3s ease-in-out !important;
}
/* fim do icone do whatsapp */

/* Estilos para o cabeçalho moderno e transparente */
.custom-header {
  position: fixed;
  top: 1.5rem; /* Ajusta a distância do topo */
  left: 50%;
  transform: translateX(-50%);
  z-index: 9998;
  width: 700px; /* Largura automática para desktop */
  max-width: 95%; /* Evita que seja muito largo em telas grandes */
  padding: 0.75rem 1.5rem; /* py-3 pl-6 pr-6 */
  background-color: rgba(255, 255, 255, 0.7); /* Fundo branco translúcido para desktop e mobile */
  backdrop-filter: blur(10px); /* Efeito de desfoque */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Borda branca sutil */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra mais visível */
  border-radius: 9999px; /* Totalmente arredondado para desktop (rounded-pill) */
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out; /* Transição suave para todas as propriedades */
  border-color: #fff;
}

/* Ajustes para o cabeçalho no mobile */
@media (max-width: 991.98px) { /* Breakpoint 'lg' do Bootstrap */
  .custom-header {
    top: 1rem; /* Um pouco mais perto do topo em mobile */
    left: 1rem;
    transform: none; /* Remove a centralização em mobile */
    width: calc(100% - 2rem); /* Ocupa quase toda a largura */
    border-radius: 0.75rem; /* Menos arredondado em mobile (rounded-xl) */
    flex-direction: row; /* Garante que os itens do cabeçalho fiquem na linha */
    /* Este background será substituído por .header-open-mobile quando o menu estiver aberto */
    background-color: rgba(255, 255, 255, 0.513); /* Transparente quando fechado em mobile */
    border: 1px solid rgba(255, 255, 255, 0.1); /* Borda branca sutil */
  }
  
  .custom-header.header-open-mobile {
    border-radius: 10rem; /* Mantém arredondamento quando o menu abre */
    background-color: rgba(0, 0, 0, 0.95); /* Fundo preto quando o menu mobile está aberto */
    border: 1px solid rgba(0, 0, 0, 0.95); /* Borda preta */
  }
  .custom-header.header-closed-mobile {
    border-radius: 10rem; /* Mantém arredondamento quando o menu está fechado */
    background-color: rgba(255, 255, 255, 0.513); /* Fundo transparente quando o menu mobile está fechado */
    border: 1px solid rgba(255, 255, 255, 0.1); /* Borda branca sutil */
  }
}

.navbar-brand {
  padding: 0; /* Remove padding padrão do Bootstrap se houver */
}

.img-fluid-custom {
  max-width: 120px; /* Largura padrão para desktop */
  height: auto;
}

@media (max-width: 767.98px) { /* Breakpoint 'md' do Bootstrap */
  .img-fluid-custom {
    max-width: 100px; /* Reduz a largura em telas menores */
  }
}

.nav-link {
  color: #000000 !important; /* Links pretos para desktop */
  font-size: 0.9rem !important;
  padding: 0.2rem 0.3rem !important;
  transition: color 0.3s ease !important;
}

.nav-link:hover {
  color: var(--color-primary) !important;
  transition: color 0.3s ease !important;
}

.navbar-toggler {
  border: 0px;
  z-index: 1050;
  background-color: transparent !important;
  padding: 0.25rem 0.75rem; /* Ajusta o padding do botão */
}

/* Estilos para o ícone do menu hamburguer */
.nav-icon {
  width: 30px;
  height: 25px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.nav-icon span {
  display: block;
  position: absolute;
  height: 4px;
  width: 50%;
  background: #000000; /* Linhas PRETAS para o ícone */
  opacity: 1;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.nav-icon span:nth-child(even) {
  left: 50%;
  border-radius: 0 9px 9px 0;
}

.nav-icon span:nth-child(odd) {
  left: 0px;
  border-radius: 9px 0 0 9px;
}

.nav-icon span:nth-child(1),
.nav-icon span:nth-child(2) {
  top: 0px;
}

.nav-icon span:nth-child(3),
.nav-icon span:nth-child(4) {
  top: 9px;
}

.nav-icon span:nth-child(5),
.nav-icon span:nth-child(6) {
  top: 18px;
}

.nav-icon.open span:nth-child(1),
.nav-icon.open span:nth-child(6) {
  transform: rotate(45deg);
}

.nav-icon.open span:nth-child(2),
.nav-icon.open span:nth-child(5) {
  transform: rotate(-45deg);
}

.nav-icon.open span:nth-child(1) {
  left: 0px;
  top: 4px;
}

.nav-icon.open span:nth-child(2) {
  left: calc(50% - 5px);
  top: 4px;
}

.nav-icon.open span:nth-child(3) {
  left: -50%;
  opacity: 0;
}

.nav-icon.open span:nth-child(4) {
  left: 100%;
  opacity: 0;
}

.nav-icon.open span:nth-child(5) {
  left: 0px;
  top: 15px;
}

.nav-icon.open span:nth-child(6) {
  left: calc(50% - 5px);
  top: 15px;
}

.nav-icon.open span {
  background: #ffffff !important;
  z-index: ; /* Mudar para branco quando o menu estiver aberto */
}

/* Mobile Fullscreen Menu Overlay */
.mobile-menu-fullscreen {
  position: fixed;
  margin: 0 auto!important;
  width: 100vw;
  height: 100vh!important;
  top: -17px;
  left: -17px;
  background-color: rgba(0, 0, 0, 0.9)!important; /* Fundo bem escuro para o overlay */
  display: flex; /* Garante flexbox */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2; /* Z-index alto para garantir que esteja acima de tudo */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease; /* Transição para opacidade e visibilidade */
  padding-top: 4rem; /* Espaçamento do topo */
  pointer-events: none; /* Não interage quando oculto */
}

.mobile-menu-fullscreen.show-fullscreen {
  opacity: 1;
  visibility: visible;
  pointer-events: all; /* Permite interação quando visível */
}

.mobile-navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  width: 100%; /* Ocupa a largura total para centralizar links */
}

.mobile-navbar-nav .nav-item {
  margin: 1.5rem 0; /* Espaçamento generoso entre links */
}

.mobile-navbar-nav .nav-link {
  font-size: 1.75rem; /* Ajustado para mobile */
  line-height: 1.2;
  color: #fff !important;
  text-decoration: none;
  display: block; /* Garante que o link ocupe a largura total */
}

.mobile-navbar-nav .nav-link:hover {
  color: var(--color-primary) !important;
}

.mobile-cta-button .btn-primary {
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
}
</style>
