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
import CraftItemDetails from "../pages/CraftItemDetails";
import UpdateItem from "../pages/UpdateItem";
import SubCategoriesProduct from "../pages/SubCategoriesProduct";

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
        path: "/craft-item-details/:id",
        element: (
          <ProtectedRoute>
            <CraftItemDetails></CraftItemDetails>
          </ProtectedRoute>
        ),
      },
      {
        path: "/update-item/:id",
        element: (
          <ProtectedRoute>
            <UpdateItem></UpdateItem>
          </ProtectedRoute>
        ),
        loader: ({ params }) => fetch(`https://eco-craft-server.vercel.app/craft-item-details/${params.id}`),
      },
      {
        path: "/sub-category/:name",
        element: <SubCategoriesProduct></SubCategoriesProduct>,
        loader: ({ params }) => fetch(`https://eco-craft-server.vercel.app/sub-category/${params.name}`),
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
