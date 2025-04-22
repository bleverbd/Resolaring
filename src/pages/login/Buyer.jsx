import React from "react";
import loginbg from "../../assets/loginbg.png";
import apple from "../../assets/apple.svg";
import google from "../../assets/google.svg";
import eye_icon1 from "../../assets/eye_icon.svg";
import eye_icon from "../../assets/ey_icon.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Buyer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = {};

    if (!name.trim()) tempErrors.name = "Name is required";
    if (!email.trim()) tempErrors.email = "Email is required";
    if (!password.trim()) tempErrors.password = "Password is required";

    setErrors(tempErrors);
  };

  const [showPassword, setshowPassword] = useState(false);
  const TogglePassword = () => {
    setshowPassword(!showPassword);
  };

  const [showPassword1, setshowPassword1] = useState(false);

  const TogglePassword1 = () => {
    setshowPassword1(!showPassword1);
  };
  return (
    <div className="font-Syne ">
      <div className="max-w-[1520px] my-0 mx-auto flex items-center gap-15 px-20">
        <div className="w-1/2 flex flex-col gap-5">
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label for="name">Name*</label>
                <input
                  className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-xl font-medium text-sm"
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label for="email">Email*</label>
                <input
                  className=" mt-2 focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-xl font-medium text-sm"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label for="password">Choose Password*</label>
                <div className=" relative mt-2">
                  <input
                    className="focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-xl font-medium text-sm"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                  <div
                    className="absolute top-3 right-5 "
                    onClick={TogglePassword}
                  >
                    <img src={showPassword ? eye_icon : eye_icon1} />
                  </div>
                </div>
              </div>

              <div>
                <label for="password">Confirm Password*</label>
                <div className=" relative mt-2">
                  <input
                    className="focus:outline-none border border-[#DFE0E4] bg-[#F5F6F7] focus:ring-2 w-full text-[#6A7283] px-5 py-3 rounded-xl font-medium text-sm"
                    type={showPassword1 ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                  <div
                    className="absolute top-3 right-5 "
                    onClick={TogglePassword1}
                  >
                    <img src={showPassword1 ? eye_icon : eye_icon1} />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-[#071431] text-sm font-medium">
                  I agree to the terms & policy
                </p>
              </div>

              <div>
                <button className="bg-bg-btn-color w-full rounded-4xl px-7 py-3 flex justify-center duration-300 hover:bg-white hover:outline-1 ">
                  Sign Up
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
                <NavLink to="/login">
                  {" "}
                  <span className="text-[#B45C3D] font-semibold">Sign In</span>
                </NavLink>
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

export default Buyer;
