import React, { useState } from "react";
import Hero from "./Hero";
import Card from "../../components/Card";

import card_profile1 from "../../assets/card_profile1.png";
import card_bd1 from "../../assets/card_bd_1.png";
import card_profile2 from "../../assets/card_profile2.png";
import card_bd2 from "../../assets/card_bd_2.png";
import card_profile3 from "../../assets/card_profile3.png";
import card_bd3 from "../../assets/card_bd_3.png";
import card_profile4 from "../../assets/card_profile1.png";
import card_bd4 from "../../assets/card_bd_4.png";
import card_star1 from "../../assets/card_icon2.svg";
import card_icon1 from "../../assets/card_icon1.svg";
import btn_icon1 from "../../assets/btn_icon.svg";
import search_icon from "../../assets/search_icon.svg";

import { Slider } from "@/components/ui/slider.jsx";
import JoinPage from "./JoinPage";
import ShortBySelector from "@/components/ShortBySelector";

const cardElement = [
  {
    card_bd: card_bd1,
    card_profile: card_profile1,
    card_star: card_star1,
    card_icon: card_icon1,
    btn_icon: btn_icon1,
  },
  {
    card_bd: card_bd2,
    card_profile: card_profile2,
    card_star: card_star1,
    card_icon: card_icon1,
    btn_icon: btn_icon1,
  },
  {
    card_bd: card_bd3,
    card_profile: card_profile3,
    card_star: card_star1,
    card_icon: card_icon1,
    btn_icon: btn_icon1,
  },
  {
    card_bd: card_bd4,
    card_profile: card_profile3,
    card_star: card_star1,
    card_icon: card_icon1,
    btn_icon: btn_icon1,
  },
  {
    card_bd: card_bd1,
    card_profile: card_profile2,
    card_star: card_star1,
    card_icon: card_icon1,
    btn_icon: btn_icon1,
  },

  {
    card_bd: card_bd3,
    card_profile: card_profile1,
    card_star: card_star1,
    card_icon: card_icon1,
    btn_icon: btn_icon1,
  },
  {
    card_bd: card_bd2,
    card_profile: card_profile2,
    card_star: card_star1,
    card_icon: card_icon1,
    btn_icon: btn_icon1,
  },

  {
    card_bd: card_bd4,
    card_profile: card_profile4,
    card_star: card_star1,
    card_icon: card_icon1,
    btn_icon: btn_icon1,
  },
];

const Marketplace = () => {
  const [count, setCount] = useState(10);
  return (
    <div className="font-Syne">
      {/* Hero Section */}
      <Hero />

      {/* Body Start  */}
      <div className="max-w-[1520px] mx-auto my-20">
        <div className="sm:flex sm:items-center sm:justify-between px-2">
          {/* Card Title */}
          <div className="text-[#071431] text-3xl sm:text-5xl font-semibold">
            {" "}
            <p>Your market for solar panels</p>{" "}
          </div>

          {/* Search Item */}
          <div className=" relative mt-5">
            {/* Input  */}
            <div className="bg-[#F5F6F7] rounded-3xl px-5 py-3 outline-1 outline-[#d6d8da] sm:w-100 w-full">
              {" "}
              <input
                className="focus:outline-none w-80"
                type="search"
                placeholder="Search for product"
              />
            </div>

            {/* Icon Search  */}
            <div className="absolute top-4 right-5">
              {" "}
              <img src={search_icon} />{" "}
            </div>
          </div>
        </div>

        {/* Title End */}

        {/* Body  */}
        <div className="flex mt-30">
          {/* Filter Start  */}
          <div className="w-5/24 pr-10 p flex flex-col gap-10">
            {/* Browse by */}
            <div>
              <div>
                <p className="text-[#071431] text-3xl pb-3 font-semibold border-b-2 border-[#EBECEF]">
                  Browse by
                </p>
              </div>
              <div className="mt-5">
                <ul className="text-[#6A7283] text-lg flex flex-col gap-2 pl-7">
                  <li>All Products</li>
                  <li>Canadian Solar</li>
                  <li>JA Solar</li>
                  <li>Jinko Solar</li>
                  <li>SMA Products</li>
                  <li>Sunpower</li>
                </ul>
              </div>
            </div>

            {/* Filter by */}

            <div>
              <div>
                <p className="text-[#071431] text-3xl pb-3 font-semibold border-b-2 border-[#EBECEF]">
                  Filter by
                </p>
              </div>

              <div className="flex flex-col gap-5 mt-5">
                <div className="pl-7">
                  <p className="text-[#071431] text-lg font-bold">
                    Product Type
                  </p>
                </div>

                <div>
                  <ul className="text-[#6A7283] text-lg flex flex-col gap-2 pl-10">
                    <li className="flex items-center gap-3">
                      {" "}
                      <input
                        className="w-6 h-6 accent-bg-btn-color "
                        type="checkbox"
                      ></input>{" "}
                      <p>JA Solar</p>
                    </li>
                    <li className="flex items-center gap-2">
                      {" "}
                      <input
                        className="w-6 h-6 accent-bg-btn-color"
                        type="checkbox"
                      ></input>{" "}
                      <p>SMA Products</p>
                    </li>
                    <li className="flex items-center gap-2">
                      {" "}
                      <input
                        className="w-6 h-6 accent-bg-btn-color"
                        type="checkbox"
                      ></input>{" "}
                      <p>SMA Products</p>
                    </li>
                    <li className="flex items-center gap-2">
                      {" "}
                      <input
                        className="w-6 h-6 accent-bg-btn-color "
                        type="checkbox"
                      ></input>{" "}
                      <p>Sunpower Products</p>
                    </li>
                    <li className="flex items-center gap-2">
                      {" "}
                      <input
                        className="w-6 h-6 accent-bg-btn-color"
                        type="checkbox"
                      ></input>{" "}
                      <p>Sunpower Products</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Price Range */}

            <div>
              <div>
                <p className="text-[#071431] text-3xl pb-3 font-semibold border-b-2 border-[#EBECEF]">
                  Price Range
                </p>
              </div>
              <div className="mt-3">
                <p className="text-lg">
                  <span className="text-[#798090]">Price:</span> $100 -{" "}
                  <span>${count}</span>
                </p>
              </div>

              <div className="mt-2">
                <Slider
                  value={[count]}
                  onValueChange={(val) => setCount(val)}
                  max={650000}
                  min={100}
                  step={5}
                />
              </div>
            </div>
          </div>

          {/* Card Section */}
          <div className="w-19/24 px-5">
            {/* Card Drop Down */}
            <div className="mt-5 text-[#6A7283] items-center font-medium text-lg sm:flex sm:items-center sm:justify-between">
              <div>
                <p> 8 Products</p>
              </div>
              <div className="flex gap-2 items-center">
                <p>Sort by:</p> <ShortBySelector />
              </div>
            </div>

            {/* Card Start */}
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 mt-5 ">
              {cardElement.map((data) => (
                <Card data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <JoinPage />
    </div>
  );
};

export default Marketplace;
