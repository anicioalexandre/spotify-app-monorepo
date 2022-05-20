import React, {useEffect} from 'react'
import {useHistory, useParams, useLocation} from 'react-router'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Button, ImageLabel} from 'design-system'
import qs from 'qs'

import {getAlbum} from '../../redux/modules/album'
import TracksList from '../../components/TracksList'
import LoadingState from '../../components/LoadingState'
import TrackPlayer from '../../components/TrackPlayer'

const Album = ({getAlbumAction, album}) => {
  const {id} = useParams()
  const history = useHistory()
  const {search} = useLocation()
  const {trackId} = qs.parse(search, {ignoreQueryPrefix: true}) || {}

  useEffect(() => {
    if (album.id !== id) getAlbumAction(id)
  }, [id])

  return (
    <div className="flex flex-col gap-8">
      <Button onClick={() => history.push('/')}>{`< Voltar`}</Button>
      <div className="flex lm:flex lm:flex-col">
        <div className="min-h-[450px]">
          {album.loading ? (
            <LoadingState width={300} height={300} />
          ) : (
            <ImageLabel
              src={album.image}
              width={300}
              height={300}
              title={album.name}
              subtitle={album.artistName}
              className="bg-transparent mt-4 mr-10"
            />
          )}
        </div>
        <div className="ml-10 max-h-[60vh] overflow-y-auto w-full">
          <TracksList currentTrackId={trackId} dataList={album.tracks} />
        </div>
      </div>
      {!!album.tracks.length && <TrackPlayer currentTrackId={trackId} />}
    </div>
  )
}

const mapStateToProps = ({auth, album}) => {
  return {
    album: {
      artistName: album.artistName,
      id: album.albumId,
      image: album.albumImage,
      name: album.albumName,
      tracks: album.tracks,
      loading: album.loading,
    },
  }
}

const mapDispatchToProps = {
  getAlbumAction: getAlbum,
}

Album.propTypes = {
  getAlbumAction: PropTypes.func,
  album: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    id: PropTypes.string,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    tracks: PropTypes.arrayOf(
      PropTypes.shape({
        trackDuration: PropTypes.string.isRequired,
        trackId: PropTypes.string.isRequired,
        trackName: PropTypes.string.isRequired,
      }),
    ),
  }),
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)
