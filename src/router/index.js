import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/public/search/search'
import Order from '@/pages/order'
import classfly from '../pages/classfly'
import JiaHao from '../pages/JiaHao'
import JiMai from '../pages/JiMai'
import FaBu from '../pages/FaBu'
import lv from '../pages/lv'
import chat from '@/pages/chat'
import consult from '@/pages/consult'
import particulars from '@/pages/particulars'
import cart from'@/pages/cart'
import me from'@/pages/me'
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
    },
    {
      path: '/classfly/',
      name: 'classfly',
      component: classfly,
    },
    {
      path: '/JiaHao/',
      name: 'JiaHao',
      component: JiaHao,
    },
    {
      path: '/JiMai/',
      name: 'JiMai',
      component: JiMai,
    },
    {
      path: '/FaBu/',
      name: 'FaBu',
      component: FaBu,
    },
    {
      path: '/lv/',
      name: 'lv',
      component: lv,
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/consult',
      name: 'consult',
      component: consult
    },
    {
      path: '/particulars',
      name: 'particulars',
      component: particulars
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/me',
      name: 'me',
      component: me
    }
  ]
})
