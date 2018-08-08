import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: false
    },
    mutations: {
        UPDATE_ISLOGGED_IN: (state, prop) => {
            state.isLoggedIn = prop
        }
    },
    actions: {

    }
}) 