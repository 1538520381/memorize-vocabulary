import Vue from 'vue'
import axios from 'axios'
import router from '@/router'

import { getUserToken, getAdminToken, removeUserToken, removeAdminToken } from '@/utils/localStroageUtil'

const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  withCredentials: false,
  timeout: 5 * 1000
})

service.interceptors.request.use(
  config => {
    if (config.url.startsWith('/admin')) {
      config.headers = {
        'Authorization': getAdminToken(),
      }
    } else {
      config.headers = {
        'Authorization': getUserToken()
      }
    }

    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.data.msg == 'token过期') {
      removeUserToken()
      removeAdminToken()
      router.push('/login')
    }
    return response
  },
  error => {
    Vue.prototype.$message.error('服务器异常，请稍后')
    return Promise.resolve(error)
  })

export default service
