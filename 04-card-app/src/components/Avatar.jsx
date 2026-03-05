import React from 'react'

const Avatar = ({image}) => {
    return (
        <div className='h-32 w-32 rounded-full overflow-hidden'>
            <img className='h-full w-full object-cover' src={image} alt="" />
        </div>
    )
}

export default Avatar