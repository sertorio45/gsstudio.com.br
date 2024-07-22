<template>
  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="gscard-border p-5">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <div class="row">
            <div class="col-12 mb-4">
              <vs-input
                v-model="form.name"
                placeholder="Seu nome completo*"
                class="input-text-size"
                required
              ></vs-input>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <vs-input
              v-model="form.email"
              type="email"
              placeholder="Seu melhor e-mail*"
              class="input-text-size"
              required
            ></vs-input>
          </div>
          <div class="col-md-6 mb-4">
            <vs-input
              v-model="form.phone"
              placeholder="Celular*"
              class="input-text-size"
              required
            ></vs-input>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <vs-input
              v-model="form.city"
              placeholder="Cidade*"
              class="input-text-size"
              required
            ></vs-input>
          </div>
          <div class="col-md-6 mb-4">
            <vs-input
              v-model="form.company"
              placeholder="Empresa*"
              class="input-text-size"
              required
            ></vs-input>
          </div>
        </div>
        <div class="form-group mb-4">
          <div class="vs-con-input">
            <textarea
              v-model="form.message"
              placeholder="Nos conte um pouco sobre sua necessidade*"
              class="vs-input textarea-height input-text-size"
              required
            ></textarea>
          </div>
        </div>
        <div class="form-group mb-4">
          <vs-checkbox v-model="form.terms" required>
            Ao enviar você será protegido por Google reCAPTCHA e sujeito à
            <NuxtLink to="/politica-de-privacidade" class="mx-1">Política de privacidade</NuxtLink>
          </vs-checkbox>
        </div>
        <!--
        <div class="form-group mb-4">
          <vs-checkbox v-model="form.recaptcha" required>
            Não sou um robô
          </vs-checkbox>
        </div>
        -->
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        city: '',
        company: '',
        message: '',
        terms: false
        // recaptcha: false
      }
    };
  },
  methods: {
    async submitForm() {
      // const token = await grecaptcha.execute('6Lc3T3AaAAAAAHl2NwoxkDpnzck6XAqqwv4caQy4', { action: 'submit' });
      // this.form.recaptcha = token;
      try {
        const response = await axios.post('/gsstudio/api/send-email', this.form);
        this.$vs.notification({
          color: 'success',
          position: 'bottom-right',
          text: 'Mensagem enviada com sucesso!',
          duration: 2000,
          progress: 'auto'
        });
        this.resetForm();
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'Ocorreu um erro ao enviar a mensagem.';
        console.error('Erro ao enviar a mensagem:', error);
        this.$vs.notification({
          color: 'danger',
          position: 'bottom-right',
          text: errorMessage,
          duration: 2000,
          progress: 'auto'
        });
      }
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        city: '',
        company: '',
        message: '',
        terms: false,
        // recaptcha: ''
      };
    }
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
.input-text-size .vs-input, 
.input-text-size .vs-input__input,
.input-text-size textarea {
  font-size: var(--text-size);
}
.textarea-height {
  height: 150px; /* Ajuste para a altura desejada */
}
.vs-con-input textarea.vs-input {
  width: 100%;
  padding: 10px;
  font-size: var(--text-size);
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  resize: vertical;
}
</style>
