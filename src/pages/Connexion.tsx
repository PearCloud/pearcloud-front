import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { auth } from '../utils/auth'
import { urls } from '../utils/urls'

import { Connexion as ConnexionLayout } from '../layouts/Connexion'

export const Connexion: React.FC = () => {
    const navigate = useNavigate()

    React.useEffect(() => {
        if (auth.isAuthenticated) {
            navigate(urls.app.PEARCLOUD, { replace: true })
        }
    }, [])

    return (
        <ConnexionLayout />
    )
}