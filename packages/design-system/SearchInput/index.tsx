import React, {FC, useEffect, useRef} from 'react'
import { Ref } from 'react'
import {useHistory, useParams} from 'react-router-dom'

import Input from '../Input'
import { IInput } from '../Input/types'
import {LABELS} from './constants'

const SearchInput:FC<IInput> = ({
  label = LABELS.search,
  placeholder = LABELS.placeholder,
  disabled,
  ...props
}) => {
  const {query} = useParams<any>()
  const history = useHistory()
  const input: Ref<HTMLInputElement> = useRef(null)

  const changePathOnKeyUp = (e: any) => {
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
      {...props}
    />
  )
}

export default SearchInput
