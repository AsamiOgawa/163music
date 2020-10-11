<template>
  <div class="songlist_item">
    <!-- 播放量 -->
    <div class="playCount" v-if="playCount >= 0">
      <img src="/img/listen.png" />
      <span>{{ playCount | playCountFilter }}</span>
    </div>
    <!-- 封面 -->
    <a href="#">
      <img :src="imgURL" @load="imgLoad" />
    </a>
    <!-- 标题 -->
    <div class="title" v-text="title"></div>
    <!-- 更新时间 -->
    <div v-if="updateFrequency" class="update_frequency" v-text="updateFrequency"></div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      tpye: String,
      default: ''
    },
    title: {
      tpye: String,
      default: ''
    },
    playCount: {
      tpye: Number,
      default: -1
    },
    updateFrequency: {
      tpye: String,
      default: ''
    }
  },

  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoad')
    }
  },

  computed: {
    imgURL() {
      return this.img ? this.img : '/img/loading.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.songlist_item {
  width: 100%;
  margin-bottom: 12px;
  position: relative;

  .playCount {
    position: absolute;
    top: 0;
    right: 10px;
    color: #fff;

    img {
      width: 24px;
      vertical-align: middle;
      margin-right: 5px;
    }

    span {
      font-size: 12px;
    }
  }

  img {
    width: 100%;
    border-radius: 8px;
  }

  .title {
    text-align: center;
    letter-spacing: 0.7px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 12px;
    font-size: 24px;
  }

  .update_frequency {
    position: absolute;
    bottom: 44px;
    padding-left: 5px;
    left: 0px;
    right: 0;
    font-size: 24px;
    color: #fff;
    opacity: 0.9;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0),
      rgba(182, 182, 182, 1)
    );
  }
}
</style>