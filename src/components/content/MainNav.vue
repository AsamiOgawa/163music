<template>
  <nav-bar color="#e5473b" class="navbar">
    <!-- 菜单 -->
    <template #left>
      <img src="/img/aside.png" />
    </template>
    <!-- 导航 -->
    <template #center>
      <img src="/img/music.svg" />
      <img src="/img/logo.svg" />
      <img src="/img/video.svg" />
    </template>
    <!-- 查找 -->
    <template #right>
      <img src="/img/search.png" />
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/nav/NavBar'

export default {
  components: { NavBar }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 90px;
}
</style>