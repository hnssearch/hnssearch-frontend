import React from "react";
import { useState, useEffect } from "react";
import { MeiliSearch } from "meilisearch";

const client = new MeiliSearch({
  host: "http://127.0.0.1:7700",
  //apiKey: 'masterKey',
});

const index = client.index("sites");
const fetchData = async (query) => {
  const response = await index.search(query);
  if (!response.hits) {
    throw new Error("Data could not be fetched!");
  } else {
    return response.hits;
  }
};

function Results({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchData(query)
      .then((res) => {
        console.log(res);
        setResults(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [query]);

  return (
    <div className="">
      {/*<h2 className="mb-3">React HTTP Request with Async Await Example</h2>*/}
      {results.map((item, idx) => {
        return (
          <div className="mt-5" key={idx}>
            <div>
              <div>
                <p>{item.url_no_dot}</p>
                <p>{item.title}</p>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Results;
