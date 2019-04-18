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
import china_map from './views/china_map.1'
import dateContainer from './views/dateContainer'
import property from './views/property'
import FormAdd from './views/FormAdd'

import maintenanceMap from './views/maintenanceMap'
import maintenanceCal from './views/maintenanceCal'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: {
        title: '电梯行业监管战情室',
      },
      component: Index
    },{
      path: '/mainten',
      name: 'maintenance',
      meta: {
        title: '电梯维保监管战情室',
      },
      component: maintenance
    },{
      path: '/property',
      name: 'property',
      component: property,
      meta: {
        title: '电梯物业监管战情室 ',
      },
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
      meta: {
        title: '电梯运行详情',
      },
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
    {
      path: "/add",
      name: "FormAdd",
      component: FormAdd
    },
    {
      path: '/mainten-map',
      name: 'maintenanceMap',
      meta: {
        title: '电梯维保监管战情室',
      },
      component: maintenanceMap
    },
    {
      path: '/mainten-cal',
      name: 'maintenanceCal',
      meta: {
        title: '电梯维保监管战情室',
      },
      component: maintenanceCal
    }
   
  
  ]
})
