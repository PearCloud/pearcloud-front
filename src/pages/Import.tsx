import * as React from 'react'
import ReactLoading from 'react-loading'

import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Navbar } from '../components/Navbar'
import { TopBar } from '../components/TopBar'

import FileHandler from "../services/FileHandler"
import { DragAndDrop } from '../components/DragAndDrop'

export const Import: React.FC = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const [files, setFiles] = React.useState<any[]>([])
    const [listOfPhotos, setListOfPhotos] = React.useState<any[]>([])
    const [currentFile, setCurrentFile] = React.useState<undefined>(undefined)
    const [progress, setProgress] = React.useState<number>(0)

    const isDarkModeActive = document.querySelector('html')?.classList.contains('dark') || false

    const upload = () => {
        let currentFile = files[0]

        setIsLoading(true)
        setProgress(0)
        setCurrentFile(currentFile)

        FileHandler.upload(currentFile, (event: any) => {
            setProgress(Math.round((100 * event.loaded) / event.total))
        })
        .then((response) => {
            setIsLoading(false)
            toast.info(response.data.message)
            return FileHandler.getFiles()
        })
        .then((files) => {
            console.log(files.data)
        })
        .catch(() => {
            setIsLoading(false)
            setProgress(0)
            toast.error("Impossible d'upload l'image !")
            setCurrentFile(undefined)
        })

        setFiles([])
    }

    const onFileChange = (files: any[]) => {
        console.log(files)
    }

    return (
        <div className="flex flex-col-reverse md:flex-row w-full h-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors">
            <Navbar />
            <div className="flex-1 flex flex-col items-center md:ml-24 lg:ml-80 mt-14 md:mt-0 mb-24 md:mb-0">
                <DragAndDrop onFileChange={(files: any) => onFileChange(files)} />
                <button
                    onClick={upload}
                    disabled={!files}
                    className="mt-auto rounded-2xl py-4 px-8 my-4 bg-green-500 dark:bg-green-800 text-slate-100 dark:text-slate-200 cursor-pointer text-bold text-xl disabled:bg-slate-500 dark:disabled:bg-slate-500 disabled:cursor-not-allowed transition">
                    {isLoading ? 
                        <ReactLoading
                            type="spin"
                            color="red"
                            height={17}
                            width={17}
                        /> : "Upload"
                    }
                </button>
            </div>
            <TopBar />
            <ToastContainer theme={`${isDarkModeActive ? 'dark' : 'light'}`}/>
        </div>
    )
}