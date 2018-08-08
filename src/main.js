import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import './firestore/firebaseInit'

Vue.config.ignoredElements = [/^ion-/]

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app) {
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  }
})