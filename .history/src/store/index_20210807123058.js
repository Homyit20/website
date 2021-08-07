import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state : {
        success : 0,
        isnav : false
    },
    mutations : {
        judge(state){
            state.success = 1
        },
        navview(state){
            state.isnav = true
        },
        navhidden(state){
            state.isnav = false
        }
    }
})

export default store;