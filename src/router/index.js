import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/page/Home'
import Register from '@/components/page/Register'
import Search from '@/components/page/search'
import Counter from '@/components/page/counter'
import Example from '@/components/page/Example'
import Cart from '@/components/page/Cart'
import Cart2 from '@/components/page/Cart2'
import Order from '@/components/page/order'
import List from '@/components/page/List'
import Grid from '@/components/page/Grid'
import props from '@/components/page/props'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Cart2',
      name: 'Cart2',
      component: Cart2
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path:'/Grid',
      name:'Grid',
      component:Grid
    },
    {
      path: '/Example',
      name: 'Example',
      component: Example
    },
    {
      path: '/props',
      name: 'props',
      component: props
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    }
  ]
})
