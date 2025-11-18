import React, { useEffect, useState } from "react";

const InstalledApps = () => {
  const [installedApps, setIsInstalledApps] = useState([])
  useEffect(() => {
    const savedApps =JSON.parse(localStorage.getItem('installed'))
    if (savedApps){
      setIsInstalledApps(savedApps)
    } 
  })
  return (
    <div>
      <h1>installed apps : {installedApps.length}</h1>
    </div>
  );
};

export default InstalledApps;
