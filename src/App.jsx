import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Header from "./components/Header/Header";
import ProductCards from "./components/ProductCards/ProductCards";
import useFetch from "./hooks/useFetch";
import { useParams } from "react-router-dom";
import PaginationButtons from "./components/Pagination/PaginationButtons/PaginationButtons";
import shuffleArray from "./utils/shuffleArray";

const itemsPerPage = 12;

const isPositiveNumber = (str) => {
  const num = parseInt(str);
  return !isNaN(num) && num > 0;
};

function App() {
  const { pageNumber } = useParams();

  if (!isPositiveNumber(pageNumber)) {
    throw new Error("Page not in range");
  }

  const currentPage = parseInt(pageNumber, 10) || 1;
  const skip = (currentPage - 1) * itemsPerPage;

  const { data, isLoading, error } = useFetch(
    `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`
  );

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <div>Failed to fetch products.</div>;

  if (!data || !data.products) return <div>No products available.</div>;

  shuffleArray(data.products);

  const totalPages = Math.ceil(data.total / itemsPerPage);

  return (
    <>
      <Header />
      <ProductCards products={data.products} />
      <PaginationButtons currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}

export default App;
