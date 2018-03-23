import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/components/list')
    },
    {
      path: '/word/:id',
      name: 'word',
      component: () => import('@/components/word')
    }
  ]
})
