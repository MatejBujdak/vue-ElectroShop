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
          <button @click="increase(item)">+</button>
          <button @click="decrease(item)">-</button>
          <button @click="removeFromCart(item.id)">Odstrániť</button>
        </div>
      </div>
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
