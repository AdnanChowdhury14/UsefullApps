import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import errorIcon from "../assets/error-404.png"

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar></Navbar>
       <div>{error.message}</div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
