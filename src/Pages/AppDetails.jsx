import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const [isInstalled, setIsInstalled] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("installed")) || [];
    return saved.some((p) => p.id === Number(id));
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading app.</p>;

  const app = apps.find((p) => String(p.id) === id);
  if (!app) return <p>No app found.</p>;

  const {
    title,
    image,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
  } = app;

  const addToLocalStorage = () => {
    const existingList = JSON.parse(localStorage.getItem("installed"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === app.id);
      if (isDuplicate) return alert("the app is already installed");
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("installed", JSON.stringify(updatedList));
    setIsInstalled(true);
    toast.success("App installed successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className=" rounded-lg p-6 flex gap-6 items-center">
        <img src={image} alt={title} className="w-40 h-40  rounded-xl" />

        <div className="flex-1">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-500 mb-4">
            Developed by <span className="text-purple-500">{companyName}</span>
          </p>

          <div className="grid grid-cols-3 gap-2 text-center ">
            <div className="flex flex-col items-center text-center">
              <img src={downloadIcon} alt="" width="20px" />
              <p className="text-sm">Downloads</p>
              <p className="text-green-600 font-bold text-xl">
                {downloads.toLocaleString()}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={ratingIcon} alt="" width="20px" />
              <p className="text-sm">Average Ratings</p>
              <p className="text-yellow-600 font-bold text-xl">{ratingAvg}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={reviewIcon} alt="" width="20px" />
              <p className="text-gray-500 text-sm">Total Reviews</p>
              <p className="text-purple-600 font-bold text-xl">
                {Math.round(reviews / 1000)}K
              </p>
            </div>
          </div>

          <button
            onClick={addToLocalStorage}
            disabled={isInstalled}
            className={`mt-5 px-6 py-2 rounded-md font-semibold text-white 
    ${isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-green-500"}`}
          >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Ratings</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={ratings}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Bar dataKey="count" fill="#f97316" />{" "}
            {/* orange-ish like screenshot */}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6  ">
        <h1 className="font-bold text-2xl mb-2">Description:</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
