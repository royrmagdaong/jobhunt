import {
} from '../../api'

var store = {
    namespaced: true,
    state: {
        activeTab: {}
    },
    getters: {
        getActiveTab: state => state.activeTab
    },
    mutations: {
        SET_ACTIVE_TAB(state, payload){
            state.activeTab = payload
        }
    },
    actions:{
        setActiveTab(context, payload){
            context.commit('SET_ACTIVE_TAB', payload)
        }
    }
}

export default store