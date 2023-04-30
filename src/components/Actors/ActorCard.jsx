import React from 'react'

const ActorCard = ({ actor }) => {

    return (
        <div className='bg-white flex flex-col shadow-lg w-full max-w-xs rounded text-black p-3 transition-all duration-1000 border-2 border-white hover:border-2  hover:border-purple-600'>
            <div className=''>
                <img className='w-[230px] h-64 mx-auto' src={actor?.image?.original} alt={actor.name} />
            </div>
            <h1 className='text-lg font-bold text-purple-600 py-3'>{actor.name}</h1>
            <p>{actor.country?.name}</p>
            <div className='flex justify-between'>
                <p>Gender</p>
                <p>{actor.gender ? actor.gender : 'Unknown'}</p>
            </div>
            <div className='flex justify-between'>
                <p>BirthDay</p>
                <p>{actor.birthday ? actor.birthday : 'Unknown'}</p>
            </div>
            <p>{actor.deathday ? actor.deathday : 'alive'}</p>
            <div className='flex justify-between mt-auto'>
                <button className='bg-purple-600 text-white px-3 rounded-md py-1 mr-auto' type="button">Read More</button>
            </div>
        </div>
    )
}

export default ActorCard
