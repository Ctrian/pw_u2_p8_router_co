import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteView from '../views/EstudianteView.vue'
import EstudianteTabla from '../views/EstudianteTablaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/estudiante/:cedula',
    name: 'estudiante',
    component: EstudianteView
  },
  {
    path: '/estudiante/tabla',
    name: 'estudianteT',
    component: EstudianteTabla
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  
  {path: '/contador/numeros',
    name: 'contadorView',
    component: () => import(/* webpackChunkName: "contadorView" */ '../views/ContadorView.vue')
  },
  {path: '/pregunta',
    name: 'preguntaView',
    component: () => import(/* webpackChunkName: "preguntaView" */ '../views/PreguntaView.vue')
  },
  {path: '/hm',
    name: 'hmView',
    component: () => import(/* webpackChunkName: "hmView" */ '../views/HolaMundoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
