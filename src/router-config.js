import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login'
import linkMa from './views/linkMa'
import TestMap from './views/xym/TestMap'
<<<<<<< HEAD
// import HelloWorld from './views/HelloWorld'
=======
import TestMap2 from './views/xym/TestMap2'
import ElevatorDetail from './views/xym/ElevatorDetail'


>>>>>>> 5c917e328b4556b3a6814e1ef2310a3eaf6806c0

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
<<<<<<< HEAD
    // {
    //   path: '/HelloWorld',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
=======
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
>>>>>>> 5c917e328b4556b3a6814e1ef2310a3eaf6806c0
  ]
})
