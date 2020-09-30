import axios from 'axios'

// 1. 实例化axios
const $http = axios.create({
  baseURL: 'https://api.mtnhao.com/',
  timeout: 5000
})

// 默认导出实例化的axios
export default $http