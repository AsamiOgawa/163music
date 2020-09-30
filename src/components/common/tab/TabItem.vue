<template>
  <div class="tab_item" :class="{iconTop}" @click="tabHandler" :style="{color, fontSize}">
    <div class="iconWrap" v-if="isShow">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#f5f5f5'
    },
    fontSize: {
      type: String,
      default: '14px'
    },
    iconTop: {
      type: Boolean,
      default: true
    },
    path: String
  },
  data() {
    return {
      isShow: true
    }
  },
  mounted() {
    setTimeout(() => {
      const iconEls = document.querySelectorAll('.iconWrap')
      for (const icon of iconEls) {
        if (icon.children.length === 0) {
          this.isShow = false
        }
      }
    }, 500)
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

  &.iconTop {
    flex-direction: column;
    .iconWrap {
      margin-bottom: 7px;
    }
  }

  .iconWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--theme);
    width: 58px;
    height: 58px;
    border-radius: 50%;
    transition-duration: 0.3s;
    &:hover {
      transform: rotate(180deg);
    }

    img {
      width: 50%;
    }
  }

  span {
    &.active {
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