<template>
  <div>
    <slot>
      <div class="top"></div>
    </slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.top {
  border-top: 40px solid transparent;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 40px solid #007bff;
  position: fixed;
  bottom: 50px;
  right: 27px;
}
</style>