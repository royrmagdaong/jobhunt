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