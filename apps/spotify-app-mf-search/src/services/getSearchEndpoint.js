import axios from 'config/axios'

import { SPOTIFY_SEARCH_API, SPOTIFY_SEARCH_TYPE } from './constants'

const getSearchEndpoint = async (searchQuery) => {
  try {
    console.log('debug getSearchEndpoint start')
    const response = await axios.get(SPOTIFY_SEARCH_API, {
      params: { q: searchQuery, type: SPOTIFY_SEARCH_TYPE }
    })
    return Promise.resolve(response.data)
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}

export default getSearchEndpoint
