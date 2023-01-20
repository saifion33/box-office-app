import React from 'react'
import ShowCard from './ShowCard'


const ShowsContainer = ({ shows }) => {
    const starShow = () => { }

    return (
        <div className='bg-gray-50 text-stone-50 p-3 flex flex-wrap gap-4 justify-center' >
            {
                shows.map(show => <ShowCard key={show.show.id} show={show.show} starShow={starShow} />)
            }
        </div>
    )
}

export default ShowsContainer
