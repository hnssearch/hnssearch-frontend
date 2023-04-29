import StatTile from "../components/StatTile";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { MeiliSearch } from "meilisearch";

const clientStats = new MeiliSearch({
  host: "https://index.hnssearch.io",
  apiKey: "388028345e42631c0d731bc7e004efd22c195ce013f3d75bda35868d0b4aede8",
});

const statsIndex = clientStats.index("stats");

const fetchStats = async (query) => {
  const response = await statsIndex.search(query, {
    hitsPerPage: 1,
  });
  if (!response) {
    throw new Error("Data could not be fetched!");
  } else {
    return response;
  }
};

function StatsPage() {
  const [stats, setStats] = useState([]);
  const query = "stats";

  useEffect(() => {
    fetchStats(query)
      .then((res) => {
        // console.log(res);
        setStats(res.hits);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [query]);

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
        {stats.map((item, idx) => {
          return (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-3 md:gap-4 flex flex-col items-center mt-2 md:mt-32 md:mb-auto w-4/5"
            >
              <StatTile title="Pages" value={item.n_entries} />
              <StatTile title="Different Sites" value={item.n_domains} />
              <StatTile title="Unique TLDs" value={item.n_tlds} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default StatsPage;
