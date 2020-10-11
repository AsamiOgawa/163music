<template>
  <div class="wrapper" :class="scrollXClass" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    specifiedIndexAsContent: {
      type: Number,
      default: 0
    },
    scrollX: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      bs: null
    }
  },

  mounted() {
    // 挂载完成后实例化better-scroll
    this.init()

    // 只有当probeType属性的值被设置为2或者3的时候才监听 "滚动事件"
    if (this.probeType === 2 || this.probeType === 3) {
      this.bs.on('scroll', position => {
        this.$emit('scrollHandler', position)
      })
    }

    // 只有当开启上拉加载事件(pullUpLoad)才设置监听
    if (this.pullUpLoad) {
      this.bs.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },

  methods: {
    init() {
      window.bs = this.bs = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        // 是否开启上拉加载功能
        pullUpLoad: this.pullUpLoad,
        // 指定wrapper的第几个子元素作为可滚动对象，索引默认为0
        specifiedIndexAsContent: this.specifiedIndexAsContent,
        // 是否可以横向滚动
        scrollX: this.scrollX
      })
    },

    // 滚动到指定的位置
    scrollTo(x, y, time = 500) {
      this.bs.scrollTo(x, y, time)
    },

    // 上拉加载事件
    finishPullUp() {
      this.bs.finishPullUp()
    },

    // 刷新content的高度
    refresh() {
      this.bs.refresh()
    },

    // 记录当前滚动的位置
    getScrollY() {
      return -this.bs.y
    }
  },

  computed: {
    scrollXClass() {
      return this.scrollX ? { scrollXClass: true } : {}
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  white-space: nowrap;
  overflow: hidden;

  &.scrollXClass {
    white-space: nowrap;

    .content {
      display: inline-block;
    }
  }
}
</style>