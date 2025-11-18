import React from "react";
import Banner from "../Components/Banner";
import Stats from "../Components/Stats";
import { Link, useLoaderData } from "react-router";
import AppCard from "../Components/AppCard";
import useApps from "../hooks/useApps";

const Home = () => {
//   const appsData = useLoaderData();
const {apps, loading, error} = useApps();

  const homePageData = apps.slice(0, 8);
  // console.log(appsData);

  


  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <div className="mt-10 text-center">
        <h1 className="font-bold  text-4xl mb-10">Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {homePageData.map((app) => (
          <AppCard app={app} key={app.id}></AppCard>
        ))}
      </div>
      <div className="mt-8 mb-10 mx-auto text-center ">
        <Link
          className="btn bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
          to="/allApps"
        >
          Show all
        </Link>
      </div>
    </div>
  );
};

export default Home;
