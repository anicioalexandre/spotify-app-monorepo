import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import {SPOTIFY_SRC_ICON} from './pages/Home/constants'
import {getAuth} from './redux/modules/authToken'
import Routes from './Routes'
import Cookies from 'js-cookie'

function SpotifyApp({getAuthAction}) {
  const token = Cookies.get('spotify-token')
  useEffect(() => {
    if (!token) getAuthAction()
  }, [token])

  return (
    <div>
      <header className="p-6">
        <Link to="/">
          <img
            src={SPOTIFY_SRC_ICON}
            alt="Spotify logo"
            width={64}
            height={64}
          />
        </Link>
      </header>
      <div className="my-10 mx-36">
        <Routes />
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  getAuthAction: getAuth,
}

SpotifyApp.propTypes = {
  getAuthAction: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(SpotifyApp)
