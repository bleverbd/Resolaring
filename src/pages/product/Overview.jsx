import React from "react";
import logo from "../../assets/overview/logo.svg";
import overview from "../../assets/overview/overview_icon.svg";
import addlist from "../../assets/overview/add_icon.svg";
import managelist from "../../assets/overview/listing_icon.svg";
import orderlist from "../../assets/overview/order.svg";
import accoutsetting from "../../assets/overview/setting.svg";
import logout from "../../assets/overview/logout.svg";

const Overview = () => {
  return (
    <div className="font-Syne">
      <div className="w-[351px] bg-[#071431] h-screen text-white">

        <div className=" pt-[48px] px-[48px] pb-[73px] h-screen flex flex-col justify-between">

          <div>
          <div className="flex gap-2 items-center">
            <img src={logo} />
            <p className="text-3xl font-semibold "> Resolaring</p>
          </div>

          <div className="flex flex-col  gap-5 mt-10">
            <div className="flex gap-2 items-center cursor-pointer">
              <img src={overview} />
              <p className="text-lg font-medium "> Overview</p>
            </div>

            <div className="flex gap-2 items-center cursor-pointer">
              <img src={addlist} />
              <p className="text-lg font-medium "> Add New Listing</p>
            </div>

            <div className="flex gap-2 items-center cursor-pointer">
              <img src={managelist} />
              <p className="text-lg font-medium "> Manage Listings</p>
            </div>

            <div className="flex gap-2 items-center cursor-pointer">
              <img src={orderlist} />
              <p className="text-lg font-medium "> Order List</p>
            </div>

            <div className="flex gap-2 items-center cursor-pointer">
              <img src={accoutsetting} />
              <p className="text-lg font-medium "> Account Settings</p>
            </div>
          </div>
          </div>

          <div className="">
          <div className="flex gap-2 items-center cursor-pointer">
            <img src={logout} />
            <p className="text-lg font-medium "> Log out</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
