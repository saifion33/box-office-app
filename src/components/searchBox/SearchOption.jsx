import React from 'react'

const SearchOption = ({ setSearchOption }) => {
    return (
        <div className='text-center space-x-3 flex justify-center items-center'>

            <div className='flex items-center' onClick={() => { setSearchOption('shows') }}>
                <input type="radio" name="search-option" id="show" defaultChecked />
                <label htmlFor="show" className='cursor-pointer'>Shows</label>
            </div>
            <div className='flex items-center' onClick={() => { setSearchOption('people') }}>
                <input type="radio" name="search-option" id="actor" />
                <label htmlFor="actor" className='cursor-pointer'>Actors</label>
            </div>
        </div>
    )
}

export default SearchOption
