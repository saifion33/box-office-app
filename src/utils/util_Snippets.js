const API_BASE_URL = 'https://api.tvmaze.com/'

export const fetchData = async (queryString) => {
    const response = await fetch(`${API_BASE_URL}${queryString}`)
    return await response.json()
}