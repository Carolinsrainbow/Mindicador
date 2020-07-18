import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Buscador from '../views/Buscador.vue'
import Historial from '../views/Historial.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buscador',
    name: 'Buscador',
    component: Buscador
  },
  {
    path: '/historial',
    name: 'Historial',
    component: Historial
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
