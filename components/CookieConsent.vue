<template>
  <div v-if="showCookieConsent" class="cookie-consent">
    <div class="cookie-card shadow-lg p-4 rounded">
      <div class="cookie-content ">
        <p class="mb-3 text-light">
          Este site utiliza cookies para analisar visitas e melhorar sua experiência. Para saber mais, leia nossa
          <NuxtLink to="/politica-de-privacidade" class="text-decoration-underline fw-bold">Política de Privacidade</NuxtLink>.
        </p>
        <button @click="acceptCookies" class="btn btn-primary">Ok, entendo</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showCookieConsent = ref(false);

// Função para aceitar cookies e armazenar no localStorage por 2 anos
const acceptCookies = () => {
  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 2); // Definir 2 anos

  localStorage.setItem('cookieConsent', JSON.stringify({ accepted: true, expires: expirationDate }));
  showCookieConsent.value = false; // Fechar o modal
};

// Verificar se o usuário já aceitou os cookies
onMounted(() => {
  const consentData = JSON.parse(localStorage.getItem('cookieConsent'));
  if (!consentData || new Date(consentData.expires) < new Date()) {
    showCookieConsent.value = true; // Mostrar o modal se o consentimento não existir ou estiver expirado
  }
});
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-width: 320px;
  z-index: 9999;
}

.cookie-card {
  background-color: #000;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.cookie-content p {
  color: var(--color-text, #fff);
  font-size: var(--text-size, 14px);
  margin-bottom: 1rem;
}

.cookie-card button {
  background-color: var(--color-primary);
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cookie-card button:hover {
  background-color: var(--color-primary-hover, #0056b3);
}
</style>
