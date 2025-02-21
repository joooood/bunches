import React from "react";

import "./home.css";
import Navbar from "../components/navbar";

function Hero() {
  return (
    <div className="hero grid items-end justify-center w-screen h-screen">
      <picture>
        <img
          className="w-160"
          src="https://purepng.com/public/uploads/large/flowers-bouquet-zlj.png"
          alt=""
        />
      </picture>
    </div>
  );
}

function Home() {
  return (
    <div className="homepage w-screen h-screen bg-radial via-rose-100 to-rose-200">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
