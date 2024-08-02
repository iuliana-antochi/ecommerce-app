import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Header from "../../components/Header/Header";
import ProductCards from "../../components/ProductCards/ProductCards";

function CategoryPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useFetch(
    `https://dummyjson.com/products/category/${categoryName}`
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      {data?.products ? (
        <ProductCards products={data.products} />
      ) : (
        <p>No products available for this category.</p>
      )}
      <button className="btn btn-secondary" onClick={handleGoBack}>
        Go back
      </button>
    </>
  );
}

export default CategoryPage;
