import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Flitering from "./Flitering";


const NewComponet = () => {
  return (
    <div className="font-Syne text-[#6A7283]">
      <Popover>
        <PopoverTrigger> <button className="text-xl font-semibold">Filter By</button></PopoverTrigger>
        <PopoverContent>
            <Flitering/>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NewComponet;
