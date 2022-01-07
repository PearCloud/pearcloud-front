import axios from 'axios'

import { urls } from './urls'

const instance = axios.create({ baseURL: urls.api.MAIN })

export const auth = {
    isAuthenticated: false,
    async logIn(loggin: Object, callback: Function) {
        await instance.post(urls.api.LOGIN, loggin)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        auth.isAuthenticated = true
        callback()
    },
    logOut(callback: Function) {
        auth.isAuthenticated = false
        callback()
    },
}