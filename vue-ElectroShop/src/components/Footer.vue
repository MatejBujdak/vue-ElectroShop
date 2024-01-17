<template>
    <footer>
      <div class="footer-content">
        <p>&copy; 2024 Matej Bujdák. Všetky práva vyhradené.</p>
        <div class="contact-section">
          <v-icon>mdi-phone</v-icon>
          <h3>+911 523 124</h3>
          <v-btn class="footer_button" @click="goToContact">
            <p><b>Kontaktujte nás</b></p>
          </v-btn>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import { useRouter } from "vue-router";
  
  export default {
    data() {
      return {
        router: useRouter(),
      };
    },
    methods: {
      goToContact() {
        this.router.push({ name: 'ContactUs' });
      },
    },
  };
  </script>
  