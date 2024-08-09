import { Link } from "react-router-dom";
import Basket from "./Basket/Basket";
import CategoryList from "./CategoryList/CategoryList";
import "./Header.css";
import Logo from "./Logo/Logo";
import Searchbar from "./Searchbar/Searchbar";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

function Header() {
  const [results, setResults] = useState([]);
  const { data, isLoading, error } = useFetch(
    "https://dummyjson.com/products?limit=0"
  );

  console.log(data);

  const handleSearch = (query) => {
    if (query && data && data.products) {
      const filteredResults = data.products.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/page/1" className="navbar-brand">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Categories
              </a>
              <CategoryList />
            </li>
          </ul>
          <div className="d-flex ms-auto align-items-center">
            <Searchbar onSearch={handleSearch} results={results} />
            <Basket />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
