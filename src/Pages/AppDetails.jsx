import React from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  // console.log(apps);
  const app = apps.find((p) => String(p.id) === id);
  console.log(app);
  if (loading) return <p>Loading ...</p>;
  const { title, image, downloads, ratingAvg } = app;
  return (
    <div className="card bg-base-100 border shadow-sm hover:scale-103 cursor-pointer">
      <figure className="h-50 overflow-hidden">
        <img className="w-full object-cover" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <div className="flex justify-between"></div>
      </div>
    </div>
  );
};

export default AppDetails;
