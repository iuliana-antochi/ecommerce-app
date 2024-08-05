import "./ProductCard.css";

function ProductCard({ products }) {
  if (!products || products.length === 0)
    return <div className="mb-4">No products available for this category.</div>;

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card h-100">
            <div className="card-img-container">
              <img
                src={product.images[0] || product.images[1]}
                className="card-img"
                alt={product.title}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <div className="card-price-basket">
                <h4 className="card-text custom-h3">{product.price}$</h4>
                <a href="#" className="btn custom-btn">
                  Add to basket
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
