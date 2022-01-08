import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export const DarkModeButton: React.FC = () => {
    const [themeDark, setThemeDark] = React.useState<boolean>(false)

    const darkMode = () => {
        if (document.querySelector('html')?.classList.contains('dark')) {
            document.querySelector('html')?.classList.remove('dark')
            setThemeDark(false)
        } else {
            document.querySelector('html')?.classList.add('dark')
            setThemeDark(true)
        }
    }
    return (
        <div className="cursor-pointer m-1 text-slate-800 dark:text-slate-200" onClick={darkMode}>{themeDark ? <FiMoon /> : <FiSun />}</div>
    )
}