import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Welcome to Mental Health Tracker
        </h1>
        <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Your companion app to monitor moods, journal thoughts, and practice
          wellness exercises.
        </p>
      </section>

      {/* Navigation Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
        <Link
          to="/mood-tracker"
          className="flex flex-col items-center p-8 bg-indigo-100 dark:bg-indigo-900 rounded-xl shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-4 focus:ring-indigo-400 dark:focus:ring-indigo-600"
          aria-label="Navigate to Mood Tracker"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-indigo-700 dark:text-indigo-300 mb-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
            <circle cx="9" cy="10" r="1" fill="currentColor" />
            <circle cx="15" cy="10" r="1" fill="currentColor" />
          </svg>
          <h3 className="text-indigo-800 dark:text-indigo-200 font-semibold text-xl mb-3">
            Mood Tracker
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-center text-base leading-snug">
            Track your daily moods and feelings easily.
          </p>
        </Link>

        <Link
          to="/journal"
          className="flex flex-col items-center p-8 bg-green-100 dark:bg-green-900 rounded-xl shadow-lg hover:bg-green-200 dark:hover:bg-green-700 transition-colors focus:outline-none focus:ring-4 focus:ring-green-400 dark:focus:ring-green-600"
          aria-label="Navigate to Journal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-green-700 dark:text-green-300 mb-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20h9M12 4h9M5 20v-4a4 4 0 014-4h7"
            />
          </svg>
          <h3 className="text-green-800 dark:text-green-200 font-semibold text-xl mb-3">
            Journal
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-center text-base leading-snug">
            Write and reflect on your thoughts and experiences.
          </p>
        </Link>

        <Link
          to="/exercises"
          className="flex flex-col items-center p-8 bg-yellow-100 dark:bg-yellow-900 rounded-xl shadow-lg hover:bg-yellow-200 dark:hover:bg-yellow-700 transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-400 dark:focus:ring-yellow-600"
          aria-label="Navigate to Exercises"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-yellow-700 dark:text-yellow-300 mb-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6M6 15l6-6"
            />
            <circle cx="18" cy="12" r="3" />
          </svg>
          <h3 className="text-yellow-800 dark:text-yellow-200 font-semibold text-xl mb-3">
            Exercises
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-center text-base leading-snug">
            Practice guided mental wellness exercises.
          </p>
        </Link>
      </section>
      {/* Quote Section */}
      <section className="mt-16 text-center max-w-2xl mx-auto">
        <p className="italic text-gray-600 dark:text-gray-400 text-lg">
          “Mental health… is not a destination, but a process.” – Unknown
        </p>
      </section>
    </div>
  );
};

export default Home;
