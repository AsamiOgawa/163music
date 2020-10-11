<template>
  <div class="rank_wrap">
    <scroll ref="scroll" class="scroll">
      <!-- 官方榜单 -->
      <official-rank-list :officialList="officialList" />
      <!-- 推荐榜单 -->
      <recommend-rank-list :recommendList="recommendList" />
    </scroll>
  </div>
</template>

<script>
// 组件相关
import Scroll from 'components/common/scroll'

import OfficialRankList from './childrenCmp/OfficialRankList'
import RecommendRankList from './childrenCmp/RecommendRankList'

// 网络及数据相关
import { RankData, getRankList } from 'network/rank'

export default {
  components: {
    Scroll,
    OfficialRankList,
    RecommendRankList
  },

  created() {
    this.getRankList()
  },

  mounted() {
    this.$bus.$on('officialImgLoad', () => {
      this.$refs.scroll.refresh()
    })
  },

  data() {
    return {
      rankList: []
    }
  },

  methods: {
    async getRankList() {
      const { data } = await getRankList()
      if (data.code === 200) {
        for (const item of data.list) {
          this.rankList.push(new RankData(item))
        }
      }
    }
  },

  computed: {
    officialList() {
      // 返回官方榜单的歌单列表
      return this.rankList.filter(item => item.songsInfo.length > 0)
    },
    recommendList() {
      // 返回推荐榜单的歌单列表
      return this.rankList.filter(item => item.songsInfo.length === 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.rank_wrap {
  position: absolute;
  top: 88px;
  left: 0;
  right: 0;
  bottom: 0;

  .scroll {
    height: 100%;
  }
}
</style>