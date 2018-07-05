import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/public/search/search'
import Order from '@/pages/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/order',
      name:'order',
      component:Order
    }
  ]
})
