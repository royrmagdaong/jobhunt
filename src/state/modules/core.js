import {
} from '../../api'

var store = {
    namespaced: true,
    state: {
        snackbar:{
            show: false,
            duration: '4000',
            message: ''
        }
    },
    getters: {
        getSnackbar: state => state.snackbar
    },
    mutations: {
        SET_SNACKBAR(state, payload){ state.snackbar = payload }
    },
    actions:{
        setSnackbar(context, payload){
            context.commit('SET_SNACKBAR', {
                show: payload.show,
                duration: payload.duration,
                message: payload.message
            })
        }
    }
}

export default store