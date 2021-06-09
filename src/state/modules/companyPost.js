import {
    createJobPost
} from '../../api'

var store = {
    namespaced: true,
    state: {
        
    },
    getters: {
        
    },
    mutations: {
        
    },
    actions:{
        createJobPost(context, payload){
            const token = JSON.parse(localStorage.getItem('userInfo')).token
            return new Promise((resolve, reject) => {
                createJobPost({
                    token,
                    jobTitle: payload.jobTitle,
                    jobDescription: payload.jobDescription,
                    expectedSalary: payload.expectedSalary
                }).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}

export default store