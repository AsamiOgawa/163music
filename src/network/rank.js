import { axios1 } from './request'

/**
 * 自定义的类相关
 */
export class RankData {
  constructor(list) {
    this.id = list.id
    this.name = list.name
    this.coverImgUrl = list.coverImgUrl
    this.updateFrequency = list.updateFrequency
    this.songsInfo = list.tracks
  }
}

/**
 * 网络请求相关
 */
// 获取所有榜单列表
export const getRankList = () => axios1.get('/toplist/detail')