<!-- components/Header.vue -->
<template>
  <header class="w-100 shadow custom-header bg-light z">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <!-- Coluna da Logo -->
        <div class="col-2">
          <NuxtLink href="/" class="d-flex">
          <img src="/logotipo.svg" alt="Logo" class="logo" />
          </NuxtLink>
        </div>
        
        <!-- Coluna da Navegação -->
        <div class="col-8 d-flex justify-content-center">
          <nav>
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link">Página inicial</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/empresa" class="nav-link">Sobre nós</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/servicos" class="nav-link">Serviços</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/produtos" class="nav-link">Produtos</NuxtLink>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" href="#">Aprenda Conosco</a>
              </li> -->
              <li class="nav-item">
                <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/contato" class="nav-link">Contato</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
        
        <!-- Coluna do Botão -->
        <div class="col-2 d-flex justify-content-center">
          <button class="btn btn-primary">Orçamento</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.logo {
  max-width: 100%;
  width: 140px;
}

.simbolo {
  max-width: 2rem;
  height: auto;
  margin-right: 0.3rem;
}


.custom-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fff !important;
}

.nav-link {
  color: #000000 !important;
}

.nav-link:hover {
  color: var(--color-primary) !important;
}
</style>
