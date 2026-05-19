import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/syntax',
      name: 'syntax',
      component: () => import('../views/SyntaxView.vue'),
    },
    {
      path: '/programs',
      name: 'programs',
      component: () => import('../views/ProgramsView.vue'),
    },
    {
      path: '/examples',
      name: 'examples',
      component: () => import('../views/ExamplesView.vue'),
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('../views/DocsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/vs-c',
      name: 'vsc',
      component: () => import('../views/VsCView.vue'),
    },
    {
      path: '/benchmark',
      name: 'benchmark',
      component: () => import('../views/BenchmarkView.vue'),
    },
  ],
})

export default router
