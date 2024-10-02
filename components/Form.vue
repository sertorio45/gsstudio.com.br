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

        <!-- Linha 2: UF e Cidade -->
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="input-group">
              <span class="input-group-text">
                <i class="bx bx-globe"></i>
              </span>
              <select
                v-model="form.uf"
                @change="fetchCidades"
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
                <i class="bx bx-map"></i>
              </span>
              <select
                v-model="form.city"
                class="form-control input-text-size"
                required
              >
                <option value="" disabled selected>Selecione a cidade*</option>
                <option v-for="cidade in cidades" :key="cidade.id" :value="cidade.nome">
                  {{ cidade.nome }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Linha 3: Celular e Empresa -->
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="input-group">
              <span class="input-group-text">
                <i class="bx bx-phone"></i>
              </span>
              <input
                v-model="form.phone"
                v-mask="'(00) 00000-0000'"
                placeholder="Celular*"
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
                placeholder="Nome da empresa*"
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
            <NuxtLink to="/politica-de-privacidade" class="privacy-policy-link">Política de privacidade</NuxtLink>
          </label>
        </div>
        <div class="form-group text-center">
          <button
            type="submit"
            :class="['btn m-0', isSubmitting ? 'btn-secondary' : success ? 'btn-success' : 'btn-primary']"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Enviando...
            </span>
            <span v-else-if="success">
              <i class="bx bx-check-circle"></i> Sucesso!
            </span>
            <span v-else>
              <i class="bx bx-send"></i> Enviar
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Defina a interface para os estados e cidades
interface Estado {
  sigla: string;
  nome: string;
}

interface Cidade {
  id: number;
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

const estados = ref<Estado[]>([]); // Estados do IBGE
const cidades = ref<Cidade[]>([]); // Cidades filtradas pelo estado selecionado
const isSubmitting = ref(false); // Variável para controlar o estado de envio
const success = ref(false); // Variável para controlar o estado de sucesso

// Carregar estados na montagem do componente
onMounted(async () => {
  try {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const data = await response.json();
    estados.value = data.map((estado: any) => ({
      sigla: estado.sigla,
      nome: estado.nome,
    }));
  } catch (error) {
    console.error('Erro ao carregar os estados:', error);
  }
});

// Função para buscar cidades com base no UF selecionado
const fetchCidades = async () => {
  if (form.value.uf) {
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${form.value.uf}/municipios`);
      const data = await response.json();
      cidades.value = data.map((cidade: any) => ({
        id: cidade.id,
        nome: cidade.nome,
      }));
    } catch (error) {
      console.error('Erro ao carregar as cidades:', error);
    }
  }
};

// Função para resetar o formulário
const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    phone: '',
    city: '',
    uf: '',
    company: '',
    message: '',
    terms: false,
  };
  success.value = false;
};

// Função de envio do formulário
const submitForm = async () => {
  isSubmitting.value = true;
  success.value = false;
  try {
    const response = await fetch('https://gsstudio.com.br/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(form.value as any).toString(),
    });
    const result = await response.json();
    if (result.success) {
      success.value = true;
      setTimeout(() => {
        resetForm();
      }, 2000);
    } else {
      alert(result.message);
    }
  } catch (error) {
    alert('Erro ao enviar email: ' + error);
  } finally {
    isSubmitting.value = false;
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

.btn {
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
