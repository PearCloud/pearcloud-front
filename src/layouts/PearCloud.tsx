import * as React from 'react'
import { Outlet } from 'react-router-dom'

import { Navbar } from '../components/Navbar'
import { TopBar } from '../components/TopBar'

export const PearCloud: React.FC = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row w-full h-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors">
            <Navbar />
            <Outlet />
            <TopBar />
        </div>
    )
}