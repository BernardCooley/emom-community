<template>
    <div class="navigationContainer">
        <div class="navItemsContainer">
            <ion-button class="navButton" v-if="!isLoggedIn" v-on:click="login">Login</ion-button>
            <ion-button class="navButton" v-if="!isLoggedIn" v-on:click="register">Register</ion-button>
            <ion-button class="navButton" v-if="isLoggedIn" v-on:click="logout">Logout</ion-button>
        </div>
    </div>
</template>

<script>
import firebase from "firebase"
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'navigation',
    data: function() {
        return {
            currentUser: null
        }
    },
    created() {
        if(firebase.auth().currentUser) {
            this.$store.commit('UPDATE_ISLOGGED_IN', true)
            this.currentUser = firebase.auth().currentUser.artistName
        }else {
            this.$store.commit('UPDATE_ISLOGGED_IN', false)
        }
    },
    methods: {
        logout: function() {
            firebase.auth().signOut().then(() => {
                this.$store.commit('UPDATE_ISLOGGED_IN', false)
                this.$router.push('/login')
            })
        },
        login: function() {
            firebase.auth().signOut().then(() => {
                this.$router.push('/login')
            })
        },
        register: function() {
            firebase.auth().signOut().then(() => {
                this.$router.push('/register')
            })
        }
    },
    computed: {
        ...mapState([
            'isLoggedIn'
        ])
    }
}
</script>

<style>
.navigationContainer {
    height: 50px;
    z-index: 1;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.navItemsContainer {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: Roboto, "Helvetica Neue", sans-serif;
    display: flex;
}

.navButton {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 0;
    margin: 0;
    font-size: 1em;
}
</style>
