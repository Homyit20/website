import Vue from 'vue'
import Vuex from 'vuex'

Vue.use('Vuex');

const store = Vuex.store({
    state : {
        success : 0
    },
    matutions : {
        judge(state){
            state.success = 1;
        }
    }
})