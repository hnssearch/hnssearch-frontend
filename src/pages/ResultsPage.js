import React from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import getQuery from "../utils/GetQuery";
import getPage from "../utils/GetPage";
import Results from "../components/Results";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  let query = getQuery(location);
  let page = getPage(location);

  useEffect(() => {
    if (!query) {
      navigate("/");
    }
  }, [query, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 bg-neutral-100 dark:bg-neutral-700">
        <Header query={query} />
      </div>
      <div className="flex flex-grow">
        <Results query={query} page={page} />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default ResultsPage;
