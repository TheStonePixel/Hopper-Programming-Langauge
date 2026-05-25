import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition          // back/forward keeps place
    if (to.hash) return { el: to.hash, top: 80 }     // anchor jumps clear the nav
    return { top: 0 }                                // every other navigation starts at the top
  },
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
      redirect: '/programs',
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
    {
      path: '/roadmap',
      name: 'roadmap',
      component: () => import('../views/RoadmapView.vue'),
    },
  ],
})

export default router
