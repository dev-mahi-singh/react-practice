import NavbarBtn from './NavbarBtn'
import NavbarCenter from './NavbarCenter'

const Navbar = () => {
    return (
        <div className="py-5 px-16 bg-[#222] flex items-center justify-between">
            <h2 className='text-white text-3xl font-semibold font-serif'>Publisher Weekly</h2>
            <NavbarCenter />
            <NavbarBtn />
        </div>
    )
}

export default Navbar