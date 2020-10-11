<template>
  <div>
    <!-- 标题 -->
    <div class="title_row">
      <span>最新音乐 &gt;</span>
    </div>
    <!-- 歌单信息 -->
    <song-list>
      <song-list-item
        v-for="song of newSongList"
        :key="song.id"
        :img="song.picUrl"
        :title="song.name"
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

  props: ['newSongList']
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