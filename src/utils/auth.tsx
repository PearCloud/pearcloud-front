/* TODO */
export const auth = {
    isAuthenticated: false,
    login(callBack: Function) {
        auth.isAuthenticated = true
        callBack()
    },
    logout(callBack: Function) {
        auth.isAuthenticated = false
        callBack()
    },
}