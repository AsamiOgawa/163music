<template>
  <div class="title" v-text="title"></div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: bold;
  color: gray;
  font-size: 28px;
  padding: 20px 0 20px 22px;
}
</style>