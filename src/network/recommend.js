import $http from './request.js'

/* 获取轮播图 */
export const getBanner = () => $http.get('/banner?type=0')