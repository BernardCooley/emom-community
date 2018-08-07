import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Music from './components/Music'
import AudioPlayer from './components/AudioPlayer'
import Login from './components/Login'
import Register from './components/Register'
import AddTrack from './components/AddTrack'
import firebase from 'firebase'
import './firestore/firebaseInit'

Vue.config.ignoredElements = [/^ion-/]

Vue.use(VueRouter);



const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/music',
      component: Music,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/add-track',
      component: AddTrack,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

let app;
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router;