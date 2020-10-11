<template>
  <div class="official_rank_list">
    <!-- 标题 -->
    <rank-title title="官方榜" />
    <!-- 榜单内容 -->
    <official-rank-list-item
      v-for="officialListItem of officialList"
      :key="officialListItem.id"
      :officialListItem="officialListItem"
    />
  </div>
</template>

<script>
import RankTitle from './RankTitle'
import OfficialRankListItem from './OfficialRankListItem'

export default {
  components: { RankTitle, OfficialRankListItem },

  props: {
    officialList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.official_rank_list {
  border-bottom: 1px solid rgba(179, 179, 179, 0.3);
}
</style>