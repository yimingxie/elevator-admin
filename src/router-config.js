import Vue from 'vue'
import Router from 'vue-router'
import TestMap from './views/xym/TestMap'
import TestMap2 from './views/xym/TestMap2'
import ElevatorDetail from './views/xym/ElevatorDetail'
import ElevatorDetail2 from './views/xym/ElevatorDetail2'
import ElevatorDetail3 from './views/xym/ElevatorDetail3'
import ElevatorDetailNew from './views/xym/ElevatorDetailNew'
import Index from './views/Index'
import maintenance from './views/maintenance'
import china_map from './views/china_map'
import dateContainer from './views/dateContainer'



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
      component: ElevatorDetail
    },
    {
      path: "/detail-new",
      name: "ElevatorDetailNew",
      component: ElevatorDetailNew
    },
    {
      path: "/detail3",
      name: "ElevatorDetail3",
      component: ElevatorDetail3
    },
  ]
})
