import Vue from 'vue'
import Router from 'vue-router'
// import login1 from './views/login1'
import login from './views/login'
import mapGI from './views/mapGI'
import linkInfo from './views/linkInfo'
import linkMa from './views/linkMa'
import moreInfo from './views/moreInfo'
import ddd from './views/ddd'



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
      path: '/c',
      name: 'moreInfo',
      component: moreInfo
    },
    {
      path: '/d',
      name: 'd',
      component: ddd
    },
  ]
})
