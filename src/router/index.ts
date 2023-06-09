import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  }, {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
  }],
})

export default router
