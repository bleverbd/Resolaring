import React from "react";
import marketplace_banner from "../../assets/marketplace_banner_img.jpg";
import Btn from "../../components/Btn";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    // Hero Start
    <div className="font-Syne relative w-full">
      {/* Background Section */}
      <div className="relative overflow-hidden">
        {/* Bg- Image */}
        <div>
          <img
            className="w-full h-[507px] object-cover"
            src={marketplace_banner}
            alt="marketplace_banner"
          />
        </div>
        {/* Background Gradient */}
        <div
          style={{
            background: `linear-gradient(90deg, #071431 -16.3%, rgba(21, 61, 151, 0.00) 69.32%)`,
          }}
          className=" absolute top-0  left-0 w-full h-[507px] "
        ></div>
      </div>

      {/* Titile Section  */}

      <div className="absolute top-25 sm:left-2 lg:left-30 max-w-[1720px] mx-auto my-0">
        <div className="flex flex-col gap-5 px-5">
          {/* Home and Pannel */}
          <div>
            <p className="text-white text-lg ">
              {" "}
              <span className="hover:underline duration-300 cursor-pointer">
                {" "}
                Home{" "}
              </span>{" "}
              <span> > </span> <span> Panels </span>{" "}
            </p>
          </div>
          {/* Tittle */}
          <div className="flex flex-col gap-3 ">
            <div>
              <p className="text-white  w-full text-3xl font-bold  md:text-5xl xl:text-6xl   xl:w-7/12  ">
                Your market for solar panels
              </p>
            </div>
            {/* Descripotion */}
            <div>
              <p className="text-white w-full text-xs md:text-sm xl:text-lg xl:w-8/12">
                Exploring Market Opportunities, Industry Trends, and Growing
                Demand for Solar Panels in the Renewable Energy Sector
              </p>
            </div>
          </div>
          {/* Btn */}
          <div className="mt-5 w-55">
            <Btn buttonTitle={"List your Product"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
