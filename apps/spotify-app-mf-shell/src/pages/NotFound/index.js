import React from 'react'
import {ImageLabel} from 'design-system'

import { NOT_FOUND_LABELS, NOT_FOUND_SRC } from './constants'

const NotFound = () => (
  <div className="flex justify-center pt-8 w-full">
    <ImageLabel
      src={NOT_FOUND_SRC}
      title={NOT_FOUND_LABELS.message}
    />
  </div>
)

export default NotFound
