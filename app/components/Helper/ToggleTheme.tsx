"use client"
import { FaMoon, FaSun } from "react-icons/fa"
import { useTheme } from "./ThemeProvider"

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
    {theme === "dark" ? (
      <button onClick={toggleTheme} className="h-10 text-yellow-300 hover:text-yellow-200 cursor-pointer">
        <FaSun />
      </button>
    ) : (
      <button onClick={toggleTheme} className="h-10 text-cyan-700 hover:text-cyan-200 cursor-pointer  ">
        <FaMoon />
      </button>
    )}
    </div>
  )
}

export default ToggleTheme
