import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ products }) {
  if (!products || products.length === 0) {
    return <div className="mb-4">No products available for this category.</div>;
  }

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card h-100">
            <Link
              to={`/products/${product.id}`}
              className="text-decoration-none custom-link">
              <div className="card-img-container">
                <img
                  src={product.images[0]}
                  className="card-img"
                  alt={product.title}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title mb-2">{product.title}</h3>
                <p className="card-text">{product.description}</p>
                <div className="card-price-stock">
                  <h4 className="card-text custom-h4">{product.price}$</h4>
                  <h4 className="card-text custom-h4">
                    {product.stock} in stock
                  </h4>
                </div>
              </div>
            </Link>
            {product.stock > 0 ? (
              <a href="#" className="btn custom-btn mb-3">
                Add to basket
              </a>
            ) : (
              <button className="btn btn-secondary disabled mb-3">
                Out of stock
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
