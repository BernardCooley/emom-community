import Vue from 'vue'
import Router from 'vue-router'
import Music from '../components/Music'
import AudioPlayer from '../components/AudioPlayer'
import Login from '../components/Login'
import Register from '../components/Register'
import AddTrack from '../components/AddTrack'
import Home from '../components/Home'

import firebase from 'firebase'
import '../firestore/firebaseInit'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/add-track',
      name: 'add-track',
      component: AddTrack,
      meta: {
        requiresAuth: true
      }
    }
  ]
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