import React from "react";
import card_icon from "../assets/card_icon.svg";

const ShoppingCard = () => {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div className="bg-white rounded-full w-[45px] h-[45px] pt-2 pl-1.5 relative">
          {" "}
          <img className="w-[28px] h-[28px]" src={card_icon} />
          <div className="absolute bottom-7 left-7 bg-bg-btn-color rounded-full w-[24px]  h-[24px] pl-2 pb-2">
            2
          </div>
        </div>
        <div>
          {" "}
          <p className="text-white font-Syne font-semibold font-2xl">$98.29</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
