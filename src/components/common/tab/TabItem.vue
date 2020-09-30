<template>
  <div class="tab_item" :style="{color}" @click="tabHandler">
    <span class="animate__animated animate__bounceIn" :class="activeStyle">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#f5f5f5'
    },
    path: String
  },
  data() {
    return {}
  },
  methods: {
    tabHandler() {
      this.isActive || this.$router.push(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path
    },
    activeStyle() {
      return this.isActive ? { active: true } : {}
    }
  }
}
</script>

<style lang="scss" scoped>
.tab_item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--fs);
  cursor: pointer;

  span {
    color: var(--unActive);

    &.active {
      color: var(--color);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        padding-right: 100%;
        height: 1.5px;
        left: 0;
        bottom: -5px;
        background: #fff;
        opacity: 1;
        border-radius: 1.5px;
      }
    }
  }
}
</style>