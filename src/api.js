import endpoints from './endpoints'
import axios from 'axios'

export function login(payload){
    return new Promise((resolve, reject) => {
        axios.post(endpoints.signIn, {
            email: payload.email,
            password: payload.password
        })
        .then(res => { resolve(res.data)})
        .catch(err => { reject(err)} )
    })
}

export function signUpApplicant(payload){
    return new Promise((resolve, reject) => {
        axios.post(endpoints.signUpApplicant, {
            name: payload.name,
            email: payload.email,
            password: payload.password
        })
        .then(res => { resolve(res.data)})
        .catch(err => { reject(err)} )
    })
}

export function signUpCompany(payload){
    return new Promise((resolve, reject) => {
        axios.post(endpoints.signUpCompany, {
            name: payload.name,
            email: payload.email,
            password: payload.password
        })
        .then(res => { resolve(res.data)})
        .catch(err => { reject(err)} )
    })
}

export function signUpCompanyUser(payload){
    return new Promise((resolve, reject) => {
        axios.post(endpoints.signUpCompanyUser, {
            name: payload.name,
            email: payload.email,
            password: payload.password
        })
        .then(res => { resolve(res.data)})
        .catch(err => { reject(err)} )
    })
}

export function getJobPosts(){
    return new Promise((resolve, reject) => {
        axios.get(endpoints.jobPosts)
        .then(res => { resolve(res.data)})
        .catch(err => { reject(err)} )
    })
}

export function createJobPost(payload){
    return new Promise((resolve, reject) => {
        axios.post(endpoints.createJobPost, {
            jobTitle: payload.jobTitle,
            jobDescription: payload.jobDescription,
            expectedSalary: payload.expectedSalary
        })
        .then(res => { resolve(res.data)})
        .catch(err => { reject(err)} )
    })
}