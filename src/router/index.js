import Vue from 'vue'
import Router from 'vue-router'
import echarts from '@/components/echarts'
import echarts2 from '@/components/echarts2'
import echarts3 from '@/components/echarts3'

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
    }
  ]
})
