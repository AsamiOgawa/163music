import { $http } from "./request";

/**
 * 首页歌单相关的接口 List
 */
export const getTopPlaylists = params => $http.get('/top/playlist', { params })