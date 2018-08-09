<template>
    <div class="headerContainer">
        <div>{{pageTitle}}</div>
        <div class="navMenu">
            <div v-if="!menuDisplayed">
                <button class="toggleButton" v-on:click="openMenu">
                    <img src="../assets/icons/hamburger_menu_icon.svg">
                </button>
            </div>
            <div v-else>
                <slide-menu></slide-menu>
            </div>
        </div>
    </div>
</template>

<script>
import SlideMenu from "../components/SlideMenu";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    SlideMenu
  },
  name: "app-header",
  methods: {
    ...mapMutations(["TOGGLE_MENU", "UPDATE_PAGE_TITLE"]),
    openMenu: function() {
      this.$store.commit("TOGGLE_MENU", true);
    }
  },
  computed: {
    ...mapState(["menuDisplayed", "pageTitle"])
  },
  created() {
    this.$store.commit("UPDATE_PAGE_TITLE", this.$route.name);
  },
  watch: {
    $route(to, from) {
      this.$store.commit("UPDATE_PAGE_TITLE", this.$route.name);
    }
  }
};
</script>

<style>
.headerContainer {
  z-index: 11;
  height: 50px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  contain: content;
  background-color: #488aff;
}
.toggleButton img {
    background-color: transparent;
}

.toggleButton {
    background-color: transparent;
}
</style>
