import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Header from "../../components/Header/Header";

function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useFetch(
    `https://dummyjson.com/products/${productId}`
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header />
      {data ? (
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <img
                src={data.images[0]}
                className="img-fluid"
                alt={data.title}
              />
            </div>
            <div className="col-md-6">
              <h1>{data.title}</h1>
              <h2>{data.brand}</h2>
              <p>{data.description}</p>
              <h3>{data.price}$</h3>
              <h4>{data.stock} in stock</h4>
              <button className="btn custom-btn">Add to basket</button>
            </div>
          </div>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
      ) : (
        <p>No product details available.</p>
      )}
    </>
  );
}

export default ProductPage;
