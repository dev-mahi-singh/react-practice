import React from 'react'
import Avatar from './Avatar'
import UserInfo from './UserInfo'

const Card = ({ image, name, role, about }) => {
    return (
        <div className="h-90 w-70 bg-white rounded-2xl shadow-xl flex items-center gap-4 flex-col pt-5">
            <Avatar image={image} />
            <UserInfo name={name} role={role} about={about} />
        </div>
    )
}

export default Card