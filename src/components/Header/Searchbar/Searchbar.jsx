import "./Searchbar.css";

function Searchbar() {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn custom-btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
