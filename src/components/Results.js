import React from "react";
import { useState, useEffect } from "react";
import { MeiliSearch } from "meilisearch";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const client = new MeiliSearch({
  host: "http://127.0.0.1:7700",
  //apiKey: 'masterKey',
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
        console.log(res);
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
          <p>No search results</p>
        </div>
      )}
      {resultHits.map((item, idx) => {
        return (
          <div className="ml-28 mr-10 max-w-4xl" key={idx}>
            <div>
              <div>
                <p>{item.url_no_dot}</p>
                <p>{item.title}</p>
                <p className="mb-5">{item.content.substring(0, 300)}...</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col mt-auto mb-5 w-full p-3 justify-between items-center">
        <Pagination query={query} page={page} totalPages={results.totalPages} />
      </div>
    </div>
  );
}

export default Results;
