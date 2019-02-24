import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
