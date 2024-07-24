<template>
  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="gscard-border p-5">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <div class="row">
            <div class="col-12 mb-4">
              <input
                v-model="form.name"
                placeholder="Seu nome completo*"
                class="form-control input-text-size"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <input
              v-model="form.email"
              type="email"
              placeholder="Seu melhor e-mail*"
              class="form-control input-text-size"
              required
            />
          </div>
          <div class="col-md-6 mb-4">
            <input
              v-model="form.phone"
              placeholder="Celular*"
              class="form-control input-text-size"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <input
              v-model="form.city"
              placeholder="Cidade*"
              class="form-control input-text-size"
              required
            />
          </div>
          <div class="col-md-6 mb-4">
            <input
              v-model="form.company"
              placeholder="Empresa*"
              class="form-control input-text-size"
              required
            />
          </div>
        </div>
        <div class="form-group mb-4">
          <textarea
            v-model="form.message"
            placeholder="Nos conte um pouco sobre sua necessidade*"
            class="form-control textarea-height input-text-size"
            required
          ></textarea>
        </div>
        <div class="form-group mb-4 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            v-model="form.terms"
            required
          />
          <label class="form-check-label">
            Ao enviar você será protegido por Google reCAPTCHA e sujeito à
            <NuxtLink to="/politica-de-privacidade" class="privacy-policy-link">Política de privacidade</NuxtLink>
          </label>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useNuxtApp } from '#app';

const form = ref({
  name: '',
  email: '',
  phone: '',
  city: '',
  company: '',
  message: '',
  terms: false
});

const nuxtApp = useNuxtApp();
const axios = nuxtApp.$axios;

const submitForm = async () => {
  try {
    await axios.post('/api/send-email', form.value); // Use a rota proxy
    alert('Email enviado com sucesso!');
  } catch (error) {
    alert('Erro ao enviar email: ' + error);
  }
};
</script>

<style scoped>
:root {
  --text-size: 16px; /* Defina o valor que você deseja */
}

.btn-back {
  align-self: flex-start;
}
.privacy-policy-link {
  color: #ff3366; /* Ajuste para a cor desejada */
  text-decoration: none;
}
.privacy-policy-link:hover {
  text-decoration: underline;
}
.input-text-size {
  font-size: var(--text-size);
}
.textarea-height {
  height: 150px; /* Ajuste para a altura desejada */
}
</style>
