<template>
  <div class="official_rank_list_item">
    <!-- 榜单封面 -->
    <div class="left">
      <img :src="imgSrc" @load="officialImgLoad" />
      <span class="updateFrequency" v-text="updateFrequency"></span>
    </div>
    <!-- 歌曲信息 -->
    <div class="right">
      <template v-if="officialListItem.songsInfo">
        <span
          v-for="(item, index) of officialListItem.songsInfo"
          :key="index"
        >{{ index + 1 }}. {{ item.first }} - {{ item.second }}</span>
      </template>
      <span v-else class="loading" v-for="i of 3" :key="i"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    officialListItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  computed: {
    imgSrc() {
      const item = this.officialListItem
      return item.coverImgUrl ? item.coverImgUrl : '/img/loading.jpg'
    },

    updateFrequency() {
      const updateFrequency = this.officialListItem.updateFrequency
      return updateFrequency
    }
  },

  methods: {
    officialImgLoad() {
      this.$bus.$emit('officialImgLoad')
    }
  }
}
</script>

<style lang="scss" scoped>
.official_rank_list_item {
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  .left {
    justify-self: center;
    width: 218px;
    position: relative;

    img {
      width: 100%;
      vertical-align: middle;
      border-radius: 8px;
    }

    span {
      position: absolute;
      bottom: 0px;
      padding-left: 5px;
      left: 0px;
      right: 0;
      font-size: 24px;
      color: #fff;
      opacity: 0.9;
      background-image: linear-gradient(
        to bottom,
        rgba(255, 0, 0, 0),
        rgba(182, 182, 182, 1)
      );
    }
  }

  .right {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding-right: 39px;

    span {
      letter-spacing: 0.7px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 3.2vw;
      color: #666;

      & + span {
        margin-top: 16px;
      }

      &.loading {
        display: inline-block;
        width: 100%;
        height: 20px;
        background-color: #dfdfdf;
        border-radius: 8px;
      }
    }
  }
}
</style>