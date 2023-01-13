import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
function HomePage() {
  return (
    <div>
      <header className="flex w-full p-3 justify-between text-gray-800 text-lg">
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
      <form className="flex flex-col flex-grow items-center mt-52">
        <img className="h-40" src={logo} alt="hnssearch_logo" />
        <div
          className="flex w-full mt-10 max-w-sm rounded-full border border-gray-200 items-center pl-7 pr-2 py-4
        sm:max-w-xl lg:max-w-2xl focus-within:shadow-sm hover:shadow-sm"
        >
          <input className="flex-grow focus:outline-none text-xl" type="text" />
          <MagnifyingGlassIcon className="h-6 mr-3 text-gray-800" />
        </div>
      </form>
    </div>
  );
}

export default HomePage;
