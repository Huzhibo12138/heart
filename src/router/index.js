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
import index from '@/pages/index'
import suggest from '../components/index/indexSection/firstSection/recommend'
import bags from '../components/index/indexSection/firstSection/bags'
import watch from '../components/index/indexSection/firstSection/watch'
import clothing from '../components/index/indexSection/firstSection/clothing'
import acces from '../components/index/indexSection/firstSection/acces'
import jewelry from '../components/index/indexSection/firstSection/jewelry'


Vue.use(Router)

export default new Router({
  routes: [
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
    },
    {
      path:'/',
      name: 'index',
      // 重定向
      component: index,
      children:[
        {
          path: '/',
          name:'suggest',
          component:suggest,

        },
        {
          path: '/bags',
          name:'bags',
          component:bags,

        },
        {
          path: '/watch',
          name:'watch',
          component:watch,

        },
        {
          path: '/clothing',
          name:'clothing',
          component:clothing,

        },
        {
          path: '/acces',
          name:'acces',
          component:acces,

        },
        {
          path: '/jewelry',
          name:'jewelry',
          component:jewelry,

        },
      ],
    },
  ]
})
