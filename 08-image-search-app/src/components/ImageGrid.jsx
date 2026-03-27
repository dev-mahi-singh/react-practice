import React from 'react'
import ImageCard from './ImageCard'

const ImageGrid = () => {
    return (
        <div className="grid grid-cols-2 bg-white md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[10px] my-8 p-6 mx-2 md:mx-8 rounded-xl">
            <ImageCard />
            <ImageCard />
        </div>
    )
}

export default ImageGrid