import {
    login,
    signUpApplicant,
    signUpCompany
} from '../../api'

var store = {
    namespaced: true,
    state: {
        userInfo: null
    },
    getters: {
        getUserInfo: state => state.userInfo
    },
    mutations: {
        SET_USER_INFO(state, payload){
            state.userInfo = payload
        }
    },
    actions:{
        initStore(context){
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            context.commit('SET_USER_INFO', userInfo)
        },
        signUpApplicant(context, payload){
            return new Promise((resolve, reject) => {
                signUpApplicant(payload)
                .then(res => { resolve(res.data) })
                .catch(err => { reject(err) })
            })
        },
        signUpCompany(context, payload){
            return new Promise((resolve, reject) => {
                signUpCompany(payload)
                .then(res => { resolve(res.data) })
                .catch(err => { reject(err) })
            })
        },
        signIn(context, payload){
            return new Promise((resolve, reject) => {
                login(payload).then(res => {
                    if(res.data.response){
                        localStorage.setItem('userInfo', JSON.stringify(res.data.data))
                        context.commit('SET_USER_INFO', res.data.data)
                        resolve(res.data)
                    }else{
                        resolve(res.data)
                    }
                }).catch(err => { reject(err) })
            })
        },
        logout(context){
            localStorage.removeItem('userInfo')
            context.commit('SET_USER_INFO', null)
        }
    }
}

export default store