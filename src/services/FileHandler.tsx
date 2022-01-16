import instance from '../utils/axios-instance'

import { urls } from '../utils/urls'

const upload = (file: any, onUploadProgress: any) => {
    let formData = new FormData()

    formData.append("file", file)

    return instance.post(urls.api.IMPORT, formData, {
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
