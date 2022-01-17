// import { urls } from './urls'

import { LogginTypes } from "../types/LogginTypes"

export const auth = {
    isAuthenticated: false,
    async logIn(loggin: LogginTypes, callback: any) {
        console.log(loggin)
        setTimeout(() => {
            auth.isAuthenticated = true
            callback()
        }, 2000)
    },
    logOut(callback: any) {
        setTimeout(() => {
            auth.isAuthenticated = false
            callback()
        }, 2000)
    },
}
