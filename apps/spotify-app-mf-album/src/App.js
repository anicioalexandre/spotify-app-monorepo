import React from 'react'
import {Provider} from 'react-redux'
import {Switch, Route, useRouteMatch} from 'react-router-dom'

import 'config/global.css'

import Album from './components/Album'
import store from './redux/store'

const Search = () => {
  const {path} = useRouteMatch()
  const currentPath = path === '/' ? '' : path

  return (
  <Provider store={store}>
    <Switch>
      <Route exact path={`${currentPath}/:id`} component={Album} />
      <Route exact path={currentPath} component={Album} />
    </Switch>
  </Provider>
  )
}

export default Search
