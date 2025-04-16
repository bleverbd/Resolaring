import React from 'react'
import btn_icon from "../assets/btn_icon.svg"

function Btn({buttonTitle,textDecoration=false}) {
  return (

        <div className="bg-bg-btn-color rounded-4xl px-7 py-3 flex justify-center">
                    <button className='flex gap-2 items-center justify-center group cursor-pointer'>
                       
                     <p className={`text-[#071431] font-medium ${textDecoration}`}> {buttonTitle}</p>
                     <img className="group-hover:translate-x-2 duration-300"src={btn_icon} alt="btn_icon"/>
                    </button>
        </div>
      
    
  )
}

export default Btn
