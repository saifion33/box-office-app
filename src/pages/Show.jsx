import React from 'react'
import { useParams } from 'react-router-dom'
import loadingSpinner from '../assets/loading-spinner.gif'
import ShowMainData from '../components/Shows/ShowMainData'
import Details from '../components/Shows/Details'
import Seasons from '../components/Shows/Seasons'
import Cast from '../components/Shows/Cast'
import { useShow } from '../utils/custom-hooks'

const Show = () => {

  const { id } = useParams()
  const { show, isLoading, error } = useShow(id)
  {
    isLoading && <div className='flex justify-center'><img src={loadingSpinner} alt="loading spinner" /></div>
  }

  {
    error && <div>There is an error</div>
  }
  return (
    <div className='p-4'>
      <ShowMainData name={show?.name} image={show?.image} summary={show?.summary} tags={show?.genres} rating={show?.rating} />
      <Details status={show?.status} network={show?.network} premiered={show?.premiered} />
      <Seasons seasons={show?._embedded.seasons} />
      <Cast cast={show?._embedded.cast} />
    </div>
  )

}

export default Show
