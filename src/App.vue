<template>
  <div id="app">
    <nav-bar color="#e5473b">
      <template #left>
        <img src="/img/aside.png" />
      </template>
      <template #center>
        <img src="/img/music.svg" />
        <img src="/img/logo.svg" />
        <img src="/img/video.svg" />
      </template>
      <template #right>
        <img src="/img/search.png" />
      </template>
    </nav-bar>
    <router-view />
  </div>
</template>

<script>
import NavBar from 'components/common/nav/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
@import url('assets/css/common.css');
</style>