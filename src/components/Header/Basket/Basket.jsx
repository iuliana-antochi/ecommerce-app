import "./Basket.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Basket() {
  return <FontAwesomeIcon icon={faShoppingCart} className="basket-icon" />;
}

export default Basket;
