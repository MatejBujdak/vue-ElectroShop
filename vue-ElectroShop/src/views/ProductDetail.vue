<template>
  <div>
    <v-btn
      @click="goToProductList"
      class="BackToCatalog"
      color="black"
      variant="elevated"
    >
      Zobrazit produkty
    </v-btn>

      <div>
        <img :src="'../' + selectedProduct.thumbnail" alt="" height="470" width="500">
      </div>
        <p>Značka: {{ selectedProduct.brand }}</p>
        <p>Popis: {{ selectedProduct.description }}</p>
        <br>
        <h2>Cena: {{ selectedProduct.price }} € </h2>
        <v-btn
          variant="outlined"
          color="red"
          @click="addToCart"
        >
         Pridať do košíka
        </v-btn>
    </div>
</template>

<script>

import { productsStore } from '@/stores/products';
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      store: productsStore(),
      route: useRoute(),
    };
  },
  computed: {
    selectedProduct() {
      return this.store.products.find((item) => item.id === Number(this.route.params.id));  // podla hodnoty v url adrese(smerovaci) ziskava produkt
    },
  },
  methods: {
    goToProductList() {
      this.$router.push({ name: 'ProductList' });
    },
    addToCart() {
      this.store.addToCart(this.selectedProduct);
      this.$router.push({ name: 'CartView' });
    },
  },
  mounted(){
    console.log(this.selectedProduct.thumbnail);
  }
};
</script>