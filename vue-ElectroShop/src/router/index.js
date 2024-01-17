import { createRouter, createWebHistory } from 'vue-router'
import ProductList from "@/views/ProductList.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import ContactUs from "@/components/ContactUs.vue";
import Cart from "@/views/Cart.vue";
import Form from "@/components/Form.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/cart',
      name: 'CartView',
      component: Cart
    },
    {
      path: '/formulár',
      name: 'form',
      component: Form
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})

export default router
