import StatTile from "../components/StatTile";
import stats from "../assets/files/stats.json";
import { Link } from "react-router-dom";
import React from "react";
import Footer from "../components/Footer";

// Implementation of stats currently with static file and import; will be changed to fetch at a later point.
function StatsPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-neutral-100  dark:bg-neutral-900">
      <header className="flex w-full p-3 justify-between text-gray-800 text-lg dark:text-gray-300">
        <div className="flex space-x-3 items-center">
          <Link className="link ml-3" to="/dwebpulse">
            dwebpulse
          </Link>
        </div>
        <div className="flex space-x-3 items-center mr-3">
          <Link className="link ml-3" to="/">
            Search
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
        <h1 className=" hidden text-gray-800 text-5xl dark:text-gray-300 mt-auto md:block">
          HNSSearch Index
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 flex flex-col items-center mt-2 md:mt-32 md:mb-auto w-4/5">
          <StatTile title="Pages" value={stats.n_entries} />
          <StatTile title="Different Sites" value={stats.n_domains} />
          <StatTile title="Unique TLDs" value={stats.n_tlds} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StatsPage;
