import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Clients from '../views/Clients.vue'
import Prservice from '../views/Prservice.vue'
import OnDev from '../views/OnDev.vue'
import VueMasonry from 'vue-masonry-css'

Vue.use(VueMasonry);

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  //   // path: '/about',
  //   // name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pr_service',
    name: 'Pr_service',
    component: Prservice
  }, 
  {
    path: '/on_dev',
    name: 'OnDev',
    component: OnDev
  }
]

const router = new VueRouter({
  routes
})

export default router
