import React from 'react'
import { useState } from 'react'

const useApiReq = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = async (url, method = 'GET', body) => {
        setLoading(true)
        setData(null)
        setError(null)

        try {
            const res = await fetch(url, {
                method,
                headers: body ? { 'Content-Type': 'application/json' } : undefined,
                body: body ? JSON.stringify(body) : undefined,
            })
            const result = await res.json()
            if(!res.ok){
                setError(res.error)
                setData(null)
            }else{
                setData(result)
                setError(null)
            }

        } catch (error) {
            setError(error.message)
            setData(null)
        } finally {
            setLoading(false)
        }
    }

    return {request, data, loading, error};
}

export default useApiReq
