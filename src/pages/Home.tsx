import * as React from "react"

import FileHandler from "../services/FileHandler"

export const Home: React.FC = () => {
    const [fileInfos, setFileInfos] = React.useState<any>([])

    // React.useEffect(() => {
    //     FileHandler.getFiles().then((res) => {
    //         setFileInfos(res.data)
    //     })
    // }, [])

    return <h1 className="flex-1 md:ml-24 lg:ml-80 mt-14 md:mt-0">Home</h1>
}
