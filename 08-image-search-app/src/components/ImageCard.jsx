import React from 'react'

const ImageCard = () => {
    return (
        <>
            <div className="md:row-span-20 relative row-span-10 rounded-xl overflow-hidden cursor-pointer group">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1772775133324-131c0f747b80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDh8fHxlbnwwfHx8fHw%3D" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-20">
                    <h1 className='text-white text-3xl'>hover</h1>
                </div>
            </div>
            <div className="md:row-span-15 relative row-span-8 rounded-xl overflow-hidden cursor-pointer group">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1773332611522-06b86b48cbf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-20">
                    <h1 className='text-white text-3xl'>hover</h1>
                </div>
            </div>
            <div className="md:row-span-10 relative row-span-6 rounded-xl overflow-hidden cursor-pointer group">
                <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1773452093235-06429f4c844d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-20">
                    <h1 className='text-white text-3xl'>hover</h1>
                </div>
            </div>
        </>
    )
}

export default ImageCard