import Vue from 'vue'
import App from './App.vue'
import router from './App.vue';

Vue.config.ignoredElements = [/^ion-/]

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
