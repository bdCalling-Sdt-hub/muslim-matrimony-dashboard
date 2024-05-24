import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Signup from "../pages/Signin/Signin";
import FreeUsers from "../pages/Dashboard/Users/FreeUsers";
import SubAdmin from "../pages/Dashboard/Users/SubAdmin";
import SigninOtp from "../pages/ForgetPassword/SigninOTP/SigninOtp";
import Email from "../pages/ForgetPassword/Email/Email";
import ResetPassword from "../pages/ForgetPassword/ResetPassword/ResetPassword";
import Settings from "../pages/Settings/Settings";
import SettingPage from "../pages/Settings/SettingsPage/SettingPage";
import TodayIncome from "../pages/Dashboard/Incomes/TodayIncome";
import Notification from "../pages/Notification/Notification";
import Profile from "../pages/Profile/Profile";
import SubscriptionPlan from "../pages/Dashboard/SubscriptionPlan/SubscriptionPlan";
import Categories from "../pages/Dashboard/Categories/Categories";
import CategoriesDetails from "../pages/Dashboard/Categories/CategoriesDetails";
import QuestionDiscussion from "../pages/Dashboard/Categories/QuestionDiscussion";
import Shop from "../pages/Dashboard/Shop/Shop";
import Event from "../pages/Dashboard/Event/Event";
import Wallet from "../pages/Dashboard/Wallet/Wallet";
import CreateUser from "../pages/Dashboard/Users/CreateUser";
import UserDetails from "../pages/Dashboard/Users/UserDetails";
import UserEdit from "../pages/Dashboard/Users/UserEdit";
import Membership from "../pages/Dashboard/Membership/Membership";
import PrivateRoute from "./privateRoute";
import AdminRoute from "./adminRoute";
import CreateSubAdmin from "../pages/Dashboard/Users/CreateSubAdmin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/sub-admin",
        element: <AdminRoute><SubAdmin /></AdminRoute>,
      },
      {
        path: "/users",
        element: <FreeUsers></FreeUsers>,
      },
      {
        path: "/users/create-user",
        element: <CreateUser />,
      },
      {
        path: "/users/create-sub-admin",
        element: <CreateSubAdmin />,
      },
      {
        path: "/users/user-details/:id",
        element: <UserDetails />,
      },
      {
        path: "/users/edit/:id",
        element: <UserEdit />,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/event",
        element: <Event></Event>,
      },
      {
        path: "/earnings",
        element: <TodayIncome></TodayIncome>,
      },
      {
        path: "/membership",
        element: <Membership></Membership>,
      },
      {
        path: "/wallet",
        element: <Wallet></Wallet>,
      },
      {
        path: "/subscription-plan",
        element: <SubscriptionPlan></SubscriptionPlan>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/categorydetails",
        element: <CategoriesDetails></CategoriesDetails>,
      },
      {
        path: "/question/:id",
        element: <QuestionDiscussion></QuestionDiscussion>,
      },
      {
        path: "/settings",
        element: <Settings></Settings>,
      },
      {
        path: "/settings/:dynamic",
        element: <SettingPage></SettingPage>,
      },
      {
        path: "/notifications",
        element: <Notification></Notification>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signup></Signup>,
  },
  {
    path: "/otp",
    element: <SigninOtp></SigninOtp>,
  },
  {
    path: "/email",
    element: <Email></Email>,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword></ResetPassword>,
  },
]);
