import { createRouter, createWebHistory } from 'vue-router';

// Views
const HomeView = () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue');
const Product = () => import(/* webpackChunkName: "product" */ '../views/Product.vue');
const Cart = () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue');
const NotFound = () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
