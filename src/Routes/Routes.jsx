import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import InstalledApps from "../Pages/InstalledApps";
import AppDetails from "../Pages/AppDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader : () => fetch('/appsData.json'),
      },
      {
        path: "/allApps",
        element: <AllApps></AllApps>,
      },
      {
        path: "/installedApps",
        element: <InstalledApps></InstalledApps>,
      },
      {
        path : "/appdetails/:id",
        element : <AppDetails></AppDetails>
      }
    ],
  },
  // {
  //   path: "*",
  //   element: <ErrorPage></ErrorPage>
  // },

  
]);

export default router;
