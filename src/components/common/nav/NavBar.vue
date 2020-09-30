<template>
  <div class="navbar" :style="{'background-color': color}">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#007bff'
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 45px;

  .left {
  }

  .center {
    flex: 1;

    > img + img {
      margin-left: 29px;
    }
  }

  .right {
  }

  .left,
  .right {
    width: 58px;
  }

  .left,
  .center,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 29px;
    }
  }
}
</style>