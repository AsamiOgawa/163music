<template>
  <div>
    <main-tab></main-tab>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      :duration="{enter: 500, leave: 500}"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import MainTab from 'components/content/MainTab'
export default {
  components: {
    MainTab
  }
}
</script>