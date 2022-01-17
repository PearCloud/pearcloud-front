import * as React from "react"
import { Link } from "react-router-dom"

import { urls } from "../utils/urls"

import { LanguageButton } from "../components/LanguageButton"
import { DarkModeButton } from "../components/DarkModeButton"

export const NotFound: React.FC = () => (
    <div className="w-screen h-screen relative bg-slate-200 dark:bg-slate-800 text-p-2 text-xl transition-colors">
        <div className="absolute flex items-center right-2 top-2">
            <LanguageButton />
            <DarkModeButton />
        </div>
        <div className="h-full flex flex-col items-center justify-center">
            <div className="text-center text-slate-800 dark:text-slate-200">
                <div className="text-4xl my-4">Error 404</div>
                <div className="text-2xl my-4">Page not found</div>
                <Link
                    to={urls.app.PEARCLOUD}
                    className="block p-4 my-5 rounded-full text-slate-50 dark:text-slate-200 bg-green-500 dark:bg-green-700 hover:bg-green-600 dark:hover:bg-green-800 transition-colors"
                >
                    Accueil
                </Link>
            </div>
        </div>
    </div>
)
