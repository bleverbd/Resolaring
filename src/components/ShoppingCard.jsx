
import card_icon from "../assets/card_icon.svg";
import React, { useEffect, useState } from "react";





const ShoppingCard = ({TextColor}) => {

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const updateCartInfo = () => {
      const items = JSON.parse(localStorage.getItem("totalItem")) || 0;
      const price = JSON.parse(localStorage.getItem("totalPrice")) || 0;
      setTotalItems(items);
      setTotalPrice(price);
    };

    updateCartInfo();

    const interval = setInterval(updateCartInfo, 1000);

    return () => clearInterval(interval); // Clean up
  }, []);

  
  return (
    <div className="font-Syne">
      <div className="flex gap-3 items-center">
        <div className="bg-white rounded-full w-[45px] h-[45px] pt-2 pl-1.5 relative">
          {" "}
          <img className="w-[28px] h-[28px]" src={card_icon} />
          <div className="absolute bottom-7 left-7 bg-bg-btn-color rounded-full w-[24px]  h-[24px] pl-2 pb-2">
            {totalItems}
          </div>
        </div>
        <div>
          <p className={`${TextColor} font-Syne font-semibold font-2xl`}>${totalPrice}</p>
        
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
