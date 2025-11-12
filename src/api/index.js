import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
})

// 獲取國家狀態
export const getCountryStatus = () => {
  return api.get('/country-status/')
}

// 獲取排行榜
export const getLeaderboard = () => {
  return api.get('/leaderboard/')
}

export default api
