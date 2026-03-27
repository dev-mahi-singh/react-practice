import React from 'react'

const SearchBar = () => {
  return (
    <div className="md:h-20 h-8 w-full flex items-center justify-center mx-2 md:mx-8">
      <div className="relative md:w-1/2 w-[90%]">

        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 
                 7 7 0 0114 0z"/>
          </svg>
        </div>

        <input
          type="text"
          placeholder="Search photos and illustrations"
          className="w-full md:pl-10 md:pr-4 md:py-4 pl-8 pr-3 py-2 outline-none bg-gray-100 shadow-md rounded-full"
        />

        <button className="absolute right-1 top-1 bottom-1 px-4 md:px-6 bg-violet-500 hover:bg-violet-600 text-white rounded-full text-sm md:text-base transition">
          Search
        </button>

      </div>
    </div>
  )
}

export default SearchBar