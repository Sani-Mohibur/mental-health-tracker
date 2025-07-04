import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-200 dark:bg-gray-800 text-gray-800 dark:text-white p-4 flex flex-wrap justify-between items-center transition-colors">
      <h1 className="text-xl font-bold">Mental Health Tracker</h1>

      {/* Hamburger for mobile */}
      <button
        onClick={toggleMenu}
        className="sm:hidden p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation links */}
      <div
        className={`w-full sm:w-auto flex flex-col sm:flex-row sm:space-x-4 ${
          menuOpen ? "block" : "hidden"
        } sm:block`}
      >
        <Link to="/" className="hover:underline py-2 sm:py-0">
          Home
        </Link>
        <Link to="/journal" className="hover:underline py-2 sm:py-0">
          Journal
        </Link>
        <Link to="/mood-tracker" className="hover:underline py-2 sm:py-0">
          Mood Tracker
        </Link>
        <Link to="/exercises" className="hover:underline py-2 sm:py-0">
          Exercises
        </Link>
        <button
          onClick={toggleTheme}
          className="ml-0 sm:ml-4 px-3 py-1 bg-white text-black rounded hover:bg-gray-100 mt-2 sm:mt-0"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
