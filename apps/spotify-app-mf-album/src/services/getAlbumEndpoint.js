import axios from 'config/axios'

import { SPOTIFY_ALBUMS_API } from './constants'

const getAlbumEndpoint = async (id) => {
  console.log('debug getAlbumEndpoint start')
  try {
    const response = await axios.get(SPOTIFY_ALBUMS_API.concat(id))
    return Promise.resolve(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default getAlbumEndpoint
