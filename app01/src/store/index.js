
import Vuex from 'vuex'
import Vue from 'vue'
import _ from 'lodash'
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        seq: 0, //db연동하면 지워질 변수
        accList: []
    },
    getters: {
        getaccList: state => {
            const accList = _.sortBy(state.accList, 'date')
            return accList
        },
    },
    mutations: {
        insertIntoAccList(state, data) {
            return state.accList = _.concat(state.accList, _.merge(data, {seq: ++state.seq}))
        }
    }
})
export default store