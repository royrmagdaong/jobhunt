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
            return new Promise((resolve, reject) => {
                createJobPost({
                    jobTitle: payload.jobTitle,
                    jobDescription: payload.jobDescription,
                    expectedSalary: payload.expectedSalary,
                    numberOfApplicantNeeded: payload.numberOfApplicantNeeded
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