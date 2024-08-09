import "./SearchResults.css";
import { Link } from "react-router-dom";

const SearchResults = ({ results, onSelect }) => {
  if (results.length === 0) return null;

  return (
    <ul className="dropdown-menu show position-absolute w-100 mt-2">
      {results.map((result) => (
        <Link
          key={result.id}
          to={`/products/${result.id}`}
          className="custom-navbar-link">
          <li
            key={result.id}
            className="dropdown-item custom-dropdown-item"
            onClick={() => onSelect(result)}>
            {result.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SearchResults;
