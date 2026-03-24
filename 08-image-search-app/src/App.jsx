import React from 'react'
import Base from './components/Base'
import SearchBar from './components/SearchBar'
import Header from './components/Header'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-white overflow-x-hidden'>
      <Header />
      <SearchBar />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[10px] my-8 mx-2 md:mx-8">
        <Base />
        <Base />
        <Base />
        <Base />
      </div>
    </div>
  )
}

export default App