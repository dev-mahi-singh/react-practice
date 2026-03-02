import React from 'react'

const RoleInput = () => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
            </label>
            <input
                type="text"
                placeholder="Enter your role"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
        </div>
    )
}

export default RoleInput