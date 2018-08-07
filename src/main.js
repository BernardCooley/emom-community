import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Music from './components/Music'
import AudioPlayer from './components/AudioPlayer'
import Login from './components/Login'
import Register from './components/Register'
import AddTrack from './components/AddTrack'

Vue.config.ignoredElements = [/^ion-/]

Vue.use(VueRouter);

const routes = [
  { 
    path: '/',
    component: Login
  },
  { 
    path: '/music', 
    component: Music,
    meta: {
      requiresAuth: true
    } 
  },
  { 
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/add-track',
    component: AddTrack,
    meta: {
      requiresAuth: true
    } 
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
