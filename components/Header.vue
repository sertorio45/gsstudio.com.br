<!-- components/Header.vue -->
<template>
  <header class="w-100 shadow custom-header bg-light">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-lightcontainer">
        <!-- Logo -->
        <NuxtLink to="/" class="navbar-brand">
          <NuxtImg src="https://s3.gsstudio.com.br/gsstudio/branding/gsstudio-logotipo.svg" alt="Logo" loading="eager" width="180" placeholder />
        </NuxtLink>

        <!-- Botão do Menu Hamburguer para Mobile -->
        <button
          class="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMenu"
          style="z-index: 1050;" 
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

        <!-- Navegação Fullscreen -->
        <div :class="['navbar-collapse justify-content-center', { 'show-fullscreen': isOpen }]" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" @click="toggleMenu">Início</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/sobre" class="nav-link" @click="toggleMenu">Sobre nós</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/servicos" class="nav-link" @click="toggleMenu">Serviços</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/#portifolio" class="nav-link" @click="toggleMenu">Portifolio</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/blog" class="nav-link" @click="toggleMenu">Blog</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contato" class="nav-link" @click="toggleMenu">Contato</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Botão de Orçamento -->
        <div class="d-none d-lg-flex ms-auto">
          <a class="btn btn-primary" href="https://api.whatsapp.com/send/?phone=551640422901&text=Ol%C3%A1%2C+vim+pelo+site%2C+gostaria+de+tirar+algumas+d%C3%BAvidas.&type=phone_number&app_absent=0" target="_blank">Atendimento rápido</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

function toggleMenu() {
  // Verifica se a largura da tela é menor ou igual a 992px (tamanho onde o menu hambúrguer deve aparecer)
  if (window.innerWidth <= 992) {
    isOpen.value = !isOpen.value;
  }
}
</script>

<style scoped>
.logo {
  max-width: 100%;
  width: 180px;
}

.custom-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9998;
  
}

.nav-link {
  color: #000000 !important;
  font-size: 2rem; /* Aumenta o tamanho da fonte */
}

.nav-link:hover {
  color: var(--color-primary) !important;
}

.navbar-toggler {
  border: 0;
  z-index: 1050; /* Garante que o botão fique na frente do menu fullscreen */
  position: relative; /* Mantém a posição original */
}

/* Fullscreen para o Navbar */
.navbar-collapse {
  display: none; /* Esconde o menu por padrão */
  
}

.navbar-collapse.show-fullscreen {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 998; /* Um nível abaixo do botão */
  transition: opacity 0.3s ease;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.nav-item {
  margin: 1rem 0; /* Espaçamento entre os itens */
}

/* Efeito do ícone do menu hamburguer */
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
  background: var(--color-secondary);
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

@media (max-width: 768px) {
  #navbarNav a {
    font-size: var(--texto-medio) !important;
    line-height: 10px;
    color: #fff !important;
  }
  #navbarNav a:hover {
    color: var(--color-primary) !important;
  }
  #navbarNav {
    background-color: #000;
  }
  .nav-icon span {
    display: block;
    position: absolute;
    height: 4px;
    width: 50%;
    background: var(--color-primary);
    opacity: 1;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
}
</style>
