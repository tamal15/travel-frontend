import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UiKit from "../pages/UiKit/UiKit";
import LoginPage from "../Login/LoginPage";
 


import UserRoute from "./UserRoute";
import Home from "../pages/Home/Home";
import Dashboard from "../layout/Dashboard";
import AddProduct from "../pages/DashboardSideBar/AddProduct/AddProduct";
import UpdateProduct from "../pages/DashboardSideBar/AddProduct/UpdateProduct";
import ShowProduct from "../pages/DashboardSideBar/AddProduct/ShowProduct";
import DashboardHome from "../pages/DashboardSideBar/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:(<UserRoute>
        <Home />
        </UserRoute>  ),
      },
      
      
      {
        path: "/uikit",
        element: <UiKit />,
      },
    ],
  },
  {
    path: "/login",
    element: 
    <LoginPage />,
  },
  {
    path: "/dashboard",
    element: (
      <UserRoute>
        <Dashboard />
      </UserRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/update/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/dashboard/showproduct",
        element: <ShowProduct />,
      },
      

    
   
    
    ],
  },
]);
export default router;
