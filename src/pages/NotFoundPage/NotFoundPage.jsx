import { Link, useRouteError } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../../components/Header/Header";

function NotFoundPage() {
  const error = useRouteError();

  return (
    <>
      <Header />
      <div className="container mt-5">
        {error?.message ? (
          <p className="mb-4">{error.message}.</p>
        ) : (
          "404 Page not found."
        )}
        <div className="mt-4">
          <Link className="btn btn-secondary" to="/">
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
