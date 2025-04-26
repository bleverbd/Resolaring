import React from "react";
import btn from "../../assets/overview/add_btn.svg"
import SearchItem from "@/components/dasboard/SearchItem";
import Profile from "@/components/dasboard/Profile";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { SlOptions } from "react-icons/sl";
  import { SlOptionsVertical } from "react-icons/sl";
  import { SlList } from "react-icons/sl";
  import DashNav from "@/components/dasboard/DashNav";

const Text = () => {
  return (
    <div>
      <div className=" flex items-center justify-between xl:hidden shadow-sm px-3 py-2">
        <div>
          <Sheet>
            <SheetTrigger>
              <SlOptions />
            </SheetTrigger>
            <SheetContent className="w-[351px]">
              <DashNav />
            </SheetContent>
          </Sheet>
        </div>

        <div>
          <p className="text-[#071431] font-semibold text-[40px] -mt-1">
            {" "}
            Overview
          </p>
        </div>

        <div>
          <Sheet>
            <SheetTrigger>
              <SlList />
            </SheetTrigger>
            <SheetContent className="w-[351px]" side="right">
              <div className="mt-15 flex flex-col gap-5 px-5">
                <SearchItem />
                <div className="font-Syne bg-[#FEC100] rounded-4xl px-8 py-3 w-full ">
                  <button className="flex gap-2">
                    <p className="text-[#071431] text-center pl-15">
                      Add Product
                    </p>
                    <img src={btn} />
                  </button>
                </div>

                <Profile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Text;
