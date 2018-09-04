import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from './AuthContext'

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <AuthConsumer>
        {({ authenticated }) =>
          authenticated ? <Component {...props} /> : <Redirect to="/login" />
        }
      </AuthConsumer>
    )}
  />
)
