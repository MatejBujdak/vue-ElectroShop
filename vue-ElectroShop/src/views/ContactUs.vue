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
  
        <label for="message">Message:</label>
        <textarea id="message" name="message" class="input-line" rows="4" required></textarea>
  
       <button type="submit" class="sub">Odoslať správu</button>
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