<template>
  <div>
    <!-- Topo -->
<section class="d-flex align-items-center py-5 background-topo" id="index">
  <div class="container text-center py-5 my-5">
    <HeroAnimated />
    <p class="my-4 lead">Design, tecnologia e marketing para negócios que querem crescer com inteligência.</p>
    <div class="d-flex justify-content-center flex-column flex-md-row align-items-center px-2 gap-2 gap-sm-4">
      <NuxtLink to="#sobre" class="my-2 ms-md-2 btn btn-primary">
          Saiba mais sobre nós
      </NuxtLink>
      <NuxtLink to="/contato" class="my-2 ms-md-2 btn btn-primary">
          Fale com nosso time
      </NuxtLink>
    </div>
  </div>
</section>
<!-- Topo -->
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.background-topo {
  background: url('/img/background-degrade-new.svg') center center no-repeat fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#index {
  height: 100vh;
  min-height: 100%;
}

@media (max-width: 1440px) {

}

@media (max-width: 1200px) {

}

@media (max-width: 992px) {

}

@media (max-width: 768px) {

}

@media (max-width: 576px) {
  #index {
    font-size: 0.6rem!important;
  }
  .background-topo {
  background: url('/img/background-degrade-new.svg') center center no-repeat fixed;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
.lead {
  font-size: 0.95rem;
}
}

</style>