<template>
  <v-card
    class="product"
  >

    <v-img
      :src="productData.thumbnail"
      width="270px"
      cover
    />

    <div class="product-card-title">
      {{ productData.title }}
    </div>

    <div class="product-card-subtitle">
      {{ productData.price }} €
    </div>

    <div class="product-card-text">
      {{ productData.description }}
    </div>

    <div class="product-card-actions">
      <v-btn
      @click.stop="addToCart"
      color="#B00"
      >
      <v-icon>mdi-cart</v-icon>
      Pridať do košíka
      </v-btn>
    </div>
  </v-card>
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
    props: {
      productData: { 
        type: Object,
        required: true,
      }
    },
    methods: {
      goToProductList() {
        this.$router.push({ name: 'ProductList' });
      },
      addToCart() {
        this.store.addToCart(this.productData);
        this.$router.push({ name: 'CartView' });
      },
    }
  }
</script>
