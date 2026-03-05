import React from 'react'
import Form from './Form'

const UserForm = ({ onAddCard }) => {
    return (
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Create Profile
            </h2>
            <Form onAddCard={onAddCard} />
        </div>
    )
}

export default UserForm