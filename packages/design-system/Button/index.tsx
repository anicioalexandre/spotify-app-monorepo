import React, {FC} from 'react'
import cx from 'classnames'

import {IButton} from './types'

const Button: FC<IButton> = ({children, className, ...props}) => {
  return (
    <button
      {...props}
      className={cx(
        'items-center bg-none border-none text-white cursor-pointer flex font-sans text-l gap-1 outline-0 disabled:text-gray-medium disabled:cursor-not-allowed hover:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default Button
