import React from "react";
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
    card_profile: card_profile3,
    card_star: card_star1,
    card_icon: card_icon1,
    btn_icon: btn_icon1,
  },
];

const Marketplace = () => {
  return (
    <div className="font-Syne">
      <Hero />

      <div className="max-w-[1520px] mx-auto my-20">

        <div className="flex items-center justify-between">
          <div className="text-[#071431] text-5xl font-semibold">
            {" "}
            <p>Your market for solar panels</p>{" "}
          </div>

          <div className=" relative">
            <div className="bg-[#F5F6F7] rounded-3xl px-10 py-3 outline-1 outline-[#d6d8da] w-100">
              {" "}
              <input
                className="focus:outline-none w-75"
                type="search"
                placeholder="Search for product"
              />
            </div>
            <div className="absolute top-4 right-5">
              {" "}
              <img src={search_icon} />{" "}
            </div>
          </div>
        </div>

        <div className="flex gap-20 mt-30">
        <div className="w-3/12 flex flex-col gap-10">
          <div>
            <div >
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

          <div>
            <div>
              <p className="text-[#071431] text-3xl pb-3 font-semibold border-b-2 border-[#EBECEF]">
                Filter by
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-5">
            <div className="pl-7">
              <p className="text-[#071431] text-lg font-bold">Product Type</p>
            </div>

            <div>
              <ul className="text-[#6A7283] text-lg flex flex-col gap-2 pl-10">
                <li className="flex items-center gap-2">
                  {" "}
                  <input className="w-5 h-5" type="checkbox"></input>{" "}
                  <p>JA Solar</p>
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <input className="w-5 h-5" type="checkbox"></input>{" "}
                  <p>SMA Products</p>
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <input className="w-5 h-5" type="checkbox"></input>{" "}
                  <p>SMA Products</p>
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <input className="w-5 h-5" type="checkbox"></input>{" "}
                  <p>Sunpower Products</p>
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <input className="w-5 h-5" type="checkbox"></input>{" "}
                  <p>Sunpower Products</p>
                </li>
              </ul>
            </div>
            </div>
          </div>

          <div>
            <div>
              <p className="text-[#071431] text-3xl pb-3 font-semibold border-b-2 border-[#EBECEF]">
                Price Range
              </p>
            </div>
            <div className="mt-3">
              <p className="text-lg">
                <span className="text-[#798090]">Price:</span> $100 - $650,000
              </p>
            </div>

            <div className="mt-2">
            <Slider className="" defaultValue={[0]} max={1000} step={5}  />
            </div>


          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 w-9/12">
          {cardElement.map((data) => (
            <Card data={data} />
          ))}
        </div>

        </div>



      </div>

      <JoinPage/>
    </div>
  );
};

export default Marketplace;
