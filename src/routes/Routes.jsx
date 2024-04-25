import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import AllArtAndCraft from "../pages/AllArtAndCraft";
import AddCraftItem from "../pages/AddCraftItem";
import MyArtAndCraftList from "../pages/MyArtAndCraftList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/Error_page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/allArtAndCraftItem",
    element: <AllArtAndCraft></AllArtAndCraft>,
  },
  {
    path: "/addCraftItem",
    element: <AddCraftItem></AddCraftItem>,
  },
  {
    path: "/myArtAndCraftList",
    element: <MyArtAndCraftList></MyArtAndCraftList>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
export default router;
