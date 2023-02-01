import React from 'react'

const Cast = ({ cast }) => {
  console.log(cast)
  return (
    <div>
      <h1 className='text-xl font-bold my-6'>Cast</h1>
      <div className='space-y-6'>
        {
          cast?.map(cast => {
            return (
              <div className='flex gap-4 items-center'>
                <img className='w-16 h-16 rounded-full ' src={cast.person.image.original} alt={cast.person.name} />
                <p className='font-semibold'>{cast.person.name}</p>
                <p className='border-l-[3px] border-purple-600 px-3'>{cast.character.name}</p>
                <p className=''>{cast.voice ? 'Voice' : null}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cast
