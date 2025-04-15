import React from "react";


function Card({data}) {
  return (
    <div className="font-Syne  group">

      {/* Card Start */}
      <div className=" group overflow-hidden rounded-xl relative duration-300 group-hover:shadow-2xl group-hover:-translate-y-3">

        {/* Discount Btn */}
        <div className="absolute top-3 left-5 z-20">
          <button className="bg-[#B45C3D] text-white text-xs rounded-sm text-center px-3 py-2">
            10% Discount
          </button>
        </div>


      {/* Top Icon */}
        <div>
          <img
            className="w-[40px] h-[40px] bg-white rounded-full p-[10px] absolute top-3 right-5 z-20"
            src={data.card_icon}
            alt="card_icon"
          />
        </div>

      {/* Card Bg Image */}
        <div className="  overflow-hidden ">
          <img
            className="h-[290px] object-cover rounded-t-xl group-hover:scale-110 duration-300"
            src={data.card_bd}
            alt="card bd"
          />
        </div>

        {/* Card Down Start */}

        <div className=" flex flex-col gap-10 my-5 mx-5">

          {/* Name And Profile */}
          <div className="flex items-center justify-between ">
            <div className="flex gap-2 items-center">
              <img
                className="rounded-full w-[40px] h-[40px]"
                src={data.card_profile}
                alt="card_profile"
              />
              <p className="text-[#6A7283] font-medium"> John Doe </p>
            </div>

            <div className="flex gap-2 items-center">
              <img src={data.card_star} alt="card_star" />
              <p> 4.5 (158) </p>
            </div>
          </div>

        {/* JA Solar 200W Text */}
          <div>
            <p className="text-[#192A48] font-semibold text-xl">
              JA Solar 200W
            </p>
          </div>

              {/* Price and Btn */}
          <div className="flex items-center justify-between">
            {/* Price Text  */}
            <div>
              <p className="text-[#6A7283] text-sm">Tax excluded</p>
              <p className="text-[#071431] font-semibold text-xl"> 55,00 € </p>
            </div>

            {/* Btn */}
            <div className="cursor-pointer outline rounded-4xl px-5 py-2 group-hover:bg-bg-btn-color group-hover:outline-none">
              <button className="flex gap-1 items-center cursor-pointer ">
                <p className="text-[#071431] font-medium">View Details</p>
                <img
                  className="group-hover:translate-x-2 duration-300"
                  src={data.btn_icon}
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
