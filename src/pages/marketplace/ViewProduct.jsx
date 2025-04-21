import React, { useState } from "react";
import number_up from "../../assets/number_up.svg";
import number_down from "../../assets/number_down.svg";

import Btn from "@/components/Btn";
import socal_fb from "../../assets/socal_fb.svg";
import socal_pin from "../../assets/socal_pin.svg";
import socal_whatapps from "../../assets/socal_what.svg";
import socal_x from "../../assets/socal_x.svg";
import socal_lin from "../../assets/socal_lin.svg";
import image_icon from "../../assets/image_icon.svg";
import { useLocation } from "react-router-dom";



import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";




const ViewProduct = () => {
  const { state } = useLocation();

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="font-Syne max-w-[1520px] my-0 mx-auto px-5">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="mt-20">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/marketplace">
                    Marketplace
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Photovoltaic Panels</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="mt-20">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#"></PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        <div className="flex gap-10 items-center">
          <div>
            <div>
              <img
                className="rounded-lg w-[676px] h-[375] object-cover"
                src={state.card_bd}
              />
            </div>
            <div className="flex gap-5 mt-5">
              <div>
                <img
                  className="rounded-lg w-[326px] h-[375] object-cover"
                  src={state.card_bd}
                />
              </div>
              <div>
                <div className="relative">
                  <img
                    className="rounded-lg w-[326px] h-[375] object-cover"
                    src={state.card_bd}
                  />
                  <div className="absolute top-2 right-3 bg-black/20 flex gap-2 px-2 py-2 rounded-lg hover:scale-105 duration-300 cursor-pointer">
                    <img src={image_icon} />
                    <button className="text-white cursor-pointer">
                      {" "}
                      Show all images
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="bg-[#2FA75F]/32 rounded-lg px-5 py-2">
                <p className="text-[#071431] text-lg font-medium">New</p>
              </div>
              <div className=" flex items-center gap-7">
                <div className="bg-[#F5F6F7] rounded-lg px-5 py-2">
                  {" "}
                  <p className="text-[#071431]">JA Solar</p>
                </div>
                <div className="bg-[#F5F6F7] rounded-lg px-5 py-2">
                  {" "}
                  <p className="text-[#071431]">Model Number</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-5xl text-[#071431] font-semibold">
                {state.name}
              </p>
              <p className="text-[#6A7283] text-lg mt-4">
                JA Solar 200W Panel – High-efficiency monocrystalline panel with
                reliable performance, excellent low-light output, and durable
                design for residential and commercial use.
              </p>
            </div>

            <div>
              <p className="text-4xl text-[#071431] font-semibold">
                ${state.price}
              </p>
              <p className="text-[#6A7283] text-lg mt-2">Excluding Sales Tax</p>
            </div>

            <div>
              <div>
                <p className="text-[#6A7283] text-lg">Quantity</p>
              </div>

              <div className="bg-[#F5F6F7] rounded-lg px-3 py-1 w-20 mt-1 flex items-center justify-between">
                <div>
                  <p className="text-[#071431] text-2xl font-medium">{count}</p>
                </div>
                <div className=" flex flex-col">
                  <button onClick={increment} className="cursor-pointer">
                    {" "}
                    <img src={number_up} />
                  </button>
                  <button onClick={decrement} className="cursor-pointer">
                    {" "}
                    <img src={number_down} />{" "}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <Btn buttonTitle={"Add To Cart"} />
            </div>

            <div className="flex gap-2">
              <img src={socal_fb} />
              <img src={socal_pin} />
              <img src={socal_whatapps} />
              <img src={socal_lin} />
              <img src={socal_x} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
