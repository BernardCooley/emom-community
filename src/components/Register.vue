<template>
    <div class="registerContainer">
        <ion-page>
            <ion-header>
                <ion-toolbar class="toolbar-md-primary">
                    <ion-title>Register</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-content class="content">

                <ion-list>
                    <ion-item>
                        <label for="artistName">Artist name / alias</label>
                        <input type="text" id="artistName" v-model="user.artistName">
                    </ion-item>

                    <ion-item>
                        <label for="email">Email address</label>
                        <input type="email" id="email" v-model="user.email">
                    </ion-item>

                    <ion-item>
                        <label for="password">Choose a password</label>
                        <input type="password" id="password" v-model="user.password">
                    </ion-item>
                    <ion-item>
                        <ion-button v-on:click="register">Register</ion-button>
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-page>
    </div>
</template>

<script>
import db from '../firestore/firebaseInit'
import firebase from 'firebase'

export default {
  data() {
      return {
        user: {}
      }
  },
  methods: {
    register: function() {

        firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(
            user => {
                alert('Account create for' + this.user.artistName)
                this.$router.push('/music')
            },
            err => {
                alert(err.message)
            }
        )



        // db.collection('users').add({
        //     artistName: this.user.artistName,
        //     email: this.user.email,
        //     password: this.user.password
        // })
        // .then(docRef => this.$router.push('/'))
        // .catch(error => console.log(err))
    }
  }
}
</script>

<style>

</style>
