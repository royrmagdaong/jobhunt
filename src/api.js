import endpoints from './endpoints'
import axios from 'axios'

export function login(payload){
    return new Promise((resolve, reject) => {
        axios.post(endpoints.signIn, {
            email: payload.email,
            password: payload.password
        })
        .then(res => { resolve(res)})
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
        .then(res => { resolve(res)})
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
        .then(res => { resolve(res)})
        .catch(err => { reject(err)} )
    })
}