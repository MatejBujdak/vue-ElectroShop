<template>
  <div>
    <v-text-field v-model="search" label="Vyhľadať tovar" @input="updateFilteredItems"/>
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

    <br>

    <h1>Produkty:</h1>

    <!-- SORT -->
    <div v-if="priceSortDirection !== ''">
      <v-btn
        @click="sortProductsByPrice"
        color="blue"
      >
        <v-icon>{{ priceSortDirection === 'asc' ? 'mdi-menu-up' : 'mdi-menu-down' }}</v-icon>
        Zoradiť podľa ceny
      </v-btn>
    </div >
    <div v-else>
      <v-btn
        @click="sortProductsByPrice"
        color="blue"
      >
        Zoradiť podľa ceny
      </v-btn>
    </div>
    
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
      <h3>Žiadne položky nevyhovujú vyhľadávaniu.</h3>
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
      priceSortDirection: '', 
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
    updateFilteredItems() {
      this.filteredItems;
    },
    async loadProducts() {
      await this.store.LoadProducts();
    },
    filterByCategory(category) {
      this.selectedCategory = this.selectedCategory === category ? null : category;
    },
    sortProductsByPrice() {
      this.priceSortDirection = (this.priceSortDirection === 'asc' || this.priceSortDirection === '') ? 'desc' : 'asc';

      this.store.products.sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;

        if (this.priceSortDirection === 'asc') {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      });
    },
  },
  mounted() {
    this.loadProducts();
  },
};
</script>
