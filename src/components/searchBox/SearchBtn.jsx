import React from 'react'
import { useSearchState } from '../../context/Search.context'

const SearchBtn = () => {
    const { onSearch } = useSearchState()
    return (
        <button type='submit' className='bg-purple-600 text-white py-1 rounded mt-3 px-3 hover:shadow-[3px_3px_8px_rgba(0,0,0,0.5)]' onClick={onSearch}>
            Search
        </button>
    )
}

export default SearchBtn
