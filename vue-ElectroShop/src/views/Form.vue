<template>
  <v-btn
      @click="goToProductList"
      class="BackToProductList"
      color="black"
      variant="elevated"
    >
      Zobraziť produkty
    </v-btn>  
  <div>
    <form class="order-form" @submit.prevent="submitOrder">
      <label for="name">Meno:</label>
      <input type="text" id="name" class="input-line" required>

      <label for="email">E-mail:</label>
      <input type="email" id="email" class="input-line" required>

      <label for="address">Adresa:</label>
      <input type="text" id="address" class="input-line" required>

      <label for="city">Mesto:</label>
      <input type="text" id="city" class="input-line" required>

      <label for="zip">PSČ:</label>
      <input type="text" id="zip" class="input-line" required>


      <button type="submit" class="sub">Odeslat objednávku</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
      }
    };
  },
  methods: {
    submitOrder() {
      this.$router.push({ name: 'ProductList' });
    },
    goToProductList() {
      this.$router.push({ name: 'ProductList' });
    },
  }
};
</script>
