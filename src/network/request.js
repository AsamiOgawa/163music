import axios from 'axios'

// 1. 实例化axios (网易云音乐)
const $http = axios.create({
  baseURL: 'https://api.mtnhao.com/',
  timeout: 5000
})

// 2. www.kanglang.xyz网站的音乐数据接口
const axios1 = axios.create({
  baseURL: 'http://www.kanglang.xyz',
  timeout: 5000
})

// 3. 小程序电商(仿京东)数据接口
const axios2 = axios.create({
  baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1',
  timeout: 5000
})


// 默认导出实例化的axios
export { $http, axios1, axios2 }