import React from 'react'

const LoadMoreBtn = ({ loadMore }) => {
    return (
        <div className='flex items-center justify-center my-5'>
            <button
                onClick={loadMore}
                className='px-6 py-2 bg-amber-800 text-lg rounded cursor-pointer active:scale-95 hover:bg-amber-700 transition duration-300'>Load More</button>
        </div>
    )
}

export default LoadMoreBtn