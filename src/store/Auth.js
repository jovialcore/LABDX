import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/login'

export default new Vuex.Store({
    state: {
        user: null
    }

    
})
