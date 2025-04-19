import React from 'react'
import incIcon from "../assets/inc_icon.svg";
import decIcon from "../assets/dec_icon.svg";


const InIcon = () => {
  return (
    <div>
      <div>
       <div className="w-[48px] h-[48px] bg-[#071431] relative"> <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={decIcon}/></div>
        <div><img src={incIcon}/></div>
      </div>
    </div>
  )
}

export default InIcon
