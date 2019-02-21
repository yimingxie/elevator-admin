import Vue from 'vue'
import Router from 'vue-router'
import TestMap from './views/xym/TestMap'
import TestMap2 from './views/xym/TestMap2'
import ElevatorDetail from './views/xym/ElevatorDetail'
import ElevatorDetailNew from './views/xym/ElevatorDetailNew'
import ElevatorDetailNew2 from './views/xym/ElevatorDetailNew2'
import ElevatorDetailOld from './views/xym/ElevatorDetailOld'
import Index from './views/Index'
import maintenance from './views/maintenance'
import china_map from './views/china_map'
import dateContainer from './views/dateContainer'
import property from './views/property'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/mainten',
      name: 'maintenance',
      component: maintenance
    },{
      path: '/property',
      name: 'property',
      component: property
    },{
      path: '/china_map',
      name: 'china_map',
      component: china_map
    },{
      path: '/dateContainer',
      name: 'dateContainer',
      component: dateContainer
    },
    {
      path: "/test-map",
      name: "TestMap",
      component: TestMap
    },
    {
      path: "/test-map2",
      name: "TestMap2",
      component: TestMap2
    },
    {
      path: "/detail",
      name: "ElevatorDetail",
      component: ElevatorDetailNew
    },
    {
      path: "/detail-new",
      name: "ElevatorDetailNew",
      component: ElevatorDetail
    },
    {
      path: "/detail-new2",
      name: "ElevatorDetailNew2",
      component: ElevatorDetailNew2
    },
    {
      path: "/detail-old",
      name: "ElevatorDetailOld",
      component: ElevatorDetailOld
    },

   
  
  ]
})
