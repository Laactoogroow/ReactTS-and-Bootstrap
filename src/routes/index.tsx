import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import ErrorPage from "../pages/404";
import Dashboard from "../pages/dashboard";
import ProductLayout from "../layout/ProductLayouts/ProductLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/product",
    element: <ProductLayout />,
  },
]);

const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
