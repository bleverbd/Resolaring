import React from "react";



import dot from "../../assets/gallery/dot.svg";
import love from "../../assets/gallery/love.svg";
import message from "../../assets/gallery/message.svg";
import btnicon from "../../assets/gallery/btn_icon.svg";
import { NavLink } from "react-router-dom";


const GalleryCart = ({product}) => {
  return (
    <div className="font-Syne max-w-[1520px] my-0 mx-auto">
      <div >
  
        {/* Card Section */}

        <div className="mt-[48px] relative border border-[#DFE0E4] rounded-xl group overflow-hidden w-[332px]">
          {/* Top Icon */}
          <div>
            <img
              className="w-[40px] h-[40px] bg-white rounded-full p-[10px] absolute top-3 right-5 z-20"
              src={love}
              alt="love_icon"
            />
          </div>
          <div>
            <img
              className="w-[40px] h-[40px] bg-white rounded-full p-[10px] absolute top-3 right-20 z-20"
              src={message}
              alt="message"
            />
          </div>
          {/* Cart BG */}
          <div className="overflow-hidden">
            <img
              className="h-[289px] w-full object-cover rounded-t-xl group-hover:scale-110 duration-300"
              src={product.cartBackground}
              alt="card bd"
            />
          </div>

          {/* Cart Down Start */}

          <div className=" flex flex-col gap-3  my-5 mx-5 ">
            {/* Name And Profile */}

            <div className="flex items-center justify-between ">
              <div className="flex gap-2 items-center">
                <div className="w-[40px] h-[40px]">
                <img
                  className="rounded-full w-[40px] h-[40px]"
                  src={product.cartProfile}
                  alt="card_profile"
                />
                </div>
               <div>
               <p className="text-[#6A7283] text-sm font-medium">
                  {product.cartProfileName}
                </p>
               </div>
              </div>

              <div className="flex gap-2 items-center">
                <img src={dot} alt="card_star" />
              </div>
            </div>

            {/* JA Solar 200W Text */}
            <div>
              <p className="text-[#192A48] font-semibold text-xl">
                {product.productName}
              </p>
            </div>

            {/* name Description */}
            <div>
              <p className="text-[#6A7283] text-sm text-wrap text-justify">
                {product.productDescription
                }
              </p>
            </div>

            {/* Btn */}
            <div className="cursor-pointer outline outline-[#071431] rounded-4xl px-6 py-2 w-2/4 group-hover:bg-bg-btn-color group-hover:outline-none">
             <NavLink to={`/gallery/${product.id}`} state={product}>
             <button className="flex gap-1 items-center cursor-pointer ">
                <p className="text-[#071431] text-sm">View Details</p>
                <img
                  className="group-hover:translate-x-2 duration-300"
                  src={btnicon}
                  alt="btn_icon"
                />
              </button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCart;
