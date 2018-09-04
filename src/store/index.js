import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        correntYear: 2018,
        correntMonth: 9,
    },
    mutations: {
        setCurrentMonth(state, payload){
            state.correntMonth = payload;
        },
        setCurrentYear(state, payload){
            state.correntYear = payload;
        }
    }
})