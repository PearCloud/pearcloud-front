import * as React from 'react'

import FileHandler from "../services/FileHandler"

export const Import: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = React.useState<any>(undefined)
    const [currentFile, setCurrentFile] = React.useState<undefined>(undefined)
    const [progress, setProgress] = React.useState<number>(0)
    const [message, setMessage] = React.useState<string>("")

    const selectFile = (files: FileList) => {
        setSelectedFiles(files)
    }

    const upload = () => {
        let currentFile = selectedFiles[0]

        setProgress(0)
        setCurrentFile(currentFile)

        FileHandler.upload(currentFile, (event: any) => {
            setProgress(Math.round((100 * event.loaded) / event.total))
        })
        .then((response) => {
            setMessage(response.data.message)
            return FileHandler.getFiles()
        })
        .then((files) => {
            console.log(files.data)
        })
        .catch(() => {
            setProgress(0)
            setMessage("Could not upload the file!")
            setCurrentFile(undefined)
        })

        setSelectedFiles(undefined)
    }

    return (
        <div>
            <h1 className="flex-1 md:ml-24 lg:ml-80 mt-14 md:mt-0">Import App</h1>
            <label className="btn btn-default">
                <input type="file" onChange={selectFile as any} />
            </label>

            <button className="btn btn-success" disabled={!selectedFiles} onClick={upload}>
                Upload
            </button>

            <div className="alert alert-light" role="alert">
                {message}
            </div>
        </div>
    )
}