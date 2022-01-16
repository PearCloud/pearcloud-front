import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import { urls } from './utils/urls'

import { PrivateRoute } from './PrivateRoute'

import { Connexion } from './pages/Connexion'
import { NotFound } from './pages/NotFound'

import { Albums } from './pages/Albums'
import { Favorites } from './pages/Favorites'
import { Import } from './pages/Import'
import { Trash } from './pages/Trash'
import { Settings } from './pages/Settings'
import { Home } from './pages/Home'
import { PearCloud } from './layouts/PearCloud'

export const App: React.FC = () => {
    React.useEffect(() => {
        document.documentElement.setAttribute("lang", "fr")
    }, [])

    return (
        <>
            <Routes>
                <Route path={urls.app.LOGIN} element={<Connexion />} />
                <Route path={urls.app.PEARCLOUD} element={
                    <PrivateRoute>
                        <PearCloud />
                    </PrivateRoute>
                }>
                    <Route path={urls.app.HOME} element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    } />
                    <Route path={urls.app.IMPORT} element={
                        <PrivateRoute>
                            <Import />
                        </PrivateRoute>
                    } />
                    <Route path={urls.app.ALBUMS} element={
                        <PrivateRoute>
                            <Albums />
                        </PrivateRoute>
                    } />
                    <Route path={urls.app.FAVORITES} element={
                        <PrivateRoute>
                            <Favorites />
                        </PrivateRoute>
                    } />
                    <Route path={urls.app.TRASH} element={
                        <PrivateRoute>
                            <Trash />
                        </PrivateRoute>
                    } />
                    <Route path={urls.app.SETTINGS} element={
                        <PrivateRoute>
                            <Settings />
                        </PrivateRoute>
                    } />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}