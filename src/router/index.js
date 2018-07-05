import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
// import eeee from '@/pages/eeee'
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
      path: '/',
      name: 'index',
      // 重定向
      redirect:'/index/suggest',
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

    // {
    //   path: '/eeee',
    //   name: 'eeee',
    //   component: eeee
    // }
  ]
})
