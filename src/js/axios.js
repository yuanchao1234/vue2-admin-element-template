import axios from 'axios'
import vm from '../main'
import { baseApi } from '../config'
/**
 * 该函数是为了改变仓库的isLoading，控制加载的出现
 * @param {Boolean} value 
 */
function loadingFun(value) {
  vm.$store.commit('setIsLoading', value)
}
/* 全局默认配置 */
var http = axios.create({
  baseURL: baseApi,
  timeout: 5000
})
/* 请求拦截器 */
http.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    config.headers.timestamp = Math.floor(new Date().getTime() / 1000)
    // config.headers.token = localStorage.getItem('token') || ''
    // 接口没返回时显示loadin
    if (config.loading === true) {
      loadingFun(true)
    }
    return config
  },
  error => {
    loadingFun(false)
    return Promise.reject(error)
  }
)
/* 响应拦截器 */
http.interceptors.response.use(
  res => {
    loadingFun(false)
    return res
  },
  error => {
    loadingFun(false)
    vm.$alert('接口错误', '加载失败', {
      type:"error",
      confirmButtonText: '确定',
      callback: (action) => {
        console.log(action);
      }
    });
    return Promise.reject(error)
  }
)

function get(url, data, loading) {
  if (loading === true) {
    loadingFun(true)
  }
  return new Promise((resolve, reject) => {
    http.get(url, { params: data }).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
      .catch(error => {
        reject(error)
      })
  })
}

function post(url, data, loading) {
  return new Promise((resolve, reject) => {
    http.post(url, data, { loading: loading }).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
      .catch(error => {
        reject(error)
      })
  })
}

export default {
  install(Vue) {
    Vue.prototype.$http = {
      http, get, post
    }
  }
}