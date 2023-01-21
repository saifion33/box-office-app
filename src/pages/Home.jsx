import React, { useState } from 'react'
import ActorsContainer from '../components/Actors/ActorsContainer'
import SerachContainer from '../components/searchBox/SerachContainer'
import ShowsContainer from '../components/Shows/ShowsContainer'
import loadingSpinner from '../assets/Iphone-spinner-2.gif'
import { fetchData } from '../utils/util_Snippets'

const Home = () => {

    const [input, setInput] = useState('')
    const [searchOption, setSearchOption] = useState('shows');
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState(null)
    const onSearch = () => {
        setIsLoading(true)
        fetchData(`search/${searchOption}?q=${input}`).then(result => { setResults(result); setIsLoading(false); })

    }
    const renderResults = (results) => {
        if (results && results.length === 0) {
            return <div className='text-3xl font-bold text-purple-600 text-center'>Not Found</div>
        }
        if (results && results.length > 0) {
            return results[0].show ? <ShowsContainer shows={results} /> : <ActorsContainer actors={results} />
        }
        return null
    }
    return (
        <div className='text-center' >
            <SerachContainer onSearch={onSearch} setSearchOption={setSearchOption} input={input} setInput={setInput} />
            {isLoading && <div className='flex justify-center'><img src={loadingSpinner} /></div>}

            <div className='flex flex-wrap gap-3'>
                {renderResults(results)}
            </div>

        </div>
    )
}

export default Home
