import React from "react";
import { useState, useEffect } from "react";
import { MeiliSearch } from "meilisearch";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

// public key for search, free to use
const client = new MeiliSearch({
  host: "https://index.hnssearch.io",
  apiKey: "f49e797953cd1c1152b23506f3fbb0f1ad0fe3c3b6632d3170ae6e61085f5994",
});

const index = client.index("sites");

const fetchData = async (query, page) => {
  const response = await index.search(query, {
    hitsPerPage: 10,
    page: page,
  });
  if (!response) {
    throw new Error("Data could not be fetched!");
  } else {
    return response;
  }
};

function Results({ query, page }) {
  const [resultHits, setResultHits] = useState([]);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!page) {
      navigate(`/search?s=${query}&page=1`);
    }
  }, [page, query, navigate]);

  useEffect(() => {
    fetchData(query, page)
      .then((res) => {
        // console.log(res);
        setResults(res);
        setResultHits(res.hits);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [query, page]);
  return (
    <div className="flex flex-col mt-3">
      {/*<h2 className="mb-3">React HTTP Request with Async Await Example</h2>*/}
      {resultHits.length !== 0 ? null : (
        <div className="ml-28 mr-10 max-w-4xl">
          <p className="text-gray-700 dark:text-neutral-200">
            No search results
          </p>
        </div>
      )}
      {resultHits.map((item, idx) => {
        return (
          <div
            className="px-5 py-2 mb-3 md:mb-0 md:py-5 md:ml-28 md:mr-10 md:max-w-4xl break-words bg-neutral-100
             dark:bg-neutral-700"
            key={idx}
          >
            <div>
              <div>
                <p className="text-sm text-gray-700 dark:text-neutral-200">
                  {item.url_no_dot}
                </p>
                <a
                  className="text-lg text-blue-800 font-bold dark:text-blue-400"
                  href={item.url_no_dot}
                >
                  {item.title}
                </a>
                <p className="text-gray-700 dark:text-neutral-200">
                  {item.content.substring(0, 300)}...
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col mt-auto mb-5 w-full p-3 justify-between items-center text-gray-700 dark:text-neutral-200">
        <Pagination query={query} page={page} totalPages={results.totalPages} />
      </div>
    </div>
  );
}

export default Results;
