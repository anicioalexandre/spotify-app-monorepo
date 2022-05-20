import React, {FC} from 'react'

import {IImageLabel} from './types'

const ImageLabel: FC<IImageLabel> = ({
  height = 200,
  width = 200,
  className,
  title,
  subtitle,
  ...props
}) => {
  return (
    <div
      className={`grid text-m gap-3 overflow-hidden text-center`}
      style={{width}}
    >
      <img width={width} height={height} {...props} />
      <span className="text-white">{title}</span>
      <span className="text-gray-medium">{subtitle}</span>
    </div>
  )
}

export default ImageLabel
