import Basket from "./Basket/Basket";
import CategoryList from "./CategoryList/CategoryList";
import "./Header.css";
import Logo from "./Logo/Logo";
import Searchbar from "./Searchbar/Searchbar";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Logo />
        </a>
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
            <Searchbar />
            <Basket />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
