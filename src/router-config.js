import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login'
import linkMa from './views/linkMa'
import TestMap from './views/xym/TestMap'
// import HelloWorld from './views/HelloWorld'
import TestMap2 from './views/xym/TestMap2'
import ElevatorDetail from './views/xym/ElevatorDetail'



Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/login1',
    //   component: login1
    // },
    {
      path: '/',
      component: login
    },

    {
      path: '/a',
      name: 'linkMa',
      component: linkMa
    },
    {
      path: '/test-map',
      name: 'TestMap',
      component: TestMap
    },
    // {
    //   path: '/HelloWorld',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/test-map2',
      name: 'TestMap2',
      component: TestMap2
    },
    {
      path: '/detail',
      name: 'ElevatorDetail',
      component: ElevatorDetail
    }
  ]
})
