import React from 'react'

const UserInfo = ({ name, role, about }) => {
    return (
        <div className='flex items-center justify-between gap-2 flex-col'>
            <h1 className='text-3xl font-bold'>{name}</h1>
            <h4 className='text-xl font-medium text-gray-700'>{role}</h4>
            <p className='text-md font-medium text-gray-500 px-3 text-center'>{about}</p>
        </div>
    )
}

export default UserInfo