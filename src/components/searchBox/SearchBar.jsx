import React from 'react'
import { useSearchState } from '../../context/Search.context'

const SearchBar = () => {
  const { input, setInput } = useSearchState();
  const onChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <div className='border-2 border-purple-600 rounded p-1  w-fit mx-auto my-3'>
      <input className='outline-none w-auto' type="text" name="search-box" id="search-box" value={input} onChange={onChange} placeholder='Search Show or Actor...' />
    </div>
  )
}

export default SearchBar
