import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  let shortcuts = {
    "!hn": "https://hnsnetwork.com/search?query=",
    "!nb": "https://www.namebase.io/domains/",
    "!hm": "http://handshake.mercenary/search.php?keywords=",
    "!sp": "https://parking.sinpapeles.xyz/?search=",
    "!ni": "https://www.niami.io/domain/",
    "!hf": "https://e.hnsfans.com/search?q=",
    "!ak": "https://forum.akash.network/search?q=",
    "!ddg": "https://duckduckgo.com/?q=",
  };

  const search = (e) => {
    e.preventDefault();
    let searchTerm = searchInputRef.current.value;

    if (!searchTerm) return;

    let splitSearchTerm = searchTerm.split(" ");

    if (splitSearchTerm[0] in shortcuts) {
      searchTerm =
        shortcuts[splitSearchTerm[0]] + splitSearchTerm.slice(1).join("%20");
      window.location.assign(searchTerm);
    } else {
      navigate(`/search?s=${searchTerm}&page=1`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-neutral-100 h-screen dark:bg-neutral-900">
      <header className="flex w-full p-3 justify-between text-gray-800 text-lg dark:text-gray-300">
        <div className="flex space-x-3 items-center">
          <Link className="link ml-3" to="/dwebpulse">
            dwebpulse
          </Link>
        </div>
        <div className="flex space-x-3 items-center mr-3">
          <Link className="link ml-3" to="/stats">
            Stats
          </Link>
          <a href="https://docs.hnssearch.io/" className="link">
            About
          </a>
          {/*<Link className="link" to="/Settings">*/}
          {/*  Settings*/}
          {/*</Link>*/}
        </div>
      </header>
      <div className="flex flex-col flex-grow w-full items-center">
        <form className="flex flex-col items-center mt-auto mb-auto w-4/5">
          <img
            className="h-20 md:h-32 dark:invert"
            src={logo}
            alt="hnssearch_logo"
          />
          <div
            className="flex w-full mt-10 max-w-sm rounded-full border border-gray-300 items-center pl-7 pr-2 py-4
        sm:max-w-xl lg:max-w-2xl focus-within:shadow-sm hover:shadow-sm"
          >
            <input
              className="flex-grow focus:outline-none text-xl dark:text-gray-300 bg-neutral-100 dark:bg-neutral-900"
              type="text"
              ref={searchInputRef}
            />
            <MagnifyingGlassIcon
              className="h-6 mr-3 text-gray-800 dark:text-gray-300 cursor-pointer"
              onClick={search}
            />
          </div>
          <div>
            <button
              className="bg-gray-200 p-3 px-5 mt-5 rounded-full border border-gray-300 text-gray-800 text-md
            ring-gray-400 hover:ring-1 focus:outline-none hover:shadow-md mb-20"
              onClick={search}
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
