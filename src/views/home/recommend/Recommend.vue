<template>
  <div id="recommend" class="content">
    <scroll
      class="scroll"
      ref="scroll"
      @scrollHandler="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <recommend-swiper :banners="banners" />
      <!-- 导航栏 -->
      <recommend-tab />
      <!-- 推荐歌单 -->
      <recommend-list :personalized="personalized" />
      <!-- 最新音乐 -->
      <recommend-new-song :newSongList="newSongList" />
      <!-- 底部版权 -->
      <copy-right />
    </scroll>
  </div>
</template>

<script>
// 导入组件
import Scroll from 'components/common/scroll'

import RecommendSwiper from './childrenCmp/RecommendSwiper'
import RecommendTab from './childrenCmp/RecommendTab'
import RecommendList from './childrenCmp/RecommendList'
import RecommendNewSong from './childrenCmp/RecommendNewSong'

import CopyRight from '../copyright/CopyRight'

// 导入网络请求模块
import { getBanner, getPersonalized, getNewSong } from 'network/recommend'

// 引入工具
import { deBounce } from 'utils'

export default {
  components: {
    Scroll,
    RecommendSwiper,
    RecommendTab,
    RecommendList,
    RecommendNewSong,
    CopyRight
  },

  data() {
    return {
      // 轮播图列表
      banners: [],

      // 推荐歌单列表
      personalized: [],

      // 最新音乐列表
      newSongList: [],

      // 离开时记录当前滚动的位置
      scrollY: 0
    }
  },

  created() {
    // 获取轮播图
    this.getBanner()

    // 获取推荐歌单列表
    this.getPersonalized(0, 6)

    // 获取最新音乐
    this.getNewSong()
  },

  mounted() {
    // 监听轮播图开始加载的事件
    this.$bus.$on('swiperLoad', () => {
      // 将当前tabControl组件离顶部的距离赋值，并要减去导航栏的高度，
      // 注意，这里必须是只有获取到TabControl组件才可以获取TabControl距离顶部的高度
      if (this.$refs.tabControl) {
        this.offsetTop = this.$refs.tabControl.$el.offsetTop - 45.031
      }
      // 监听父组件(scroll组件)的滚动事件
      this.$refs.scroll.$on('scrollHandler', ({ y }) => {
        // 如果滚动的距离超过了一开始tabControl组件离顶部的距离，就让tabControl组件吸顶
        this.isFixed = -y > this.offsetTop
      })
    })
    // 组件挂载完成后，立刻监听事件总线的GoodItem组件的事件
    this.imgLoading()
    this.tabClick()
  },

  activated() {
    if (this.scrollY) {
    }
  },

  deactivated() {
    this.$refs.scroll && (this.scrollY = this.$refs.scroll.getScrollY())
  },

  methods: {
    /* 监听事件的相关方法 */
    changeTab(i) {
      switch (i) {
        case 0:
          this.currentType = 'hot'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'rec'
          break
      }
      this.$bus.$emit('tabClick')
    },

    /* 网络事件相关的方法 */
    getBanner() {
      getBanner()
        .then(({ data }) => {
          this.banners = []
          data.banners.forEach(item => {
            this.banners.push({ imageUrl: item.imageUrl })
          })
        })
        .catch(err => {})
    },
    async getPersonalized(m, n) {
      const { data } = await getPersonalized({ limit: 60 })
      if (data.code === 200) {
        this.personalized = data.result.slice(m, n)
      }
    },
    async getNewSong() {
      const { data } = await getNewSong()
      if (data.code === 200) {
        this.newSongList = data.result.slice(0, 6)
      }
    },

    /**
     * better-scroll相关事件
     */
    scroll(position) {
      let { y } = position
      this.isActive = y < -751
    },
    loadMore() {
      // 获取scorll组件实例对象
      if (this.$refs.scroll) {
        const scroll = this.$refs.scroll

        // 获取Recommend组件实例
        if (scroll.$children[1]) {
          const Recommend = scroll.$children[1]
          // 获取Recommend组件实例的相关属性和方法
          const { getGoodsList, currentType } = Recommend

          // 设置可以无限触发上拉事件
          scroll.finishPullUp()
          // 重新获取 在垂直方向上 可滚动的区域
          scroll.bs.refresh()
        }
      }
    },
    imgLoading() {
      const imgTimer = deBounce(this.$refs.scroll.refresh, 500)

      this.$bus.$on('newSongImgLoad', () => {
        imgTimer()
      })

      this.$bus.$on('songListLoad', () => {
        imgTimer()
      })
    },
    tabClick() {
      this.$bus.$on('tabClick', () => {
        this.$refs.scroll.refresh()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#recommend {
  background-repeat: no-repeat;
  .scroll {
    height: calc(100vh - 178.062px);
    position: absolute;
    top: 87px;
    bottom: 0;
    left: 0;
    right: 0;

    .tab_control {
      margin-bottom: 28px;

      &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      }
    }

    span {
      color: var(--theme);
    }
  }
}
</style>