import React, { useState } from "react";
import Logo from "./Logo";
import ShoppingCard from "./ShoppingCard";
import { RxHamburgerMenu } from "react-icons/rx";
import search_icon from "../assets/search_icon.svg";
import Btn from "./Btn";
import login_icon from "../assets/login_icon.svg";
import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { GrLanguage } from "react-icons/gr";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const navelemet = [
  { path: "/", label: "Home" },
  { path: "/resolaring", label: "Why Resolaring?" },
  { path: "/process", label: "The Recycling Process" },
  { path: "/marketplace", label: "Marketplace" },
  { path: "/gallery", label: "Shared Gallery" },
];

const NavItem = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col gap-4 text-xl">
      {navelemet.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-7" : ""
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const NavHamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="font-Syne">
      <div className="flex items-center justify-between px-5 py-4 shadow">
        <Logo />
        <div className="flex items-center gap-6">
          {/* Shooping Card */}
          <div>
            {" "}
            <ShoppingCard TextColor="text-black" />
          </div>

          {/* RxHamburgerMenu */}

          <div onClick={toggleMenu}>
            {isMenuOpen ? null : (
              <RxHamburgerMenu className="w-[32px] h-[32px]" />
            )}
          </div>

          {/* New Page Start */}

          <div
            className={`z-50 fixed top-0 right-0 w-full h-screen backdrop-blur-sm  transition-transform transform ${
              isMenuOpen ? "-translate-x-0" : "translate-x-full"
            } duration-300`}>
              
            <div className="absolute inset-0" onClick={toggleMenu}></div>
            
            <div className="bg-white w-[400px] h-screen absolute top-0 right-0 px-5 py-5 flex flex-col justify-between">
              {/* cross Icon */}
              <div className="flex flex-col gap-5">
                <div
                  className="cursor-pointer flex justify-end"
                  onClick={toggleMenu}
                >
                  <RxCross1 className="w-[28px] h-[28px]" />
                </div>

                {/* Logo */}
                <div>
                  <Logo />
                </div>

                {/* Search Icom */}

                <div className=" relative">
                  {/* Input  */}
                  <div className="bg-[#F5F6F7] rounded-3xl px-5 py-2 outline-1 outline-black w-full">
                    {" "}
                    <input
                      className="focus:outline-none w-80 text-2xl"
                      type="search"
                      placeholder="Search for product"
                    />
                  </div>

                  {/* Icon Search  */}
                  <div className="absolute top-3 right-5">
                    {" "}
                    <img src={search_icon} />{" "}
                  </div>
                </div>
                {/* Nav Item */}
                <div>
                  <NavItem toggleMenu={toggleMenu} />
                </div>

                {/*  Language */}
                <div className="flex gap-3 w-40 items-center border rounded-4xl py-2 px-6 ">
                  <div>
                    <GrLanguage className="w-[28px] h-[28px]" />
                  </div>
                  {/* <div> <p className='text-white font-Syne font-medium text-lg' >EN</p></div> */}
                  <div>
                    <Select defaultValue="v">
                      <SelectTrigger className="cursor-pointer text-xl border-none  focus-visible:ring-0">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="absolute -right-20 top-2">
                        <SelectItem
                          className="focus:bg-amber-100 focus:font-medium text-xl"
                          value="v"
                        >
                          C...
                        </SelectItem>
                        <SelectItem
                          className="focus:bg-amber-100 focus:font-medium text-xl"
                          value="st"
                        >
                          St...
                        </SelectItem>

                        <SelectItem
                          className="focus:bg-amber-100 focus:font-medium text-xl"
                          value="va"
                        >
                          Va...
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* BTN */}
              <div className="flex flex-col gap-3 ">
                {/* Btn */}
                <div className="">
                  <Btn
                    buttonTitle={"Become a Seller"}
                    textDecoration="text-2xl"
                  />
                </div>
                {/* Login Btn */}
                <div className=" flex justify-center text-2xl rounded-4xl py-2 outline outline-black duration-300 ease-in-out hover:bg-bg-btn-color hover:outline-none">
                  <button className="flex items-center gap-1 cursor-pointer ">
                    <p className="text-[#071431]"> Login </p>
                    <img
                      className="w-[24px] h-[24px]"
                      src={login_icon}
                      alt="login_icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHamburger;
