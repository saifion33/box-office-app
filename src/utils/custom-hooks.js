
import { useReducer, useEffect, useState } from "react";
import { fetchData } from "./util_Snippets";

const showsReducer = (prevState, action) => {
    switch (action.type) {
        case 'ADD': {
            return [...prevState, action.showId]
        }
        case 'REMOVE': {
            return prevState.filter(showId => showId !== action.showId)
        }
        default: prevState
    }
}

const usePersistedReducer = (reducer, initialState, key) => {
    const [state, dispatch] = useReducer(reducer, initialState, initial => {
        const persisted = localStorage.getItem(key);
        return persisted ? JSON.parse(persisted) : initial

    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])
    return [state, dispatch]
}

export const useShows = (key = 'shows') => {
    return usePersistedReducer(showsReducer, [], key)
}

export const useLastQuery = (key = 'lastQuery') => {
    const [input, setinput] = useState(() => {
        const persisted = sessionStorage.getItem(key);
        return persisted ? JSON.parse(persisted) : ''
    })

    const setPersistedInput = newState => {
        setinput(newState);
        sessionStorage.setItem(key, JSON.stringify(newState));
    }
    return [input, setPersistedInput]
}

export const useLastSearchResult = (key = 'lastResult') => {
    const [result, setResult] = useState(() => {
        const persisted = sessionStorage.getItem(key);
        return persisted?JSON.parse(persisted):[]
    })
    const setPersistedResult = (newState) => {
        setResult(newState)
        sessionStorage.setItem(key, JSON.stringify(newState));
    }
    return [result,setPersistedResult]
}

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { isLoading: false, error: null, show: action.show }
        case 'FETCH_FAILED':
            return { ...prevState, isLoading: false, error: action.error }
        default:
            return prevState
    }
}
export const useShow = (showId) => {
    const [state, dispatch] = useReducer(reducer, {
        isLoading: true,
        error: null,
        show: null
    })
    useEffect(() => {
        fetchData(`shows/${showId}?embed[]=seasons&embed[]=cast`)
            .then(
                results => { dispatch({ type: 'FETCH_SUCCESS', show: results }) }
            )
            .catch(
                err => { dispatch({ type: 'FETCH_FAILED', error: err }) })
    }, [showId])

    return state
}