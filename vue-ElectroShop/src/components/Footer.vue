<template>
    <footer>
      <div class="footer-content">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
        <div class="contact-section">
          <v-icon>mdi-phone</v-icon>
          <h3>+911 523 124</h3>
          <v-btn class="footer_button" @click="goToContact">
            Contact us
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
  