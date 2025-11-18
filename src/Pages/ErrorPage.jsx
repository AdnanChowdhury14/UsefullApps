import React from "react";
import { useRouteError, Link } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import errorIcon from "../assets/error-404.png";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />

      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        
        <img
          src={errorIcon}
          alt=""
          className="w-72 md:w-96 mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Oops, page not found!
        </h1>
        <p className="mb-6">
          The page you are looking for is not available.
        </p>

        
        <Link
          to="/"
          className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-purple-700 transition"
        >
          Go Back!
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default ErrorPage;
