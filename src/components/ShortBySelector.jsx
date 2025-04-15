import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShortBySelector = () => {
  return (
    <div className="font-Syne text-[#6A7283] font-medium">
      <div>
        <Select defaultValue="recommended" >
          <SelectTrigger className="font-Syne text-lg w-[200px] border-none shadow-none focus-visible:ring-0">
            <SelectValue  />
          </SelectTrigger>
          <SelectContent >
            <SelectGroup >
              <SelectItem className="focus:bg-blue-500 focus:text-white text-[#6A7283] font-Syne text-lg" value="recommended">Recommended</SelectItem>
              <SelectItem className="focus:bg-blue-500 focus:text-white text-[#6A7283] font-Syne text-lg" value="newest">Newest</SelectItem>
              <SelectItem className="focus:bg-blue-500 focus:text-white text-[#6A7283] font-Syne text-lg" value="pricelowToHigh">Price (low to high)</SelectItem>
              <SelectItem className="focus:bg-blue-500 focus:text-white text-[#6A7283] font-Syne text-lg" value="priceHighToLow">Price (high to low)</SelectItem>
              <SelectItem className="focus:bg-blue-500 focus:text-white text-[#6A7283] font-Syne text-lg" value="nameAtoz">Name A-Z</SelectItem>
              <SelectItem className="focus:bg-blue-500 focus:text-white text-[#6A7283] font-Syne text-lg" value="nameZtoA">Name Z-A</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ShortBySelector;
