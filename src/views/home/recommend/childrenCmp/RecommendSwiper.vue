<template>
  <div class="swiper_wrapper">
    <swiper class="swiper" :time="3000" radius="1.667vw">
      <swiper-item v-for="(img, i) of banners" :key="i">
        <img :src="img.imageUrl" @load="swiperLoad" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  components: {
    Swiper,
    SwiperItem
  },

  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },

  data() {
    return {
      isLoad: false
    }
  },

  methods: {
    /**
     * 以事件总线的方式发送轮播图正在加载中的状态
     * 这里只需要发送加载第一张的轮播图片就可以了
     * 不需要发送所有的轮播图片加载完成的事件
     */
    swiperLoad() {
      if (!this.isLoad) {
        this.$bus.$emit('swiperLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper_wrapper {
  background-image: url('/img/bg.png');
  
  .swiper {
    width: 720px;
  }
}
</style>