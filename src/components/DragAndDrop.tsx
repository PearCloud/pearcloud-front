import * as React from "react"
import { BiUpload } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"
import { toast } from "react-toastify"

interface DragAndDropTypes {
    onFileChange: (files: Array<File>) => void
}

export const DragAndDrop: React.FC<DragAndDropTypes> = ({ onFileChange }) => {
    const wrapperRef = React.useRef(null)

    const [dragging, setDragging] = React.useState<boolean>(false)
    const [fileList, setFileList] = React.useState<Array<File>>([])

    const onDragEnter = () => {
        setDragging(true)
    }

    const onDragLeave = () => {
        setDragging(false)
    }

    const onDrop = (e: Event) => {
        setDragging(false)
        const target = e.target as HTMLInputElement
        const newFile: File = (target.files as FileList)[0]
        if (newFile) {
            setFileList([...fileList, newFile])
            onFileChange([...fileList, newFile])
            toast.info("Photo ajouté")
        }
    }

    const onFileDrop = async (files: FileList) => {
        const result: any[] = []
        for (let i = 0; i < files.length; i++) {
            result.push(files[i])
            toast.info("Photo ajouté")
        }

        await setFileList(result)
        await onFileChange(result)
    }

    const fileRemove = (file: File) => {
        const updatedList = [...fileList]
        updatedList.splice(fileList.indexOf(file), 1)
        setFileList(updatedList)
        onFileChange(updatedList)
        toast.info("Photo supprimé")
    }

    return (
        <>
            <label
                htmlFor="file"
                className="relative flex items-center justify-center w-11/12 h-24 md:h-44 border border-dashed border-slate-400 rounded-2xl cursor-pointer mt-3"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop as any}
            >
                {dragging ? (
                    <>
                        <BiUpload size={24} />
                        <span className="ml-4 text-md md:text-2xl text-slate-800 dark:text-gray-200">
                            Drop here
                        </span>
                    </>
                ) : (
                    <>
                        <BiUpload size={24} />
                        <span className="ml-4 text-md md:text-2xl text-slate-800 dark:text-gray-200">
                            Choisir une ou des photos
                        </span>
                    </>
                )}
            </label>
            <input
                type="file"
                value=""
                id="file"
                name="file"
                multiple
                ref={wrapperRef}
                onChange={(e) => onFileDrop(e.target.files as FileList)}
                className="w-0 h-0 opacity-0 absolute overflow-hidden -z-10"
            />
            {fileList.length > 0 ? (
                <div className="w-full">
                    <div className="text-center underline my-4">
                        Prêt pour l'envoie
                    </div>
                    <div className="w-10/12 mx-auto h-32 md:h-3/5 rounded-lg overflow-auto">
                        {fileList.map((item, i) => (
                            <div key={i} className="flex justify-between">
                                <span className="text-bolde">{item.name}</span>
                                <span>{item.size} B</span>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => fileRemove(item)}
                                >
                                    <IoMdClose />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    )
}
