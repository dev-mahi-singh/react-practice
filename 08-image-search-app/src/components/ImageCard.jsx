
const ImageCard = ({ elem, row, desc }) => {

    return (
        <>
            <div 
             style={{ gridRow: `span ${row} / span ${row}` }}
            className="relative rounded-xl overflow-hidden cursor-pointer group">
                <img className="w-full h-full object-cover" src={elem} />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-20">
                    <h1 className='text-white text-3xl'> {desc?.slice(0, 50)}</h1>
                </div >
            </div >
        </>
    )
}

export default ImageCard