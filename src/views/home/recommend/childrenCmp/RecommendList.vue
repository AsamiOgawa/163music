<template>
  <div>
    <!-- 标题 -->
    <div class="title_row">
      <span>推荐歌单 &gt;</span>
    </div>
    <!-- 歌单信息 -->
    <song-list>
      <song-list-item
        v-for="song of personalized"
        :key="song.id"
        :img="song.picUrl"
        :title="song.name"
        :playCount="song.playCount"
      />
    </song-list>
  </div>
</template>

<script>
import { SongList, SongListItem } from 'components/content/songlist'

export default {
  components: {
    SongList,
    SongListItem
  },

  props: ['personalized']
}
</script>

<style lang="scss" scoped>
.title_row {
  height: 79px;
  display: flex;
  align-items: center;

  span {
    font-size: 29px;
    border-left: 3px solid var(--theme);
    padding-left: 12px;
  }
}
</style>