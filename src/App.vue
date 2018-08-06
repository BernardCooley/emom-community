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

Vue.use(VueRouter);

const routes = [
  { path: '/music', component: Music }
]

export default new VueRouter({ routes })
</script>

<style>

</style>
