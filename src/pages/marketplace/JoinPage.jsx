import React from "react";

import marketplace_banner from "../../assets/marketplace_banner_img.jpg";
import send_icon from "../../assets/send_icon.svg";

const JoinPage = () => {
  return (
    <div className="max-w-[1520px] mx-auto my-0">
      <div className="relative overflow-hidden rounded-2xl mt-40 mb-25">
        <div>
          <img
            className="w-full h-[507px] object-cover"
            src={marketplace_banner}
            alt="marketplace_banner"
          />
        </div>
        <div className=" bg-linear-to-l from-[#B45C3D] to-[#B45C3D] opacity-80 absolute top-0  left-0 w-full h-[507px] "></div>

        <div className="absolute top-25 left-0 right-0 flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-5 items-center">
            <div>
              <p className="text-white text-center text-wrap font-semibold text-4xl md:text-6xl sm:text-5xl">
                Join the community and 
              </p>
            </div>
             <div>
              <p className="text-white text-center text-4xl md:text-6xl sm:text-5xl font-semibold">
                post your panels
              </p>
            </div>
            

            <div>
              <p className="text-white text-center text-sm md:text-lg sm:lext-base font-medium">
                Subscribe Our Newsletter For Latest Updates
              </p>
            </div>
          </div>

          <div className="bg-white rounded-4xl flex gap-5 items-center px-5 py-3 cursor-pointer lg:w-[1024px] w-full">
            <input
              className="text-[#798090] w-11/12 focus:outline-none text-lg"
              type="search"
              placeholder="Enter Your Email..."
            ></input>

            <button className="flex gap-2 items-center bg-bg-btn-color rounded-3xl px-6 py-2 text-[#071431] font-medium cursor-pointer">
              {" "}
              Send <img src={send_icon} alt="send_icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
