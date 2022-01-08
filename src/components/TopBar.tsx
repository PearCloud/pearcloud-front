import React from 'react'
import { GiPear } from 'react-icons/gi'

import { MobileMenu } from './MobileMenu'
import { DarkModeButton } from './DarkModeButton'

export const TopBar: React.FC = () => {
    return (
        <div className="relative z-40 md:hidden text-xl text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-700 p-2 select-none">
            <MobileMenu />
            <div className="flex justify-center items-center text-3xl text-slate-800 dark:text-slate-200 select-none">
                <span className="text-green-700">Pear</span>Cloud <GiPear />
            </div>
            <div className="absolute right-2 top-3">
                <DarkModeButton />
            </div>
        </div>
    )
}