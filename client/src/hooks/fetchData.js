import { useEffect, useState } from "react"
import axios from "axios"
import instance from "../instance";
const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setloading(true)
            try {

                const res = await instance.get(url)
                setData(res.data)


            }
            catch (error) {
                setError(error)
            }
            setloading(false)
        };

        fetchData();
    }, [url]);


    const refetchData = async () => {
        setloading(true)
        try {
            const res = await axios.get(url)
            setData(res.data)


        }
        catch (error) {
            setError(error)
        }
        setloading(false)
    };


    return { data, loading, error, refetchData }

};

export default useFetch;