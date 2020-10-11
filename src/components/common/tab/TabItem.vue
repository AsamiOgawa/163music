<template>
  <div class="tab_item" :class="{iconTop}" @click="tabHandler" :style="{color, fontSize}">
    <!-- 字体图标 -->
    <div class="iconWrap" v-if="isShow">
      <slot name="icon"></slot>
    </div>
    <!-- 文字 -->
    <span :class="activeStyle">
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
      margin-bottom: 11px;
    }
  }

  .iconWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--theme);
    width: 105px;
    height: 105px;
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
    font-size: 25px;

    &.active {
      position: relative;
      padding: 6px;
      border-bottom: 3px solid #fff;
    }
  }
}
</style>