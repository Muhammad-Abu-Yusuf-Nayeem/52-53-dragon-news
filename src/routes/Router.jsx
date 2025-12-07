import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/news",
    element: <div className="font-bold text-2xl">News Page</div>,
  },
  {
    path: "/auth",
    element: <div className="font-bold text-2xl">login Page</div>,
  },
  {
    path: "*",
    element: <div className="font-bold text-5xl">Error</div>,
  },
]);

export default Router;
