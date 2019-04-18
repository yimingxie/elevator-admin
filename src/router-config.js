import Vue from 'vue'
import Router from 'vue-router'
import ElevatorDetail from './views/xym/ElevatorDetail'
import ElevatorDetailNew from './views/xym/ElevatorDetailNew'
import ElevatorDetailNew2 from './views/xym/ElevatorDetailNew2'
import ElevatorDetailOld from './views/xym/ElevatorDetailOld'
import Index from './views/Index'
import maintenance from './views/maintenance'
import property from './views/property'

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
    }
  ]
})
