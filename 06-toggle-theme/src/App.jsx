import React, { useState } from 'react'
import ToggleSwitch from './components/ToggleSwitch';

const App = () => {

  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  }

  return (
     <div className={`h-screen w-full flex flex-col items-center justify-center gap-5
      ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <ToggleSwitch theme={theme} changeTheme={changeTheme} />

    </div>
  )
}

export default App;