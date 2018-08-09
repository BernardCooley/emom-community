<template>
  <div class="slideMenuContainer">
    <button class="toggleButton" v-on:click="closeMenu">
      Close
    </button>
    <button class="navigationButton" v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import firebase from "firebase";

export default {
  name: "slide-menu",
  methods: {
    ...mapMutations([
      "TOGGLE_MENU"
    ]),
    closeMenu: function() {
      console.log("closeMenu CLICKED");
      this.$store.commit("TOGGLE_MENU", false);
    },
    logout: function() {
      firebase
        .auth().signOut().then(() => {
          this.$store.commit("UPDATE_ISLOGGED_IN", false);
          this.$router.push("/login");
        });
    }
  }
};
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

.navigationButton {
  width: 100%;
  height: 100%;
  border-radius: 0;
  padding: 0;
  margin: 0;
  font-size: 1em;
}
.slideMenuContainer {
  z-index: 11;
  color: black;
}
</style>
