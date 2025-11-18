import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import router from "./Routes/Routes";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* data mode router provider */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
