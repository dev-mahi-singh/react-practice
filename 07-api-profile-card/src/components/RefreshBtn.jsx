const RefreshBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      id="refreshBtn"
      className="absolute top-[66%] left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-md shadow-md font-semibold cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 4v5h5M20 20v-5h-5M5 9a7 7 0 0111-3l3 3M19 15a7 7 0 01-11 3l-3-3"
        />
      </svg>
      Refresh
    </button>
  )
}

export default RefreshBtn