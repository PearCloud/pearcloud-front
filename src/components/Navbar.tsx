import * as React from 'react'
import ReactLoading from 'react-loading'
import { useNavigate, Link } from 'react-router-dom'

import { GiPear } from 'react-icons/gi'
import { FaRegStar } from 'react-icons/fa'
import { GoSettings } from 'react-icons/go'
import { GrHomeRounded } from 'react-icons/gr'
import { AiOutlineCloud } from 'react-icons/ai'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { BsJournalAlbum, BsTrash2 } from 'react-icons/bs'

import { auth } from '../utils/auth'
import { urls } from '../utils/urls'

export const Navbar: React.FC = () => {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const handleLogout = (e: Event) => {
        e.preventDefault()
        setIsLoading(true)

        auth.logOut(() => {
            setIsLoading(false)
            navigate(urls.app.LOGIN)
        })
    }

    return (
        <nav className="flex flex-col bg-neutral-50 dark:bg-neutral-700 p-2">
            <div className="flex justify-center items-center mb-10 text-3xl text-slate-800 dark:text-slate-200 select-none">
                <span className="text-green-500">Pear</span>Cloud <GiPear />
            </div>
            <div>
                <div className="my-5">
                    <Link to={urls.app.PEARCLOUD} className="flex items-center py-4 px-2 border rounded-lg">
                        <GrHomeRounded className="mx-2" /> <span>Photos</span>
                    </Link>
                </div>
                <div className="my-5">
                    <Link to={urls.app.IMPORT} className="flex items-center py-4 px-2 border rounded-lg">
                        <AiOutlineCloud className="mx-2" /> <span>Importer</span>
                    </Link>
                </div>
                <div className="my-5">
                    <Link to={urls.app.ALBUMS} className="flex items-center py-4 px-2 border rounded-lg">
                        <BsJournalAlbum className="mx-2" /> <span>Albums</span>
                    </Link>
                </div>
                <div className="my-5">
                    <Link to={urls.app.FAVORITES} className="flex items-center py-4 px-2 border rounded-lg">
                        <FaRegStar className="mx-2" /> <span>Favoris</span>
                    </Link>
                </div>
                <div className="my-5">
                    <Link to={urls.app.TRASH} className="flex items-center py-4 px-2 border rounded-lg">
                        <BsTrash2 className="mx-2" /> <span>Corbeille</span>
                    </Link>
                </div>
                <div className="my-5">
                    <Link to={urls.app.SETTINGS} className="flex items-center py-4 px-2 border rounded-lg">
                        <GoSettings className="mx-2" /> <span>Paramètre</span>
                    </Link>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className="flex items-center justify-between">
                <div>O</div>
                <div className="text-red-700">
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