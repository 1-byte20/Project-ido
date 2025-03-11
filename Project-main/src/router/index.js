import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import NewSalon from '../components/NewSalon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/new',
      name: 'NewSalon',    
      component: NewSalon,
    },
    
  ],
})

export default router
