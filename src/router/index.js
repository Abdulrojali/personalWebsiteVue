import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/project/project.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue')
    },
    {
      path: '/fromLangganan',
      name: 'fromLangganan',
      component: () => import('../views/from.vue')
    },
  ]
})

export default router
