import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { auth } from '../utils/auth'
import { urls } from '../utils/urls'

export const Header: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div>
            {auth.isAuthenticated &&
                <div>
                    <div>Authentified</div>
                    <button onClick={() => { auth.logOut(() => navigate(urls.app.LOGIN))}}>
                        Sign out
                    </button>
                </div> 
            }
        </div>
    )
}