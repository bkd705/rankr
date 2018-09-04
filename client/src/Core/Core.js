import axios from 'axios'
import * as leaderboards from './Leaderboards'
import * as users from './Users'

export const CoreAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

export default {
  leaderboards,
  users
}
