import axios from "axios"
import { useState } from "react"

const useFetch = () => {

    const [apiData, setApiData] = useState()
    const [isLoading, setIsloading] = useState(true)

    //leer
    const getApi = (url) => {
        axios.get(url)
            .then(res => setApiData(res.data))
            .catch(err => console.log(err))
            .finally(() => setIsloading(false))
    }

    return [apiData, getApi, isLoading]

}

export default useFetch