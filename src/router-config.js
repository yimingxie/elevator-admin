import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login'
import mapGI from './views/mapGI'
import linkInfo from './views/linkInfo'
import linkMa from './views/linkMa'
import TestMap from './views/xym/TestMap'
// import HelloWorld from './views/HelloWorld'

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
      path: '/mapGI',
      name: 'mapGI',
      component: mapGI
    },
    {
      path: '/b',
      name: 'linkInfo',
      component: linkInfo
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
  ]
})
