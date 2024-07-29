import Basket from "./Basket/Basket";
import "./Header.css";
import Logo from "./Logo/Logo";
import Searchbar from "./Searchbar/Searchbar";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto d-flex justify-content-center align-items-center">
            <Searchbar />
            <Basket />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
