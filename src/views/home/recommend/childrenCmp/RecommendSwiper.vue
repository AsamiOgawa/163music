<template>
  <div>
    <swiper width="96%" :time="3000" radius="1.667vw">
      <swiper-item v-for="(img, i) of banners" :key="i">
        <img :src="img.imageUrl" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { Swiper, SwiperItem }
}
</script>