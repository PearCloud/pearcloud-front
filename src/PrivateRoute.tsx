import * as React from 'react'
import { Navigate, useLocation } from "react-router-dom"

import { auth } from "./utils/auth"
import { urls } from './utils/urls'

export const PrivateRoute = ({ children }: { children: any }) => {
    const location = useLocation()
    
    if (auth.isAuthenticated) {
        return children
    } else {
        return <Navigate to={urls.app.LOGIN} state={location.pathname} />
    }
}