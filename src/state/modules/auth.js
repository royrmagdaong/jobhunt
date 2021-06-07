import {
    login
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
        register({context}){
            console.log(context)
            // axios.post('/user/create', {
            //     role: "applicant",
            //     name: payload.name,
            //     email: payload.email,
            //     password: payload.password
            // }).then(res => {
            //     console.log(res)
            // }).catch(err => {
            //     console.log(err)
            // })
        },
        signIn(context, payload){
            return new Promise((resolve, reject) => {
                login(payload).then(res => {
                    if(res.data.response){
                        localStorage.setItem('userInfo', JSON.stringify(res.data.data))
                        context.commit('SET_USER_INFO', res.data.data)
                        // console.log(res.data)
                        resolve(res.data)
                    }else{
                        // console.log(res.data)
                        resolve(res.data)
                    }
                }).catch(err => {
                    // console.log(err.response.data.message)
                    reject(err)
                })
            })
        },
        logout(context){
            localStorage.removeItem('userInfo')
            context.commit('SET_USER_INFO', null)
        }
    }
}

export default store