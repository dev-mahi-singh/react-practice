const ToggleSwitch = ({ theme, changeTheme }) => {

    return (
        <div
            onClick={changeTheme}
            className={`h-10 w-20 rounded-full relative cursor-pointer transition-colors duration-300
        ${theme === "dark" ? "bg-gray-700" : "bg-green-400"}`}
        >
            <div
                className={`h-8 w-8 bg-white rounded-full absolute top-1 transition-all duration-300
          ${theme === "dark" ? "left-1" : "left-11"}`}
            >
            </div>
        </div>
    )
}

export default ToggleSwitch