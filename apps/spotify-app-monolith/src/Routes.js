import React from 'react'
import {Switch, Route} from 'react-router-dom'

const Album = React.lazy(() => import('./pages/Album'))
const Home = React.lazy(() => import('./pages/Home'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Search = React.lazy(() => import('./pages/Search'))

const lazyComponent = (Component) => {
  return (
    <React.Suspense fallback="Loading...">
      <Component />
    </React.Suspense>
  )
}

const Routes = () => {
  return (
    <Switch>
      <Route path="/album/:id" component={() => lazyComponent(Album)} />
      <Route path="/search/:query" component={() => lazyComponent(Search)} />
      <Route exact path="/" component={() => lazyComponent(Home)} />
      <Route component={() => lazyComponent(NotFound)} />
    </Switch>
  )
}

export default Routes
