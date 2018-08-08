<template>
    <div class="headerContainer">
        <!--{{pageTitle}}
        <button v-if="!menuDisplayed" class="toggleButton" v-on:click="toggleMenu">
            <img src="../assets/icons/hamburger_menu_icon.svg">
        </button>-->
    </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'

// export default {
//     name: 'header',
//     methods: {
//         ...mapMutations([
//             'TOGGLE_MENU',
//             'UPDATE_PAGE_TITLE'
//         ]),
//         toggleMenu: function() {
//             this.$store.commit('TOGGLE_MENU')
//         }
//     },
//     computed: {
//         ...mapState([
//             'menuDisplayed',
//             'pageTitle'
//         ])
//     },
//     created() {
//         this.$store.commit('UPDATE_PAGE_TITLE', this.$route.name)
//     },
//     watch: {
//         $route(to, from) {
//             this.$store.commit('UPDATE_PAGE_TITLE', this.$route.name)
//         }
//     }
// }
</script>

<style>
/*.headerContainer {
    width: 100%;
    height: 56px;
    background-color: blue;
}*/
</style>
