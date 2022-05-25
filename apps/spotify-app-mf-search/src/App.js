import React from 'react'
import {Provider} from 'react-redux'
import {Switch, Route, useRouteMatch} from 'react-router-dom'

import 'config/global.css'

import SearchComponent from './components/Search'
import store from './redux/store'

const Search = () => {
  const {path} = useRouteMatch()
  const currentPath = path === '/' ? '' : path

  return (
  <Provider store={store}>
    <Switch>
      <Route exact path={`${currentPath}/:query`} component={SearchComponent} />
      <Route exact path={currentPath} component={SearchComponent} />
    </Switch>
  </Provider>
  )
}

export default Search
