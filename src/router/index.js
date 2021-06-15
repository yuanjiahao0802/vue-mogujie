import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'

const routes = [
  {
    path: '',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/categoty/Category')
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: () => import(/* webpackChunkName: "about" */ '../views/shopcart/Shopcart')
  }
  ,
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/profile/Profile')
  }
  ,
  {
    path: '/detail/:iid',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/detail')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
