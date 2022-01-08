import * as React from 'react'
import ReactLoading from 'react-loading'
import { useNavigate, Link } from 'react-router-dom'

import { GiPear } from 'react-icons/gi'
import { FaRegStar } from 'react-icons/fa'
import { GoSettings } from 'react-icons/go'
import { FiHome } from 'react-icons/fi'
import { AiOutlineCloud } from 'react-icons/ai'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { BsJournalAlbum, BsTrash2 } from 'react-icons/bs'

import { auth } from '../utils/auth'
import { urls } from '../utils/urls'

import { LanguageButton } from './LanguageButton'
import { DarkModeButton } from './DarkModeButton'
import { StorageInfo } from './StorageInfo'

export const Navbar: React.FC = () => {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const firstName: string = "Enzo"
    const lastName: string  = "CANDOTTI"

    const handleLogout = (e: Event) => {
        e.preventDefault()
        setIsLoading(true)

        auth.logOut(() => {
            setIsLoading(false)
            navigate(urls.app.LOGIN)
        })
    }

    return (
        <nav className="flex flex-row md:flex-col items-center lg:items-stretch justify-between bg-slate-50 dark:bg-slate-700 p-0 md:p-1 md:py-3 lg:p-5">
            <div className="hidden md:flex justify-center items-center mb-10 text-3xl text-slate-800 dark:text-slate-200 select-none">
                <span className="hidden lg:inline"><span className="text-green-500">Pear</span>Cloud</span> <GiPear />
            </div>
            <div className="text-xl md:text-base flex flex-row justify-between w-full md:w-auto p-2 md:block">
                <div className="my-2 md:my-5">
                    <Link to={urls.app.PEARCLOUD} className="flex items-center p-2 border rounded-xl text-slate-800 dark:text-slate-200 hover:border-green-500 hover:text-green-500 dark:hover:text-green-500 transition-colors">
                        <FiHome className="mx-2"/> <span className="hidden lg:inline">Photos</span>
                    </Link>
                </div>
                <div className="my-2 md:my-5">
                    <Link to={urls.app.IMPORT} className="flex items-center p-2 border rounded-xl text-slate-800 dark:text-slate-200 hover:border-green-500 hover:text-green-500 dark:hover:text-green-500 transition-colors">
                        <AiOutlineCloud className="mx-2" /> <span className="hidden lg:inline">Importer</span>
                    </Link>
                </div>
                <div className="my-2 md:my-5">
                    <Link to={urls.app.ALBUMS} className="flex items-center p-2 border rounded-xl text-slate-800 dark:text-slate-200 hover:border-green-500 hover:text-green-500 dark:hover:text-green-500 transition-colors">
                        <BsJournalAlbum className="mx-2" /> <span className="hidden lg:inline">Albums</span>
                    </Link>
                </div>
                <div className="my-2 md:my-5">
                    <Link to={urls.app.FAVORITES} className="flex items-center p-2 border rounded-xl text-slate-800 dark:text-slate-200 hover:border-green-500 hover:text-green-500 dark:hover:text-green-500 transition-colors">
                        <FaRegStar className="mx-2" /> <span className="hidden lg:inline">Favoris</span>
                    </Link>
                </div>
                <div className="my-2 md:my-5">
                    <Link to={urls.app.TRASH} className="flex items-center p-2 border rounded-xl text-slate-800 dark:text-slate-200 hover:border-green-500 hover:text-green-500 dark:hover:text-green-500 transition-colors">
                        <BsTrash2 className="mx-2" /> <span className="hidden lg:inline">Corbeille</span>
                    </Link>
                </div>
                <div className="hidden md:block my-2 md:my-5">
                    <Link to={urls.app.SETTINGS} className="flex items-center p-2 border rounded-xl text-slate-800 dark:text-slate-200 hover:border-green-500 hover:text-green-500 dark:hover:text-green-500 transition-colors">
                        <GoSettings className="mx-2" /> <span className="hidden lg:inline">Paramètre</span>
                    </Link>
                </div>
            </div>
            <div className="hidden lg:flex items-center justify-between">
                <LanguageButton />
                <StorageInfo />
                <DarkModeButton />
            </div>
            <div className="hidden md:flex lg:hidden items-center justify-between px-2 w-full">
                <LanguageButton />
                <DarkModeButton />
            </div>
            <div className="hidden md:block lg:hidden">
                <StorageInfo />
            </div>
            <div className="hidden md:flex items-center justify-between">
                <div className="shrink-0 mr-4">
                    <img className="h-10 w-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
                </div>
                <div className="hidden lg:inline mr-4">
                    <div className="text-xs text-gray-500 dark:text-gray-200">Connecté en tant que</div>
                    <div className="text-sm text-slate-800 dark:text-slate-200">{`${firstName} ${lastName[0]}.`}</div>
                </div>
                <div className="text-red-700 dark:text-red-400">
                    <button onClick={handleLogout as any}>
                        {isLoading ? 
                            <ReactLoading
                                type="spin"
                                color="white"
                                height={17}
                                width={17}
                            /> : <RiLogoutCircleRLine />
                        }
                    </button>
                </div>
            </div>
        </nav>
    )
}