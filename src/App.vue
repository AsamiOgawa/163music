<template>
  <div id="app">
    <main-nav />
    <router-view />
  </div>
</template>

<script>
import MainNav from 'components/content/MainNav'

export default {
  components: {
    MainNav
  }
}
</script>

<style lang="scss" scoped>
@import url('assets/css/common.css');

#app {
  height: 100vh;
  position: relative;
}
</style>