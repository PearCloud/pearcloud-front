import React from "react"

export const StorageInfo: React.FC = () => {
    const totalStorage = 100
    const usedStorage = 1

    return (
        <div className="flex flex-col text-center rounded-full border-4 border-green-700 dark:border-green-500 px-2 py-1 text-xs select-none mx-2 text-slate-800 dark:text-slate-200">
            <span>{usedStorage} Go</span>
            <span>/</span>
            <span>{totalStorage} Go</span>
        </div>
    )
}
