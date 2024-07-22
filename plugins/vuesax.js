
// plugins/vuesax.js
import Vue from 'vue';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';

// Obtenha o valor da variável CSS
const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary').trim();

Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: primaryColor,
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: 'rgb(36, 33, 69)'
    }
  }
});