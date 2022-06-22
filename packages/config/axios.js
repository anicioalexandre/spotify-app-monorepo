import axios from 'axios'
import Cookies from 'js-cookie'
import qs from 'qs'

const SPOTIFY_TOKEN_API = 'https://accounts.spotify.com/api/token'

const getTokenEndpoint = async () => {
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: 'c962f7eb22704c228ba8ae721a4675c5',
      password: '279924f6228c43249af2d24bec32b46d',
    },
  }
  const data = {
    grant_type: 'client_credentials',
  }

  try {
    const response = await axios.post(
      SPOTIFY_TOKEN_API,
      qs.stringify(data),
      headers,
    )
    return Promise.resolve(response.data.access_token)
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}
const instance = axios.create()

instance.interceptors.request.use(async (request) => {
  const tokenCookie = Cookies.get('spotify-token')
  let tokenFetched = ''

  console.log('debug tokenFetched', tokenFetched)
  if (!tokenCookie) {
    console.log('debug tokenCookie', tokenCookie)
    tokenFetched = await getTokenEndpoint()
    console.log('debug tokenFetched 2', tokenFetched)
    Cookies.set('spotify-token', tokenFetched)
  }
  
  const token = tokenCookie || tokenFetched
  console.log('debug token', token)

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
