import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Button, FieldSet, ImageLabel, EmptyState, SearchInput} from 'design-system'

import { clearLocalStorage, getLocalStorage } from '../../utils/localStorage'
import { LABELS } from './constants'

const Home = () => {
  const [recentSearches, setRecentSearches] = useState([])

  useEffect(() => {
    setRecentSearches(getLocalStorage())
  }, [])
  
  return (
    <div className="flex flex-col gap-12">
      <SearchInput />
      <FieldSet label={LABELS.recentSearch}>
        {!recentSearches?.length ? (
          <EmptyState label={LABELS.emptyState} />
        ) : (
          recentSearches.map(
            ({ albumId, trackId, image, name, artistName }) => (
              <Link
                key={trackId || albumId}
                to={`/album/${albumId}${trackId ? `?trackId=${trackId}` : ''}`}
                className="decoration-0 ease-in-out duration-200 hover:text-opacity-75"
              >
                <ImageLabel
                  src={image}
                  title={name}
                  subtitle={artistName}
                />
              </Link>
            )
          )
        )}
      </FieldSet>
      {!!recentSearches?.length && (
        <Button
          onClick={() => {
            setRecentSearches([])
            clearLocalStorage()
          }}
        >
          Limpar histórico
        </Button>
      )}
    </div>
  )
}

export default Home
