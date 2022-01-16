import instance from '../utils/axios-instance'

const upload = (file: any, onUploadProgress: any) => {
    let formData = new FormData()

    formData.append("file", file)

    return instance.post("/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
    })
}

const getFiles = () => {
    return instance.get("/files")
}

export default {
    upload,
    getFiles
}
