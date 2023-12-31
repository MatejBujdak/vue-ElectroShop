<template>
    <div class="grid-container">
      <div
        v-for="product in store.products"
        :key="product.id"
        @click="ProductPage(product.id)"
      >
        <ProductItem
          :productData="product"  
        />
    </div>
  </div>
</template>

<script>
import { productsStore } from "@/stores/products";
import ProductItem from "@/components/ProductItem.vue";

export default {
  name: 'CatalogView',
  components: {
    ProductItem,
  },
  data() {
    return {
      store: productsStore(),
      search: '',
    };
  },
  methods: {
    ProductPage(id) {
      this.$router.push({ name: 'ProductDetail', params: { id } });
    },
    async loadProducts() {
      await this.store.LoadProducts();
    },
  },
  mounted() {
    this.loadProducts();
  },
};
</script>
