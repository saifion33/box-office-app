import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/util_Snippets'
import loadingSpinner from '../assets/Iphone-Spinner-2.gif'
// import ErrorPage from '../error/ErrorPage'

const Show = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [results, setResults] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetchData(`shows/${id}?embed[]=seasons&embed[]=cast`).then(result => setResults(result)).catch(err => setError(err.message)).finally(setIsLoading(false))
  }, [])
  return (
    <div>
      {
        isLoading && <div className='flex justify-center'><img src={loadingSpinner} alt="loading spinner" /></div>

      }
      {
        error && <div>There is an error</div>
      }
      {

      }

    </div>
  )
}

export default Show
