import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 创建事件总线
Vue.prototype.$bus = new Vue()

// 过滤器相关的
Vue.filter('playCountFilter', n => {
  // 歌单的播放量如果超过1万的话，就进行过滤
  if (Math.floor(n / 10000) >= 1) {
    return (n / 10000).toFixed(0) + '万'
  }
  return n
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
