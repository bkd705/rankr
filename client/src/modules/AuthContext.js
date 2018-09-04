import React from 'react'
import { CoreAxios } from '../Core/Core'

const AuthContext = React.createContext({
  authenticated: false,
  user: () => {},
  login: () => {},
  logout: () => {}
})

export class AuthProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
      value: {
        authenticated: false,
        user: this.user,
        login: this.login,
        logout: this.logout
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    const token = localStorage.getItem('user_token')
    if (token) {
      CoreAxios.defaults.headers.common.Authorization = `Bearer ${token}`
      return {
        currentUser: {
          token
        },
        value: {
          ...state.value,
          authenticated: true
        }
      }
    }

    return state
  }

  login = token => {
    localStorage.setItem('user_token', token)
    CoreAxios.defaults.headers.common.Authorization = `Bearer ${token}`
    this.setState({
      currentUser: {
        token
      },
      value: {
        ...this.state.value,
        authenticated: true
      }
    })
  }

  logout = () => {
    localStorage.removeItem('user_token')
    delete CoreAxios.defaults.headers.common.Authorization
    this.setState({
      currentUser: {},
      value: {
        authenticated: false
      }
    })
  }

  user = () => {
    return {
      check: this.check
    }
  }

  check = () => {
    return Boolean(this.state.currentUser.token)
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.value}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export const AuthConsumer = AuthContext.Consumer
