import { useState } from 'react'
import axios from 'axios'

export const useAxios = ({ url, urlScrap }) => {
  const [pending, setPending] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const executePetition = async () => {
    setPending(true)

    try {
      const payload = { 
        params: { url: urlScrap }
      }
      const res = await axios.get(url, payload)

      if (res.status !== 200) {
        throw new Error()
      }

      setData(res.data.data)
      setError(null)
    } catch (error) {
      const err = {
        status: error.status || 500, 
        message: error.message || 'An error occurred'
      }
      setData(null)
      setError(err)
    } finally {
      setPending(false)
    }
  }

  return { pending, data, error, executePetition }
}