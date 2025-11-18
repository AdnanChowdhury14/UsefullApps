import React, { useEffect, useState } from "react";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";

const InstalledApps = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("installed"));
    if (saved) {
      setInstalledApps(saved);
    }
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installed", JSON.stringify(updated));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        Installed apps: {installedApps.length}
      </h1>

      <div className="space-y-4">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between shadow-md rounded-xl p-4 border"
          >
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                alt={app.title}
                className="w-16 h-16 rounded-md bg-gray-200 r"
              />
              <div>
                <h2 className="font-semibold text-lg">{app.title}</h2>

                <div className="flex items-center gap-4 ">
                  <span className="flex gap-2 text-green-500">
                    <img src={downloadIcon} alt="" width="18px" />
                    {app.downloads}M
                  </span>
                  <span className="flex gap-2 text-yellow-600">
                    <img src={ratingIcon} alt="" width="18px" />
                    {app.ratingAvg}
                  </span>
                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 ">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
