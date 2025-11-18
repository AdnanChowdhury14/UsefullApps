import React from "react";
import ratingIcon from '../assets/icon-ratings.png';
import downloadIcon from '../assets/icon-downloads.png';
import { Link } from "react-router";

const AppCard = ({ app }) => {
//   console.log(app);
  const { title, image, downloads, ratingAvg, id } = app;
  return (
    <Link to={`/appdetails/${id}`}>
      <div className="card bg-base-100 border shadow-sm hover:scale-103 cursor-pointer">
        <figure className="h-50 overflow-hidden">
          <img className="w-full object-cover" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>

          <div className="flex justify-between">
            <div className="card-actions flex items-center gap-1">
              <img src={downloadIcon} width="20" alt="" />
              <p>{downloads}</p>
            </div>

            <div className="card-actions flex items-center gap-1">
              <img src={ratingIcon} width="20" alt="" />
              <p>{ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;