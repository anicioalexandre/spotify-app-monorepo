import React, {FC, forwardRef} from 'react'

import {IInput} from './types'

const Input = forwardRef<IInput>(
  ({children, className, label, ...props}: IInput, ref) => {
    return (
      <label className="text-white flex flex-col">
        {label}
        <input
          ref={ref}
          className="bg-transparent border-gray-medium border-b-2 outline-0 p-1 text-xxl disabled:cursor-not-allowed"
          type="text"
          {...props}
        />
      </label>
    )
  },
)
export default Input
