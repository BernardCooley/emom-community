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

export default {
    name: 'navigation',
    data: function() {
        return {
            isLoggedIn: false,
            currentUser: null
        }
    },
    created() {
        if(firebase.auth().currentUser) {
            this.isLoggedIn = true
            this.currentUser = firebase.auth().currentUser.artistName
        }
    },
    methods: {
        logout: function() {
            firebase.auth().signOut().then(() => {
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
