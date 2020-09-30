<template>
  <div id="recommend">
    <recommend-swiper :banners="banners" />
    <recommend-tab />
  </div>
</template>

<script>
import RecommendSwiper from './childrenCmp/RecommendSwiper'
import RecommendTab from './childrenCmp/RecommendTab'
import { getBanner } from 'network/recommend'

export default {
  data() {
    return {
      banners: []
    }
  },

  created() {
    getBanner()
      .then(({ data }) => {
        this.banners = []
        data.banners.forEach(item => {
          this.banners.push({ imageUrl: item.imageUrl })
        })
      })
      .catch(err => {})
  },
  components: {
    RecommendSwiper,
    RecommendTab
  }
}
</script>

<style lang="scss" scoped>
#recommend {
  background-image: url('/img/bg.png');
  background-repeat: no-repeat;

  span {
    color: var(--theme);
  }
}
</style>