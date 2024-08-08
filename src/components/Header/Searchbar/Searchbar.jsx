import "./Searchbar.css";
import { useState } from "react";

function Searchbar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
    onSearch(event.target.value);
  };
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Type to search..."
        aria-label="Search"
        value={input}
        onChange={handleChange}
      />
      <button className="btn custom-btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
