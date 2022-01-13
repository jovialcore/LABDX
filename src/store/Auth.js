import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = process.env.ROOT_API
    //"http://labdxbe.herokuapp.com/"
    //process.env.VUE_APP_API_ENDPOINT

export default new Vuex.Store({
    state: { // state is like data(), the single source of truth
        user: null,
        doctors: []
    },

    mutations: { // mutations are like methods in the case of vuex
        setUserData(state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
        },

        clearUserData() {
            localStorage.removeItem('user')
            location.reload()
        },

        ListDoctors(state, doctors) {
            state.doctors = doctors
        }

    },

    //actions are used to handle asynchronous operations and actions commit mutations
    actions: {

        register({ commit }, credentials) {
            return axios
                .post('/api/register', credentials)
                .then(({ data }) => { //instead of "response.data", using argument destructuring you can just write "data"
                    commit('setUserData', data)
                })

        },
        login({ commit }, credentials) {

            // we use this commit  with the reference of argument destructuring in javascript
            //Ideally, action handlers recieves an arbitary REP Object which can be used in place of the original STORE instance's properties/methods (refer to vue docs: https://vuex.vuejs.org/guide/actions.html#dispatching-actions)
            /*
            so if we do something like this:

        login( storeRep ) {
              storeRep.commit('setUserData)  

        })          
    the above way of refering of committing a mutation its a situatuion where we don't use argument destructuring
    for more info on argument destructring check this https://bit.ly/3ErldLo ,

    you can also add other parameters in the function
    */
            return axios
                .post('/api/login', credentials)
                .then(({ data }) => {
                    commit('setUserData', data)
                })
        },
        logout({ commit }) {
            commit('clearUserData')
        },

        doctors({commit}, allDoctorsInfo) {
            return axios 
                .get('/api/doctor')
                .then ()
        }
    },

    getters: {
        isLogged: state => !!state.user // this is a short form to make value to be a boolean; either true or false()
            //so basically we are checking if the user is logged with true/false
    }
})

//actions commit mutations (caller.commit) but mutations change the state
//actions can access the state(caller.state) too and getters (caller.getters) 
//we can call other actions too using caller.dispatch
//getters are like the computed properties of vues stores