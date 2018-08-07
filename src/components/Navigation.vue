<template>
    <div class="navigationContainer">
        <ul>
            <li>
                <ion-button v-on:click="login">Login</ion-button>
            </li>
            <li>
                <ion-button v-on:click="register">Register</ion-button>
            </li>
            <li>
                <ion-button v-on:click="logout">Logout</ion-button>
            </li>
        </ul>
    </div>
</template>

<script>
import firebase from "firebase"

export default {
    data() {
        return {
            isLoggedIn: false,
            currentUser: false
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
    z-index: 2;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.navigationContainer ul {
    width: 100%;
    height: 100%;
    z-index: 1;
    padding: 0;
    margin: 0;
    font-family: Roboto,"Helvetica Neue",sans-serif;
    display: flex;
    list-style: none;
}

.navigationContainer ul li {
    width: 33.333%;
}

.navigationContainer ul li button {
    width: 100%;
    text-decoration: none;
    height: 100%;
    border-radius: 0;
    padding: 0;
    margin: 0;
    font-size: 1em;
}
</style>
