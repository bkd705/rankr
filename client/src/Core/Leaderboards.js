import { CoreAxios } from './Core'

const ENDPOINT = '/leaderboard'
const createLeaderboardEndpoints = leaderboardId => {
  return {
    LEADERBOARD: `/leaderboard/${leaderboardId}`,
    PLAYER: `/leaderboard/${leaderboardId}/player`,
    MATCH: `/leaderboard/${leaderboardId}/match`
  }
}

export const index = async () => {
  return await CoreAxios.get(ENDPOINT)
}
