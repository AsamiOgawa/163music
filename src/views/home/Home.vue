<template>
  <div class="home">
    <main-tab class="main_tab" />
    <keep-alive>
      <router-view />
    </keep-alive>

    <!-- 回到顶部 -->
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      :duration="{enter: 500, leave: 500}"
      mode="out-in"
    >
      <back-top @click.native="backTop" v-show="isActive" />
    </transition>
  </div>
</template>

<script>
import BackTop from 'components/common/backtop'

import MainTab from 'components/content/MainTab'

export default {
  components: {
    BackTop,
    MainTab
  },

  data() {
    return {
      isActive: false
    }
  },

  mounted() {},

  methods: {
    /**
     * 返回顶部
     */
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  top: -1px;
  height: calc(100vh - 90.062px);
}
</style>