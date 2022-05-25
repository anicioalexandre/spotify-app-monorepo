import axios from 'config/axios'

import { SPOTIFY_TRACKS_API } from './constants'

const getTrackEndpoint = async (id) => {
  try {
    const response = await axios.get(SPOTIFY_TRACKS_API.concat(id))
    return Promise.resolve(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default getTrackEndpoint
