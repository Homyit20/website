import Vue from 'vue'
import Vuex from 'vuex'

Vue.use('Vuex');

const store = Vuex.store({
    state : {
        success : 0
    },
    mutations : {
        judge(state){
            state.success = 1;
        }
    }
})

export default store;