import React from 'react'
import ActorCard from './ActorCard'



const ActorsContainer = ({ actors }) => {

    return (
        <div className='bg-gray-50 text-stone-50 p-3 flex flex-wrap gap-4 justify-center' >
            {
                actors.map(actor => <ActorCard key={actor.person.id} actor={actor.person}/>)
            }
        </div>
    )
}

export default ActorsContainer
