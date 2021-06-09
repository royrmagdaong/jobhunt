import {
    getJobPosts
} from '../../api'

var store = {
    namespaced: true,
    state: {
        jobPosts: []
    },
    getters: {
        getJobPosts: state => state.jobPosts
    },
    mutations: {
        SET_JOB_POSTS(state, payload){
            state.jobPosts = payload
        }
    },
    actions:{
        initStore(context){
            return new Promise((resolve, reject) => {
                getJobPosts().then(res => {
                    context.commit('SET_JOB_POSTS', res.data)
                    console.log(res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}

export default store