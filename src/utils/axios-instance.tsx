import axios from "axios"

export default axios.create({
    baseURL: import.meta.env.SNOWPACK_PUBLIC_API_URI,
    headers: {
        "Content-type": "application/json",
    },
})
