import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import SpotifyApp from './SpotifyApp'
import store from './redux/store'
import 'config/global.css'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <SpotifyApp />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
