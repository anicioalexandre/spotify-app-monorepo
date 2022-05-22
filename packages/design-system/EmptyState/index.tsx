import React, {FC} from 'react'

import ImageLabel from '../ImageLabel'
import {EMPTY_BOX_SRC} from './constants'
import {IEmptyState} from './types'

const EmptyState: FC<IEmptyState> = ({
  label = 'Ops, nenhum resultado encontrado :(',
}) => {
  return (
    <div className="flex justify-center pt-8 w-full">
      <ImageLabel src={EMPTY_BOX_SRC} title={label} />
    </div>
  )
}

export default EmptyState
