<template>
  <div class="container">
    <div class="gscard-border p-5">
      <form @submit.prevent="submitForm">
        <!-- Linha 1: Nome e Email -->
        <div class="row">
          <div class="col-md-6 mb-4">
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
        </div>
        
        <!-- Linha 2: Celular e Cidade -->
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="input-group">
              <span class="input-group-text">
                <i class="bx bx-phone"></i>
              </span>
              <input
                v-model="form.phone"
                v-mask="phoneMask"
                placeholder="Celular*"
                class="form-control input-text-size"
                required
              />
            </div>
          </div>
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
        </div>

        <!-- Linha 3: UF e Empresa -->
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="input-group">
              <span class="input-group-text">
                <i class="bx bx-globe"></i>
              </span>
              <select
                v-model="form.uf"
                class="form-control input-text-size"
                required
              >
                <option value="" disabled selected>Selecione o UF*</option>
                <option v-for="estado in estados" :key="estado.sigla" :value="estado.sigla">
                  {{ estado.nome }}
                </option>
              </select>
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

        <!-- Linha 4: Mensagem -->
        <div class="form-group mb-4">
            <textarea
              v-model="form.message"
              placeholder="Nos conte um pouco sobre sua necessidade*"
              class="form-control textarea-height input-text-size"
              required
            ></textarea>
        </div>

        <!-- Linha 5: Termos e Botão Enviar -->
        <div class="form-group mb-4 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            v-model="form.terms"
            required
          />
          <label class="form-check-label">
            Ao enviar você será protegido por Google reCAPTCHA e sujeito à
            <!-- <NuxtLink to="/politica-de-privacidade" class="privacy-policy-link">Política de privacidade</NuxtLink> -->
          </label>
        </div>
        <div class="form-group text-center">
          <button type="submit" class="btn btn-primary">
            <i class="bx bx-send"></i> Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAsyncData } from '#app';

// Defina a interface para os estados
interface Estado {
  sigla: string;
  nome: string;
}

const form = ref({
  name: '',
  email: '',
  phone: '',
  city: '',
  uf: '',
  company: '',
  message: '',
  terms: false,
});

const phoneMask = '(##) #####-####'; // Máscara para celular com 9 dígitos
const estados = ref<Estado[]>([]); // Define que `estados` é um array de objetos `Estado`

onMounted(async () => {
  const { data, error } = await useAsyncData('estados', () =>
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(res => res.json())
  );

  if (error.value) {
    console.error('Erro ao carregar os estados:', error.value);
  } else {
    estados.value = data.value as Estado[]; // Cast para o tipo `Estado[]`
  }
});

const submitForm = async () => {
  try {
    const response = await fetch('http://localhost/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(form.value as any).toString(),
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
  --text-size: 16px;
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

.input-group > .form-control,
.input-group > select {
  border-left: 0;
}

.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.container {
  max-width: 800px;
  margin: auto;
}

.gscard-border {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
