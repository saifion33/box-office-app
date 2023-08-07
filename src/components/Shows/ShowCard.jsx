import React from 'react'
import { Link } from 'react-router-dom'
import {HiStar,HiOutlineStar} from 'react-icons/hi'
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
                <div role='button' className='text-2xl' onClick={() => { starShow(show.id) }}>
                    {isStarred ? <HiStar className='text-yellow-400 drop-shadow-xl' />:<HiOutlineStar  />}
                </div>
            </div>
        </div>
    )
}

export default ShowCard
