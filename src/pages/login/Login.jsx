import React from "react";
import loginbg from "../../assets/loginbg.png";
import apple from "../../assets/apple.svg";
import google from "../../assets/google.svg";
import eye_icon1 from "../../assets/eye_icon.svg";
import eye_icon from "../../assets/ey_icon.svg";
import { useState } from "react";

const Login = () => {
  const [showPassword,setshowPassword]=useState(false)
  const TogglePassword=()=>{
    setshowPassword(!showPassword)
  }

  return (
    <div className="font-Syne ">
      <div className="max-w-[1520px] my-0 mx-auto flex items-center gap-15 px-20">
        <div className="w-1/2 flex flex-col gap-5">
          <div>
            <p className="text-[##071431] text-5xl font-semibold">
              Welcome back!
            </p>
            <p className="text-[#6A7283] text-sm font-medium mt-2">
              Enter your Credentials to access your account
            </p>
          </div>

          <div>
            <form className="flex flex-col gap-5">
              <div>
                <label for="email">Email*</label>
                <input
                  className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-xl font-medium text-sm"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mt-5">
                  <label for="password">Password*</label>
                  <p className="text-[#B45C3D] text-sm underline">
                    Forgot Password
                  </p>
                </div>

                <div className="">
                  <div className=" relative">
                    <input
                      className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-xl font-medium text-sm"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <div className="absolute top-4 right-5 " onClick={TogglePassword}>
                      <img src={showPassword ? eye_icon : eye_icon1}/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-[#071431] text-sm font-medium">
                  Remember Letter
                </p>
              </div>

              <div>
                <button className="bg-bg-btn-color w-full rounded-4xl px-7 py-3 flex justify-center duration-300 hover:bg-white hover:outline-1 ">
                  Sign in
                </button>
              </div>
            </form>
          </div>

          <div>
            <div className="flex items-center justify-evenly gap-5">
              <hr className="w-1/2" /> <p className="text-[#071431]"> Or </p>{" "}
              <hr className="w-1/2" />
            </div>
          </div>

          <div className="mx-auto">
            <div className="flex  gap-5 items-center ">
              <div className="border border-[#DFE0E4] rounded-4xl flex gap-3 items-center px-5 py-3  duration-300 hover:scale-105 hover:bg-gray-100">
                <img src={google} />
                <p className="text-[#071431] font-semibold text-sm">
                  {" "}
                  Sign in with Google
                </p>
              </div>

              <div className="border border-[#DFE0E4] rounded-4xl flex gap-3 items-center px-5 py-3 duration-300 hover:scale-105 hover:bg-gray-100">
                <img src={apple} />
                <p className="text-[#071431] font-semibold text-sm">
                  {" "}
                  Sign in with Apple
                </p>
              </div>
            </div>

            <div className="mt-3 pl-20">
              <p className="text-[#071431] font-semibold">
                Don’t have an account?{" "}
                <span className="text-[#B45C3D] font-semibold">Sign Up</span>
              </p>
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

export default Login;
