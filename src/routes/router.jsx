import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import NewsDetails from "../pages/NewsDetails/NewsDetails";

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
    element: <div>Authentication layout</div>,
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
