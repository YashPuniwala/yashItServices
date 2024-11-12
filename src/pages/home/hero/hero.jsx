import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero h-auto py-20 sm:h-[100vh] md:h-auto lg:h-[90vh] lg:py-0">
      <div class="curve"></div>
      <div className="container mx-auto px-0 md:px-12 flex flex-col lg:flex-row items-center justify-evenly h-full space-y-8 lg:space-y-0 lg:space-x-4">
        {/* Text Content */}
        <div className="max-w-lg text-center lg:text-left mt-14 lg:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-blue-200 mb-4 md:mb-8">
            IT Software & Design
          </h2>
          <h1 className="text-[3rem] sm:text-6xl md:text-6xl lg:text-6xl font-bold leading-tight">
            Creating a better{" "}
            <span className="text-blue-300">IT solutions</span>
          </h1>
          <button className="px-6 py-3 mt-6 sm:mt-12 bg-transparent rounded-full border text-white hover:bg-white hover:text-black text-xl">
            Start Now
          </button>
        </div>

        {/* Illustration */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <img
            src="/laptop.png"
            alt="IT Solutions Illustration"
            className="max-w-full lg:h-auto sm:h-[25rem] md:h-[22rem] bg-transparent" // Removed h-auto to prevent shrinking
          />
        </div>
      </div>

      {/* Wave SVG */}
      {/* <div className="wave">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
            style={{ stroke: "none", fill: "white" }}
          ></path>
        </svg>
      </div> */}
    </section>
  );
}

export default Hero;
