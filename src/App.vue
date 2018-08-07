<template>
  <div class="appContainer">
    <navigation />
    <ion-app>
      <router-view />
    </ion-app>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  components: {
    Navigation
  }
}


</script>

<style>

</style>
