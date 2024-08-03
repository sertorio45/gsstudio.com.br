<template>
  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="gscard-border p-5">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <div class="row">
            <div class="col-12 mb-4">
              <div class="input-group">
                <span class="input-group-text">
                  <i class="bx bx-user"></i>
                </span>
                <input
                  v-model="form.name"
                  placeholder="Seu nome completo*"
                  class="form-control input-text-size"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="input-group">
              <span class="input-group-text">
                <i class="bx bx-envelope"></i>
              </span>
              <input
                v-model="form.email"
                type="email"
                placeholder="Seu melhor e-mail*"
                class="form-control input-text-size"
                required
              />
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="input-group">
              <span class="input-group-text">
                <i class="bx bx-phone"></i>
              </span>
              <input
                v-model="form.phone"
                placeholder="Celular*"
                class="form-control input-text-size"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="input-group">
              <span class="input-group-text">
                <i class="bx bx-map"></i>
              </span>
              <input
                v-model="form.city"
                placeholder="Cidade*"
                class="form-control input-text-size"
                required
              />
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="input-group">
              <span class="input-group-text">
                <i class="bx bx-building"></i>
              </span>
              <input
                v-model="form.company"
                placeholder="Empresa*"
                class="form-control input-text-size"
                required
              />
            </div>
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
          <button type="submit" class="btn btn-primary">
            <i class="bx bx-send"></i> Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  phone: '',
  city: '',
  company: '',
  message: '',
  terms: false
});

const submitForm = async () => {
  try {
    const response = await fetch('http://localhost/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(form.value as any).toString()
    });
    const result = await response.text();
    alert(result);
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

.privacy-policy-link:hover {
  text-decoration: underline;
}
.input-text-size {
  font-size: var(--text-size);
}
.textarea-height {
  height: 150px; /* Ajuste para a altura desejada */
}
.input-group-text {
  background-color: #fff;
  border: 1px solid #ced4da;
  border-right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
}
.input-group > .form-control {
  border-left: 0;
}
</style>
