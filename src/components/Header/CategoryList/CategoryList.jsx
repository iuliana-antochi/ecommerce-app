import useSWR from "swr";
import { Link } from "react-router-dom";
import './CategoryList.css'

function CategoryList() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/products/category-list",
    fetcher
  );

  if (error) return <div>Failed to fetch categories.</div>;
  if (isLoading) return <h2>Loading...</h2>;

  const kebabToCapitalized = (kebabStr) => {
    return kebabStr
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <ul
      className="dropdown-menu scrollable-dropdown"
      aria-labelledby="navbarDropdown">
      {data.map((category, index) => (
        <li key={index} className="custom-dropdown-item dropdown-item">
          <Link to={`/category/${category}`} className="custom-category-link">
            {kebabToCapitalized(category)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
