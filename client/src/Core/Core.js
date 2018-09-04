import axios from 'axios'
import * as leaderboards from './Leaderboards'
import * as users from './Users'

export const CoreAxios = axios.create({
  baseURL: 'http://rankr.test/api'
})

export default {
  leaderboards,
  users
}
