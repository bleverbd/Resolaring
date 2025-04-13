import React from 'react'
import Hero from './Hero'
import Card from '../../components/Card'


import card_profile1 from "../../assets/card_profile1.png";
import card_bd1 from "../../assets/card_bd_1.png";
import card_profile2 from "../../assets/card_profile2.png";
import card_bd2 from "../../assets/card_bd_2.png";
import card_profile3 from "../../assets/card_profile3.png";
import card_bd3 from "../../assets/card_bd_3.png";
import card_profile4 from "../../assets/card_profile1.png";
import card_bd4 from "../../assets/card_bd_4.png";
import card_star1 from "../../assets/card_icon2.svg";
import card_icon1 from "../../assets/card_icon1.svg";
import btn_icon1 from "../../assets/btn_icon.svg";

import search_icon from "../../assets/search_icon.svg"




const Marketplace = (card_star,card_icon,btn_icon) => {
  return (
    <div class="font-Syne">
      <Hero/>
      <br/>

      <div className="max-w-[1520px] mx-auto my-20">
      <div class="flex items-center justify-between">
        <div className="text-[#071431] text-5xl font-semibold"> <p>Your market for solar panels</p>  </div>

        <div className=" relative"> 
          <div className="bg-[#F5F6F7] rounded-3xl px-10 py-3 outline-1 outline-[#d6d8da] w-100" > <input className="focus:outline-none" type="search" placeholder="Search for product" /></div>
          <div className="absolute top-3 right-5"> <img src={search_icon}/> </div>
        </div>
      </div>

       <div className="grid grid-cols-3 mt-50">

       <Card card_bd={card_bd1} card_profile={card_profile1} card_star={card_star1} card_icon={card_icon1} btn_icon={btn_icon1} />

       <Card card_bd={card_bd2} card_profile={card_profile2} card_star={card_star1} card_icon={card_icon1} btn_icon={btn_icon1} />

       <Card card_bd={card_bd3} card_profile={card_profile3} card_star={card_star1} card_icon={card_icon1} btn_icon={btn_icon1} />

       <Card card_bd={card_bd4} card_profile={card_profile1} card_star={card_star1} card_icon={card_icon1} btn_icon={btn_icon1} />

       <Card card_bd={card_bd1} card_profile={card_profile1} card_star={card_star1} card_icon={card_icon1} btn_icon={btn_icon1} />
      <Card card_bd={card_bd3} card_profile={card_profile3} card_star={card_star1} card_icon={card_icon1} btn_icon={btn_icon1} />

      <Card card_bd={card_bd4} card_profile={card_profile1} card_star={card_star1} card_icon={card_icon1} btn_icon={btn_icon1} />

      <Card card_bd={card_bd2} card_profile={card_profile2} card_star={card_star1} card_icon={card_icon1} btn_icon={btn_icon1} />
     
       </div>
      </div>
    </div>
  )
}

export default Marketplace
