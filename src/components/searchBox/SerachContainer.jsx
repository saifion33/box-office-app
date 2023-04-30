import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SearchBtn from './SearchBtn'
import SearchOption from './SearchOption'
import { useSearchState } from '../../context/Search.context'

const SerachContainer = () => {
    const { onSearch } = useSearchState();
    const onEnterKeyPress = (e) => {
        if (e.keyCode === 13) {
            onSearch()
        }
    }
    return (
        <div onKeyDown={onEnterKeyPress} className='p-5 bg-gray-50'>
            <SearchBar />
            <SearchOption />
            <SearchBtn />
        </div>
    )
}

export default SerachContainer
