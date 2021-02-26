import axios from 'axios'
import qs from 'qs'

const baseURL = '/api'

const service = axios.create({
  baseURL,
  timeout: 5 * 1000
})

service.interceptors.request.use(
  config => {
    qs.stringify(config.params)

    const token = window.localStorage.getItem('token')
    if (token) {
      config.headers.common.Authorization = token
    }
    return config
  },
  error => Promise.reject(error)
)

service.interceptors.response.use(
  response => {
    const res = response.data

    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  },
  error => Promise.reject(error)
)

export default service
