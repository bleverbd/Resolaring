import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import call_icon from "../assets/call_icon.svg";
import search_icon from "../assets/search_icon.svg";
import login_icon from "../assets/login_icon.svg";

import Btn from "./Btn";
import Language from "./Language";
import ShoppingCard from "./ShoppingCard";
import Logo from "./Logo";

const navelemet = [
  { path: "/", label: "Home" },
  { path: "/resolaring", label: "Why Resolaring?" },
  { path: "/process", label: "The Recycling Process" },
  { path: "/marketplace", label: "Marketplace" },
  { path: "/gallery", label: "Shared Gallery" },
];

const NavItem = () => {
  return (
    <ul className="flex gap-7">
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
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="font-Syne">
     <nav className="" >
        {/* NavBar Upper */}
        <div className={`${
          isFixed ? "fixed top-0 left-0 w-full bg-[#071431] z-50" : "w-full bg-[#071431]"
        } transition-all duration-300`}>
          <div className="max-w-[1520px] mx-auto my-0 ">
            <div className="flex justify-between items-center py-6 px-5">
              {/* Left Silde */}

              <div className="flex items-center gap-5">
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
                  <Language />
                </div>

                {/* card_Bar */}
                <div className="cursor-pointer">
                  <NavLink to="/cart">
                    {" "}
                    <ShoppingCard TextColor="text-white" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nav Bar Down */}
        <div className="max-w-[1520px] my-0 mx-auto">
          <div className="py-4 px-5 flex  items-center gap-15 cursor-pointer">
            <div>
              <Logo />
            </div>
            <div>
              <NavItem />
            </div>

            <div className="flex items-center gap-7">
              <div>
                <Btn buttonTitle={"Become a Seller"} />
              </div>

              <div className=" rounded-4xl py-3 px-5 outline duration-300 ease-in-out hover:bg-bg-btn-color hover:outline-none">
               <NavLink to="/login"><button className="flex items-center justify-center gap-1 cursor-pointer ">
                  <p className="text-[#071431]"> Login </p>
                  <img
                    className="w-[18px] h-[18px]"
                    src={login_icon}
                    alt="login_icon"
                  />
                </button> </NavLink> 
              </div>
              <div className="flex items-center">
                <p className="text-bg-btn-color underline">Book Online</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
