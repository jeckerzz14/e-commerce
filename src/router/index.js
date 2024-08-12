import { createRouter, createWebHistory } from 'vue-router';
const HomeView = () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue');
const NotFound = () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
