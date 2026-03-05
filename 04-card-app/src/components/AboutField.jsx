import React from 'react'

const AboutField = (props) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                About You
            </label>
            <textarea
                rows="4" value={props.about} onChange={(e) => props.setAbout(e.target.value)}
                placeholder="Tell us about yourself..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none" required
            ></textarea>
        </div>
    )
}

export default AboutField