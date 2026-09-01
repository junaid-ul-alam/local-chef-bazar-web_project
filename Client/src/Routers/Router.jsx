// import PrivateRoute from "./PrivateRoute";
// import MealDetails from "../pages/mealsDetails/MealDetails";
// import Home from "../pages/Home/Home";
// import OrderPage from "../pages/order/OrderPage";
// import DashboardLayout from "../layouts/DashboardLayout";
// import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
// import MyOrders from "../pages/Dashboard/MyOrders";
// import MyReviews from "../pages/Dashboard/MyReviews";
// import FavoriteMeals from "../pages/Dashboard/FavoriteMeals";
// import CreateMeal from "../pages/Dashboard/chef/CreateMeal";
// import MyMeals from "../pages/Dashboard/chef/MyMeals";
// import OrderRequests from "../pages/Dashboard/chef/OrderRequests";
// import ManageUsers from "../pages/Dashboard/admin/ManageUsers";
// import ManageRequests from "../pages/Dashboard/admin/ManageRequests";
// import Statistics from "../pages/Dashboard/admin/Statistics";
// import PaymentSuccess from "../pages/payment/PaymentSuccess";
// import Payment from "../pages/payment/Payment";
import Login from "../pages/login/Login";
import Register from "../pages/registration/Registration";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/error/ErrorPage";
import Meals from "../pages/meals/Meals";
import PrivateRoute from "./PrivateRouter";
import MealDetails from "../pages/mealsDetails/MealsDetails";
import OrderPage from "../pages/order/OrderPage";
import Payment from "../pages/payment/Payment";
import PaymentSuccess from "../pages/payment/PaymentSuccess";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import MyOrders from "../pages/Dashboard/MyOrders";
import MyReviews from "../pages/Dashboard/MyReviews";
import FavoriteMeals from "../pages/Dashboard/FavouriteMeals";
import CreateMeal from "../pages/Dashboard/chef/CreateMeal";
import MyMeals from "../pages/Dashboard/chef/MyMeals";
import OrderRequests from "../pages/Dashboard/chef/OrderRequests";
import ManageUsers from "../pages/Dashboard/admin/ManageUsers";
import ManageRequests from "../pages/Dashboard/admin/ManageRequests";
import Statistics from "../pages/Dashboard/admin/Statistics";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
   // ===== Main Layout =====
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/meals", element: <Meals /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },

      // Private Routes
      {
        path: "/meals/:id",
        element: (
          <PrivateRoute>
            <MealDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-success",
        element: (
          <PrivateRoute>
            <PaymentSuccess />
          </PrivateRoute>
        ),
      },
    ],
  },

  // ===== Dashboard Layout =====
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // ---- User Routes ----
      { path: "/dashboard/my-profile", element: <MyProfile /> },
      { path: "/dashboard/my-orders", element: <MyOrders /> },
      { path: "/dashboard/my-reviews", element: <MyReviews /> },
      { path: "/dashboard/favorite-meals", element: <FavoriteMeals /> },  // ← এটা

      // ---- Chef Routes  ----
      { path: "/dashboard/create-meal", element: <CreateMeal /> },
      { path: "/dashboard/my-meals", element: <MyMeals /> },
      { path: "/dashboard/order-requests", element: <OrderRequests /> },

      // ---- Admin Routes ----
      { path: "/dashboard/manage-users", element: <ManageUsers /> },
      { path: "/dashboard/manage-requests", element: <ManageRequests /> },
      { path: "/dashboard/statistics", element: <Statistics /> },
    ],
  },
]);