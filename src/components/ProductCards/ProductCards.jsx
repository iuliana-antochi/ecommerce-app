import "./ProductCards.css";
import ProductCard from "./ProductCard/ProductCard";

function ProductCards() {
  return (
    <div className="container pt-3">
      <div className="row">
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductCards;
