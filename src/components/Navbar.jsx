import React from "react";
import { NavLink } from "react-router-dom";

import call_icon from "../assets/call_icon.svg";
import search_icon from "../assets/search_icon.svg";
import card_icon from "../assets/card_icon.svg";
import logo_icon from "../assets/logo_icon.svg";
import login_icon from "../assets/login_icon.svg";

import Btn from "./Btn";
import Language from "./Language";

const navelemet = [
  { path: "/", label: "Home" },
  { path: "/resolaring", label: "Why Resolaring?" },
  { path: "/process", label: "The Recycling Process" },
  { path: "/marketplace", label: "Marketplace" },
  { path: "/gallery", label: "Shared Gallery" },
];

const NavItem = () => {
  return (
    <ul className="flex gap-5">
      {navelemet.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-15" : ""
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  return (
    <header className="font-Syne">
      <nav>
        {/* NavBar Upper */}
        <div className="bg-[#071431] w-full">
          <div className="max-w-[1520px] my-0 mx-auto py-6 px-0  flex justify-between items-center">
            {/* Left Silde */}
            <div className="flex gap-5">
              {/* CallBar */}
              <div className="flex gap-3">
                <div className="w-[48px] h-[48px]">
                  <img src={call_icon} alt="Call_image" />
                </div>
                <div>
                  <p className="text-[#C1C4CC] ">Need help? </p>
                  <p className="text-white font-semibold text-xl">
                    +34618207554
                  </p>
                </div>
              </div>
              {/* Search Bar */}
              <div className="bg-white flex  items-center  rounded-4xl w-[400px] py-2 px-6 relative">
                <div>
                  {" "}
                  <label>
                    {" "}
                    <input
                      className="focus:outline-none w-[320px]"
                      placeholder="Search for Product"
                    />{" "}
                  </label>
                </div>
                <div className="absolute right-5">
                  {" "}
                  <img src={search_icon} alt="Search_Icon" />{" "}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex gap-7 items-center">
              {/* Language_Bar */}
             <div>
              <Language/>
             </div>

              {/* card_Bar */}
              <div className="flex gap-3 items-center">
                <div className="bg-white rounded-full w-[45px] h-[45px] pt-2 pl-1.5 relative">
                  {" "}
                  <img className="w-[28px] h-[28px]" src={card_icon} />
                  <div className="absolute bottom-7 left-7 bg-bg-btn-color rounded-full w-[24px]  h-[24px] pl-2 pb-2">
                    2
                  </div>
                </div>
                <div>
                  {" "}
                  <p className="text-white font-Syne font-semibold font-2xl">
                    $98.29
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nav Bar Down */}
        <div className="max-w-[1520px] my-0 mx-auto py-4 px-0 flex  items-center gap-20 cursor-pointer">
          <div>
            <div className="flex items-center gap-3">
              <div>
                {" "}
                <img src={logo_icon} alt="logo_Icon"></img>{" "}
              </div>
              <div>
                {" "}
                <p className="text-[#071431] text-3xl font-semibold">
                  Resolaring{" "}
                </p>{" "}
              </div>
            </div>
            <div>
              {" "}
              <p className="text-[#6A7283] text-xs">
                Recycling and installing panels for a better future
              </p>{" "}
            </div>
          </div>
          <div>
            <NavItem />
          </div>

          <div className="flex gap-8">
            <div>
              <Btn buttonTitle={"Become a Seller"} />
            </div>

            <div className="  rounded-4xl outline duration-300 ease-in-out hover:bg-bg-btn-color hover:outline-none">
              <button className="flex gap-2 pt-4 px-7 items-center cursor-pointer">
                <p className="text-[#071431]"> Login </p>
                <img src={login_icon} alt="login_icon" />
              </button>
            </div>
            <div className="flex items-center">
              <p className="text-bg-btn-color underline">Book Online</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
