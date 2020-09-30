<template>
  <div>
    <tab>
      <tab-item path="/home/recommend">推荐</tab-item>
      <tab-item path="/home/list">歌单</tab-item>
      <tab-item path="/home/rank">排行榜</tab-item>
    </tab>
  </div>
</template>

<script>
import { Tab, TabItem } from '../common/tab'
export default {
  components: {
    Tab,
    TabItem
  }
}
</script>