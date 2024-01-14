<template>
    <header>
      <v-toolbar class="text-center" title="ElectroShop" color="#333">
        <v-btn @click="goToCart" variant="elevated">
          <v-icon>mdi-cart</v-icon>
          {{ store.cart.length }}
        </v-btn>
      </v-toolbar>
    </header>
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
        this.router.push({ name: 'CartView' });
      },
    },
  };
  </script>
  