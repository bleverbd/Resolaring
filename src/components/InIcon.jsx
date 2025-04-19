import React, { useState,useEffect } from 'react'
import incIcon from "../assets/inc_icon.svg";
import decIcon from "../assets/dec_icon.svg";


const InIcon = ({onCountChange }) => {

  const [count,setCount]=useState(1);


  const increment = () => {
    setCount(prev => {
      const newCount = prev + 1;
      onCountChange(newCount); // Parent এ পাঠানো
      return newCount;
    });
  };

  const decrement = () => {
    setCount(prev => {
      const newCount = prev > 0 ? prev - 1 : 0;
      onCountChange(newCount); // Parent এ পাঠানো
      return newCount;
    });
  };




  return (
    <div className="font-Syne"> 
      <div className="flex gap-2">


       <div>
        <button onClick={decrement}><div className="w-[32px] h-[32px] bg-[#071431] relative rounded-full"> <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={decIcon}/></div></button>
       </div>


       <div className="w-[32px] h-[32px] outline-2 outline-[#071431] rounded-full relative">
        <p className="text-[#071431] text-lg font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">{count} </p>
       </div>


       <div>
        <button onClick={increment}><div className="w-[32px] h-[32px] bg-[#071431] relative rounded-full"> <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={incIcon}/></div></button>
       </div>

      </div>


    </div>
  )
  
}

export default InIcon
