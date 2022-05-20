import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'design-system'
import cx from 'classnames'
import {useHistory} from 'react-router-dom'

const TracksList = ({dataList, currentTrackId}) => {
  const history = useHistory()

  const handleClick = (e) => {
    history.push({search: `?trackId=${e.target.id}`})
  }

  return (
    <ol className="m-0">
      {dataList.map(({trackDuration, trackId, trackName}) => {
        const isSelected = trackId === currentTrackId
        return (
          <li className="text-gray-medium p-3">
            <Button
              className={cx('text-gray-medium text-m justify-between w-full', {
                'text-spotify-color': isSelected,
              })}
              role="button"
              onClick={handleClick}
              id={trackId}
            >
              <span
                className={cx('pointer-events-none text-white', {
                  'text-spotify-color': isSelected,
                })}
              >
                {trackName}
              </span>
              <span className="pointer-events-none">{trackDuration}</span>
            </Button>
          </li>
        )
      })}
    </ol>
  )
}

TracksList.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      trackDuration: PropTypes.string.isRequired,
      trackId: PropTypes.string.isRequired,
      trackName: PropTypes.string.isRequired,
    }),
  ),
}

export default TracksList
