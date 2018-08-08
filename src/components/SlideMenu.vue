<template>
  <div v-if="menuDisplayed" class="slideMenuContainer">
    <ion-button class="toggleButton" v-on:click="closeMenu" ion-button menuToggle>
      Close
    </ion-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'slide-menu',
  computed: {
    ...mapState([
      'menuDisplayed'
    ])
  },
  methods: {
    ...mapMutations([
      'TOGGLE_MENU'
    ]),
    closeMenu: function() {
      console.log('closeMenu CLICKED')
      this.$store.commit('TOGGLE_MENU')
    }
  }
}
</script>

<style>
.toggleButton {
  float: right;
  background-color: transparent;
  color: white;
  border: none;
  box-shadow: none;
  height: 50px;
}
</style>
