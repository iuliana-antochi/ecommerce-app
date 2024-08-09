import { useState } from "react";
import "./Searchbar.css";
import SearchResults from "./SearchResults/SearchResults";

function Searchbar({ onSearch, results }) {
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
    onSearch(value);
    setShowResults(value.length > 0);
  };

  const handleSelect = (item) => {
    setInput(item.title);
    setShowResults(false);
    onSearch(item.title);
  };

  return (
    <div className="position-relative">
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Type to search..."
          aria-label="Search"
          value={input}
          onChange={handleChange}
        />
      </form>
      {showResults ? (
        <SearchResults results={results} onSelect={handleSelect} />
      ) : null}
    </div>
  );
}

export default Searchbar;
