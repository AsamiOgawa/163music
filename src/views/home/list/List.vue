<template>
  <div class="list_wrap">
    <!-- 音乐分类tab栏 -->
    <song-tabbar :songCate="songCate" @changeTab="tabbarHandler" />
    <!-- 音乐分类列表 -->
    <song-list :songList="songList" :currentCate="currentCate" />
  </div>
</template>

<script>
// 组件相关
import SongTabbar from './childrenCmp/SongTabbar'
import SongList from './childrenCmp/SongList'

// 网络相关
import { getTopPlaylists } from 'network/list'

// 工具类相关
import { deBounce } from 'utils'

export default {
  components: {
    SongTabbar,
    SongList
  },

  created() {
    setTimeout(() => {
      this.getTopPlaylists('全部')
    }, 2000)
  },

  data() {
    return {
      songCate: ['全部', '华语', '欧美', '民谣', '电子', '怀旧'],
      songList: {
        全部: { page: 0, list: [] },
        华语: { page: 0, list: [] },
        欧美: { page: 0, list: [] },
        民谣: { page: 0, list: [] },
        电子: { page: 0, list: [] },
        怀旧: { page: 0, list: [] }
      },
      currentCate: '全部'
    }
  },

  methods: {
    /**
     * 监听元素触发事件的相关方法
     */
    tabbarHandler(i) {
      // 如果不是点击的当前的音乐分类，则发送网络请求
      if (this.songCate[i] !== this.currentCate) {
        this.currentCate = this.songCate[i]
        this.getTopPlaylists(this.currentCate)
      }
    },

    /**
     * 发送网络请求相关的方法
     */
    async getTopPlaylists(category) {
      const { data } = await getTopPlaylists({ limit: 30, cat: category })
      if (data.code === 200) {
        this.songList[category].list.push(...data.playlists)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list_wrap {
  position: relative;
  height: 100%;

  .cateScroll {
    padding-top: 10px;
    position: absolute;
    top: 90.062px;
    bottom: 90.062px;
    left: 0;
    right: 0;
  }
}
</style>