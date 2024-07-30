import useSWR from "swr";

function CategoryList() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/products/category-list",
    fetcher
  );

  const kebabToCapitalized = (kebabStr) => {
    return kebabStr
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (error) return <div>Failed to fetch categories.</div>;
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <ul className="list-unstyled">
      {data.map((category, index) => (
        <li
          key={index}
          className="dropdown-item">
          {kebabToCapitalized(category)}
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
