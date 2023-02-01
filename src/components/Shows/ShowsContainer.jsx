import React from 'react'
import { useShows } from '../../utils/custom-hooks'
import ShowCard from './ShowCard'


const ShowsContainer = ({ shows }) => {
    const [starredShows, dispatchStarred] = useShows()


    return (
        <div className='bg-gray-50 text-stone-50 p-3 flex flex-wrap gap-4 justify-center' >
            {
                shows.map(show => {
                    const isStarred = starredShows.includes(show.show.id);
                    const starShow = () => {
                        if (isStarred) {
                            dispatchStarred({ type: 'REMOVE', showId: show.show.id })
                        }
                        else {
                            dispatchStarred({ type: 'ADD', showId: show.show.id })
                        }
                    }
                    return (<ShowCard key={show.show.id} show={show.show} starShow={starShow} isStarred={isStarred} />)
                })
            }
        </div>
    )
}

export default ShowsContainer
