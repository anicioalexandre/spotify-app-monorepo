import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
const Search = React.lazy(() => import("Search/Search"));
const Album = React.lazy(() => import("Album/Album"));

const renderMFE = (MFE) => {
  return(
      <React.Suspense fallback="Loading...">
          <MFE />
      </React.Suspense>
  )
}

const Routes = () => {
  return (
    <Switch>
      <Route path="/album" render={_ => renderMFE(Album)}/>
      <Route path="/search" render={_ => renderMFE(Search)}/>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
