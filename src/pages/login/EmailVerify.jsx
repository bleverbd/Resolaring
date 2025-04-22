import React from "react";
import loginbg from "../../assets/loginbg.png";
import { NavLink } from "react-router-dom";

const EmailVerify = () => {
  return (
    <div>
      <div className=" max-w-[1520px] my-0 mx-auto flex gap-10 items-center px-30">
        <div className="flex flex-col gap-8 w-1/2 ">
          <p className="text-[##071431] text-5xl font-semibold">
            {" "}
            Verify Email
          </p>

          <form>
            <div>
              <label for="email">Email*</label>
              <input
                className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-xl font-medium text-sm"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mt-5">
              <NavLink to="/sendcode">
                {" "}
                <button className="bg-bg-btn-color  rounded-2xl w-full hover:scale-105 duration-300 cursor-pointer">
                  {" "}
                  <p className="my-3">Send</p>{" "}
                </button>
              </NavLink>
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

export default EmailVerify;
