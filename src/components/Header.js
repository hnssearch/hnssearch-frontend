import logo_icon from "../assets/images/logo_icon.png";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
// import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function Header({ query }) {
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // const routeChange = (route) => {
  //   navigate(route);
  // };
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
    window.scrollTo(0, 0);

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
    <header className="sticky top-0 bg-neutral-200 dark:bg-neutral-900">
      <div className="flex flex-grow w-full p-6 items-center">
        <Link to="/">
          <img
            className="object-contain h-12 mr-1 dark:invert"
            src={logo_icon}
            alt="hnssearch_logo_icon"
          />
        </Link>
        <form
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-300 bg-neutral-50 rounded-full
          max-w-3xl items-center focus-within:shadow-sm dark:bg-neutral-800 hover:shadow-sm"
        >
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none dark:text-gray-300 bg-neutral-50 dark:bg-neutral-800"
            defaultValue={query}
          />
          <XMarkIcon
            className="h-7 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125
        text-gray-800 dark:text-gray-300"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MagnifyingGlassIcon
            className="h-6 mr-3 hidden border-l-2 pl-4 cursor-pointer border-gray-300 sm:inline-flex text-gray-800
          dark:text-gray-300"
            onClick={search}
          />
          <button onClick={search} type="submit" />
        </form>
        {/*<Cog6ToothIcon*/}
        {/*  className="ml-auto h-8 cursor-pointer transition duration-100 transform hover:scale-110*/}
        {/*text-gray-800 dark:text-gray-300"*/}
        {/*  onClick={() => routeChange("/settings")}*/}
        {/*/>*/}
      </div>
    </header>
  );
}

export default Header;
