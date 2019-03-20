import Vue from 'vue'
import Router from 'vue-router'
import echarts from '@/components/echarts'
import echarts2 from '@/components/echarts2'
import echarts3 from '@/components/echarts3'
import echarts4 from '@/components/echarts4'
import echarts5 from '@/components/echarts5'
import echarts6 from '@/components/echarts6'
import canvas1 from '@/components/canvas1'
import hchartspie from '@/components/hchartspie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/echarts3',
      name: 'echarts3',
      component: echarts3
    },
    {
      path: '/echarts2',
      name: 'echarts2',
      component: echarts2
    },
    {
      path: '/echarts4',
      name: 'echarts4',
      component: echarts4
    },
    {
      path: '/echarts5',
      name: 'echarts5',
      component: echarts5
    },
    {
      path: '/echarts6',
      name: 'echarts6',
      component: echarts6
    },
    {
      path: '/canvas1',
      name: 'canvas1',
      component: canvas1
    },
    {
      path: '/hchartspie',
      name: 'hchartspie',
      component: hchartspie
    }
  ]
})
