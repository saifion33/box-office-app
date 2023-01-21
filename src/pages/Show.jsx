import React from 'react'
import { useEffect, useState, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/util_Snippets'
import loadingSpinner from '../assets/Iphone-Spinner-2.gif'

// import ErrorPage from '../error/ErrorPage'

const Show = () => {

  const { id } = useParams()

  const initialState = {
    isLoading: true,
    error: null,
    results: null
  }
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return { isLoading: false, error: null, results: action.show }
      case 'FETCH_FAILED':
        return { ...prevState, isLoading: false, error: action.error }
      default:
        return prevState
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    fetchData(`shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(
        results => { dispatch({ type: 'FETCH_SUCCESS', show: results }); console.log(results) }
      )
      .catch(
        err => { dispatch({ type: 'FETCH_FAILED', error: err }) })
  }, [id])
  return (
    <div>
      {
        state.isLoading && <div className='flex justify-center'><img src={loadingSpinner} alt="loading spinner" /></div>

      }
      {
        state.error && <div>There is an error</div>
      }
      {
        state.results && <div>open console</div>
      }

    </div>
  )
}

export default Show
