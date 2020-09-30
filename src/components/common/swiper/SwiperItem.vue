<template>
  <div class="img_item">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.img_item {
  width: 100%;
  flex-shrink: 0;

  img {
    width: 100%;
    vertical-align: middle;
  }
}
</style>