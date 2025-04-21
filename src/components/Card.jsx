import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";

import card_star1 from "../assets/card_icon2.svg";
import card_icon1 from "../assets/card_icon1.svg";
import btn_icon1 from "../assets/btn_icon.svg";

const getCartFromLocalStorage = () => {
  let cart = [];
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveToLocalStorage = (product_id,prduct_picture,product_name,product_price,product_rating) => {
  const cart = getCartFromLocalStorage();

  const isDuplicate = cart.some(
    (item) => item.id=== product_id);
  if (isDuplicate) {
    toast.error("This product name already exists!");
    return;
  }

  cart.push({ id:product_id,src:prduct_picture,name:product_name,price:product_price,rating:product_rating});
  const saveStored = JSON.stringify(cart);
  localStorage.setItem("cart", saveStored);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const totalItem = cart.length;

  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  localStorage.setItem("totalItem", JSON.stringify(totalItem));
};

function Card({ data }) {
  const handleData = (data) => { 

    addToCart();
  };

  const addToCart = () => {
    const product_id= data.id;
    const prduct_picture = data.card_bd;
    const product_name = data.name;
    const product_price = data.price;
    const product_rating = data.rating;


    saveToLocalStorage(product_id,prduct_picture,product_name,product_price,product_rating);
  };

  return (
  
    <div className="font-Syne  group">
      <Toaster/>
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
            src={card_icon1}
            alt="card_icon"
          />
        </div>

        {/* Card Bg Image */}
        <div className="  overflow-hidden ">
        <NavLink to={`/marketplace/${data.id}`} state={data}> <img
            className="h-[290px] w-full object-cover rounded-t-xl group-hover:scale-110 duration-300"
            src={data.card_bd}
            alt="card bd"
          /></NavLink>
         
  
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
              <img src={card_star1} alt="card_star" />
              <p> {data.rating} </p>
            </div>
          </div>

          {/* JA Solar 200W Text */}
          <div>
            <p className="text-[#192A48] font-semibold text-xl">
              {data.name}
            </p>
          </div>

          {/* Price and Btn */}
          <div className="flex items-center justify-between">
            {/* Price Text  */}
            <div>
              <p className="text-[#6A7283] text-sm">Tax excluded</p>
              <p className="text-[#071431] font-semibold text-xl"> {data.price} €</p>
            </div>

            {/* Btn */}
            <div className="cursor-pointer outline rounded-4xl px-5 py-2 group-hover:bg-bg-btn-color group-hover:outline-none">
              {/* <button onClick={notify}>Make me a toast</button> */}
              <button
                onClick={() => handleData(data)}
                className="flex gap-1 items-center cursor-pointer "
              >
                  {/* <Toaster/> */}
              
                <p className="text-[#071431] font-medium">Add To Cart</p>
                <img
                  className="group-hover:translate-x-2 duration-300"
                  src={btn_icon1}
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
