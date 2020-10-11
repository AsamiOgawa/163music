import { $http, axios2 } from './request.js'

/**
 * 首页推荐相关的接口 Recommend
 */
// 获取轮播图
export const getBanner = () => $http.get('/banner?type=0')

// 获取商品列表
export const getGoodsList = (params, pagenum) => axios2.get('/goods/search', {
  params: {
    params,
    pagenum,
    pagesize: 30
  }
})

// 获取推荐歌单列表
export const getPersonalized = params => $http.get(`/personalized`, { params })

// 获取最新音乐
export const getNewSong = () => $http.get('/personalized/newsong')