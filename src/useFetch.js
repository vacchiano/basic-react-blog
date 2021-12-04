// custom hooks in react need to start with 'use' ie 'useFetch'

import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data.')
                }
                return res.json()
            })
            .then((data) => {
                // console.log(data);
                setData(data)
                setIsLoading(false)
            })
            .catch((err) => {
                // check if it's an abort err caused by user
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(err.message)
                    setIsLoading(false)
                }
            })
        }, 250)

        return () => abortCont.abort();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    // returns the data, load status, and error
    return {data, isLoading, error}
}

export default useFetch;