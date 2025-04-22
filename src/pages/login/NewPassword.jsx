import React from "react";
import loginbg from "../../assets/loginbg.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import eye_icon1 from "../../assets/eye_icon.svg";
import eye_icon from "../../assets/ey_icon.svg";

const NewPassword = () => {
  const [showPassword, setshowPassword] = useState(false);
  const TogglePassword = () => {
    setshowPassword(!showPassword);
  };
  return (
    <div>
      <div className=" max-w-[1520px] my-0 mx-auto flex gap-10 items-center px-30">
        <div className="flex flex-col gap-8 w-1/2 ">
          <p className="text-[##071431] text-5xl font-semibold">
            {" "}
            Set New Password
          </p>

          <form>
            <div>
              <label for="newpasspword">New Password</label>
              <div className=" relative">
                <input
                  className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-xl font-medium text-sm"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div
                  className="absolute top-4 right-5 "
                  onClick={TogglePassword}
                >
                  <img src={showPassword ? eye_icon : eye_icon1} />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label for="passpword">Confirm Password</label>
              <div className=" relative">
                <input
                  className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-xl font-medium text-sm"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div
                  className="absolute top-4 right-5 "
                  onClick={TogglePassword}
                >
                  <img src={showPassword ? eye_icon : eye_icon1} />
                </div>
              </div>
            </div>

            <div className="mt-5">
            <button className="bg-bg-btn-color  rounded-2xl w-full hover:scale-105 duration-300 cursor-pointer">
                  {" "}
                  <p className="my-3">Reset Password</p>{" "}
                </button>
            </div>
          </form>
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

export default NewPassword;
