import React from 'react'

const UserNameInput = (props) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
            </label>
            <input
                type="text" value={props.name} onChange={(e) => props.setName(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" required
            />
        </div>
    )
}

export default UserNameInput