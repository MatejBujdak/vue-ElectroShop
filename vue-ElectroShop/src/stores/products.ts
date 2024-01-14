import { defineStore } from 'pinia';
import productData from '../products.json';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface ProductsStoreState {
  products: Product[];
  cart: CartItem[];
}

export const productsStore = defineStore('products', {
  state: (): ProductsStoreState => ({
    products: [],
    cart: []
  }),

  getters: {
    totalCartSum(): number {
      return this.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    }
  },

  actions: {
    LoadProducts(): void {
      this.products = productData.products;
    },

    addToCart(product: Product): void {
      const existingProduct = this.cart.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(id: number): void {
      this.cart = this.cart.filter((item) => item.id !== id);
    },

    decrease(product: Product): void {
      const current_item = this.cart.find(item => item.id === product.id);

      if (current_item && current_item.quantity < 2) {
        this.cart = this.cart.filter((item) => item.id !== current_item.id);
      } else if (current_item) {
        current_item.quantity -= 1;
      }
    }
  }
});
