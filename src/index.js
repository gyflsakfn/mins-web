import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./component/NotFound";

const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute"));
const NewPortfolio = lazy(() => import("./pages/NewPortfolio"));
const Home = lazy(() => import("./pages/Home"));

// TODO: 모든 이미지 API 통신으로 로드 함.

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      {
        path: "/newPortfolio",
        element: (
          <ProtectedRoute requireAdmin>
            <NewPortfolio />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
