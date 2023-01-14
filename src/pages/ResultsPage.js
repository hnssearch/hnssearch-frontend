import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import getQuery from "../utils/GetQuery";

function ResultsPage() {
  const location = useLocation();
  let query = getQuery(location);

  return (
    <div className="bg-neutral-100 dark:bg-neutral-700">
      <Header query={query} />
      <div></div>
    </div>
  );
}

export default ResultsPage;
