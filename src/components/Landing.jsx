import React from "react";
import "../styles/Landing.css";
import left_img from "../assets/Hero_Image_left.webp";
import right_img from "../assets/Hero_Right_Image_Default-2022.webp";

const Landing = () => {
  return (
      <>
        <div className="main-component flex justify-between pt-24 min-h-screen relative">
          <div className="left-image flex">
            <img className="max-md:h-6 max-md:w-8" src={left_img} alt="left-image" />
          </div>
          <div className="main-content flex-col text-center">
            <h2 className="text-6xl font-semibold">Make it your year</h2>
            <h2 className="text-6xl font-semibold">with Headspace</h2>
            <div className="flex bg-yellow-400 rounded-xl px-28 py-4 mt-10 text-center">
              <div className="flex-col">
                <h1 className="text-2xl">Free for 14 days, then 1499/year</h1>
                <p className="">124.92 per month, billed annually</p>
              </div>
            </div>
            <div className="text-xs font-light text-gray-500 mt-5">
              <p>After your free trial, the annual subscription is ₹1499 INR and automatically renews each year.</p>
              <p>Are you a post-secondary or university student? Save 85%, with valid SheerID student verification, for our</p>
              <p>Student plan</p>
            </div>
            <button className="bg-blue-700 text-white text-lg rounded-full py-3 px-7 mt-9">Try for free</button>
          </div>
          <div className="right-image flex">
            <img src={right_img} alt="right-image" />
          </div>

          {/* Add the wave effect here */}
          <div className="custom-shape-divider-bottom-1728033850">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </>
  );
};

export default Landing;
