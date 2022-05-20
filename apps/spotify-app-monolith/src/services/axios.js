import axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create()

instance.interceptors.request.use((request) => {
  const token = Cookies.get('spotify-token')

  if (token) {
    if (request.headers && !request.headers.Authorization) {
      request.headers.Authorization = `Bearer ${token}`
    }
  }

  return request
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!axios.isCancel(error) && error.response) {
      if (error.response.status === 401) {
        Cookies.remove('spotify-token')
      }
      return Promise.reject(error)
    }
  },
)

export default instance
