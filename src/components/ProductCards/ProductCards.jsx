import "./ProductCards.css";
import ProductCard from "./ProductCard/ProductCard";

function ProductCards({ products }) {
  return (
    <div className="container pt-3">
      <div className="row">
        <ProductCard products={products} />
      </div>
    </div>
  );
}

export default ProductCards;
