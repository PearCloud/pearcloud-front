// import { urls } from './urls'

export const auth = {
    isAuthenticated: true,
    async logIn(loggin: Object, callback: Function) {
        console.log(loggin)
        setTimeout(() => {
            auth.isAuthenticated = true
            callback()
        }, 2000)
    },
    logOut(callback: Function) {
        setTimeout(() => {
            auth.isAuthenticated = false
            callback()
        }, 2000)
    },
}