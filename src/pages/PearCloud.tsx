import * as React from 'react'

import { Navbar } from '../components/Navbar'
import { Home } from '../layouts/Home'

export const PearCloud: React.FC = () => {
    return (
        <div className="flex w-full h-full bg-slate-100 dark:bg-slate-800 transition-colors">
            <Navbar />
            <Home />
        </div>
    )
}