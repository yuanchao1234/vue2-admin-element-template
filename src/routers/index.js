import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/pages/home.vue"),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("@/views/pages/about.vue"),
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import("@/views/pages/mine.vue"),
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router