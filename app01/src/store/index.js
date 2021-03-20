
import Vuex from 'vuex'
import Vue from 'vue'
import _ from 'lodash'
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
     accList: [
        { seq: 1, date: '2021-10-15', income: 50000, outcome: 40000 },
        { seq: 2, date: '2021-11-15', income: 50000, outcome: 40000 },
        { seq: 3, date: '2021-12-15', income: 50000, outcome: 40000 },
        { seq: 4, date: '2021-1-15', income: 50000, outcome: 40000 },
        { seq: 5, date: '2021-2-15', income: 50000, outcome: 40000 },
        { seq: 6, date: '2021-3-15', income: 50000, outcome: 40000 },
        { seq: 7, date: '2021-10-15', income: 50000, outcome: 40000 },
        { seq: 8, date: '2021-11-15', income: 50000, outcome: 40000 },
        { seq: 9, date: '2021-12-15', income: 50000, outcome: 40000 },
        { seq: 10, date: '2021-1-15', income: 50000, outcome: 40000 },
        { seq: 11, date: '2021-2-15', income: 50000, outcome: 40000 },
        { seq: 12, date: '2021-3-15', income: 50000, outcome: 40000 },
        { seq: 13, date: '2021-10-15', income: 50000, outcome: 40000 },
        { seq: 14, date: '2021-11-15', income: 50000, outcome: 40000 },
        { seq: 15, date: '2021-12-15', income: 50000, outcome: 40000 },
        { seq: 16, date: '2021-1-15', income: 50000, outcome: 40000 },
        { seq: 17, date: '2021-2-15', income: 50000, outcome: 40000 },
        { seq: 18, date: '2021-3-15', income: 50000, outcome: 40000 }
        ]
    },
    getters: {
        getaccList: state => {
            return state.accList
        },
    },
    mutations: {
        
    }
})
export default store