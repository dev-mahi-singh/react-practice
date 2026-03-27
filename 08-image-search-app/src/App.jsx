import React from 'react'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import ImageGrid from './components/ImageGrid'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-r from-violet-200 to-pink-200 overflow-x-hidden'>
      <Header />
      <SearchBar />
      <ImageGrid />
    </div>
  )
}

export default App