import React from "react";
import bannerLogo from "../assets/hero.png";

import apple from "../assets/OIP.webp";
import googleIcon from "../assets/google.png";
const Banner = () => {
  return (
    <div className="w-full bg-white pt-20 ">
      <div className=" mx-auto text-center px-4">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">We Build</h1>{" "}
          <br />
          <h2 className="text-4xl  font-extrabold mt-1">
            <span className="text-purple-600">Productive</span>
            <span className="text-gray-900"> Apps</span>
          </h2>
        </div>
        <div className="text-gray-500 mt-5 mx-auto max-w-2xl">
          <p>
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <div className="flex gap-2">
        <img src={googleIcon} alt="" width="30px"/>
        <a href="Https://play.google.com" target="_blank">
          <button className="btn btn-ghost">Google Play</button>
        </a>
        </div>
        <div className="flex gap-2">
        <img src={apple} alt="" width="30px"/>
        <a href="Https://apps.apple.com" target="_blank">
        <button className="btn btn-ghost">App Store</button>
        </a>
        </div>
        
      </div>
      <div className="flex justify-center mt-5">
        <img
          src={bannerLogo}
          alt=""
          className="w-[350px] md:w-[500px] drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Banner;
