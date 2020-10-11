<template>
  <scroll ref="tabbarScroll" scrollX>
    <tab-control :title="songCate" @changeTab="changeTab" />
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll'

import TabControl from 'components/content/TabControl'

export default {
  components: {
    Scroll,
    TabControl
  },

  props: {
    songCate: {
      type: Array,
      default() {
        return []
      }
    }
  },

  methods: {
    /**
     * 监听元素触发事件的相关方法
     */
    changeTab(i) {
      this.$emit('changeTab', i)
    }
  }
}
</script>