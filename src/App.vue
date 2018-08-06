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

Vue.use(VueRouter);

const routes = [
  { path: '/music', component: Music },
  { path: '/login', component: Login }
]

export default new VueRouter({ routes })
</script>

<style>

</style>
