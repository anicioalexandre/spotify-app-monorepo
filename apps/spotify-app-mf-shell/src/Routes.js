import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import {loadComponent} from './utils/loadComponent'

const renderMFE = ({remote, url, module}) => {
  const Component = React.lazy(
    loadComponent({remote, sharedScope: 'default', module, url}),
  )

  return (
    <React.Suspense fallback="Loading...">
      <Component />
    </React.Suspense>
  )
}

const isDev = process.env.NODE_ENV === 'development'

const searchURL = isDev
  ? 'http://localhost:3011/remoteEntry.js'
  : 'https://mf-app-search.netlify.app/remoteEntry.js'
const albumURL = isDev
  ? 'http://localhost:3012/remoteEntry.js'
  : 'https://mf-app-album.netlify.app/remoteEntry.js'

const Routes = () => {
  return (
    <Switch>
      <Route
        path="/album"
        render={(_) =>
          renderMFE({
            remote: 'Album',
            url: albumURL,
            module: './Album',
          })
        }
      />
      <Route
        path="/search"
        render={(_) =>
          renderMFE({
            remote: 'Search',
            url: searchURL,
            module: './Search',
          })
        }
      />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
