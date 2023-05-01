import React, { useState, useEffect } from "react";
import { MeiliSearch } from "meilisearch";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import HandypediaInfobox from "./HandypediaInfobox";
import InfiniteScroll from "react-infinite-scroll-component";
import ResultsList from "./ResultsList";

const client = new MeiliSearch({
  host: "https://index.hnssearch.io",
  apiKey: "f49e797953cd1c1152b23506f3fbb0f1ad0fe3c3b6632d3170ae6e61085f5994",
});

const clientHandypedia = new MeiliSearch({
  host: "https://index.hnssearch.io",
  apiKey: "8022d21bf6304fa6562fe209fa742e715ce5ecc7c97d9896e0a97001b5762a40",
});

const index = client.index("sites");
const indexHandypedia = clientHandypedia.index("handypedia");

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

const fetchDataHandypedia = async (query) => {
  const response = await indexHandypedia.search(query, {
    hitsPerPage: 1,
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
  const [handypediaResults, setHandypediaResults] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!page) {
      navigate(`/search?s=${query}&page=1`);
    }
  }, [page, query, navigate]);

  useEffect(() => {
    fetchData(query, page)
      .then((res) => {
        setResults(res);
        setResultHits(res.hits);
        setHasMore(true);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [query, page]);

  useEffect(() => {
    fetchDataHandypedia(query)
      .then((res) => {
        setHandypediaResults(res.hits);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [query]);

  const fetchMoreData = async () => {
    const nextPage = results.page + 1;
    const response = await index.search(query, {
      hitsPerPage: 10,
      page: nextPage,
    });
    if (response.hits.length === 0) {
      setHasMore(false);
    } else {
      setResultHits((prevResultHits) => [...prevResultHits, ...response.hits]);
      setResults(response);
    }
  };

  const Loader = () => (
    <h4 className="text-center text-gray-700 dark:text-neutral-200 text-base font-medium">
      Loading...
    </h4>
  );

  const EndMessage = () => (
    <h4 className="text-center text-gray-700 dark:text-neutral-200 text-base font-medium">
      End of results
    </h4>
  );

  return (
    <div className="max-w-7xl">
      <div className="ml-28 lg:ml-4 lg:float-right mr-10 lg:max-w-xs mt-3 hidden md:block">
        <HandypediaInfobox handypediaResults={handypediaResults} />
      </div>
      <div className="flex flex-col mt-3">
        {window.innerWidth < 640 ? (
          <InfiniteScroll
            dataLength={resultHits.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<Loader />}
            endMessage={<EndMessage />}
            className="flex flex-col"
            style={{ overflow: "visible" }}
            scrollableTarget="scrollableDiv"
          >
            <ResultsList hits={resultHits} />
          </InfiniteScroll>
        ) : (
          <div>
            {resultHits.length !== 0 ? (
              <div>
                <ResultsList hits={resultHits} />
                <div className="flex flex-col mt-auto mb-5 w-full p-3 justify-between items-center text-gray-700 dark:text-neutral-200">
                  <Pagination
                    query={query}
                    page={page}
                    totalPages={results.totalPages}
                  />
                </div>
              </div>
            ) : (
              <div className="ml-28 mr-10 max-w-4xl">
                <p className="text-gray-700 dark:text-neutral-200">
                  No search results
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Results;
