import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MainHeader from './ui/MainHeader/MainHeader'
import Dashboard from './pages/Dashboard'
import { routes } from './routes'
import PrivateRoute from './modules/PrivateRoute'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainHeader />
        {routes.map(
          route =>
            route.private ? (
              <PrivateRoute key={route.path} {...route} />
            ) : (
              <Route key={route.path} {...route} />
            )
        )}
      </React.Fragment>
    )
  }
}

export default App
