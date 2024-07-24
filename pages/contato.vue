<template>
    <!-- Fale conosco -->
    <section class="topo">
      <div class="container">
        <div class="row">
          <div class="col d-flex align-items-center">
            <NuxtLink to="/" class="m-1">Página inicial</NuxtLink> / <h1 class="m-1">Contato</h1>
          </div>
        </div>
      </div>
    </section>
    <section id="contato">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-4">
          <h2>Fale conosco</h2>
          <p>
            Preencha o formulário ou entre em contato em algum dos nossos canais e em breve vamos entrar em contato.
          </p>
          <div class="mt-4">
            <div class="contact-item">
              <div class="icon-circle">
                <i class="bx bxs-phone"></i>
              </div>
              <span>Telefone: (xx) xxxx-xxxx</span>
            </div>
            <div class="contact-item">
              <div class="icon-circle">
                <i class="bx bxs-map"></i>
              </div>
              <span>Avenida Maria de Jesus Condeixa, 600, Sala 424, Ribeirão Preto, São Paulo</span>
            </div>
          </div>
        </div>
        <div class="col-8">
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
  background-color: #f1f1f1;
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
</style>
