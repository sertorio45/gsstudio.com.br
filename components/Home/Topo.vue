<template>
  <div>
    <!-- Topo -->
<section class="d-flex align-items-center mt-5 py-5 background-topo" id="index">
  <div class="container text-center py-5 my-5">
    <HeroAnimated />
    <p class="my-4">Design, tecnologia e marketing para negócios que querem crescer com inteligência.</p>
    <div class="d-flex justify-content-center flex-column flex-md-row align-items-center px-2">
      <NuxtLink to="#sobre" class="my-2 ms-md-2">
        <ButtonPrimary>
          Saiba mais sobre nós
        </ButtonPrimary>
      </NuxtLink>
      <NuxtLink to="/contato" class="my-2 ms-md-2">
        <ButtonPrimary>
          Fale com nosso time
        </ButtonPrimary>
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
  background: url('/img/fundohero.svg') center center no-repeat fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#index {
  height: 100vh;
  min-height: 100%;
}
</style>