import React, { useState } from "react";
import useApps from "../hooks/useApps";
import { Link } from "react-router";
import AppCard from "../Components/AppCard";
import AppNotFoundImage from '../assets/App-Error.png'

const AllApps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");
  // console.log(search);
  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;
    console.log(searchedApps);

  return (
    <div>
      <div className="mt-10 text-center">
        <h1 className="font-bold  text-4xl mb-10">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between p-4 mt-3">
        <p>({searchedApps.length}) Apps found</p>
        <label htmlFor="" className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="seach Apps"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
  {searchedApps.length === 0 ? (
    <p className="text-center col-span-full  text-lg font-bold">
      No apps found
    </p>
  ) : (
    searchedApps.map((app) => (
      <AppCard app={app} key={app.id} />
    ))
  )}
</div>

     
    </div>
  );
};

export default AllApps;
