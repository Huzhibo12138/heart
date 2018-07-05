import Vue from 'vue'
import Router from 'vue-router'
import chat from '@/pages/chat'
import consult from '@/pages/consult'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/consult',
      name: 'consult',
      component: consult
    }
  ]
})
