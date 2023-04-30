import React from 'react'
import starImage from '../../assets/icons/star-icon.png'

const ShowMainData = ({ name, image, rating, summary, tags }) => {
  return (
    <div className='flex flex-col md:flex-row p-4 '>
      <div className=''>
        <img className='w-full md:w-60 rounded-2xl ' src={image?.original} alt={name} />
      </div>
      <div className='w-fit p-3' >
        <div className='flex gap-4 items-center'>
          <h1 className='text-xl font-bold'>{name}</h1>
          <div className='flex items-center'>
            <img className='w-4 h-4' src={starImage} alt="star" />
            <p className='border-l-2 border-gray-800 px-2 mx-2 py-0 '>{rating?.average}</p>
          </div>
        </div>
        <div>
          <p className='py-4'>
            {summary?.replace(/<\w>|<\W\w*>/g, '')}
          </p>
        </div>
        <div className='flex gap-3'>
          Tags:
          {tags?.map(tag => <p key={tag} className='bg-purple-600 py-1 px-2 rounded-full w-fit text-stone-100 flex items-center'>{tag}</p>)}
        </div>
      </div>
    </div>
  )
}

export default ShowMainData
