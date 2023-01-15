import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import getQuery from "../utils/GetQuery";
import Results from "../components/Results";

function ResultsPage() {
  const location = useLocation();
  let query = getQuery(location);

  return (
    <div>
      <div className="bg-neutral-100 dark:bg-neutral-700">
        <Header query={query} />
      </div>
      <div>
        <Results query={query} />
      </div>
    </div>
  );
}

export default ResultsPage;
