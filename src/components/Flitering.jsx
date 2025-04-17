import React, { useState } from "react";
import { Slider } from "@/components/ui/slider.jsx";

const Flitering = () => {
  const [count, setCount] = useState(100);
  return (
    <div className="font-Syne flex flex-col gap-10">
      <div>
        <div>
          <p className="text-[#071431] text-3xl pb-3 font-semibold border-b-2 border-[#EBECEF]">
            Browse by
          </p>
        </div>
        <div className="mt-5">
          <ul className="text-[#6A7283] text-lg flex flex-col gap-2 pl-7">
            <li>All Products</li>
            <li>Canadian Solar</li>
            <li>JA Solar</li>
            <li>Jinko Solar</li>
            <li>SMA Products</li>
            <li>Sunpower</li>
          </ul>
        </div>
      </div>

      {/* Filter by */}

      <div>
        <div>
          <p className="text-[#071431] text-3xl pb-3 font-semibold border-b-2 border-[#EBECEF]">
            Filter by
          </p>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <div className="pl-7">
            <p className="text-[#071431] text-lg font-bold">Product Type</p>
          </div>

          <div>
            <ul className="text-[#6A7283] text-lg flex flex-col gap-2 pl-10">
              <li className="flex items-center gap-3">
                {" "}
                <input
                  className="w-6 h-6 accent-bg-btn-color "
                  type="checkbox"
                ></input>{" "}
                <p>JA Solar</p>
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <input
                  className="w-6 h-6 accent-bg-btn-color"
                  type="checkbox"
                ></input>{" "}
                <p>SMA Products</p>
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <input
                  className="w-6 h-6 accent-bg-btn-color"
                  type="checkbox"
                ></input>{" "}
                <p>SMA Products</p>
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <input
                  className="w-6 h-6 accent-bg-btn-color "
                  type="checkbox"
                ></input>{" "}
                <p>Sunpower Products</p>
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <input
                  className="w-6 h-6 accent-bg-btn-color"
                  type="checkbox"
                ></input>{" "}
                <p>Sunpower Products</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Price Range */}

      <div>
        <div>
          <p className="text-[#071431] text-3xl pb-3 font-semibold border-b-2 border-[#EBECEF]">
            Price Range
          </p>
        </div>
        <div className="mt-3">
          <p className="text-lg">
            <span className="text-[#798090]">Price:</span> $100 -{" "}
            <span>${count}</span>
          </p>
        </div>

        <div className="mt-2">
          <Slider
            value={[count]}
            onValueChange={(val) => setCount(val)}
            max={650000}
            min={100}
            step={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Flitering;
