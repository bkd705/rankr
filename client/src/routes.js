import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

export const routes = [
  {
    private: true,
    path: '/',
    exact: true,
    component: Dashboard
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/register',
    exact: true,
    component: Register
  }
]
