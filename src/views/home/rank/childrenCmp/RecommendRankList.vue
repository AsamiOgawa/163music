<template>
  <div class="recommend_rank_list">
    <!-- 标题 -->
    <rank-title title="推荐榜" />
    <!-- 榜单内容 -->
    <song-list>
      <song-list-item
        v-for="song of recommendList"
        :key="song.id"
        :img="song.coverImgUrl"
        :title="song.name"
        :updateFrequency="song.updateFrequency"
      />
    </song-list>
  </div>
</template>

<script>
// 组件相关
import RankTitle from './RankTitle'

import { SongList, SongListItem } from 'components/content/songlist'

export default {
  components: {
    RankTitle,
    SongList,
    SongListItem
  },

  props: {
    recommendList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend_rank_list {
}
</style>