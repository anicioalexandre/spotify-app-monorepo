import React, { useEffect, useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import {Input} from 'design-system'

import { LABELS } from './constants'

const SearchInput = ({
  label = LABELS.search,
  placeholder = LABELS.placeholder,
  disabled
}) => {
  const { query } = useParams()
  const history = useHistory()
  const input = useRef(null)

  const changePathOnKeyUp = (e) => {
    if (e?.key === 'Enter' && input.current?.value)
      history.push(`/search/${input.current?.value}`)
  }

  useEffect(() => {
    const decodedQuery = decodeURI(query)
    if (query && input.current && input.current.value !== decodedQuery) {
      input.current.value = decodedQuery
    }
  }, [query])

  return (
    <Input
      disabled={disabled}
      ref={input}
      label={label}
      placeholder={placeholder}
      onKeyUp={changePathOnKeyUp}
    />
  )
}

SearchInput.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default SearchInput
