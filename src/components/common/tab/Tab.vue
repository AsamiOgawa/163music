<template>
  <div id="tab" :style="{height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '44px'
    }
  }
}
</script>

<style lang="scss" scoped>
#tab {
  display: flex;
}
</style>