import React from 'react'
import { GiPear } from 'react-icons/gi'
import { GoSettings } from 'react-icons/go'

import { DarkModeButton } from './DarkModeButton'

export const TopBar: React.FC = () => {
    return (
        <div className="relative md:hidden text-xl text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-700 p-2">
            <div className="absolute left-2 top-4">
                <GoSettings className="mx-2" />
            </div>
            <div className="flex justify-center items-center text-3xl text-slate-800 dark:text-slate-200 select-none">
                <span className="text-green-500">Pear</span>Cloud <GiPear />
            </div>
            <div className="absolute right-2 top-3">
                <DarkModeButton />
            </div>
        </div>
    )
}