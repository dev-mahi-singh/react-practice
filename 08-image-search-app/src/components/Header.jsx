import React from 'react'

const Header = () => {
    return (
        <div className='h-32 w-full flex items-center justify-center flex-col'>
            <h1 className='md:text-[52px] h-[60%] w-full flex items-center justify-center text-4xl [font-family:var(--font-poppins)] font-[1000] bg-[url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQe6MIdoufYLpvNRJyhkstOqmszMUYfPj0IsWvUxEE8BRZ2ymhB)] bg-cover bg-center bg-clip-text text-transparent'>Image Search App</h1>
            <h5 className='text-sm text-gray-600'>Find Stunning Photos</h5>
        </div>
    )
}

export default Header