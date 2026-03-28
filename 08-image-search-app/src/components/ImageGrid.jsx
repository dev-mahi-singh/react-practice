import { useState } from "react"
import ImageCard from './ImageCard'

const ImageGrid = ({ images }) => {
    const [row, setRow] = useState([20, 15, 10]);

    return (
        <div className="grid grid-cols-2 bg-white md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[10px] my-8 p-6 mx-2 md:mx-8 rounded-xl">
            {images.map(function (elem, idx) {
                return <ImageCard key={idx} row={row[idx % row.length]} elem={elem.urls.small} desc={elem.description || elem.alt_description || "No description"} />
            })}
        </div>
    )
}

export default ImageGrid