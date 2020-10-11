<template>
  <scroll ref="cateScroll" class="cateScroll">
    <song-list>
      <song-list-item
        v-for="(song,i) of songList[currentCate].list"
        :key="i"
        :img="song.coverImgUrl"
        :title="song.name"
        :playCount="song.playCount"
      />
    </song-list>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll'

import { SongList, SongListItem } from 'components/content/songlist'

export default {
  components: {
    Scroll,
    SongList,
    SongListItem
  },

  props: {
    songList: {
      type: Object,
      default: {}
    },
    currentCate: {
      type: String,
      default: ''
    }
  },

  mounted() {
    this.$bus.$on('imgLoad', () => {
      this.$refs.cateScroll.refresh()
    })
  }
}
</script>