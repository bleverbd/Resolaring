import React from 'react'

import marketplace_banner from "../../assets/marketplace_banner_img.jpg"
import send_icon from "../../assets/send_icon.svg"


const JoinPage = () => {
  return (
    <div className="font-Syne max-w-[1520px] mx-auto mt-40 mb-25">
        
        <div className="relative overflow-hidden rounded-2xl">
            <div> 
                <img className="w-full h-[507px] object-cover" src={marketplace_banner} alt="marketplace_banner"/>     
            </div>
            <div className=" bg-linear-to-l from-[#B45C3D] to-[#B45C3D] opacity-80 absolute top-0  left-0 w-full h-[507px] ">

            </div>


            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10">
            <div><p className="text-white text-6xl font-semibold px-15 ">Join the community and <br/> <span className="px-30"> post your panels</span></p></div>

            <div><p className="text-white text-lg font-medium px-60 ">Subscribe Our Newsletter For Latest Updates </p></div>

            <div className="bg-white rounded-4xl flex gap-5 items-center pl-10 pr-5 py-3 w-220 cursor-pointer ">
                <input className="text-[#798090] w-11/12 focus:outline-none text-lg" type="search" placeholder="Enter Your Email..."></input>

                <button className="flex gap-2 cursor-pointer items-center bg-bg-btn-color rounded-3xl px-4 py-2 text-[#071431] font-medium cursor-pointer"> Send <img src={send_icon} alt="send_icon"/></button>

            </div>

        </div> 
        </div>


        
     
    </div>
  )
}

export default JoinPage
