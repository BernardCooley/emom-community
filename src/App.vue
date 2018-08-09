<template>
    <div class="appContainer">
        <ion-app>
            <app-header />
            <div class="pageContainer">
                <router-view />
            </div>
            <navigation />
        </ion-app>
    </div>
</template>

<script>
import Navigation from "./components/Navigation";
import AppHeader from "./components/AppHeader";

export default {
  components: {
    Navigation,
    AppHeader
  }
};
</script>

<style>
.pageContainer {
    padding-top: 50px;
    height: 100%;
    overflow: hidden;
}
</style>
