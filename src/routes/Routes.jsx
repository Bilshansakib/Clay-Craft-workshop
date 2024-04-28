import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import AllArtAndCraft from "../pages/AllArtAndCraft";
import AddCraftItem from "../pages/AddCraftItem";
import MyArtAndCraftList from "../pages/MyArtAndCraftList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/Error_page";
import HomePage from "../pages/HomePage";
import Users from "../components/Users/Users";
import ViewCraftDetails from "../components/ViewCraftDetails.jsx/ViewCraftDetails";
import ViewDetails from "../components/ViewDetails/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("http://localhost:5000/craft"),
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch("http://localhost:5000/craft"),
      },
      {
        path: "/allArtAndCraftItem",
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader: () => fetch("http://localhost:5000/craft"),
      },
      {
        path: "/addCraftItem",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/myArtAndCraftList",
        element: <MyArtAndCraftList></MyArtAndCraftList>,
        loader: () => fetch("http://localhost:5000/craft"),
      },
      {
        path: "/crafts/:id",
        element: <ViewCraftDetails></ViewCraftDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:5000/user"),
  },
]);
export default router;
