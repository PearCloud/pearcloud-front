import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import { urls } from './utils/urls'

import { PrivateRoute } from './PrivateRoute'

import { Connexion } from './pages/Connexion'
import { NotFound } from './pages/NotFound'
import { PearCloud } from './pages/PearCloud'

import { Albums } from './layouts/Albums'
import { Favorites } from './layouts/Favorites'
import { Import } from './layouts/Import'
import { Trash } from './layouts/Trash'
import { Settings } from './layouts/Settings'
import { Home } from './layouts/Home'

import { Bubble } from './components/dev/Bubble'

export const App: React.FC = () => {
    return (
        <>
            <Bubble />
            <Routes>
                <Route path={urls.app.LOGIN} element={<Connexion />} />
                <Route path={urls.app.PEARCLOUD}
                    element={
                        <PrivateRoute>
                            <PearCloud />
                        </PrivateRoute>
                    }
                >
                    <Route path={urls.app.PEARCLOUD} element={
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