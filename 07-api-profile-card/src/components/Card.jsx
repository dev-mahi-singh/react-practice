const Card = ({ first, last, email, pic }) => {
  return (
    <div className="h-40 w-96 bg-[#f2afe0] flex items-center justify-around rounded-lg transform transition-all duration-300 ease-in-out hover:-skew-y-3 hover:scale-105 hover:shadow-2xl">
      <img className='h-32 w-32 rounded-full object-cover position-center' src={pic} alt="" />

      <div className='py-4'>
        <h2 className='text-2xl font-semibold'>{first} {last}</h2>
        <p className='text-xs font-medium'>{email}</p>
        <button className='px-6 mt-3 py-1 text-lg bg-[#f7d3ee] rounded-full cursor-pointer'>Contact</button>
      </div>
    </div>
  )
}

export default Card