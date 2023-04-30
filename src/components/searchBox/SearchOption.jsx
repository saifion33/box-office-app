import React, { useState } from 'react'
import { useSearchState } from '../../context/Search.context'

const SearchOption = () => {
    const { searchOption, setSearchOption } = useSearchState()
    console.log(searchOption)
    const onChangeHandler = (e) => {

    }
    return (
        <div className='text-center space-x-3 flex justify-center items-center'>

            <div className='flex items-center justify-center gap-1' onClick={() => { setSearchOption('shows'); sessionStorage.setItem('searchOption', 'shows') }}>
                <input className='cursor-pointer' type="radio" name="search-option" id="show" onChange={onChangeHandler} checked={searchOption === 'shows'} />
                <label htmlFor="show" className='cursor-pointer'>Shows</label>
            </div>
            <div className='flex items-center justify-center gap-1' onClick={() => { setSearchOption('people'); sessionStorage.setItem('searchOption', 'people') }}>
                <input className='cursor-pointer' type="radio" name="search-option" id="actor" onChange={onChangeHandler} checked={searchOption === 'people'} />
                <label htmlFor="actor" className='cursor-pointer'>Actors</label>
            </div>
        </div>
    )
}

export default SearchOption
