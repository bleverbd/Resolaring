import React from 'react'
import incIcon from "../assets/inc_icon.svg";
import decIcon from "../assets/dec_icon.svg";


const InIcon = () => {
  return (
    <div className="font-Syne"> 
      <div>
       <div className="w-[32px] h-[32px] bg-[#071431] relative rounded-full"> <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={decIcon}/></div>
       <div className="rounded-full outline-2 outline-[#071431]">
        <p className="text-[#071431]"> 01 </p>
       </div>
       <div className="w-[32px] h-[32px] bg-[#071431] relative rounded-full"> <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={incIcon}/></div>

      </div>
    </div>
  )
}

export default InIcon
