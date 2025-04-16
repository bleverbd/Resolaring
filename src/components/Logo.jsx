import React from "react";
import logo_icon from "../assets/logo_icon.svg";

const Logo = () => {
  return (
    <div>
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
    </div>
  );
};

export default Logo;
