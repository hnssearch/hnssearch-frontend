import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Pagination({ query, page, totalPages }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (page < 1 || page > totalPages) {
      navigate(`/search?s=${query}&page=1`);
    }
  }, [page, totalPages, query, navigate]);
  const previous = (e) => {
    e.preventDefault();
    let previous = page - 1;
    navigate(`/search?s=${query}&page=${previous}`);
  };
  const next = (e) => {
    e.preventDefault();
    let nextPage = page + 1;
    navigate(`/search?s=${query}&page=${nextPage}`);
  };

  return (
    <div className="flex space-x-3 items-center">
      {page > 1 && <button onClick={previous}>Previous</button>}
      <p>{page}</p>
      {page < totalPages && <button onClick={next}>Next</button>}
    </div>
  );
}

export default Pagination;
