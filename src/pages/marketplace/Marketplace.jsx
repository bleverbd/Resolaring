import React, { useState } from "react";
import Hero from "./Hero";
import Card from "../../components/Card";

import card_profile1 from "../../assets/card_profile1.png";
import card_profile2 from "../../assets/card_profile2.png";
import card_profile3 from "../../assets/card_profile3.png";
import card_profile4 from "../../assets/card_profile1.png";

import card_bd1 from "../../assets/card_bd_1.png";
import card_bd2 from "../../assets/card_bd_2.png";
import card_bd3 from "../../assets/card_bd_3.png";
import card_bd4 from "../../assets/card_bd_4.png";

// import card_star1 from "../../assets/card_icon2.svg";
// import card_icon1 from "../../assets/card_icon1.svg";
// import btn_icon1 from "../../assets/btn_icon.svg";

import search_icon from "../../assets/search_icon.svg";

import JoinPage from "./JoinPage";
import ShortBySelector from "@/components/ShortBySelector";
import Flitering from "@/components/Flitering";
import FilterBy from "@/components/FilterBy";

const cardElement = [
  {
    id: 1,
    card_bd: card_bd1,
    card_profile: card_profile1,
    price: 100,
    name: "JA Solar 360w",
    rating: "3.5 (152)",
  },
  {
    id: 2,
    card_bd: card_bd2,
    card_profile: card_profile2,
    price: 200,
    name: "Sunpower Solar 360w",
    rating: "4.5 (152)",
  },
  {
    id: 3,
    card_bd: card_bd3,
    card_profile: card_profile3,
    price: 300,
    name: "Wind Turbine 500w",
    rating: "2.5 (152)",
  },
  {
    id: 4,
    card_bd: card_bd4,
    card_profile: card_profile3,
    price: 400,
    name: "Solar Panel 400w",
    rating: "5.0 (152)",
  },
  {
    id: 5,
    card_bd: card_bd1,
    card_profile: card_profile2,
    price: 100,
    name: "JA Solar 360w",
    rating: "3.5 (152)",
  },

  {
    id: 6,
    card_bd: card_bd2,
    card_profile: card_profile1,
    price: 200,
    name: "Sunpower Solar 360w",
    rating: "4.5 (152)",
  },
  {
    id: 7,
    card_bd: card_bd3,
    card_profile: card_profile2,
    price: 300,
    name: "Wind Turbine 500w",
    rating: "2.5 (152)",
  },

  {
    id: 8,
    card_bd: card_bd4,
    card_profile: card_profile4,
    price: 400,
    name: "Solar Panel 400w",
    rating: "5.0 (152)",
  },
];

const Marketplace = () => {
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
        <div className="flex  gap-10 mt-30">
          {/* Filter Start  */}
          {/* <div className="lg:hidden">
                <NewComponet/>
          </div> */}
          <div className="hidden w-5/24 lg:block">
            <Flitering />
          </div>

          {/* Card Section */}
          <div className="lg:w-19/24 w-full px-5">
            <div className="lg:hidden">
              <FilterBy />
            </div>
            {/* Card Drop Down */}
            <div className="mt-5 text-[#6A7283] font-medium text-lg flex items-center justify-between ">
              <div>
                <p> 8 Products</p>
              </div>
              <div className="flex gap-2 items-center">
                <p>Sort by:</p> <ShortBySelector />
              </div>
            </div>

            {/* Card Start */}
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 mt-5 ">
             
              {cardElement.map((data,index) => (
                <Card key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <JoinPage />
      {/* <ViewProduct/> */}
    </div>
  );
};

export default Marketplace;
