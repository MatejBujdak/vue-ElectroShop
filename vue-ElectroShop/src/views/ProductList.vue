<template>
  <div>
    <v-text-field v-model="search" label="Vyhľadať tovar" @input="filteredItems"/>

    <v-row>
      <v-col v-for="category in categories" :key="category" class="text-center">
        <v-btn
          @click="filterByCategory(category)"
          color="black"
        >
          {{ category }}
        </v-btn>
      </v-col>
    </v-row>

    <div class="grid-container" v-if="filteredItems.length">
      <div
        v-for="product in filteredItems"
        :key="product.id"
        @click="ProductPage(product.id)"
      >
        <ProductItem
          :productData="product"  
        />
      </div>
    </div>
    <div v-else>
      <br>
      Žiadne položky nevyhovujú vyhľadávaniu.
    </div>
  
  </div>
</template>

<script>
import { productsStore } from "@/stores/products";
import ProductItem from "@/components/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      store: productsStore(),
      search: '',
      selectedCategory: '',
      categories: ['notebook', 'smartfón', 'kávovar', 'tlačiareň', 'chladnička'],
    };
  },
  computed: {
    filteredItems() {
      return this.store.products.filter(item => 
        item.title.toLowerCase().includes(this.search.toLowerCase()) &&
        (!this.selectedCategory || item.category.toLowerCase() === this.selectedCategory.toLowerCase())
      );
    },
  },
  methods: {
    ProductPage(id) {
      this.$router.push({ name: 'ProductDetail', params: { id } });
    },
    async loadProducts() {
      await this.store.LoadProducts();
    },
    filterByCategory(category) {
      this.selectedCategory = this.selectedCategory === category ? null : category;
    },
  },
  mounted() {
    this.loadProducts();
  },
};
</script>
