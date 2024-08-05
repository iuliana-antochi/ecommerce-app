import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/page/1" />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/page/:pageNumber",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/category/:categoryName",
    element: <CategoryPage />,
    errorElement: <NotFoundPage />,
  },
  { path: "*", element: <NotFoundPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
