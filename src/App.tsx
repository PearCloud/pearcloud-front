import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import { urls } from './utils/urls'

import { PrivateRoute } from './PrivateRoute'

import { Connexion } from './pages/Connexion'
import { NotFound } from './pages/NotFound'
import { PearCloud } from './pages/PearCloud'

export const App: React.FC = () => {
    return (
        <Routes>
            <Route path={urls.app.LOGIN} element={<Connexion />} />
            <Route
                path={urls.app.PEARCLOUD}
                element={
                    <PrivateRoute>
                        <PearCloud />
                    </PrivateRoute>
                }
            ></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}