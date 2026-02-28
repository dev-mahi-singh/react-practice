import React, { useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    setCounter(counter - 1)
  }

  const resetCounter = () => {
    setCounter(0)
  }

  return (
    <div className='h-screen w-full bg-gray-900 flex items-center justify-center flex-col'>
      <h1 className='text-4xl text-white font-bold'>Counter App</h1>
      <div className='mt-8 text-center'>
        <h1 className='text-5xl text-white font-bold flex items-center justify-center h-50 w-70 bg-gray-700 rounded-lg'>{counter}</h1>
        <button onClick={incrementCounter} className='bg-purple-500 hover:bg-purple-400 cursor-pointer transition text-white text-xl px-4 py-2 rounded-lg mt-4 mr-5'>increment</button>
        <button onClick={decrementCounter} className='bg-red-400 hover:bg-red-300 transition cursor-pointer text-white px-4 text-xl py-2 rounded-lg mt-4'>decrement</button>
      </div>
      <button onClick={resetCounter} className='bg-slate-500 hover:bg-slate-400 transition text-white px-8 text-xl py-2 cursor-pointer rounded-lg mt-4'>reset</button>
    </div>
  )
}

export default App