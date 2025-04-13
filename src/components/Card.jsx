import React from "react";


function Card({card_bd,card_profile,card_star,card_icon,btn_icon,}) {
  return (
    <div className="font-Syne w-[332px] group">
      <div className=" group overflow-hidden rounded-xl relative duration-300 group-hover:shadow-2xl group-hover:-translate-y-3">


        <div className="absolute top-3 left-5 z-20">
          <button className="bg-[#B45C3D] text-white text-xs rounded-sm text-center px-3 py-2">
            10% Discount
          </button>
        </div>



        <div>
          <img
            className="w-[40px] h-[40px] bg-white rounded-full p-[10px] absolute top-3 right-5 z-20"
            src={card_icon}
            alt="card_icon"
          />
        </div>

        <div className="  overflow-hidden ">
          <img
            className="w-[332px] h-[290px] object-cover rounded-t-xl group-hover:scale-110 duration-300"
            src={card_bd}
            alt="card bd"
          />
        </div>

        <div className=" flex flex-col gap-10 my-5 mx-5">
          <div className="flex items-center gap-20 w-[332px]">
            <div className="flex gap-2 items-center">
              <img
                className="rounded-full w-[40px] h-[40px]"
                src={card_profile}
                alt="card_profile"
              />
              <p className="text-[#6A7283] font-medium"> John Doe </p>
            </div>

            <div className="flex gap-2 items-center">
              <img src={card_star} alt="card_star" />
              <p> 4.5 (158) </p>
            </div>
          </div>
          <div>
            <p className="text-[#192A48] font-semibold text-xl">
              JA Solar 200W
            </p>
          </div>
          <div className="flex items-center  gap-13 w-[332px]">
            <div>
              <p className="text-[#6A7283] text-sm">Tax excluded</p>
              <p className="text-[#071431] font-semibold text-xl"> 55,00 € </p>
            </div>
            <div className="cursor-pointer outline rounded-4xl w-40 pl-5 py-3 group-hover:bg-bg-btn-color group-hover:outline-none">
              <button className="flex gap-2  items-center cursor-pointer ">
                <p className="text-[#071431] font-medium">View Details</p>
                <img
                  className="group-hover:translate-x-2 duration-300"
                  src={btn_icon}
                  alt="btn_icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
