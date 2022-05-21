import React, {useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {FieldSet, ImageLabel} from 'design-system'

import {LABELS} from './constants'
import SearchInput from '../../components/SearchInput'
import {getSearch} from '../../redux/modules/search'
import {getAuth} from '../../redux/modules/authToken'
import LoadingState from '../../components/LoadingState'
import {setSearchedResults} from '../../utils/localStorage'
import EmptyState from '../../components/EmptyState'

const Search = ({
  getSearchAction,
  albums,
  tracks,
  lastQuery,
  searchLoading,
}) => {
  const {query} = useParams()
  const decodedQuery = decodeURI(query)

  useEffect(() => {
    if (lastQuery !== query) getSearchAction(query)
  }, [query])

  const isAlbumsEmpty = !albums.length
  const isTracksEmpty = !tracks.length

  const renderState = () => {
    if (searchLoading)
      return [...Array(6)].map((_, i) => <LoadingState key={i} />)
    if (isAlbumsEmpty || isTracksEmpty) {
      return <EmptyState />
    }
  }

  return (
    <div className="flex flex-col gap-12">
      <SearchInput disabled={searchLoading} />
      <FieldSet label={LABELS.albuns + `"${decodedQuery}"`}>
        {isSomethingLoading || isAlbumsEmpty
          ? renderState()
          : albums.map(
              ({albumId, albumImage, albumName, artistName, trackId}) => (
                <Link
                  onClick={() =>
                    setSearchedResults({
                      albumId,
                      image: albumImage,
                      name: albumName,
                      trackId,
                      artistName,
                    })
                  }
                  key={albumId}
                  to={`/album/${albumId}`}
                  className="decoration-0 ease-in-out duration-200 hover:text-opacity-75"
                >
                  <ImageLabel
                    src={albumImage}
                    title={albumName}
                    subtitle={artistName}
                  />
                </Link>
              ),
            )}
      </FieldSet>
      <FieldSet label={LABELS.tracks + `"${decodedQuery}"`}>
        {isSomethingLoading || isTracksEmpty
          ? renderState()
          : tracks.map(
              ({albumId, albumImage, artistName, trackId, trackName}) => (
                <Link
                  onClick={() =>
                    setSearchedResults({
                      trackId,
                      albumId,
                      image: albumImage,
                      artistName,
                      name: trackName,
                    })
                  }
                  key={trackId}
                  to={`/album/${albumId}?trackId=${trackId}`}
                >
                  <ImageLabel
                    src={albumImage}
                    title={trackName}
                    subtitle={artistName}
                  />
                </Link>
              ),
            )}
      </FieldSet>
    </div>
  )
}

const mapStateToProps = ({search}) => {
  return {
    albums: search.albums,
    tracks: search.tracks,
    lastQuery: search.query,
    searchLoading: search.loading,
  }
}

const mapDispatchToProps = {
  getAuthAction: getAuth,
  getSearchAction: getSearch,
}

Search.propTypes = {
  lastQuery: PropTypes.string,
  searchLoading: PropTypes.bool,
  tokenLoading: PropTypes.bool,
  getAuthAction: PropTypes.func,
  getSearchAction: PropTypes.func,
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.string.isRequired,
      albumImage: PropTypes.string.isRequired,
      albumName: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired,
    }),
  ),
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      albumImage: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired,
      trackId: PropTypes.string.isRequired,
      trackName: PropTypes.string.isRequired,
    }),
  ),
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
