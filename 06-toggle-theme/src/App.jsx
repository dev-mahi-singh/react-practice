import React, { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState("dark");


  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    }
    else {
      setTheme('dark');
    }
  }

  return (
    <div className='h-screen w-full flex items-center justify-between text-center text-xl font-bold'>
      {theme === "dark" ? <div className='h-screen w-full flex bg-white items-center justify-center'>
        <button onClick={changeTheme} className='h-12 w-32 bg-gray-900 text-white rounded-full capitalize cursor-pointer'>{theme} Theme</button>
      </div > : <div className='h-screen w-full flex bg-gray-900 items-center justify-center'>
        <button onClick={changeTheme} className='h-12 w-32 bg-white text-black text-xl font-bold capitalize rounded-full cursor-pointer'>{theme} Theme</button></div>
      }
    </div>

  )
}

export default App