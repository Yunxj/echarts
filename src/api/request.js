import axios from 'axios'
import {
  Message,
  MessageBox
} from 'element-ui'
import {
  baseUrl
} from '@/config/env'
const service = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 15000 // request timeout
})

service.interceptors.request.use(config => {
  config.headers['Accept'] = 'application/json';
  config.headers['Content-Type'] = 'application/json'
  return config
}, error => {

})

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
        Message({
            message: res.message,
            type: 'error',
            duration: 5 * 1000
        })
    } else {
      return res
    }
  },
  error => {})
export default service
