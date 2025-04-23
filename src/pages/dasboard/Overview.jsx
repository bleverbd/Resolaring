import Addbtn from "@/components/dasboard/Addbtn";
import Profile from "@/components/dasboard/Profile";
import SearchItem from "@/components/dasboard/SearchItem";
import MyTable from "@/components/dasboard/MyTable";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Overview = () => {
 
  return (
    <div className="font-Syne w-full mt-[48px] mx-[48px]">
      <div className="flex flex-col gap-12">
        {/* Top Nav Bar */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#071431] font-semibold text-[40px]">
              {" "}
              Overview
            </p>
          </div>

          <div className="flex items-center gap-5">
            <SearchItem />
            <Addbtn />
            <Profile />
          </div>
        </div>
        {/* Card Option */}
        <div className="flex items-center justify-between">
          <div className="bg-[#F8EFEC] rounded-xl px-6 py-6 w-[350px]">
            <p className="text-[#6A7283] text-2xl font-medium">
              {" "}
              Total Listing
            </p>
            <p className="text-[#1D2635] text-3xl font-semibold">{15}</p>
          </div>

          <div className="bg-[#FFF9E6] rounded-xl px-6 py-6 w-[350px]">
            <p className="text-[#6A7283] text-2xl font-medium">
              {" "}
              Pending Orders
            </p>
            <p className="text-[#1D2635] text-3xl font-semibold">{3}</p>
          </div>

          <div className="bg-[#EBF7EF] rounded-xl px-6 py-6 w-[350px]">
            <p className="text-[#6A7283] text-2xl font-medium">
              {" "}
              Sales Revenue
            </p>
            <p className="text-[#1D2635] text-3xl font-semibold">$5,000</p>
          </div>

          <div className="bg-[#FAEDFF] rounded-xl px-6 py-6 w-[350px]">
            <p className="text-[#6A7283] text-2xl font-medium">
              {" "}
              Profile Completion
            </p>
            <p className="text-[#1D2635] text-3xl font-semibold">90% Done</p>
          </div>
        </div>
        {/* Oder Table */}

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[#071431] font-semibold text-3xl">
              Order History
            </p>
          </div>
          <div>
            {/* Table */}
            <MyTable />
          </div>
          <div className="mt-2">
            {/* Pagenation */}
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
