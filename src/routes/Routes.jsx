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
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("https://prctice-1.vercel.app/craft"),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://prctice-1-qxcivg1gx-bilshans-projects.vercel.app//viewDetails/${params._id}`),
      },
      {
        path: "/allArtAndCraftItem",
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader: () => fetch("https://prctice-1.vercel.app/craft"),
      },
      {
        path: "/addCraftItem",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/myArtAndCraftList",
        element: (
          <PrivateRoute>
            <MyArtAndCraftList></MyArtAndCraftList>
          </PrivateRoute>
        ),
        loader: () => fetch("https://prctice-1.vercel.app/craft"),
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
    loader: () => fetch("https://prctice-1.vercel.app/user"),
  },
]);
export default router;
