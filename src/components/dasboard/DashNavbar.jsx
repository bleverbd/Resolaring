import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/overview/logo.svg";
import overview from "../../assets/overview/overview_icon.svg";
import addlist from "../../assets/overview/add_icon.svg";
import managelist from "../../assets/overview/listing_icon.svg";
import orderlist from "../../assets/overview/order.svg";
import accoutsetting from "../../assets/overview/setting.svg";
import logout from "../../assets/overview/logout.svg";

const navelemet = [
  { path: "/dashboard", label: "Overview", src: overview },
  { path: "addnewlisting", label: "Add New Listing", src: addlist },
  {
    path: "managelisting",
    label: "Manage Listings",
    src: managelist,
  },
  { path: "orderlist", label: "Order List", src: orderlist },
  {
    path: "accountsetting",
    label: "Account Settings",
    src: accoutsetting,
  },
];

const DasNavItem = () => {
  return (
    <ul className="mt-8">
      {navelemet.map((item, index) => (
        <li key={index} className="mt-3">
          <NavLink
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              isActive ? "bg-[#B45C3D] flex " : ""
            }
          >
            <div className="flex gap-3 items-center px-[48px] py-4">
              {" "}
              <img src={item.src} />
              <p className="text-lg font-medium px-["> {item.label} </p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const DashNavbar = () => {
  return (
    <div className="font-Syne">
      <div className="w-[351px] bg-[#071431] h-screen text-white">
        <div className=" pt-[48px]  pb-[73px] h-screen flex flex-col justify-between">
          <div>
            <div className="flex gap-2 items-center px-[48px]">
              <img src={logo} />
              <p className="text-3xl font-semibold "> Resolaring</p>
            </div>

            <div className="flex flex-col  gap-5 mt-10">
              <div>
                <DasNavItem />
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex gap-2 items-center cursor-pointer px-[48px]">
              <img src={logout} />
              <p className="text-lg font-medium "> Log out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
