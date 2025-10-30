import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthLayout from "../components/AuthLayout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: (
          <span className="loading loading-dots loading-md"></span>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news",
    element: <div>News Layout</div>,
  },
  {
    path: "/*",
    element: <div>error 404</div>,
  },
  {
    path: "/news/:id",
    element: <NewsDetails></NewsDetails>,
  },
]);

export default router;
