<template>
  <div>
    <v-btn
      @click="goToCatalog"
      class="BackToCatalog"
      color="black"
      variant="elevated"
    >
      Zobraziť produkty
    </v-btn>
    <div v-if="!store.cart.length" class="cart">
      <br>
      <h3>V košiku niesu žiadne položky.</h3>
    </div>
    <div class="cart-items" v-else>   
      <hr>
      <div
        class="cart-item"
        v-for="item in store.cart"
        :key="item.id"
      >
        <div class="item-details">
          <img :src="item.thumbnail" alt="">
          <span>Značka: {{ item.brand }}</span>
          <span>Kategória: {{ item.category }}</span> 
          <span>Cena: ${{ item.price }}</span>
          <span>Počet kusov: {{ item.quantity }}</span>
          <button @click="increase(item)"  style="color: blue;">+</button>
          <button @click="decrease(item)"  style="color: blue;">-</button>
          <button @click="removeFromCart(item.id)"  style="color: red;">Odstrániť</button>
        </div>
        <hr>
      </div>
      <br>
      <v-btn
      class="BackToCatalog"
      color="blue"
      variant="elevated"
    >
      Objednať
    </v-btn>
    </div>
  </div>
</template>

<script>
import { productsStore } from "@/stores/products";

export default {
  name: 'CartView',
  data() {
    return {
      store: productsStore(),
    };
  },  
  methods: {
    goToCatalog() {
      this.$router.push({ name: 'ProductList' });
    },
    removeFromCart(id) {
      this.store.removeFromCart(id);
    },
    increase(item){
      this.store.addToCart(item);
    },
    decrease(item){
      this.store.decrease(item);
    }
  },
};
</script>
