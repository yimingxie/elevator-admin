import Vue from 'vue'
import Router from 'vue-router'
// import login1 from './views/login1'
import login from './views/login'
import mapGI from './views/mapGI'
import testXym from './views/test-xym'


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
      path: '/testXym',
      name: 'testXym',
      component: testXym
    },
  ]
})
