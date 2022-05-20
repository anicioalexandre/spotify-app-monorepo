import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getTrack } from '../../redux/modules/track'

const TrackPlayer = ({
  trackPreview,
  getTrackAction,
  trackLoading,
  currentTrackId
}) => {
  const audioTag = document.querySelector('audio')

  useEffect(() => {
    if (currentTrackId) {
      getTrackAction(currentTrackId)
    }
  }, [currentTrackId])

  useEffect(() => {
    if (audioTag && currentTrackId && trackPreview) {
      audioTag.load()
      audioTag.volume = 0.05
      audioTag.play()
    }
    if (!trackPreview && audioTag) audioTag.pause()
  }, [currentTrackId, trackPreview, audioTag])

  return (
    <div>
      <audio className="outline-none" controls name="media">
        <source src={trackPreview} type="audio/mpeg" />
      </audio>
      {!trackPreview && currentTrackId && !trackLoading && (
        <legend className='text-gray-medium text-s'>
          * A prévia desta música pode não estar disponível no momento.
        </legend>
      )}
    </div>
  )
}

const mapStateToProps = ({ track }) => {
  return {
    trackPreview: track.preview,
    trackLoading: track.loading,
  }
}

const mapDispatchToProps = {
  getTrackAction: getTrack
}

TrackPlayer.propTypes = {
  trackLoading: PropTypes.bool,
  currentTrackId: PropTypes.string,
  trackPreview: PropTypes.string,
  getTrackAction: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayer)
