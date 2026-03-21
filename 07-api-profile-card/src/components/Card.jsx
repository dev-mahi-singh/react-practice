const Card = ({ first, last, email, pic }) => {
  return (
    <div className="h-40 w-full max-w-sm sm:w-89 bg-[#f2afe0] flex sm:mx-0 mx-2 sm:flex-row items-center gap-4 p-4 rounded-lg transform transition-all duration-300 ease-in-out hover:-skew-y-2 hover:scale-105 hover:shadow-2xl">
      <img className='h-24 w-24 rounded-full object-cover' src={pic} alt="" />

      <div className='text-center sm:text-left'>
        <h2 className='text-xl sm:text-2xl font-semibold'>{first} {last}</h2>
        <p className='text-xs sm:text-sm font-medium break-all'>{email}</p>
        <button className='px-5 mt-3 py-1 text-sm sm:text-base bg-[#f7d3ee] hover:scale-105 transition rounded-full cursor-pointer'>Contact</button>
      </div>
    </div>
  )
}

export default Card