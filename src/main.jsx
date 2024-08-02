import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CategoryPage from './pages/CategoryPage/CategoryPage'
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/page/1" />,
  },
  {
    path: "/page/:pageNumber",
    element: <App />,
  },
  {
    path: "/category/:categoryName",
    element: <CategoryPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
