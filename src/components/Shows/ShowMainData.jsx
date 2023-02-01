import React from 'react'

const ShowMainData = ({ name, image, rating, summary, tags }) => {
  return (
    <div className='flex p-4 flex-wrap'>
      <div className=''>
        <img className='w-60 rounded-2xl ' src={image?.original} alt={name} />
      </div>
      <div className='w-fit p-3' >
        <div className='flex gap-4 items-center'>
          <h1 className='text-xl font-bold'>{name}</h1>
          <p>| {rating?.average}</p>
        </div>
        <div>
          <p className='py-4'>
            {summary?.replace(/<\w>|<\W\w*>/g, '')}
          </p>
        </div>
        <div className='flex gap-3'>
          Tags:
          {tags?.map(tag => <p key={tag} className='bg-purple-600 py-1 px-2 rounded-full w-fit text-stone-100'>{tag}</p>)}
        </div>
      </div>
    </div>
  )
}

export default ShowMainData
