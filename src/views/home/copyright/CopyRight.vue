<template>
  <div class="copyright" :class="{fixed}">
    <span>© 2020-2021 GL 版权所有</span>
  </div>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.copyright {
  margin-top: 2px;
  height: 68px;
  padding: 20px;
  color: rgb(153, 153, 153);
  background-color: rgb(44, 62, 80);
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>