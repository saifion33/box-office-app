import React, { createContext, useContext, useState } from 'react'
import { useLastQuery, useLastSearchResult } from '../utils/custom-hooks';
import { fetchData } from '../utils/util_Snippets';
const SearchContext = createContext(null)
const SearchState = ({ children }) => {
    const [input, setInput] = useLastQuery()
    const [isLoading, setIsLoading] = useState(false)

    const [results, setResults] = useLastSearchResult()
    const onSearch = () => {
        setIsLoading(true)
        fetchData(`search/${searchOption}?q=${input}`).then(result => { setResults(result); setIsLoading(false); })

    }

    const [searchOption, setSearchOption] = useState(localStorage.getItem('searchOption') ? localStorage.getItem('searchOption') : 'shows');
    return <SearchContext.Provider value={{ searchOption, setSearchOption, input, setInput, onSearch, isLoading, results }} >{children}</SearchContext.Provider>
}
export const useSearchState = () => useContext(SearchContext)
export default SearchState