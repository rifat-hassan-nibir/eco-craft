import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AllArtAndCraftItems from "../pages/AllArtAndCraftItems";
import AddCraftItem from "../pages/AddCraftItem";
import MyArtAndCraftList from "../pages/MyArtAndCraftList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/all-art-and-craft-items",
        element: <AllArtAndCraftItems></AllArtAndCraftItems>,
      },
      {
        path: "/add-craft-item",
        element: (
          <ProtectedRoute>
            <AddCraftItem></AddCraftItem>
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-art-and-craft-list",
        element: (
          <ProtectedRoute>
            <MyArtAndCraftList></MyArtAndCraftList>
          </ProtectedRoute>
        ),
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
]);

export default Routes;
