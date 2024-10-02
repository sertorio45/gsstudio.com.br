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
          <a href="#form"><Icon icon="bx bxs-chevrons-down my-3" fontSize="3em" color="#fff"/></a>
        </div>
      </div>
    </div>
  </section>
  
  <section id="contato" class="my-3">
    <div class="container">
      <div class="row">
        <div class="col my-5 py-5 d-sm-block" id="form">
          <Form />
        </div>
      </div>
    </div>
  </section>

  <!-- Nova Seção de Contato -->
  <section class="contact-options text-dark py-5 my-3">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-4 mb-4">
          <div class="contact-option gscard gscard-border p-4 h-100">
            <div class="icon-circle bg-white mb-3 mx-auto">
              <i class="bx bx-envelope"></i>
            </div>
            <h4>E-mail</h4>
            <p>Tem alguma dúvida?</p>
            <a href="mailto:hello@gsstudio.com.br" class="text-dark">hello@gsstudio.com.br</a>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="contact-option gscard gscard-border p-4 h-100">
            <div class="icon-circle bg-white mb-3 mx-auto">
              <i class="bx bx-phone"></i>
            </div>
            <h4>Localização</h4>
            <p><a href="https://maps.app.goo.gl/8h4Ee8B4VMYssSNM8" class="text-dark" target="_blank">Av. Maria de Jesus Condeixa, 600, Jardim Palma Travassos, CEP: 14091-240, Condomínio NEO, Ribeirão Preto - SP</a></p>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="contact-option gscard gscard-border p-4 h-100">
            <div class="icon-circle bg-white mb-3 mx-auto">
              <i class="bx bx-chat"></i>
            </div>
            <h4>Atendimento</h4>
            <p>Fale com nossa atendente Zoe</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#botModal">
              Abrir Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div class="modal fade" id="botModal" tabindex="-1" aria-labelledby="botModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered"> <!-- Adicionada a classe 'modal-dialog-centered' -->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <iframe
            src="https://bot.gsstudio.com.br/iniciar"
            style="border: none; width: 100%; height: 600px"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
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

<script setup>
import { useCardAnimation } from '~/composables/useCardAnimation';

useSeoMeta({
  title: 'Contato - Gs Studio - Agência de marketing, design e tecnologia',
});

// Chame o composable para inicializar a animação dos cartões
useCardAnimation();
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
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  border-radius: 50%;
  background-color: var(--color-tags) !important;
  margin-right: 15px;
  flex-shrink: 0;
}

.icon-circle i {
  font-size: 2rem;
  color: var(--color-secondary) !important;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

#contato .btn {
  margin-top: 15px;
}

#contato a {
  color: #000 !important;
  text-decoration: none;
}

/* Estilo da nova seção de contato */
.contact-options .contact-option {
  border-radius: 8px;
  color: #000; /* Texto preto */
}

.contact-options .contact-option a {
  color: #000; /* Links na cor preta */
  text-decoration: none;
}

.contact-options .contact-option h4 {
  margin-top: 15px;
}

.icon-circle {
  width: 60px;
  height: 60px;
  background-color: white;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.icon-circle i {
  color: #6C2BD9; /* Cor roxa dos ícones */
  font-size: 2rem;
}

/* Centralizando completamente o modal */
.modal-dialog-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 1rem);
}

.modal-content {
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}
</style>
