import React, {FC} from 'react'

import {ILoadingState} from './types'

const LoadingState:FC<ILoadingState> = ({ width, height }) => {
  return (
    <div className="flex gap-2 flex-col min-w-[200px] bg-transparent min-h-[275px] mb-2 h-5">
      <div style={{ width, height }} className="h-[200px] w-full rounded-b-none rounded-br-none animation-background" />
      <div className="py-0 px-4">
        <h2 className="mb-2 h-5 animation-background"></h2>
        <p className="mb-2 h-5 m-auto w-3/4 animation-background"></p>
      </div>
    </div>
  )
}

export default LoadingState
