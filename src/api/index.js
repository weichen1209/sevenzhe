import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',//http://192.168.0.45:3001/api //本地伺服器IP
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
})

//CROS允許外部請求
/*const cors = require('cors'); 
app.use(cors({
  origin: '*', // 測試時建議先全開，允許任何來源
  // 或者指定特定 IP: origin: 'http://ip/'
}));*/

// 獲取國家狀態
export const getCountryStatus = () => {
  return api.get('/country-status/')
}

// 獲取排行榜
export const getLeaderboard = () => {
  return api.get('/leaderboard/')
}

export default api
