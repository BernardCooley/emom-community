<template>
  <div class="appContainer">
    <ion-header><ion-toolbar class="toolbar-md-primary"></ion-toolbar></ion-header>

    <navigation />
    <ion-app>
      <router-view />
    </ion-app>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    Navigation
  },
  methods: {
        ...mapMutations([
            'TOGGLE_MENU',
            'UPDATE_PAGE_TITLE'
        ]),
        toggleMenu: function() {
            this.$store.commit('TOGGLE_MENU')
        }
    },
    computed: {
        ...mapState([
            'menuDisplayed',
            'pageTitle'
        ])
    },
    created() {
        this.$store.commit('UPDATE_PAGE_TITLE', this.$route.name)
    },
    watch: {
        $route(to, from) {
            this.$store.commit('UPDATE_PAGE_TITLE', this.$route.name)
        }
    }
}


</script>

<style>

</style>
