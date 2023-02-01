import React from 'react'
import { Link } from 'react-router-dom'
import starImage from '../../assets/icons/star-icon.png'

const ShowCard = ({ show, starShow, isStarred }) => {
    const summary = show.summary?.replace(/<\W*\w*>/g, '').split(' ').slice(0, 15).join(' ')

    return (
        <div className='bg-white flex flex-col shadow-lg w-full max-w-xs rounded text-black p-3 transition-all duration-1000 border-2 border-white hover:border-2  hover:border-purple-600'>
            <img className='w-full h-64' src={show.image?.original} alt={show.name} />

            <p className='text-lg font-bold text-purple-600 py-3'>{show.name}</p>
            <p className='py-3 text-gray-700'>{summary} ...</p>
            <div className='flex justify-between mt-auto'>
                <Link to={`/show/${show.id}`} className='bg-purple-600 text-white px-3 rounded-md py-1 mr-auto'>Read More</Link>
                <div className='border-2 border-purple-600 rounded-full px-3 bg-gray-200 flex items-center cursor-pointer' onClick={() => { starShow(show.id) }}>
                    {isStarred ? <img className='w-5 h-5' src={starImage} alt="star" /> : 'Star Me'}
                </div>
            </div>
        </div>
    )
}

export default ShowCard
