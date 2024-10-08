import "./Logo.css";
import logo from "../../../assets/logo.png";

function Logo() {
  return (
    <img
      src={logo}
      alt="Dora's Market logo"
      width="160"
      height="40"
      className="d-inline-block align-top"
    />
  );
}

export default Logo;
