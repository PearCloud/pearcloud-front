import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import { urls } from './utils/urls'

import { Connexion } from './pages/Connexion'
import { NotFound } from './pages/NotFound'
import { PrivateRoute } from './PrivateRoute'
import { Home } from './pages/Home'

import { Header } from './components/Header'
import { Albums } from './pages/Albums'

export const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Connexion />} />
                <Route path={urls.app.LOGIN} element={<Connexion />} />
                <Route
                    path={urls.app.HOME}
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path={urls.app.ALBUMS}
                    element={
                        <PrivateRoute>
                            <Albums />
                        </PrivateRoute>
                    }
                ></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}