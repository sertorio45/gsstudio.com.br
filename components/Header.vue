<!-- components/Header.vue -->
<template>
  <header class="w-100 shadow custom-header bg-light">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <!-- Coluna da Logo -->
        <div class="col-2">
          <a href="/" class="d-flex">
          <img src="/logotipo.svg" alt="Logo" class="logo" />
          </a>
        </div>
        
        <!-- Coluna da Navegação -->
        <div class="col-8 d-flex justify-content-center">
          <nav>
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link">Página inicial</NuxtLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Produtos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Serviços</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Aprenda Conosco</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link">Contato</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
        
        <!-- Coluna do Botão -->
        <div class="col-2 d-flex justify-content-center">
          <button class="btn btn-primary">Click Me</button>
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
  z-index: 1000;
  padding-top: 10px;
  padding-bottom: 10px;
}

.nav-link {
  color: #000000 !important;
}

.nav-link:hover {
  color: var(--color-primary) !important;
}
</style>
