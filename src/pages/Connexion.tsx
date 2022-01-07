import * as React from 'react'
import ReactLoading from 'react-loading'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { GiPear } from 'react-icons/gi'
import { useLocation, useNavigate } from 'react-router-dom'

import { auth } from '../utils/auth'
import { urls } from '../utils/urls'

import { DarkModeButton } from '../components/DarkModeButton'
import { LanguageButton } from '../components/LanguageButton'

export const Connexion: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [hide, setHide] = React.useState<boolean>(true)

    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [identifiant, setIdentifiant] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const from = location.state ? location.state : urls.app.HOME

    const hidePass = (e: Event) => {
        e.preventDefault()
        if (hide) {
            document.getElementById('password')?.setAttribute('type', 'text')
            setHide(false)
        } else {
            document.getElementById('password')?.setAttribute('type', 'password')
            setHide(true)
        }
    }

    const handleLogin = (e: Event) => {
        e.preventDefault()
        setIsLoading(true)

        const loggin = { identifiant: identifiant, password: password }

        auth.logIn(loggin, () => {
            setIsLoading(false)
            navigate(from as string)
        })
    }

    return (
        <div className="w-screen h-screen relative bg-slate-200 dark:bg-slate-800 text-p-2 text-xl transition-colors">
            <div className="absolute flex items-center right-2 top-2">
                <LanguageButton />
                <DarkModeButton />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="text-center w-80">
                    <div className="flex justify-center items-center mb-10 text-3xl text-slate-800 dark:text-slate-200">
                        <span className="text-green-500">Pear</span>Cloud <GiPear />
                    </div>
                    <form className="flex flex-col" onSubmit={handleLogin as any}>
                        <label htmlFor="identifiant" className="mb-1 text-left cursor-pointer text-slate-800 dark:text-slate-200">
                            Identifiant
                        </label>
                        <input
                            type="text"
                            placeholder="iamthepear@pearcloud.fr"
                            name="identifiant"
                            id="identifiant"
                            required
                            value={identifiant}
                            onChange={(e) => setIdentifiant(e.target.value)}
                            className="mb-10 focus:outline-none rounded-xl p-4 justify-end text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-700"
                            />
                        <label htmlFor="password" className="mb-1 text-left cursor-pointer text-slate-800 dark:text-slate-200">
                            Mot de passe
                        </label>
                        <div className="relative mb-10 h-16">
                            <input
                                type="password"
                                placeholder="**********"
                                name="password"
                                id="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="absolute left-0 w-full focus:outline-none rounded-xl p-4 justify-end text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-700"
                                />
                            <button className="absolute right-4 bottom-6 text-slate-800 dark:text-slate-200" onClick={hidePass as any}>{hide ? <FiEyeOff /> : <FiEye />}</button>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="rounded-full py-4 px-8 text-2xl font-bold text-slate-50 dark:text-slate-200 bg-green-500 dark:bg-green-700"
                                >
                                    {isLoading ? (
                                        <ReactLoading
                                            type="spin"
                                            color="white"
                                            height={27}
                                            width={27}
                                        />
                                        ) : (
                                        "S'identifier"
                                    )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}