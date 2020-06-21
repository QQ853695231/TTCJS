import axios from 'axios'
// 创建axios实例
const service = axios.create({
  timeout: 0 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
// service.interceptors.response.use(
//   response => {}
// )

export default service
