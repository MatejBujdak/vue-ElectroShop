<template>
  <header>
    <v-toolbar class="text-center" title="ElectroShop" color="#333">
      <v-btn
          @click="router.push({ name: 'CartView' })"
          variant="elevated"
      >
      <v-icon>mdi-cart</v-icon>
      {{ store.cart.length }}
      </v-btn>
    </v-toolbar>
  </header>
  <main>
    <RouterView />
  </main>
  <br>
  <footer>
        <div class="footer-content">
            <p>&copy; 2024 Your Website. All rights reserved.</p>
            <div class="contact-section">
              <v-icon>mdi-phone</v-icon>
              <h3>+911 523 124</h3>
              <v-btn
              class="footer_button"
                @click="router.push({ name: 'ContactUs' })"
                >
                Contact us
              </v-btn>
            </div>
        </div>
  </footer>
</template>

<script>
import { useRouter } from "vue-router";
import { productsStore } from '@/stores/products';

export default {
  data() {
    return {
      router: useRouter(),
      store: productsStore(),
    };
  },
  methods: {
    goToCart() {
      this.$router.push({ name: 'CartView' });
    },
  },
};
</script>





