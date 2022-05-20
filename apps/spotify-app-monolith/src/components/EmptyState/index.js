import React from 'react'
import PropTypes from 'prop-types'
import {ImageLabel} from 'design-system'

import { EMPTY_BOX_SRC, EMPTY_STATE_LABELS } from './constants'

const EmptyState = ({ customLabel }) => {
  return (
    <div className="flex justify-center pt-8 w-full">
      <ImageLabel
        src={EMPTY_BOX_SRC}
        title={customLabel || EMPTY_STATE_LABELS.message}
      />
    </div>
  )
}

EmptyState.propTypes = {
  customLabel: PropTypes.string
}

export default EmptyState
