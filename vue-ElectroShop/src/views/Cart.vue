<template>
  <div>
    <v-btn
      @click="goToProductList"
      class="BackToProductList"
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
          <p>{{ item.title }}</p>
          <p>Cena: {{ item.quantity * item.price }} €</p>
          <p>Počet kusov: {{ item.quantity }}</p>
          <div>
            <button @click="increase(item)" class="quantity">+</button>
            <button @click="decrease(item)" class="quantity">-</button>
          </div>
          <button @click="removeFromCart(item.id)"  style="color: red;">Odstrániť</button>
        </div>
        <hr>
      </div>

      <!-- celkova suma -->
      <div class="total">
        <h4>Celková suma košíku: {{ store.totalCartSum }} €</h4>
      </div>
      <br>
      <v-btn
      class="BackToProductList"
      @click="goToForm"
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
  data() {
    return {
      store: productsStore(),
    };
  },  
  computed: {
    ProductSum(item) {
        return item.price * item.quantity;
    },
  },
  methods: {
    goToProductList() {
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
    },
    goToForm(){
      this.$router.push({ name: 'form' });
    }
  },
};
</script>
