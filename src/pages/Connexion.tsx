import * as React from 'react'
import { To, useLocation, useNavigate } from 'react-router-dom'

import { auth } from '../utils/auth'
import { urls } from '../utils/urls'

export const Connexion: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state ? location.state : urls.app.HOME

    console.log(location.state, from)
    

    const handleLogin = () => {
        auth.login(() => {
            navigate(from as string)
        })
    }

    return (
        <div className='p-2 my-2 bg-red-300'>
            <h1>Login Page !</h1>
            <button onClick={handleLogin}>Log in</button>
            { location.state &&
                <div>
                    Vous devez être authentifié pour accéder à cette page
                </div>
            }
        </div>
    )
}