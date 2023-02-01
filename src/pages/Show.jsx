import React from 'react'
import { useEffect, useState, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/util_Snippets'
import loadingSpinner from '../assets/Iphone-Spinner-2.gif'
import ShowMainData from '../components/Shows/ShowMainData'
import Details from '../components/Shows/Details'
import Seasons from '../components/Shows/Seasons'
import Cast from '../components/Shows/Cast'

// import ErrorPage from '../error/ErrorPage'

const Show = () => {

  const { id } = useParams()

  const initialState = {
    isLoading: true,
    error: null,
    show: null
  }
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return { isLoading: false, error: null, show: action.show }
      case 'FETCH_FAILED':
        return { ...prevState, isLoading: false, error: action.error }
      default:
        return prevState
    }
  }
  const [{ show, isLoading, error }, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    fetchData(`shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(
        results => { dispatch({ type: 'FETCH_SUCCESS', show: results }) }
      )
      .catch(
        err => { dispatch({ type: 'FETCH_FAILED', error: err }) })
  }, [id])

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
