import React from 'react'
import ReactLoading from 'react-loading'
import { useNavigate } from 'react-router-dom'
import { GiPear } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import { GoSettings } from 'react-icons/go'

import { auth } from '../utils/auth'
import { urls } from '../utils/urls'

import { LanguageButton } from './LanguageButton'
import { StorageInfo } from './StorageInfo'
import { RiLogoutCircleRLine } from 'react-icons/ri'

export const MobileMenu: React.FC = () => {
    const navigate = useNavigate()
    
    const [isActive, setIsActive] = React.useState<boolean>(false)
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const firstName: string = "Enzo"
    const lastName: string  = "CANDOTTI"

    const handleMenu = () => {
        if (isActive) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
    }

    const handleLogout = (e: Event) => {
        e.preventDefault()
        setIsLoading(true)

        auth.logOut(() => {
            setIsLoading(false)
            navigate(urls.app.LOGIN)
        })
    }

    return (
        <>
            <div className={`absolute top-0 left-0 w-screen h-screen bg-slate-200 dark:bg-slate-800 p-2 transition${isActive ? ' block' : ' hidden'}`}>
                <div className="flex justify-center items-center text-3xl text-slate-800 dark:text-slate-200 select-none h-[5%]">
                    <span className="text-green-500">Pear</span>Cloud <GiPear />
                </div>
                <div className="flex flex-col justify-between items-center h-[95%]">
                    <LanguageButton />
                    <StorageInfo />
                    <div className="flex items-center justify-between">
                        <div className="shrink-0 mr-4">
                            <img className="h-10 w-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
                        </div>
                        <div className="mr-4">
                            <div className="text-xs text-gray-500 dark:text-gray-200">Connecté en tant que</div>
                            <div className="text-sm text-slate-800 dark:text-slate-200">{`${firstName} ${lastName[0]}.`}</div>
                        </div>
                        <button onClick={handleLogout as any} className="text-red-700 dark:text-red-400 text-2xl">
                            {isLoading ? 
                                <ReactLoading
                                    type="spin"
                                    color="red"
                                    height={17}
                                    width={17}
                                /> : <RiLogoutCircleRLine />
                            }
                        </button>
                    </div>
                </div>
            </div>
            <button className="absolute z-30 left-2 top-4 cursor-pointer" onClick={handleMenu}>
                {isActive ? <CgClose className="mx-2" /> : <GoSettings className="mx-2" />}
            </button>
        </>
    )
}