import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center bg-neutral-100 h-screen dark:bg-neutral-900">
      <header className="flex w-full p-3 justify-between text-gray-800 text-lg dark:text-gray-300">
        <div className="flex space-x-3 items-center">
          <Link className="link" to="/dwebpulse">
            dwebpulse
          </Link>
        </div>
        <div className="flex space-x-3 items-center">
          <Link className="link" to="/About">
            About
          </Link>
          <Link className="link" to="/Settings">
            Settings
          </Link>
        </div>
      </header>
      <form className="flex flex-col flex-grow items-center mt-52 w-4/5">
        <img className="h-32 dark:invert" src={logo} alt="hnssearch_logo" />
        <div
          className="flex w-full mt-10 max-w-sm rounded-full border border-gray-300 items-center pl-7 pr-2 py-4
        sm:max-w-xl lg:max-w-2xl focus-within:shadow-sm hover:shadow-sm"
        >
          <input
            className="flex-grow focus:outline-none text-xl dark:text-gray-300 bg-neutral-100 dark:bg-neutral-900"
            type="text"
          />
          <MagnifyingGlassIcon className="h-6 mr-3 text-gray-800 dark:text-gray-300" />
        </div>
        <div>
          <button
            className="bg-gray-200 p-3 px-5 mt-5 rounded-full border border-gray-300 text-gray-800 text-md
            ring-gray-400 hover:ring-1 focus:outline-none hover:shadow-md"
          >
            Search
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default HomePage;
