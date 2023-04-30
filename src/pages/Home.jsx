import React, { useState } from 'react'
import ActorsContainer from '../components/Actors/ActorsContainer'
import SerachContainer from '../components/searchBox/SerachContainer'
import ShowsContainer from '../components/Shows/ShowsContainer'
import loadingSpinner from '../assets/Iphone-spinner-2.gif'
import { useSearchState } from '../context/Search.context'

const Home = () => {
    const { isLoading, results } = useSearchState()

    const renderResults = (results) => {
        if (results && results.length === 0) {
            return <div className='text-3xl font-bold w-full pt-10 text-purple-600 text-center'>Not Found</div>
        }
        if (results && results.length > 0) {
            return results[0].show ? <ShowsContainer shows={results} /> : <ActorsContainer actors={results} />
        }
        return null
    }

    return (
        <div className='text-center' >
            <SerachContainer />
            {isLoading && <div className='flex justify-center'><img src={loadingSpinner} /></div>}
            <div className='flex flex-wrap gap-3'>
                {renderResults(results)}
            </div>

        </div>
    )
}

export default Home
