import * as React from "react"
import ReactLoading from "react-loading"
import { useNavigate, Link, useLocation } from "react-router-dom"

import { GiPear } from "react-icons/gi"
import { FaRegStar } from "react-icons/fa"
import { GoSettings } from "react-icons/go"
import { FiHome } from "react-icons/fi"
import { AiOutlineCloud } from "react-icons/ai"
import { RiLogoutCircleRLine } from "react-icons/ri"
import { BsJournalAlbum, BsTrash2 } from "react-icons/bs"

import { auth } from "../utils/auth"
import { urls } from "../utils/urls"

import { LanguageButton } from "./LanguageButton"
import { DarkModeButton } from "./DarkModeButton"
import { StorageInfo } from "./StorageInfo"

export const Navbar: React.FC = () => {
    const navigate = useNavigate()
    const resolved = useLocation()

    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const firstName: string = "Enzo"
    const lastName: string = "CANDOTTI"

    const handleLogout = (e: Event) => {
        e.preventDefault()
        setIsLoading(true)

        auth.logOut(() => {
            setIsLoading(false)
            navigate(urls.app.LOGIN)
        })
    }

    return (
        <nav className="pb-8 md:pb-0 w-full md:w-24 lg:w-80 h-24 md:h-full fixed sm:overflow-y-auto flex flex-row md:flex-col items-center lg:items-stretch justify-between bg-slate-50 dark:bg-slate-700 p-0 md:p-1 md:py-3 lg:px-5 select-none">
            <div className="hidden md:flex justify-center items-center mb-10 text-3xl text-slate-800 dark:text-slate-200 select-none">
                <span className="hidden lg:inline">
                    <span className="text-green-700 dark:text-green-500">
                        Pear
                    </span>
                    Cloud
                </span>{" "}
                <GiPear />
            </div>
            <div className="text-xl md:text-base flex flex-row justify-between w-full md:w-auto md:block">
                <div className="md:my-5 flex-1">
                    <Link
                        to={urls.app.PEARCLOUD}
                        className={`flex items-center justify-center md:justify-start p-5 border-t-2 border-slate-50 text-slate-800 dark:text-slate-200 transition-colors ${
                            resolved.pathname === urls.app.PEARCLOUD
                                ? "border-green-500 text-green-500 dark:border-green-500 dark:text-green-500"
                                : "dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 hover:text-green-500 dark:hover:text-green-500"
                        }`}
                        aria-label="photos"
                    >
                        <FiHome className="mx-2" />{" "}
                        <span className="hidden lg:inline">Photos</span>
                    </Link>
                </div>
                <div className="md:my-5 flex-1">
                    <Link
                        to={urls.app.IMPORT}
                        className={`flex items-center justify-center md:justify-start p-5 border-t-2 border-slate-50 text-slate-800 dark:text-slate-200 transition-colors ${
                            resolved.pathname === urls.app.IMPORT
                                ? "border-green-500 text-green-500 dark:border-green-500 dark:text-green-500"
                                : "dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 hover:text-green-500 dark:hover:text-green-500"
                        }`}
                        aria-label="importer"
                    >
                        <AiOutlineCloud className="mx-2" />{" "}
                        <span className="hidden lg:inline">Importer</span>
                    </Link>
                </div>
                <div className="md:my-5 flex-1">
                    <Link
                        to={urls.app.ALBUMS}
                        className={`flex items-center justify-center md:justify-start p-5 border-t-2 border-slate-50 text-slate-800 dark:text-slate-200 transition-colors ${
                            resolved.pathname === urls.app.ALBUMS
                                ? "border-green-500 text-green-500 dark:border-green-500 dark:text-green-500"
                                : "dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 hover:text-green-500 dark:hover:text-green-500"
                        }`}
                        aria-label="albums"
                    >
                        <BsJournalAlbum className="mx-2" />{" "}
                        <span className="hidden lg:inline">Albums</span>
                    </Link>
                </div>
                <div className="md:my-5 flex-1">
                    <Link
                        to={urls.app.FAVORITES}
                        className={`flex items-center justify-center md:justify-start p-5 border-t-2 border-slate-50 text-slate-800 dark:text-slate-200 transition-colors ${
                            resolved.pathname === urls.app.FAVORITES
                                ? "border-green-500 text-green-500 dark:border-green-500 dark:text-green-500"
                                : "dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 hover:text-green-500 dark:hover:text-green-500"
                        }`}
                        aria-label="favoris"
                    >
                        <FaRegStar className="mx-2" />{" "}
                        <span className="hidden lg:inline">Favoris</span>
                    </Link>
                </div>
                <div className="md:my-5 flex-1">
                    <Link
                        to={urls.app.TRASH}
                        className={`flex items-center justify-center md:justify-start p-5 border-t-2 border-slate-50 text-slate-800 dark:text-slate-200 transition-colors ${
                            resolved.pathname === urls.app.TRASH
                                ? "border-green-500 text-green-500 dark:border-green-500 dark:text-green-500"
                                : "dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 hover:text-green-500 dark:hover:text-green-500"
                        }`}
                        aria-label="corbeille"
                    >
                        <BsTrash2 className="mx-2" />{" "}
                        <span className="hidden lg:inline">Corbeille</span>
                    </Link>
                </div>
                <div className="hidden md:block md:my-5 flex-1">
                    <Link
                        to={urls.app.SETTINGS}
                        className={`flex items-center p-5 border-t-2 border-slate-50 text-slate-800 dark:text-slate-200 transition-colors ${
                            resolved.pathname === urls.app.SETTINGS
                                ? "border-green-500 text-green-500 dark:border-green-500 dark:text-green-500"
                                : "dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 hover:text-green-500 dark:hover:text-green-500"
                        }`}
                        aria-label="parametre"
                    >
                        <GoSettings className="mx-2" />{" "}
                        <span className="hidden lg:inline">Paramètre</span>
                    </Link>
                </div>
            </div>
            <div className="hidden lg:flex items-center justify-between my-4">
                <LanguageButton />
                <StorageInfo />
                <DarkModeButton />
            </div>
            <div className="hidden md:flex lg:hidden items-center justify-around w-full my-4">
                <LanguageButton />
                <DarkModeButton />
            </div>
            <div className="hidden md:block lg:hidden my-4">
                <StorageInfo />
            </div>
            <div className="hidden md:flex mt-4 items-center justify-between">
                <div className="shrink-0 mr-4">
                    <img
                        className="h-10 w-10 object-cover rounded-full"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                        alt="Current profile photo"
                    />
                </div>
                <div className="hidden lg:inline mr-4">
                    <div className="text-xs text-gray-500 dark:text-gray-200">
                        Connecté en tant que
                    </div>
                    <div className="text-sm text-slate-800 dark:text-slate-200">{`${firstName} ${lastName[0]}.`}</div>
                </div>
                <button
                    onClick={handleLogout as any}
                    className="text-red-500 dark:text-red-400 text-2xl"
                    aria-label="logout-btn"
                >
                    {isLoading ? (
                        <ReactLoading
                            type="spin"
                            color="red"
                            height={17}
                            width={17}
                        />
                    ) : (
                        <RiLogoutCircleRLine />
                    )}
                </button>
            </div>
        </nav>
    )
}
