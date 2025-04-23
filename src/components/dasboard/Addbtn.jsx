import React from 'react'
import btn from "../../assets/overview/add_btn.svg"

const Addbtn = () => {
  return (
    <div className="font-Syne bg-[#FEC100] rounded-4xl px-8 py-3">
      <button className='flex gap-2'>
        <p className="text-[#071431]">Add Product</p>
        <img src={btn}/>
      </button>
    </div>
  )
}

export default Addbtn
