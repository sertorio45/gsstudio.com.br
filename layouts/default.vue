<template>
  <div>
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>>

<script>

import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    window.addEventListener('load', this.onLoad);
  },
  destroyed() {
    window.removeEventListener('load', this.onLoad);
  },
  methods: {
    onLoad() {
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
.hidden {
  display: none;
}
.blur {
  filter: blur(10px);
  transition: filter 0.3s ease;
}
</style>
