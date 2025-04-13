import React from 'react'
import btn_icon from "../assets/btn_icon.svg"

function Btn({buttonTitle}) {
  return (

        <div className="bg-bg-btn-color rounded-4xl w-55 pl-8 py-4">
                    <button className='flex gap-2  items-center group cursor-pointer'>
                       
                     <p className="text-[#071431] font-medium"> {buttonTitle}</p>
                     <img className="group-hover:translate-x-2 duration-300"src={btn_icon} alt="btn_icon"/>
                    </button>
        </div>
      
    
  )
}

export default Btn
