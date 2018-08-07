<template>
  <ion-app>
    <router-view></router-view>
  </ion-app>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router';

import Music from './components/Music'
import AudioPlayer from './components/AudioPlayer'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(VueRouter);

const routes = [
  { path: '/music', component: Music },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

export default new VueRouter({ routes })
</script>

<style>

</style>
