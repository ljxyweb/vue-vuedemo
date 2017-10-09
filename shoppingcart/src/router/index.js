import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const ProductList=() => import('../components/ProductList.vue')
const Cart=() => import('../components/Cart.vue')
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: ProductList,
    },
    {
      path: '/cart',
      component: Cart,
    }
  ]
})
export default router
