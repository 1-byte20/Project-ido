import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewSalon from '../views/NewSalon.vue'

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
