import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

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
  }
]
