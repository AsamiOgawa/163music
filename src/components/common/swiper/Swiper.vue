<template>
  <div
    id="swiper"
    :style="{ borderRadius: radius}"
    @mouseover="clearInterval"
    @mouseout="startInterval"
  >
    <!-- 轮播图区域 -->
    <div class="img_row" ref="imgs">
      <slot></slot>
    </div>
    <!-- 指示器区域 -->
    <div class="indictor_row" @click="indictorHandler">
      <i
        v-for="item of imgNum"
        :key="item"
        class="animate__animated"
        :class="[
        {indictorActive: item - 1 === currentIndex ? true : ''},
        {animate__zoomIn: item - 1 === currentIndex ? true : ''}
        ]"
        :data-i="item"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 设置轮播图容器的圆角
    radius: {
      type: String,
      default: '0'
    },
    // 设置定时器的间隔切换时间
    time: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      // 轮播图的父容器
      imgRow: null,
      // 图片的数量
      imgNum: 0,
      // 默认当前图片索引号
      currentIndex: 0,
      // 上一张图片按钮
      lastBtn: null,
      // 下一张图片按钮
      nextBtn: null,
      // 定时器
      timer: -1
    }
  },
  mounted() {
    setTimeout(() => {
      this.getDOM()
      this.startInterval()
    }, 2000)
  },
  methods: {
    /* 获取相关DOM元素 */
    getDOM() {
      // 必须延迟获取图片元素，因为图片挂载到swiper容器也是需要时间的
      if (this.$refs.imgs) {
        this.imgRow = this.$refs.imgs
        this.imgNum = this.imgRow.children.length
      }
      // 获取上/下一个图片的按钮
      // this.lastBtn = document.getElementsByClassName('last')[0]
      // this.nextBtn = document.getElementsByClassName('next')[0]

      // 为按钮添加节流函数
      // this.lastBtn.onclick = this.throttle(this.lastHandler, 700)
      // this.nextBtn.onclick = this.throttle(this.nextHandler, 700)

      // 创建最后一项图片元素
      this.imgRow && this.createLastImg()
    },

    /* 设置定时器 */
    startInterval() {
      this.timer = setInterval(() => {
        this.nextHandler()
      }, this.time)
    },

    /* 清除定时器 */
    clearInterval() {
      clearInterval(this.timer)
    },

    /* 上一页图片功能 */
    lastHandler() {
      this.imgRow.style.transition = 0 + 's'
      if (this.currentIndex === 0) {
        this.currentIndex = this.imgNum
        this.imgRow.style.transform = `translateX(${-this.currentIndex * 100}%)`
        this.currentIndex--
        this.imgRow.style.transition = 0.3 + 's'
        this.imgRow.style.transform = `translateX(${-this.currentIndex * 100}%)`
        setTimeout(() => {}, 100)
      } else {
        this.currentIndex--
        this.imgRow.style.transition = 0.3 + 's'
        this.imgRow.style.transform = `translateX(${-this.currentIndex * 100}%)`
      }
    },

    /* 下一页图片功能 */
    nextHandler() {
      if (this.imgRow) {
        this.currentIndex++
        if (this.currentIndex === this.imgNum) {
          this.imgRow.style.transform = `translateX(${-this.currentIndex *
            100}%)`
          setTimeout(() => {
            this.currentIndex = 0
            this.imgRow.style.transition = 0 + 's'
            this.imgRow.style.transform = `translateX(0%)`
          }, 500)
        } else {
          this.imgRow.style.transition = 0.3 + 's'
          this.imgRow.style.transform = `translateX(${-this.currentIndex *
            100}%)`
        }
      }
    },

    /* 节流函数 */
    throttle(fn, second) {
      let startTime = new Date()
      return function() {
        let time_ = new Date() - startTime >= second
        if (time_) {
          fn()
          startTime = new Date()
        }
      }
    },

    /* 获取完图片元素后，在图片容器swiper_row上再添加第一张图片，实现无缝衔接轮播的效果 */
    createLastImg() {
      const src = this.imgRow.firstChild.firstChild.src
      const lastImgWrap = document.createElement('div')
      const lastImg = document.createElement('img')
      lastImgWrap.className = 'img_item'
      lastImg.src = src
      lastImgWrap.appendChild(lastImg)
      this.imgRow.appendChild(lastImgWrap)
    },

    /* 点击指示器，跳转到对应的图片 */
    indictorHandler(e) {
      const el = e.target
      // 如果点击的是指示器(即小圆点)，就执行对应的功能
      if (el.nodeName === 'I') {
        // 获取当前点击指示器的索引
        const { i } = el.dataset
        this.currentIndex = i
        this.lastHandler()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#swiper {
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  .img_row {
    display: flex;
  }
  .indictor_row {
    position: absolute;
    left: 50%;
    bottom: 7px;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      display: inline-block;
      width: 12px;
      height: 12px;
      background-color: #ebedf0;
      border-radius: 50%;
      cursor: pointer;
      opacity: 0.3;
      transition-duration: 0.5s;

      & + i {
        margin-left: 12px;
      }

      &.indictorActive {
        background-color: #fff;
        opacity: 0.7;
      }
    }
  }
}
</style>