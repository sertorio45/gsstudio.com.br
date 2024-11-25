<template>
  <footer>
    <!-- Copyright - Bootstrap Brain Component -->
    <div class="my-5">
      <div class="container text-center">
        <div class="row">
          <div class="col-12 d-flex flex-column align-items-center">
            <NuxtImg src="https://s3.gsstudio.com.br/gsstudio/branding/simbolo.svg" width="100px" class="rotate-image mb-3" alt="Agência GS STUDIO, branding, marketing e tecnologia." />
            <div class="copyright-wrapper text-center">
              &copy; 2016 - {{ currentYear }}. <br class="d-sm-none">Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style scoped>
.rotate-image {
  animation: rotation 3s infinite linear;
  max-width: 80px;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (min-width: 576px) {
  .rotate-image {
    max-width: 100px;
  }
}
</style>
