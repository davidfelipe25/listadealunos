import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import davidfelipe from '@/components/davidfelipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/davidfelipe',
      name: 'davidfelipe',
      component: davidfelipe	
    }
  ]
})
