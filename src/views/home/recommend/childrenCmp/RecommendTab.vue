<template>
  <tab class="recommendTab" bgcolor="#fff" height="100px">
    <tab-item color="#000" fontSize="13px" circle class="icon">
      <template #icon>
        <img src="/img/radio.png" />
      </template>
      <span class="animate__animated animate__bounceIn">私人FM</span>
    </tab-item>
    <tab-item color="#000" fontSize="13px" circle class="icon">
      <template #icon>
        <img src="/img/radio.png" />
      </template>
      <span class="animate__animated animate__bounceIn">每日推荐</span>
    </tab-item>
    <tab-item color="#000" fontSize="13px" circle class="icon">
      <template #icon>
        <img src="/img/list.png" />
      </template>
      <span class="animate__animated animate__bounceIn">歌单</span>
    </tab-item>
    <tab-item color="#000" fontSize="13px" circle class="icon">
      <template #icon>
        <img src="/img/rank.png" />
      </template>
      <span class="animate__animated animate__bounceIn">排行</span>
    </tab-item>
  </tab>
</template>

<script>
import { Tab, TabItem } from 'components/common/tab'

export default {
  components: { Tab, TabItem }
}
</script>

<style lang="scss" scoped>
.recommendTab {
  padding: 5px 0;
}
</style>