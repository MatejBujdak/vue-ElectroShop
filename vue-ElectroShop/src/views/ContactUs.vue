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
        
        <label for="name"><h3>Meno:</h3></label>
        <input type="text" id="name" class="input-line" required>
  
        <label for="email"><h3>E-mail:</h3></label>
        <input type="email" id="email" class="input-line" required>
  
        <label for="message"><h3>Message:</h3></label>
        <textarea id="message" name="message" class="input-line" rows="4" required></textarea>
  
       <button type="submit" class="sub-form"><h4>Odoslať správu</h4></button>
      </form>
    </div>
  </template>
  
<script>
export default {
  data() {
    return {
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