import React from "react";
import lan_icon from "../assets/language_icon.svg";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const Lan = () => {
  return (
    <div>
      <div className="flex gap-3 items-center border border-white rounded-4xl py-2 px-4 ">
        <div className="w-[24px] h-[24px]">
          {" "}
          <img src={lan_icon} />
        </div>
        {/* <div> <p className='text-white font-Syne font-medium text-lg' >EN</p></div> */}
        <div>
          <Select defaultValue="en">
            <SelectTrigger className="cursor-pointer text-[#C1C4CC] border-none  focus-visible:ring-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="absolute -right-20 top-2">
              <SelectItem
                className="focus:bg-amber-100 focus:font-medium"
                value="en"
              >
                EN
              </SelectItem>
              <SelectItem
                className="focus:bg-amber-100 focus:font-medium"
                value="eu"
              >
                EU
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Lan;
