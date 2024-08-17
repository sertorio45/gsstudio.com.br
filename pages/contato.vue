<template>
  <!-- Fale conosco -->
  <section class="py-5 bg-dark d-flex my-5" id="topo">
    <div class="container d-flex justify-content-center align-items-center my-5 py-5">
      <div class="row">
        <div class="col text-center text-light my-2">
          <div class="my-2">
            <NuxtLink to="/" class="text-light">Página inicial</NuxtLink> / 
            <span>Contato</span>
          </div>
            <h1 class="text-light">Contato</h1>
        </div>
      </div>
    </div>
  </section>
  <section id="contato">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h2>Fale conosco</h2>
          <p>
            Preencha o formulário ou entre em contato em algum dos nossos canais e em breve vamos entrar em contato.
          </p>
          <div class="mt-4">
            <div class="contact-item d-flex align-items-center mb-3">
              <div class="icon-circle">
                <i class='bx bxl-whatsapp'></i>
              </div>
              <span><a href="https://api.whatsapp.com/send/?phone=551640422902&text=Ol%C3%A1%2C+vim+pelo+site%2C+gostaria+de+tirar+algumas+d%C3%BAvidas.&type=phone_number&app_absent=0" target="_blank">+55 (16) 4042-2902</a></span>
            </div>
            <div class="contact-item d-flex align-items-center">
              <div class="icon-circle">
                <i class="bx bxs-map"></i>
              </div>
              <span><a href="https://maps.app.goo.gl/uGtYZvxZGYV1KemF8" target="_blank">Avenida Maria de Jesus Condeixa, 600, Sala 424, Ribeirão Preto, São Paulo</a></span>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <Form />
        </div>
      </div>
    </div>
  </section>
  <!-- Fale conosco -->
</template>

<script>
import Form from '~/components/Form.vue'

export default {
  components: {
    Form
  },
  data() {
    return {
      currentComponent: null
    }
  },
  methods: {
    showComponent(component) {
      this.currentComponent = component;
    },
    resetComponent() {
      this.currentComponent = null;
    }
  }
}
</script>

<style scoped>
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
  width: 50px;
  height: 50px;
  min-width: 50px; /* Garante que o tamanho não mude */
  min-height: 50px; /* Garante que o tamanho não mude */
  border-radius: 50%;
  background-color: var(--color-tags);
  margin-right: 15px;
  flex-shrink: 0; /* Impede que o tamanho diminua */
}

.icon-circle i {
  font-size: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.contact-item span.material-icons {
  font-size: 30px;
}

#contato .btn {
  margin-top: 15px;
}

#contato a {
  color: #000 !important;
  text-decoration: none;
}
</style>
