import React, {FC} from 'react'

import {IFieldSet} from './types'

const FieldSet: FC<IFieldSet> = ({children, label}) => {
  return (
    <div className="border-none">
      <legend className="text-white text-l py-3 px-0">{label}</legend>
      <div className="flex gap-12 justify-start max-h-fit min-h-80 overflow-x-auto overflow-y-hidden p-0">
        {children}
      </div>
    </div>
  )
}

export default FieldSet
