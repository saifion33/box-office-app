import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SearchBtn from './SearchBtn'
import SearchOption from './SearchOption'

const SerachContainer = ({ onSearch, input, setInput, setSearchOption }) => {
    const onChange = (e) => {
        setInput(e.target.value)
    }
    const onEnterKeyPress = (e) => {
        if (e.keyCode === 13) {
            onSearch()
        }
    }
    return (
        <div onKeyDown={onEnterKeyPress} className='p-5 bg-gray-50'>
            <SearchBar input={input} onChange={onChange} />
            <SearchOption setSearchOption={setSearchOption} />
            <SearchBtn onClick={onSearch} />
        </div>
    )
}

export default SerachContainer
