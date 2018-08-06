import Vue from 'vue'
import App from './App.vue'
import router from './App.vue';
import './firebase';
import VueFire from 'vuefire'

Vue.use(VueFire);

Vue.config.ignoredElements = [/^ion-/]

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
