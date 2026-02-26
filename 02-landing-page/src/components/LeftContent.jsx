import 'remixicon/fonts/remixicon.css'
import LeftContentBtn from './LeftContentBtn'
import LeftContentText from './LeftContentText'

const LeftContent = () => {
    return (
        <div className='h-full w-1/2 flex flex-col items-start justify-center'>
            <h1 className='text-6xl font-semibold font-serif pr-3'>Ideas that inspire, <br /> inform, and entertain.</h1>
            <LeftContentText />
            <LeftContentBtn />
        </div>
    )
}

export default LeftContent