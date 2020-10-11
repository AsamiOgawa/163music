<template>
  <div class="tab_control" :style="tabStyle">
    <div
      class="tab_control_item"
      v-for="(item, index) of title"
      :key="index"
      @click="tabHandler(index)"
    >
      <span :class="currentIndex === index ? 'acitve' : ''">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },

  data() {
    return {
      currentIndex: 0
    }
  },

  methods: {
    tabHandler(i) {
      this.currentIndex = i
      this.$emit('changeTab', i)
    }
  },

  computed: {
    tabStyle() {
      return { gridTemplateColumns: `repeat(${this.title.length}, 104px)` }
    }
  }
}
</script>

<style lang="scss" scoped>
.tab_control {
  display: grid;
  justify-items: center;
  align-items: center;
  height: 88px;

  .tab_control_item {
    display: inline-block;
    text-align: center;
    width: 104px;
    span {
      &.acitve {
        color: var(--theme);
        border-bottom: 5px solid var(--theme);
        padding: 8px;
      }
    }
  }
}
</style>