<template>
  <header>
    <v-toolbar class="text-center" title="ElectroShop" color="teal">
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





