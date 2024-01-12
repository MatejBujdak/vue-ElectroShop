import { defineStore } from 'pinia'
import productData from '../products.json'

export const productsStore = defineStore('products', {
  state: () => ({
    products: [],
    cart: []
  }),

  getters: {
    totalCartSum() {
      return this.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    }
  },

  actions: {
    LoadProducts() {
      this.products = productData.products;
    },

    addToCart(product) {
      const existingProduct = this.cart.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
    },

    decrease(product){
      const current_item = this.cart.find(item => item.id === product.id);

      if (current_item.quantity < 2) {
        this.cart = this.cart.filter((item) => item.id !==  current_item.id);
      } else {
        current_item.quantity -= 1;
      }
    }
  }
})