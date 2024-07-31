import "./ProductCard.css";
import useFetch from "../../../hooks/useFetch";
import shuffleArray from "../../../utils/shuffleArray";

function ProductCard() {
  const { data, error, isLoading } = useFetch(
    "https://dummyjson.com/products?limit=0"
  );

  if (error) return <div>Failed to fetch products.</div>;
  if (isLoading) return <h2>Loading...</h2>;

  if (!data || !data.products) return <div>No products available.</div>;

  shuffleArray(data.products);



  return (
    <div className="container">
      <div className="row">
        {data.products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <div className="card-img-container">
                <img
                  src={product.images[0]}
                  className="card-img"
                  alt={product.title}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <div className="card-price-basket">
                  <h3 className="card-text custom-h3">{product.price}$</h3>
                  <a href="#" className="btn custom-btn">
                    Add to basket
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
