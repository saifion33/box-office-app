import React from 'react'

const Details = ({ status, premiered, network }) => {
    return (
        <div>
            <h1 className='text-xl font-bold'>Details</h1>
            <p>Status: <span className='font-semibold'>{status}</span></p>
            <p>Premiered: {premiered} {network ? `On ${network.name}` : null}</p>
        </div>
    )
}

export default Details
