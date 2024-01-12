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

      <div class="input-group">
        <div class="input-group-item">
          <label for="name"><h2>Meno:</h2></label>
          <input type="text" id="name" class="input-line" required>
        </div>

        <div class="input-group-item">
          <label for="surname"><h2>Priezvisko:</h2></label>
          <input type="text" id="surname" class="input-line" required>
        </div>
      </div>

      <div class="input-group-item">
        <label for="email"><h2>E-mail:</h2></label>
        <input type="email" id="email" class="input-line" required>
      </div>

      <div class="input-group-item">
        <label for="address"><h2>Adresa:</h2></label>
        <input type="text" id="address" class="input-line" required>
      </div>

      <div class="input-group-item">
        <label for="city"><h2>Mesto:</h2></label>
        <input type="text" id="city" class="input-line" required>
      </div>

      <div class="input-group-item">
        <label for="zip"><h2>PSČ:</h2></label>
        <input type="text" id="zip" class="input-line" required>
      </div>
      <br>
      <hr>
      <div class="input-group-item">
        <br>
      <h2>Doprava:</h2>
        <div class="radio-group">
          <label>
            <input type="radio" id="standard" v-model="shippingCost" value="3" required>
            <strong class="radio-label"> Kuriér | GLS (3 €)</strong>
          </label>
        </div>
        <div class="radio-group">
          <label>
            <input type="radio" id="express" v-model="shippingCost" value="5" required>
            <strong class="radio-label"> Kuriér | SPS (5 €)</strong>
          </label>
        </div>
      </div>
      <br>
      <hr>
      

      <div class="total">
        <h2>Celková suma košíku: {{ store.totalCartSum + parseInt(shippingCost) }} €</h2>
      </div>

      <button type="submit" class="sub-form"><h3>Odeslať objednávku</h3></button>
      
    </form>
  </div>
</template>


<script>
import { productsStore } from "@/stores/products";

export default {
  data() {
    return {
      store: productsStore(),
      shippingCost: '0',
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

