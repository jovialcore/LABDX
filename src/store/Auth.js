import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/login'

export default new Vuex.Store({
    state: {// state is like data(), the single source of truth
        user: null
    },

    mutations: {// mutations are like methods in the case of vuex
        setUserData() {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
        },

        clearUserData() {
            localStorage.removeItem('user')
            location.reload()
        }

    },
    //actions are used to handle asynchronous operations and actions commit mutations
    actions: {
        login({ commit }, credentials) {
            return axios
                .post('/login', credentials)
                .then(({ data }) => {
                    commit('setUserData', data)
                })
        },
        logout({ commit }) {
            commit('clearUserData')
        }
    },

    getters: {
        isLogged: state => !!state.user
    }
})


