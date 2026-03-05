import React from 'react'

const ImageURl = (props) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
            </label>
            <input value={props.image} onChange={(e) => props.setImage(e.target.value)}
                type="url"
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" required
            />
        </div>
    )
}

export default ImageURl