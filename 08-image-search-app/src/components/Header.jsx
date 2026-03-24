import React from 'react'

const Header = () => {
    return (
        <div className='h-32 w-full flex items-center justify-center flex-col'>
            <h1 className='text-[50px] [font-family:var(--font-poppins)] font-bold bg-[url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQe6MIdoufYLpvNRJyhkstOqmszMUYfPj0IsWvUxEE8BRZ2ymhB)] bg-cover bg-center bg-clip-text text-transparent'>Image Search App</h1>
            <h5 className='text-lg text-gray-600'>Find Stunning Photos</h5>
        </div>
    )
}

export default Header