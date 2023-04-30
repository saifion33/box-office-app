import React from 'react'

const Seasons = ({ seasons }) => {

  return (
    <div className='py-3'>
      <h1 className='text-xl font-bold'>Seasons</h1>
      <p>Seasons in Total : <span className='font-semibold'>{seasons?.length}</span></p>
      <p>Episodes in Total : <span className='font-semibold'>{seasons?.reduce((acc, season) => acc + season.episodeOrder, 0)}</span></p>
      <div className='space-y-4'>
        {seasons?.map(season => <div key={season} className='flex p-2 items-center gap-10'>
          <div>
            <p>Season {season?.number}</p>
            <p>Episode : <span className='font-semibold'>{season?.episodeOrder}</span></p>
          </div>
          <div className='border-l-[3px] border-purple-600 p-4'>
            <p><span className='text-lg font-semibold'>Aired : </span> {season?.premiereDate} - {season?.endDate}</p>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Seasons
