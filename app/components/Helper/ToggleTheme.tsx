"use client"
import { FaMoon, FaSun } from "react-icons/fa"
import { useTheme } from "./ThemeProvider"

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className=" flex items-end ">
    {theme === "dark" ? (
      <button onClick={toggleTheme} className=" text-2xl  text-yellow-300 hover:text-yellow-200 cursor-pointer">
        <FaSun />
      </button>
    ) : (
      <button onClick={toggleTheme} className="text-2xl  text-emerald-700 hover:text-emerald-500 cursor-pointer  ">
        <FaMoon />
      </button>
    )}
    </div>
  )
}

export default ToggleTheme
