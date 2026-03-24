import React from 'react'

const SearchBar = () => {
  return (
    <div className="h-20 w-full flex items-center justify-center mx-2 md:mx-8">
      <div className="relative w-1/2">

        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 
                 7 7 0 0114 0z"/>
          </svg>
        </div>

        <input
          type="text"
          placeholder="Search photos and illustrations"
          className="w-full pl-10 pr-4 py-4 outline-none bg-gray-100 shadow-md rounded-full"
        />

      </div>
    </div>
  )
}

export default SearchBar