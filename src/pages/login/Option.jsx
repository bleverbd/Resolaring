import React from "react";
import loginbg from "../../assets/loginbg.png";
import { NavLink } from "react-router-dom";

const Option = () => {
  return (
    <div>
      <div className=" max-w-[1520px] my-0 mx-auto flex gap-10 items-center px-30">
        <div className="w-1/2" >
          <div className="flex flex-col gap-8 ">
            <div>
              <p className="text-[##071431] text-5xl font-semibold">
                {" "}
                Choose account
              </p>
            </div>
            <div className="text-[#071431] font-medium flex flex-col gap-3">
              <NavLink to="/buyer">
              <button className="bg-[#EBECEF] w-full rounded-2xl hover:scale-105 duration-300 cursor-pointer">
                {" "}
                <p className="my-3">Buyer</p>{" "}
              </button>
              </NavLink>
              <NavLink to="/seller">
              <button className="bg-bg-btn-color  rounded-2xl w-full hover:scale-105 duration-300 cursor-pointer">
                {" "}
                <p className="my-3"> Seller</p>{" "}
              </button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="overflow-hidden w-1/2">
          <img
            className="w-[707px] h-[805px] object-cover rounded-xl"
            src={loginbg}
          />
        </div>
      </div>
    </div>
  );
};

export default Option;
