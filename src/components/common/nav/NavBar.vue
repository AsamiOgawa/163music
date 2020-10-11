<template>
  <div class="navbar" :style="{'background-color': color}" @click="navBarHandler">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center" ref="center">
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
  },

  mounted() {
    const els = this.$refs.center.children
    els.length && (this.centerEls = els.length)
  },

  data() {
    return {
      centerEls: 0
    }
  },

  methods: {
    navBarHandler(e) {}
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;

  .left,
  .right {
    width: 115px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 54px;
      vertical-align: middle;
    }
  }

  .center {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 54px;

      & + img {
        margin-left: 38px;
      }
    }
  }
}
</style>