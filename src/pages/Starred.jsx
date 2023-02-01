import React from 'react'

import { useEffect, useState } from 'react'
import ShowsContainer from '../components/Shows/ShowsContainer'
import { useShows } from '../utils/custom-hooks'
import { fetchData } from '../utils/util_Snippets'
import loadingSpinner from '../assets/Iphone-spinner-2.gif'

const Starred = () => {
  const [starredShows] = useShows()
  const [shows, setShows] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    if (starredShows.length > 0) {
      const promises = starredShows.map(showId => fetchData(`shows/${showId}`))
      Promise.all(promises).then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results)
          setIsLoading(false)
        })
        .catch(
          err => {
            setError(err.message)
            setIsLoading(false)
          }
        )
    }
    else {
      setIsLoading(false)
    }
  }, [starredShows])
  return (
    <div>
      {
        isLoading && <div className='h-screen flex justify-center items-center text-3xl'><img src={loadingSpinner} alt='loading spinner' /></div>
      }
      {
        (!isLoading && starredShows.length === 0) && <div className='h-screen flex justify-center items-center text-3xl text-purple-600'>No starred shows</div>
      }
      {
        (!isLoading && error) && <div className='h-screen flex justify-center items-center text-3xl text-purple-600'>Error Occured:{error}</div>
      }
      {
        shows && <ShowsContainer shows={shows} />
      }
    </div>
  )
}

export default Starred
