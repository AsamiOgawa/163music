<template>
  <div class="songlist_wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.songlist_wrap {
  display: grid;
  grid-template-columns: repeat(3, 229px);
  gap: 3px 13.5px;
  justify-content: center;
  justify-items: center;
  align-items: center;
}
</style>